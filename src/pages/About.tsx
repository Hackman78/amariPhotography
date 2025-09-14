import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import sarahPortrait from '../assets/logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Portrait Section */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src={sarahPortrait}
                      alt="Amari Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="order-1 lg:order-2">
                <h1 className="text-5xl font-serif font-bold text-primary mb-8">
                  About TM Creates 
                </h1>

                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Welcome! I'm TM Creates, a passionate photographer based in the heart of the city,
                    dedicated to capturing life's most beautiful and authentic moments.
                  </p>

                  <p>
                    With over 8 years of experience behind the lens, I specialize in portrait,
                    wedding, and lifestyle photography. My approach is natural and unobtrusive,
                    allowing genuine emotions and connections to shine through in every image.
                  </p>

                  <p>
                    I believe that photography is more than just taking pictures—it's about
                    preserving memories, telling stories, and celebrating the unique beauty in
                    every person and moment. Whether it's an intimate portrait session, a joyful
                    wedding celebration, or a family milestone, I'm here to help you treasure
                    these precious memories forever.
                  </p>

                  <p>
                    When I'm not behind the camera, you'll find me exploring new locations,
                    spending time with my family, or planning my next creative project.
                    I'd love to hear about your vision and help bring it to life.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <h3 className="text-2xl font-serif font-semibold text-primary">
                    Specialties
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Portrait Photography</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Wedding Photography</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Family Sessions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Event Photography</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <Button asChild size="lg">
                    <a href="/contact">Book a Session</a>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <a href="/gallery">View Gallery</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-24 text-center">
              <div className="max-w-4xl mx-auto elegant-card">
                <blockquote className="text-2xl font-serif italic text-primary mb-4">
                  "Photography is the story I fail to put into words."
                </blockquote>
                <cite className="text-muted-foreground">— Destin Sparks</cite>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
