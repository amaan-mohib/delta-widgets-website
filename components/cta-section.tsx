import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to streamline your business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Join thousands of businesses already using StreamLine to boost productivity and drive growth. Start your
            free trial today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
