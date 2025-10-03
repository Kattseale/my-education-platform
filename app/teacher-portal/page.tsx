"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { Upload, FileText, CheckCircle, User, GraduationCap, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"




interface Vacancy {
    id: string;
    title: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract";
    department: string;
    experience: string;
    description: string;
    requirements: string[];
    posted: string;
}
 

const mockVacancies: Vacancy[] = [ { id: "1", title: "Primary School Teacher - Grade 3", location: "Johannesburg Central", type: "Full-time", department: "Primary Education", experience: "2-3 years", description: "We are seeking a passionate and dedicated Grade 3 teacher to join our dynamic team. The successful candidate will be responsible for creating engaging lesson plans and fostering a positive learning environment.", requirements: [ "Bachelor's degree in Education or relevant field", "SACE registration", "2+ years teaching experience", "Strong classroom management skills", "Proficiency in English and Afrikaans", ], posted: "2 days ago", }, { id: "2", title: "Mathematics Teacher - High School", location: "Cape Town", type: "Full-time", department: "Secondary Education", experience: "3-5 years", description: "Join our mathematics department and inspire students to excel in mathematics. We offer excellent professional development opportunities and a supportive work environment.", requirements: [ "Bachelor's degree in Mathematics or Education", "SACE registration", "3+ years high school teaching experience", "Strong mathematical knowledge", "Experience with digital learning tools", ], posted: "1 week ago", }, { id: "3", title: "School Principal", location: "Durban", type: "Full-time", department: "Leadership", experience: "8+ years", description: "Lead our school community towards excellence. We are looking for an experienced educational leader with a vision for transformative education.", requirements: [ "Master's degree in Education Leadership", "SACE registration", "8+ years leadership experience", "Strong communication skills", "Experience in school management", ], posted: "3 days ago", }, { id: "4", title: "Early Childhood Development Practitioner", location: "Pretoria", type: "Part-time", department: "Early Childhood", experience: "1-2 years", description: "Work with young learners in our Grade R program. Perfect opportunity for someone passionate about early childhood development.", requirements: [ "NQF Level 4 ECD qualification", "SACE registration", "1+ years ECD experience", "Patience and creativity", "First Aid certification preferred", ], posted: "5 days ago", }, ]



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
  const formRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setCvFile(e.target.files[0])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!cvFile) return alert("Please upload your CV")

    try {
      const body = new FormData()
      Object.entries(formData).forEach(([key, value]) => body.append(key, value))
      body.append("cv", cvFile)

      const res = await fetch("/api/portal", { method: "POST", body })
      const data = await res.json()

      if (res.ok) setIsSubmitted(true)
      else alert(`Error: ${data.error}`)
    } catch (err) {
      console.error(err)
      alert("Unexpected error submitting form")
    }
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Application Submitted Successfully!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your application. Our team will review your submission.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-1">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Teacher & Staff Portal</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our team of dedicated educators and professionals. Explore open vacancies and apply to become part of
            our mission to deliver quality education.
          </p>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Vacancies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity to make a difference in education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockVacancies.map(vacancy => (
              <Dialog key={vacancy.id}>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{vacancy.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 pt-2">
                      <MapPin className="w-4 h-4" /> {vacancy.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{vacancy.type}</Badge>
                      <Badge variant="secondary">{vacancy.experience} Exp.</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">{vacancy.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </Card>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{vacancy.title}</DialogTitle>
                    <DialogDescription>
                      {vacancy.department} • {vacancy.location}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 space-y-6">
                    <p className="text-muted-foreground">{vacancy.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {vacancy.requirements.map((req, i) => <li key={i}>{req}</li>)}
                      </ul>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-between items-center">
                    <div className="text-sm text-muted-foreground"><Clock className="w-4 h-4 inline mr-1" />Posted {vacancy.posted}</div>
                    <DialogClose asChild>
                      <Button onClick={scrollToForm}>Apply Now</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div ref={formRef} className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Apply for a Position</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><User className="w-5 h-5 text-primary" />Personal Information</CardTitle>
                <CardDescription>Provide your contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" value={formData.firstName} onChange={e => handleInputChange("firstName", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" value={formData.lastName} onChange={e => handleInputChange("lastName", e.target.value)} required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" value={formData.location} onChange={e => handleInputChange("location", e.target.value)} required />
                </div>
              </CardContent>
            </Card>

            {/* Professional Info */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />Professional Info</CardTitle>
                <CardDescription>Educational background & experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Highest Qualification *</Label>
                  <Select onValueChange={value => handleInputChange("qualification", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matric">Matric</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="degree">Bachelor's</SelectItem>
                      <SelectItem value="honours">Honours</SelectItem>
                      <SelectItem value="masters">Masters</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience *</Label>
                  <Select onValueChange={value => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="0-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subjects">Preferred Subjects</Label>
                  <Input id="subjects" value={formData.subjects} onChange={e => handleInputChange("subjects", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select onValueChange={value => handleInputChange("availability", value)} required>
                    <SelectTrigger>
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
                <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />Upload CV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed p-8 text-center cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <Label htmlFor="cv-upload" className="cursor-pointer">
                    <span className="text-primary font-semibold">Click to upload</span>
                  </Label>
                  <Input id="cv-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} required />
                  {cvFile && <p className="mt-2">{cvFile.name} ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)</p>}
                </div>
              </CardContent>
            </Card>

            {/* Motivation */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle>Why do you want to teach?</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea value={formData.motivation} onChange={e => handleInputChange("motivation", e.target.value)} required />
              </CardContent>
            </Card>

            <div className="text-center">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4">Submit Application</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
