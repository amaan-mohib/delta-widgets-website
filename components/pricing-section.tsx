import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic automation workflows",
      "Standard analytics",
      "Email support",
      "5GB storage",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 25 team members",
      "Advanced automation",
      "Real-time analytics",
      "Priority support",
      "50GB storage",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise automation",
      "Advanced analytics & reporting",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "SSO & advanced security",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the perfect plan for your business needs</p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-primary mr-3">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
