import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 🚨 Important: this MUST use the service role key (not anon key)
const supabaseService = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,        // public URL
  process.env.SUPABASE_SERVICE_ROLE_KEY!        // secret service key
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const qualification = formData.get("qualification")?.toString() || "";
    const experience = formData.get("experience")?.toString() || "";
    const subjects = formData.get("subjects")?.toString() || "";
    const availability = formData.get("availability")?.toString() || "";
    const motivation = formData.get("motivation")?.toString() || "";
    const cv = formData.get("cv") as File | null;

    if (!firstName || !lastName || !email || !motivation) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let cvUrl: string | null = null;

    if (cv) {
      // ✅ Restrict file types
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(cv.type)) {
        return NextResponse.json({ error: "Invalid file type. Only PDF/DOC/DOCX allowed." }, { status: 400 });
      }

      // ✅ Restrict size (5 MB)
      const maxSize = 5 * 1024 * 1024;
      if (cv.size > maxSize) {
        return NextResponse.json({ error: "File too large. Max 5MB." }, { status: 400 });
      }

      const fileName = `${Date.now()}_${cv.name}`;
      const arrayBuffer = await cv.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: cv.type });

      // ✅ Upload with service key (bypasses RLS)
      const { error: uploadError } = await supabaseService.storage
        .from("cvs")
        .upload(fileName, blob, { cacheControl: "3600", upsert: false });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        return NextResponse.json({ error: "CV upload failed", details: uploadError.message }, { status: 500 });
      }

      const { data: publicData } = supabaseService.storage
        .from("cvs")
        .getPublicUrl(fileName);
      cvUrl = publicData.publicUrl;
    }

    // ✅ Insert into DB
    const { data, error } = await supabaseService
      .from("teacher_applications")
      .insert([{
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        location,
        qualification,
        experience,
        subjects,
        availability,
        motivation,
        cv_url: cvUrl,
      }])
      .select();

    if (error) {
      console.error("DB insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return NextResponse.json({ error: "Unexpected server error", details: String(err) }, { status: 500 });
  }
}
