import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"
import {
  BookOpen,
  Users,
  GraduationCap,
  Shield,
  Target,
  Building2,
  Heart,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-8 text-foreground leading-tight">
            Transforming Schools,
            <span className="text-primary block">Empowering Educators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
            We are a world class organisation, dedicated to providing Quality Educational services to Schools. Our
            structured approach is designed to suit the needs of the current educational landscape while empowering
            prospective educators to achieve their dreams of making a difference in Education.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive educational services designed to strengthen South Africa's education system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">Learner Placement Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Quality education placement from Grade 000 to Grade 11
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Pre-school placement (Grade 000)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Foundation phase (Grade R-3)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Intermediate phase (Grade 4-6)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Senior phase (Grade 7-12)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">Teacher Training</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Comprehensive programs to develop skilled, confident educators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Professional development workshops
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Curriculum design and implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Classroom management techniques
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Educational technology integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">School Leadership Development</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Building strong leaders for educational excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Strategic planning and vision setting
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Team building and staff development
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Financial management for schools
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Community engagement strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">Career Guidance</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Helping educators find their path in education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Career assessment and planning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Job placement assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Interview preparation and skills
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Networking opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">Digital Skills & Cybersecurity</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preparing youth for the digital economy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Cybersecurity fundamentals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Digital literacy programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Online safety education
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Technology integration training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground font-bold text-xl">Early Childhood Development</CardTitle>
                <CardDescription className="text-muted-foreground">NQF4 and NQF5 certified programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    NQF Level 4 certification
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    NQF Level 5 advanced training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Child development principles
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Practical classroom experience
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary-foreground mb-8">Our Mission</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              To empower prospective educators and transform the educational landscape by providing comprehensive
              training, support, and opportunities that make the dream of becoming an educator a reality for everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/80">Educators Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground mb-2">30+</div>
                <div className="text-primary-foreground/80">Partner Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground mb-2">10+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-17 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-8 text-balance">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Join our mission to empower educators and strengthen schools across South Africa. Together, we can make
            quality education accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

              <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold px-8 py-4 bg-transparent"
            >
              Get in Touch
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary border border-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground text-xl">My Education</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering educators and transforming schools across South Africa through comprehensive training and
                support programs.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Our Programs</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Teacher Training</li>
                <li>School Leadership</li>
                <li>Career Guidance</li>
                <li>Digital Skills</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Early Childhood Development</li>
                <li>Cybersecurity Training</li>
                <li>School Management</li>
                <li>Leadership Development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+27 (0) 86 721 1598</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>careers@myeduc.co.za</span>
                </div>
                <div className="flex items-center 2">
                  <MapPin className="w-8 h-5"/>
                  <span>30 Modulus Road, Ormonde, Johannesburg, South Africa
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 My Education. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
