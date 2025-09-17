import Navigation from "@/components/navigation"

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-foreground mb-8 uppercase">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about My Education and our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">What services does My Education provide?</h3>
              <p className="text-muted-foreground">
                We offer comprehensive school management services including teacher training, school leadership
                development, career guidance, digital skills training, cybersecurity education for youth, and early
                childhood development courses (NQF4 and NQF5). We also buy, sell, and manage schools to expand access to
                quality education.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How can I become an educator through My Education?
              </h3>
              <p className="text-muted-foreground">
                We empower prospective educators by providing pathways to further their studies and achieve their dream
                of becoming an educator. Contact us at info@myeduc.co.za to learn about our teacher training programs
                and educational opportunities available in your area.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What are the requirements for your training programs?
              </h3>
              <p className="text-muted-foreground">
                Requirements vary by program. Our early childhood development courses require a Grade 12 certificate,
                while our teacher training programs may have additional prerequisites. Digital skills and cybersecurity
                programs are open to youth with basic computer literacy. Contact us for specific program requirements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Are your courses accredited?</h3>
              <p className="text-muted-foreground">
                Yes, we work with accredited partners and institutions to ensure our courses meet national standards.
                Our early childhood development courses are NQF4 and NQF5 accredited, and we maintain partnerships with
                recognized educational bodies to provide quality, certified training.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">How can schools partner with My Education?</h3>
              <p className="text-muted-foreground">
                Schools can partner with us for management support, teacher training, leadership development, and
                educational enhancement programs. We offer customized solutions based on each school's needs. Contact us
                at info@myeduc.co.za to discuss partnership opportunities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">What areas do you serve?</h3>
              <p className="text-muted-foreground">
                As a South African NPO, we primarily serve communities across South Africa, with a focus on expanding
                access to quality education in underserved areas. We work with schools and educators nationwide to
                improve educational outcomes and opportunities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">How is My Education funded?</h3>
              <p className="text-muted-foreground">
                As a non-profit organization, we operate through a combination of partnerships, grants, donations, and
                sustainable revenue from our school management services. Our goal is to reinvest all proceeds back into
                expanding educational opportunities and improving school quality.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How can I get involved or support My Education?
              </h3>
              <p className="text-muted-foreground">
                There are many ways to get involved: volunteer as an educator, partner with us as a school, support our
                programs through donations, or spread awareness about our mission. Visit our "Get Involved" page or
                contact us at info@myeduc.co.za to learn more about opportunities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What makes My Education different from other educational organizations?
              </h3>
              <p className="text-muted-foreground">
                We take a comprehensive approach by not just providing training, but also managing schools, developing
                leaders, and creating sustainable educational ecosystems. Our focus on both traditional education and
                modern digital skills, including cybersecurity, prepares learners for the future economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
