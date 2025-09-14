import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const pricingPackages = [
    {
      name: "Portrait Session",
      price: "$350",
      duration: "1 hour",
      includes: [
        "1 hour studio or outdoor session",
        "30+ edited high-resolution images",
        "Online gallery for viewing & downloading",
        "Print release included"
      ]
    },
    {
      name: "Family Package",
      price: "$450",
      duration: "1.5 hours",
      includes: [
        "1.5 hour outdoor family session",
        "50+ edited high-resolution images",
        "Online gallery for 1 year",
        "Print release included",
        "5 additional family members included"
      ]
    },
    {
      name: "Wedding Photography",
      price: "$2,500",
      duration: "Full Day",
      includes: [
        "8 hours of wedding day coverage",
        "500+ edited high-resolution images",
        "Online gallery for lifetime access",
        "Engagement session included",
        "Print release & USB drive"
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Let's Create Something Beautiful
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Choose a package below and let's discuss your vision.
            </p>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-semibold text-center text-primary mb-12">
              Photography Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">/ {pkg.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                      Select Package
                    </Button> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="elegant-card">
              <h2 className="text-3xl font-serif font-semibold text-center text-primary mb-8">
                Get In Touch
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Event Date (if applicable)
                  </label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tell me about your vision
                  </label>
                  <Textarea
                    placeholder="Describe your photography needs, preferred style, location ideas, or any special requirements..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>Email:</strong> hello@sarahchenphotography.com
                  </p>
                  <p className="text-foreground">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
