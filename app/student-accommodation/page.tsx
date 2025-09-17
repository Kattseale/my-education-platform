import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  MapPin,
  Wifi,
  Shield,
  Users,
  BookOpen,
  Utensils,
  Bed,
  Bath,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function StudentAccommodationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quality Student Accommodation</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Safe, comfortable, and affordable accommodation for inner city school students. We provide a supportive
            environment that enhances your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
              <Home className="w-5 h-5 mr-2" />
              View Available Rooms
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 bg-transparent"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Accommodation?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique needs of students and provide comprehensive support for academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Safe & Secure</CardTitle>
                <CardDescription>24/7 security and controlled access for peace of mind</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    24/7 security personnel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    CCTV monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Controlled access systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Study-Friendly</CardTitle>
                <CardDescription>Quiet study areas and academic support services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Dedicated study rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Tutoring support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Library access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Prime Location</CardTitle>
                <CardDescription>Close to schools and public transportation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Walking distance to schools
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Public transport access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Shopping centers nearby
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Modern Amenities</CardTitle>
                <CardDescription>High-speed internet and modern facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Free high-speed WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Laundry facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Common recreation areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Meal Plans</CardTitle>
                <CardDescription>Nutritious meals to support your studies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Breakfast & dinner included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Healthy, balanced meals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Dietary accommodations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Community Support</CardTitle>
                <CardDescription>Resident advisors and peer support programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Resident advisors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Peer mentorship
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Social activities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Accommodation Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of comfortable and affordable room options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200">Most Popular</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">R2,500</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Shared Room</CardTitle>
                <CardDescription>Perfect for students who enjoy companionship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span>2 single beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span>Shared bathroom</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>Study desks for 2</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-muted-foreground" />
                    <span>Free WiFi included</span>
                  </div>
                </div>
                <Button className="w-full">
                  Select This Room
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Premium</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">R3,800</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Single Room</CardTitle>
                <CardDescription>Private space for focused studying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span>1 single bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span>Private bathroom</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span>Private study area</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-muted-foreground" />
                    <span>Free WiFi included</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Select This Room
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">Budget Friendly</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">R1,800</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Dormitory Style</CardTitle>
                <CardDescription>Affordable option with shared facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span>4-6 beds per room</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span>Shared bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span>Common study areas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-muted-foreground" />
                    <span>Free WiFi included</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Select This Room
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Apply for Accommodation</h2>
            <p className="text-lg text-muted-foreground">
              Complete the form below to secure your place in our student accommodation
            </p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                <Home className="w-8 h-8 mx-auto mb-4" />
                Accommodation Application
              </CardTitle>
              <CardDescription className="text-center text-base">
                All fields marked with * are required for processing your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID Number *</Label>
                    <Input id="studentId" placeholder="Enter student ID" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="student@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="Enter phone number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">School/Institution *</Label>
                    <Input id="school" placeholder="Enter your school name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Current Grade/Year *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade-8">Grade 8</SelectItem>
                        <SelectItem value="grade-9">Grade 9</SelectItem>
                        <SelectItem value="grade-10">Grade 10</SelectItem>
                        <SelectItem value="grade-11">Grade 11</SelectItem>
                        <SelectItem value="grade-12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Accommodation Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                  Accommodation Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="roomType">Preferred Room Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shared">Shared Room (R2,500/month)</SelectItem>
                        <SelectItem value="single">Single Room (R3,800/month)</SelectItem>
                        <SelectItem value="dormitory">Dormitory Style (R1,800/month)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moveInDate">Preferred Move-in Date *</Label>
                    <Input id="moveInDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Accommodation Duration *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semester">One Semester</SelectItem>
                        <SelectItem value="academic-year">Full Academic Year</SelectItem>
                        <SelectItem value="ongoing">Ongoing (Month-to-month)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mealPlan">Meal Plan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meal plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Meal Plan (+R800/month)</SelectItem>
                        <SelectItem value="breakfast-dinner">Breakfast & Dinner (+R500/month)</SelectItem>
                        <SelectItem value="none">No Meal Plan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                  Emergency Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Emergency Contact Name *</Label>
                    <Input id="emergencyName" placeholder="Enter contact name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation">Relationship *</Label>
                    <Input id="emergencyRelation" placeholder="e.g., Parent, Guardian" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input id="emergencyPhone" placeholder="Enter phone number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyEmail">Emergency Contact Email</Label>
                    <Input id="emergencyEmail" type="email" placeholder="contact@example.com" />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                  Additional Information
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="medicalConditions"
                      placeholder="Please list any medical conditions, allergies, or special requirements"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalRequests">Special Requests or Comments</Label>
                    <Textarea id="additionalRequests" placeholder="Any additional information or special requests" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-3">
                  <Home className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We will review your application and contact you within 3-5 business days. A deposit may be required to
                  secure your accommodation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need More Information?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our accommodation team is here to help you find the perfect living situation for your studies
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80">+27 (0) 11 456 7890</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/80">accommodation@myeduc.co.za</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Office Hours</h3>
              <p className="text-white/80">Mon-Fri: 8AM-5PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
