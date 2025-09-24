"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, GraduationCap, Users, CheckCircle, Send } from "lucide-react"

export default function StudentAdmissionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [gradeApplying, setGradeApplying] = useState("")
  const [academicYear, setAcademicYear] = useState("")
  const [relationship, setRelationship] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      idNumber: formData.get('idNumber') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      gradeApplying: gradeApplying,
      previousSchool: formData.get('previousSchool') as string,
      currentGrade: formData.get('currentGrade') as string,
      academicYear: academicYear,
      parentName: formData.get('parentName') as string,
      parentEmail: formData.get('parentEmail') as string,
      parentPhone: formData.get('parentPhone') as string,
      relationship: relationship,
      address: formData.get('address') as string,
      specialNeeds: formData.get('specialNeeds') as string,
      motivation: formData.get('motivation') as string,
    }

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // e.currentTarget.reset()
        setGradeApplying("")
        setAcademicYear("")
        setRelationship("")
        formRef.current?.reset()
      } else {
        const error = await response.json()
        console.error('Application submission failed:', error)
        alert('Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Admission Portal</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Apply for admission to our quality education programs from Grade 000 to Grade 11. Upload your credentials
            and join thousands of students in our excellence journey.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-2">
                <GraduationCap className="w-8 h-8 mx-auto mb-4" />
                Student Application Form
              </CardTitle>
              <CardDescription className="text-lg">
                Complete the form below to apply for admission. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Application Submitted Successfully!</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Thank you for your application. We will review your submission and contact you within 5-7 business days regarding your application status.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mr-4"
                  >
                    Submit Another Application
                  </Button>
                  <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Return to Home
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" placeholder="Enter first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" placeholder="Enter last name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idNumber">ID Number *</Label>
                        <Input id="idNumber" name="idNumber" placeholder="Enter ID number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="student@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" placeholder="Enter phone number" required />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                      Academic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                        <Select value={gradeApplying} onValueChange={setGradeApplying} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grade-000">Grade 000 (Pre-School)</SelectItem>
                            <SelectItem value="grade-00">Grade 00 (Reception)</SelectItem>
                            <SelectItem value="grade-0">Grade 0 (Grade R)</SelectItem>
                            <SelectItem value="grade-1">Grade 1</SelectItem>
                            <SelectItem value="grade-2">Grade 2</SelectItem>
                            <SelectItem value="grade-3">Grade 3</SelectItem>
                            <SelectItem value="grade-4">Grade 4</SelectItem>
                            <SelectItem value="grade-5">Grade 5</SelectItem>
                            <SelectItem value="grade-6">Grade 6</SelectItem>
                            <SelectItem value="grade-7">Grade 7</SelectItem>
                            <SelectItem value="grade-8">Grade 8</SelectItem>
                            <SelectItem value="grade-9">Grade 9</SelectItem>
                            <SelectItem value="grade-10">Grade 10</SelectItem>
                            <SelectItem value="grade-11">Grade 11</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousSchool">Previous School</Label>
                        <Input id="previousSchool" name="previousSchool" placeholder="Enter previous school name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentGrade">Current Grade</Label>
                        <Input id="currentGrade" name="currentGrade" placeholder="Enter current grade" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="academicYear">Academic Year *</Label>
                        <Select value={academicYear} onValueChange={setAcademicYear} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                      Parent/Guardian Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input id="parentName" name="parentName" placeholder="Enter parent/guardian name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentEmail">Parent/Guardian Email *</Label>
                        <Input id="parentEmail" name="parentEmail" type="email" placeholder="parent@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone">Parent/Guardian Phone *</Label>
                        <Input id="parentPhone" name="parentPhone" placeholder="Enter phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="relationship">Relationship to Student *</Label>
                        <Select value={relationship} onValueChange={setRelationship} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="guardian">Guardian</SelectItem>
                            <SelectItem value="grandparent">Grandparent</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea id="address" name="address" placeholder="Enter complete home address" required />
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                      Supporting Documents (Optional)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can upload supporting documents now or submit them later. Documents can be submitted via email after your application is processed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Birth Certificate</h4>
                          <p className="text-sm text-muted-foreground mb-4">Upload certified copy of birth certificate (optional)</p>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileText className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Previous School Report</h4>
                          <p className="text-sm text-muted-foreground mb-4">Upload latest school report (if applicable)</p>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileText className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">ID Copy (Parent/Guardian)</h4>
                          <p className="text-sm text-muted-foreground mb-4">Upload copy of parent/guardian ID (optional)</p>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileText className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Proof of Residence</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Upload recent utility bill or lease agreement (optional)
                          </p>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileText className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                      Additional Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialNeeds">Special Educational Needs</Label>
                        <Textarea
                          id="specialNeeds"
                          name="specialNeeds"
                          placeholder="Please describe any special educational needs or accommodations required"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join My Education?</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          placeholder="Tell us why you're interested in joining our educational community"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-white px-12 py-3 disabled:opacity-50"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      By submitting this application, you agree to our terms and conditions. We will contact you within 5-7
                      business days regarding your application status.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
