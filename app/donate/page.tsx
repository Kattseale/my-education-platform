"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DonatePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      {/* Full background image */}
      <Image
        src="/Partners/myed.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex items-start justify-center">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - Text and Donation Info */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
              Support My Education Foundation
            </h1>

            <p className="mb-8 leading-relaxed text-lg drop-shadow-md">
              Join us in making a difference! Your generous donation will directly
              support the mission of the <strong>My Education Foundation</strong>, 
              helping to provide essential resources and opportunities to underprivileged 
              schools and students. <br /><br />
              By donating, you become part of a compassionate community dedicated
              to fostering education and empowering the next generation.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 drop-shadow-md">Why Donate?</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg drop-shadow-sm">
                <li><strong>Empower Education:</strong> Your contribution helps provide quality education to children in need.</li>
                <li><strong>Support Growth:</strong> Donations go towards improving schools, providing textbooks, and enhancing programs.</li>
                <li><strong>Make an Impact:</strong> Every donation, no matter the size, makes a difference.</li>
              </ul>
            </div>

            {/* Donation Options */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-300 w-80 text-black">
                <h3 className="text-lg font-semibold mb-3">Bank Transfer Details</h3>
                <p className="leading-relaxed text-sm">
                  <strong>Bank Name:</strong> FNB <br />
                  <strong>Account Name:</strong> Victoria Advanced <br />
                  <strong>Account Number:</strong> 62868317043 <br />
                  <strong>Branch Code:</strong> 250805 <br />
                  <strong>Reference:</strong> Donation
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Images in 2 columns */}
          <div className="grid grid-cols-2 gap-4">
            <Image src="/Partners/lwia.webp" alt="lwia" width={260} height={170} className="rounded-2xl shadow-lg object-cover"/>
            <Image src="/Partners/lwia2.webp" alt="lwia2" width={260} height={160} className="rounded-2xl shadow-lg object-cover"/>
            <Image src="/Partners/lwia3.jpg" alt="lwia3" width={260} height={160} className="rounded-2xl shadow-lg object-cover"/>
            <Image src="/Partners/lwia4.png" alt="lwia4" width={260} height={160} className="rounded-2xl shadow-lg object-cover"/>
            <Image src="/Partners/anss.webp" alt="anss" width={260} height={160} className="rounded-2xl shadow-lg object-cover"/>
            <Image src="/Partners/all.jfif" alt="all" width={260} height={160} className="rounded-2xl shadow-lg object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}
