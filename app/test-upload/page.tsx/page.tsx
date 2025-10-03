"use client"
import React, { useState } from "react"

export default function TeacherApplicationForm() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage("Uploading your application...")

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("✅ Application submitted successfully. CV uploaded!")
        e.currentTarget.reset()
      } else {
        setMessage(`❌ Error: ${data.error || "Something went wrong"}`)
      }
    } catch (err) {
      setMessage(`❌ Unexpected error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Teacher Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="firstName" placeholder="First Name" className="w-full p-2 border rounded" required />
        <input name="lastName" placeholder="Last Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" required />
        <input name="location" placeholder="Location" className="w-full p-2 border rounded" required />
        <input name="qualification" placeholder="Qualification" className="w-full p-2 border rounded" required />
        <input name="experience" placeholder="Experience" className="w-full p-2 border rounded" required />
        <input name="subjects" placeholder="Subjects (optional)" className="w-full p-2 border rounded" />
        <input name="availability" placeholder="Availability" className="w-full p-2 border rounded" required />
        <textarea name="motivation" placeholder="Why do you want this job?" className="w-full p-2 border rounded" required />

        <div>
          <label className="block font-medium">Upload CV (PDF/DOC)</label>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" className="w-full p-2 border rounded" required />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  )
}
