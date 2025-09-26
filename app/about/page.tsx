import Image from "next/image"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Heart, Target, Building2, CheckCircle, ArrowRight } from "lucide-react"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-5xl font-bold text-foreground mb-8 text-balance">
              Transforming Education Through
              <span className="text-primary block">Partnership & Empowerment</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My foundation is a subsidiary non profit organisation catering for the unprivileged and orphans perusing educational goals.
              We are a dedicated educational organization committed to transforming education
              through innovative, high-quality learning environments. Our mission is to empower schools with the tools,
              training, and guidance they need to deliver exceptional educational experiences. By partnering with
              schools, educators, and communities, we aim to expand access to quality education, support sustainable
              growth, and ensure every learner has the opportunity to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower schools with the tools, training, and guidance they need to deliver exceptional educational
                  experiences. By partnering with schools, educators, and communities, we aim to expand access to
                  quality education, support sustainable growth, and ensure every learner has the opportunity to thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-secondary/5">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A South Africa where every learner has access to quality education delivered by skilled, passionate
                  educators, and where schools operate as thriving centers of learning and community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a dedicated educational organization committed to transforming education
              through innovative, high-quality learning environments. Our mission is to empower schools with the tools,
              training, and guidance they need to deliver exceptional educational experiences. By partnering with
              schools, educators, and communities, we aim to expand access to quality education, support sustainable
              growth, and ensure every learner has the opportunity to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">School Management</CardTitle>
                <CardDescription>
                  We buy, sell, and operate schools to ensure quality education delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    School acquisition and development
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Operational management and oversight
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Quality assurance programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Franchise development support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">Educator Empowerment</CardTitle>
                <CardDescription>Comprehensive training and support for current and aspiring educators</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Teacher training programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Professional development opportunities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Career guidance and placement
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Further studies support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">Youth Development</CardTitle>
                <CardDescription>
                  Specialized programs for digital skills and early childhood development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Cybersecurity skills for youth
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Early childhood development (NQF4/5)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Digital literacy programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Leadership development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Our Impact</h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Through our comprehensive approach, we're making a measurable difference in South African education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium">Educators Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80 font-medium">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">1,200+</div>
              <div className="text-primary-foreground/80 font-medium">Youth Trained in Digital Skills</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with leading educational institutions and maintain strong partnerships.
            </p>
          </div>

      <section className="py-20 bg-background">
   <div className="container mx-auto px-4">
    <div className="text-center mb-16">
     <h2 className="text-4xl font-bold text-foreground mb-6">Partnerships</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        We work with leading educational institutions and maintain strong partnerships.
      </p>
    </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
            <Image src="/Partners/anor.jfif" alt="Anor logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/henpro.png" alt="Henpro logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/vicP.jpg" alt="VicP logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/rain.jpg" alt="Rain logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/answ.jpg" alt="Answ logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/tas.jpg" alt="Tas logo" width={120} height={60} className="h-16 w-auto object-contain" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Strategic Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Leading universities and colleges
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Technology training providers
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Community development organizations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Government education departments
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-8">Join Our Mission</h2>
          <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether you're an aspiring educator, a school looking for support, or an organization wanting to partner
            with us, there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-stone-800 hover:bg-stone-700 text-white font-semibold px-8 py-4 border border-stone-900"
            >
              Get Involved Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold px-8 py-4 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}