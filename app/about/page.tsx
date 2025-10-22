"use client";

import Image from "next/image";
import Navigation from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  Heart,
  Target,
  Building2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">
            Transforming Education Through{" "}
            <span className="text-primary block">Partnership & Empowerment</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            My foundation is a subsidiary non-profit organisation catering for
            the unprivileged and orphans pursuing educational goals. We are
            committed to empowering schools through training, innovation, and
            collaboration to ensure every learner thrives.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-6xl">
          {/* Mission */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We offer services that enrich school leaders with strategies for
                inclusive growth and sustainable education. We create
                opportunities for passionate individuals to invest in lifelong
                learning locally and internationally.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-secondary/20 bg-secondary/5">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A South Africa where every learner has access to quality
                education delivered by skilled educators and thriving schools
                that empower their communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h2 className="text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
            We empower schools, educators, and youth through capacity building,
            management, and sustainable development.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* School Management */}
            <Card className="border-2 border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>School Management</CardTitle>
                <CardDescription>
                  We buy, sell, and manage schools to ensure educational
                  excellence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "School acquisition and development",
                    "Operational management",
                    "Quality assurance programs",
                    "Franchise development support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Educator Empowerment */}
            <Card className="border-2 border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Educator Empowerment</CardTitle>
                <CardDescription>
                  Training and development for current and aspiring educators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Teacher training programs",
                    "Professional development",
                    "Career guidance and placement",
                    "Further studies support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Youth Development */}
            <Card className="border-2 border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Youth Development</CardTitle>
                <CardDescription>
                  Specialized programs for digital and leadership skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Cybersecurity skills",
                    "Early childhood development (NQF4/5)",
                    "Digital literacy",
                    "Leadership programs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-primary text-center text-primary-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg mb-16 opacity-90 max-w-3xl mx-auto">
            Through our comprehensive approach, we're making measurable
            differences in South African education.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["100+", "Educators Trained"],
              ["30+", "Partner Schools"],
              ["300+", "Youth Trained in Digital Skills"],
              ["10+", "Years of Experience"],
            ].map(([number, label], i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2">{number}</div>
                <div className="opacity-80 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We collaborate with top educational institutions and skill providers
            nationwide.
          </p>
 {/* Scrolling Logo Row */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {/* Each logo (no duplicates) */}
            <Image src="/Partners/anor.jfif" alt="Anor logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/henpro.png" alt="Henpro logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/atlantic.jpeg" alt="Atlantic logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/rain.jpeg" alt="Rain logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/answ.jpeg" alt="Answ logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/tas.jpeg" alt="Tas logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/shaftt.jpeg" alt="Shaftt logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/Lakewood.jpeg" alt="Lakewood logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/vicp.jpeg" alt="VicP logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/bui.jpeg" alt="Bui logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/askills.jpeg" alt="Askills logo" width={120} height={60} className="h-16 w-auto object-contain" />
            <Image src="/Partners/Allied.jpg" alt="Allied logo" width={120} height={60} className="h-16 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're an educator, a school seeking support, or an
            organization eager to collaborate — join us in shaping the future of
            education.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-stone-800 hover:bg-stone-700 text-white font-semibold px-8 py-4"
              >
                Get Involved Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold px-8 py-4"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
