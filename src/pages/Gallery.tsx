
// import Navigation from '@/components/Navigation';
// // import portraitSample from '@/assets/portrait-sample-1.jpg';
// // import weddingSample from '@/assets/wedding-sample.jpg';
// // import familySample from '@/assets/family-sample.jpg';
// // import gallery1 from '@/assets/gallery-1.jpg';
// // import gallery2 from '@/assets/gallery-2.jpg';
// // import gallery3 from '@/assets/gallery-3.jpg';

// const Gallery = () => {
//   // Sample photos with beautiful generated images
//   const photos = [
//     { id: 1, src: portraitSample, alt: 'Portrait Photography 1', category: 'portraits' },
//     { id: 2, src: weddingSample, alt: 'Wedding Photography 1', category: 'weddings' },
//     { id: 3, src: gallery1, alt: 'Corporate Portrait', category: 'portraits' },
//     { id: 4, src: gallery2, alt: 'Maternity Photography', category: 'family' },
//     { id: 5, src: familySample, alt: 'Family Photography', category: 'family' },
//     { id: 6, src: gallery3, alt: 'Engagement Session', category: 'couples' },
//     { id: 7, src: portraitSample, alt: 'Portrait Photography 2', category: 'portraits' },
//     { id: 8, src: weddingSample, alt: 'Wedding Photography 2', category: 'weddings' },
//     { id: 9, src: gallery1, alt: 'Professional Headshot', category: 'portraits' },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <main className="pt-20 pb-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl font-serif font-bold text-primary mb-6">
//               Gallery
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               A collection of moments captured through my lens, showcasing the beauty
//               in life's most precious memories.
//             </p>
//           </div>

//           <div className="photo-gallery-grid">
//             {photos.map((photo) => (
//               <div key={photo.id} className="photo-item group">
//                 <div className="aspect-[4/5] overflow-hidden">
//                   <img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                   <div className="p-6 text-white">
//                     <p className="font-medium text-sm uppercase tracking-wide">
//                       {photo.category}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <p className="text-muted-foreground mb-8">
//               Like what you see? Let's create something beautiful together.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
//             >
//               Book a Session
//             </a>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Gallery;
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageModules = import.meta.glob('@/assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { 
          eager: true,
          as: 'url'
        });
        
        const images = Object.entries(imageModules).map(([path, url], index) => {
          const filename = path.split('/').pop().split('.')[0];
          return {
            id: index + 1,
            src: url,
            alt: filename.replace(/-/g, ' '),
            category: determineCategory(filename)
          };
        });
        
        setPhotos(images);
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Helper function to determine category based on filename
  function determineCategory(filename) {
    if (filename.includes('portrait')) return 'portraits';
    if (filename.includes('wedding')) return 'weddings';
    if (filename.includes('family')) return 'family';
    if (filename.includes('couple')) return 'couples';
    return 'gallery';
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of moments captured through my lens, showcasing the life that you lead
            </p>
          </div>
          
          {loading ? (
            <div className="text-center text-muted-foreground">
              Loading gallery...
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No images found in gallery.
            </div>
          ) : (
            <div className="photo-gallery-grid">
              {photos.map((photo) => (
                <div key={photo.id} className="photo-item group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium text-sm uppercase tracking-wide">
                        {photo.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-8">
              Like what you see? Let's create something beautiful together.
            </p>
           <a 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Book a Session
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;