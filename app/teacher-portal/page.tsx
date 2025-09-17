"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Navigation from "@/components/navigation"
import {
  Upload,
  FileText,
  CheckCircle,
  User,
  GraduationCap,
  MapPin,
  Clock,
  Users,
  Briefcase,
  AlertCircle,
} from "lucide-react"

interface Vacancy {
  id: string
  title: string
  location: string
  type: "Full-time" | "Part-time" | "Contract"
  department: string
  experience: string
  description: string
  requirements: string[]
  posted: string
}

const mockVacancies: Vacancy[] = [
  {
    id: "1",
    title: "Primary School Teacher - Grade 3",
    location: "Johannesburg Central",
    type: "Full-time",
    department: "Primary Education",
    experience: "2-3 years",
    description:
      "We are seeking a passionate and dedicated Grade 3 teacher to join our dynamic team. The successful candidate will be responsible for creating engaging lesson plans and fostering a positive learning environment.",
    requirements: [
      "Bachelor's degree in Education or relevant field",
      "SACE registration",
      "2+ years teaching experience",
      "Strong classroom management skills",
      "Proficiency in English and Afrikaans",
    ],
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Mathematics Teacher - High School",
    location: "Cape Town",
    type: "Full-time",
    department: "Secondary Education",
    experience: "3-5 years",
    description:
      "Join our mathematics department and inspire students to excel in mathematics. We offer excellent professional development opportunities and a supportive work environment.",
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      "SACE registration",
      "3+ years high school teaching experience",
      "Strong mathematical knowledge",
      "Experience with digital learning tools",
    ],
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "School Principal",
    location: "Durban",
    type: "Full-time",
    department: "Leadership",
    experience: "8+ years",
    description:
      "Lead our school community towards excellence. We are looking for an experienced educational leader with a vision for transformative education.",
    requirements: [
      "Master's degree in Education Leadership",
      "SACE registration",
      "8+ years leadership experience",
      "Strong communication skills",
      "Experience in school management",
    ],
    posted: "3 days ago",
  },
  {
    id: "4",
    title: "Early Childhood Development Practitioner",
    location: "Pretoria",
    type: "Part-time",
    department: "Early Childhood",
    experience: "1-2 years",
    description:
      "Work with young learners in our Grade R program. Perfect opportunity for someone passionate about early childhood development.",
    requirements: [
      "NQF Level 4 ECD qualification",
      "SACE registration",
      "1+ years ECD experience",
      "Patience and creativity",
      "First Aid certification preferred",
    ],
    posted: "5 days ago",
  },
]

export default function TeacherPortal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    qualification: "",
    experience: "",
    subjects: "",
    availability: "",
    motivation: "",
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 border-green-200"
      case "Part-time":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Contract":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically upload the file and submit the form data
    console.log("Form Data:", formData)
    console.log("CV File:", cvFile)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Application Submitted Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in joining My Education. We have received your CV and application details. Our
              team will review your submission and contact you within 5-7 business days.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  location: "",
                  qualification: "",
                  experience: "",
                  subjects: "",
                  availability: "",
                  motivation: "",
                })
                setCvFile(null)
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Careers at My Education</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Join our mission to transform education in South Africa. Explore available positions and apply to make a
            difference.
          </p>
        </div>
      </section>

      {/* Career Vacancies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Career Vacancies</h2>
              <p className="text-lg text-muted-foreground">
                We have {mockVacancies.length} open positions across our partner schools
              </p>
            </div>

            {/* Alert Banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">New Opportunities Available!</h4>
                  <p className="text-sm text-muted-foreground">
                    We have {mockVacancies.length} open positions across our partner schools. Apply now to join our
                    mission of transforming education in South Africa.
                  </p>
                </div>
              </div>
            </div>

            {/* Vacancy List */}
            <div className="grid gap-6 mb-8">
              {mockVacancies.map((vacancy) => (
                <Card key={vacancy.id} className="border-2 border-border hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-foreground mb-2">{vacancy.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {vacancy.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {vacancy.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {vacancy.posted}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={getTypeColor(vacancy.type)}>{vacancy.type}</Badge>
                        <span className="text-xs text-muted-foreground">{vacancy.experience}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{vacancy.description}</p>
                    <div className="flex items-center justify-between">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedVacancy(vacancy)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          {selectedVacancy && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-primary">
                                  {selectedVacancy.title}
                                </DialogTitle>
                                <DialogDescription className="text-base">
                                  {selectedVacancy.location} • {selectedVacancy.department}
                                </DialogDescription>
                              </DialogHeader>

                              <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                  <Badge className={getTypeColor(selectedVacancy.type)}>{selectedVacancy.type}</Badge>
                                  <Badge variant="outline">{selectedVacancy.experience}</Badge>
                                  <Badge variant="outline">Posted {selectedVacancy.posted}</Badge>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-foreground mb-2">Job Description</h4>
                                  <p className="text-muted-foreground leading-relaxed">{selectedVacancy.description}</p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                                  <ul className="space-y-2">
                                    {selectedVacancy.requirements.map((req, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex gap-3 pt-4">
                                  <Button
                                    className="flex-1"
                                    onClick={() => {
                                      // Scroll to application form
                                      document
                                        .getElementById("application-form")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                    }}
                                  >
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    Apply Now
                                  </Button>
                                  <Button variant="outline">Save Position</Button>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>

                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => {
                          // Scroll to application form
                          document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                        }}
                      >
                        Quick Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="application-form">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Apply for a Position</h2>
              <p className="text-lg text-muted-foreground">Complete the form below to submit your application</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your basic contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location (City, Province) *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="e.g., Johannesburg, Gauteng"
                      required
                      className="border-border"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Professional Information */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Professional Information
                  </CardTitle>
                  <CardDescription>Tell us about your educational background and teaching experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Highest Qualification *</Label>
                    <Select onValueChange={(value) => handleInputChange("qualification", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your highest qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matric">Matric Certificate</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="degree">Bachelor's Degree</SelectItem>
                        <SelectItem value="honours">Honours Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Teaching Experience *</Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your teaching experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No formal teaching experience</SelectItem>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subjects">Preferred Teaching Subjects/Areas</Label>
                    <Input
                      id="subjects"
                      value={formData.subjects}
                      onChange={(e) => handleInputChange("subjects", e.target.value)}
                      placeholder="e.g., Mathematics, English, Early Childhood Development"
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select onValueChange={(value) => handleInputChange("availability", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-months">Within 2 months</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* CV Upload */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <FileText className="w-5 h-5 text-primary" />
                    CV Upload
                  </CardTitle>
                  <CardDescription>Please upload your current CV (PDF, DOC, or DOCX format, max 5MB)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <div className="space-y-2">
                        <Label htmlFor="cv-upload" className="cursor-pointer">
                          <span className="text-primary hover:text-primary/80 font-semibold">
                            Click to upload your CV
                          </span>
                          <span className="text-muted-foreground"> or drag and drop</span>
                        </Label>
                        <Input
                          id="cv-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                        <p className="text-sm text-muted-foreground">PDF, DOC, or DOCX (max 5MB)</p>
                      </div>
                    </div>
                    {cvFile && (
                      <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{cvFile.name}</span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Motivation */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Why do you want to teach?</CardTitle>
                  <CardDescription>
                    Tell us about your passion for education and why you want to join My Education
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Share your motivation for becoming an educator and how you align with our mission..."
                    className="min-h-32 border-border"
                    required
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  By submitting this form, you agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
