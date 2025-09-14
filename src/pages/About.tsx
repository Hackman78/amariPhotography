// import Navigation from '@/components/Navigation';
// import { Button } from '@/components/ui/button';
// import sarahPortrait from '../assets/logo.png';
//
// const About = () => {
//     return (
//         <div className="min-h-screen bg-background">
//             <Navigation />
//
//             <main className="pt-20 pb-16">
//                 <div className="container mx-auto px-6">
//                     <div className="max-w-6xl mx-auto">
//                         <div className="grid lg:grid-cols-2 gap-16 items-center">
//                             {/* Portrait Section */}
//                             <div className="order-2 lg:order-1">
//                                 <div className="relative">
//                                     <div className="aspect-[4/5] rounded-2xl overflow-hidden">
//                                         <img
//                                             src={sarahPortrait}
//                                             alt="Amari Portrait"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10"></div>
//                                 </div>
//                             </div>
//
//                             {/* Bio Section */}
//                             <div className="order-1 lg:order-2">
//                                 <h1 className="text-5xl font-serif font-bold text-primary mb-8">
//                                     About TM Creates
//                                 </h1>
//
//                                 <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
//                                     <p>
//                                         I am a New Orleans native who has fallen deeply in love with the art
//                                         of photography and the unique culture that surrounds us every day in
//                                         this vibrant city. Growing up in the Crescent City has given me an intimate
//                                         understanding of what makes our community special – from the spontaneous second
//                                         lines that fill our streets with music and joy, to the quiet moments of connection
//                                         between families gathered around Sunday dinner tables. This deep-rooted connection
//                                         to New Orleans culture influences every photograph I take, allowing me to capture
//                                         not just images, but the authentic spirit and soul of the moments that matter most
//                                         to my clients.
//                                     </p>
//                                     <p>
//                                         My passion lies in creating memorable moments that my customers will treasure for a lifetime. I believe that photography is more than just pointing and clicking a camera; it's about understanding people, anticipating emotions, and being present for the fleeting moments that tell a story. Whether I'm documenting the tears of joy during a wedding ceremony, the proud smiles at a graduation party, or the candid laughter shared between friends at a birthday celebration, I take immense pride in my ability to freeze these precious memories in time.
//                                     </p>
//                                     <p>
//                                         I specialize in capturing a wide range of events including weddings, baby showers, adult parties, family reunions, corporate events, and milestone celebrations. Each event presents its own unique challenges and opportunities, and I approach every shoot with fresh eyes and creative energy. My experience has taught me how to work seamlessly in various environments – from intimate backyard gatherings to grand ballroom celebrations – always ensuring that I capture the essence of your special day without being intrusive or disruptive to the natural flow of your event.
//                                     </p>
//                                     <p>
//                                         Beyond event photography, I also offer personal portrait sessions that allow you to express your individual style and personality. These sessions are completely customizable to your vision – whether you're looking for professional headshots, family portraits, maternity photos, or creative artistic shots that showcase who you are. I work closely with each client to understand their preferences, comfort level, and desired aesthetic, creating a relaxed and enjoyable experience that results in photographs you'll be excited to share and display with pride.
//                                     </p>
//
//                                 </div>
//
//                                 <div className="mt-10 space-y-4">
//                                     <h3 className="text-2xl font-serif font-semibold text-primary">
//                                         Specialties
//                                     </h3>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-primary rounded-full"></div>
//                                             <span>Portrait Photography</span>
//                                         </div>
//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-primary rounded-full"></div>
//                                             <span>Wedding Photography</span>
//                                         </div>
//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-primary rounded-full"></div>
//                                             <span>Family Sessions</span>
//                                         </div>
//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-primary rounded-full"></div>
//                                             <span>Event Photography</span>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="mt-12 flex gap-4">
//                                     <Button asChild size="lg">
//                                         <a href="/contact">Book a Session</a>
//                                     </Button>
//                                     <Button variant="outline" asChild size="lg">
//                                         <a href="/gallery">View Gallery</a>
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Quote Section */}
//                         <div className="mt-24 text-center">
//                             <div className="max-w-4xl mx-auto elegant-card">
//                                 <blockquote className="text-2xl font-serif italic text-primary mb-4">
//                                     "Photography is the story I fail to put into words."
//                                 </blockquote>
//                                 <cite className="text-muted-foreground">— Destin Sparks</cite>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };
//
// export default About;
//
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

                                <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                                    <p>
                                        I am a New Orleans native who loves to capture the culture we live in. Growing up in the Crescent City has given me an intimate understanding of what makes our community special – from spontaneous second lines to quiet family moments.
                                    </p>
                                    <p>
                                        My passion lies in creating memorable moments that my customers will treasure for a lifetime. I take pride in capturing weddings, baby showers, adult parties, and more, always focusing on the authentic emotions and connections that make each event unique.
                                    </p>
                                    <p>
                                        I also offer personal portrait sessions that are completely customizable to your vision. Whether you need professional headshots, family portraits, or creative artistic shots, I work closely with each client to create a relaxed experience that results in photographs you'll love to share.
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
