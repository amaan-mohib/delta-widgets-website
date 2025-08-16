import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Coffee } from "lucide-react"

export function SponsorSection() {
  return (
    <section id="sponsor" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-3xl w-full text-center">
            <Card className="border-0 shadow-lg">
              <CardHeader className="px-4 sm:px-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Support Delta Widgets</CardTitle>
                <CardDescription className="text-base sm:text-lg px-2">
                  Help keep this project alive and growing. Your support enables continued development and new features.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <p className="text-sm sm:text-base text-muted-foreground px-2">
                  Delta Widgets is a passion project created to make desktop customization accessible to everyone. If
                  you find it useful, consider supporting its development.
                </p>

                <div className="flex justify-center">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto" asChild>
                    <a href="https://www.buymeacoffee.com/amaan.mohib" target="_blank" rel="noopener noreferrer">
                      <Coffee className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Buy Me a Coffee
                    </a>
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                  Every contribution, no matter how small, helps maintain and improve Delta Widgets for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
