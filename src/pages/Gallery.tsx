import { useState } from 'react';
import { Filter, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AnimationWrapper from '@/components/AnimationWrapper';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'community', label: 'Community Service' },
    { id: 'professional service', label: 'Professional Service' },
    { id: 'international service', label: 'International Service' },
    { id: 'district priority projects', label: 'District Priority Projects' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'team', label: 'Team Photos' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      category: 'community',
      title: 'Health Camp 2024',
      description: 'Free health checkups for the community'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      category: 'community',
      title: 'Beach Cleanup Drive',
      description: 'Environmental conservation initiative'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      category: 'workshops',
      title: 'Leadership Workshop',
      description: 'Leadership development session'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
      category: 'community',
      title: 'Blood Donation Camp',
      description: 'Saving lives through blood donation'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      category: 'community',
      title: 'Digital Literacy Program',
      description: 'Teaching computer skills to children'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      category: 'community',
      title: 'Food Distribution',
      description: 'Providing meals to the needy'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      category: 'team',
      title: 'Annual Team Meeting',
      description: 'Club members strategic planning session'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Charter Night Celebration',
      description: 'Annual charter anniversary celebration'
    },
    {
      id: 9,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Event Highlights 2024',
      description: 'Video compilation of our major events'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?auto=format&fit=crop&w=800&q=80',
      category: 'team',
      title: 'New Member Induction',
      description: 'Welcoming new members to our club'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      category: 'workshops',
      title: 'Public Speaking Workshop',
      description: 'Developing communication skills'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      category: 'team',
      title: 'Team Building Activity',
      description: 'Fun activities to strengthen team bonds'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Capturing moments of service, leadership, and fellowship throughout our journey.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter, index) => (
                <AnimationWrapper key={filter.id} delay={index * 50} animation="zoom-in">
                  <Button
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`transition-all duration-300 hover-scale ${
                      activeFilter === filter.id ? 'bg-primary text-white' : 'hover:bg-primary/10'
                    }`}
                  >
                    {filter.label}
                  </Button>
                </AnimationWrapper>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <AnimationWrapper key={item.id} delay={index * 100} animation="bounce-in">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 hover-lift"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover-scale transition-transform duration-300">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          ) : (
            <AnimationWrapper>
              <div className="text-center py-12">
                <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground">Try selecting a different category to view more content.</p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;