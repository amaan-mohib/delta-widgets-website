import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "StreamLine transformed our operations completely. We've seen a 40% increase in productivity since implementation.",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
    company: "TechCorp",
  },
  {
    quote:
      "The automation features saved us countless hours. Our team can now focus on strategic initiatives instead of manual tasks.",
    author: "Michael Chen",
    title: "Operations Director",
    company: "GrowthCo",
  },
  {
    quote: "Outstanding platform with exceptional support. The ROI was evident within the first month of usage.",
    author: "Emily Rodriguez",
    title: "CTO, InnovateLab",
    company: "InnovateLab",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Trusted by industry leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what our customers are saying about StreamLine</p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <blockquote className="text-foreground">
                    <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="mt-6">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
