import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/gallery/IMG_5090.JPG'
import portraitSample from '@/assets/gallery/IMG_4174.JPEG';
import weddingSample from '@/assets/gallery/IMG_9740.jpeg';
import familySample from '@/assets/gallery/IMG_9737.jpeg';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center'>
        <div className='absolute inset-0 z-0'>
          <img
            src={heroImage}
            alt='TM Creates'
            className='w-full h-full object-cover'
          />
          <div className='hero-overlay absolute inset-0'></div>
        </div>

        <div className='relative z-10 text-center text-white px-6'>
          <h1 className='text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight'>
            Capturing Life's
            <br />
            <span className='italic'>Beautiful Moments</span>
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Professional photography that tells your unique story with artistry
            and passion
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-white text-primary hover:bg-white/90 px-8 py-3'
            >
              <a href='/gallery'>View Portfolio</a>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-white text-black hover:bg-white hover:text-primary px-8 py-3'
            >
              <a href='/contact'>Book Session</a>
            </Button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-serif font-bold text-primary mb-6'>
              Featured Work
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              A glimpse into the stories I've had the privilege to capture
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {[
              { image: portraitSample, title: 'Portrait Session' },
              { image: weddingSample, title: 'Wedding Day' },
              { image: familySample, title: 'Family Moments' },
            ].map((item, i) => (
              <div key={i} className='photo-item group'>
                <div className='aspect-[4/5] overflow-hidden'>
                  <img
                    src={item.image}
                    alt={`Featured Work ${i + 1}`}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='mt-4 text-center'>
                  <h3 className='font-serif text-lg font-semibold text-primary'>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button asChild variant='outline' size='lg'>
              <a href='/gallery'>See Full Gallery</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-serif font-bold text-primary mb-8'>
              Hi, I'm Amari 
            </h2>
            <p className='text-xl text-foreground/80 leading-relaxed mb-8'>
              With over 8 years of experience, I specialize in capturing
              authentic emotions and genuine connections. Every session is a
              unique collaboration to create timeless images that you'll
              treasure forever.
            </p>
            <Button asChild size='lg'>
              <a href='/about'>Learn More About Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-serif font-bold mb-6'>
            Ready to Create Something Beautiful?
          </h2>
          <p className='text-xl mb-8 text-primary-foreground/90'>
            Let's discuss your vision and bring it to life
          </p>
          <Button asChild size='lg' variant='secondary'>
            <a href='/contact'>Start Your Journey</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
