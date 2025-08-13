import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimationWrapper from '@/components/AnimationWrapper';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Camp',
      date: '2024-03-15',
      time: '9:00 AM - 4:00 PM',
      location: 'KPRCAS Campus',
      description: 'Free health checkups and awareness program for the local community.',
      category: 'health',
      participants: 150,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Environmental Awareness Drive',
      date: '2024-03-22',
      time: '7:00 AM - 11:00 AM',
      location: 'Marina Beach',
      description: 'Beach cleanup and tree plantation initiative.',
      category: 'environment',
      participants: 200,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Leadership Development Workshop',
      date: '2024-03-30',
      time: '10:00 AM - 5:00 PM',
      location: 'College Auditorium',
      description: 'Interactive workshop on leadership skills and team management.',
      category: 'education',
      participants: 80,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Blood Donation Camp',
      date: '2024-02-14',
      time: '9:00 AM - 3:00 PM',
      location: 'KPRCAS Campus',
      description: 'Successfully collected 150 units of blood for local hospitals.',
      category: 'health',
      participants: 200,
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Digital Literacy Program',
      date: '2024-01-20',
      time: '2:00 PM - 6:00 PM',
      location: 'Government School',
      description: 'Teaching basic computer skills to underprivileged children.',
      category: 'education',
      participants: 120,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Food Distribution Drive',
      date: '2024-01-15',
      time: '12:00 PM - 4:00 PM',
      location: 'Various Locations',
      description: 'Distributed 500+ meal packets to homeless individuals.',
      category: 'social',
      participants: 100,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'health', label: 'Health' },
    { id: 'environment', label: 'Environment' },
    { id: 'education', label: 'Education' },
    { id: 'social', label: 'Social' }
  ];

  const categoryColors = {
    health: 'bg-red-100 text-red-800',
    environment: 'bg-green-100 text-green-800',
    education: 'bg-blue-100 text-blue-800',
    social: 'bg-purple-100 text-purple-800'
  };

  const filteredUpcoming = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  const filteredPast = activeFilter === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.category === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in our mission to serve the community and develop leadership skills 
                through meaningful events and initiatives.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter, index) => (
                <AnimationWrapper key={filter.id} delay={index * 100} animation="zoom-in">
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

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </AnimationWrapper>

          {filteredUpcoming.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcoming.map((event, index) => (
                <AnimationWrapper key={event.id} delay={index * 200} animation="bounce-in">
                  <Card className="card-hover h-full overflow-hidden bg-white border-none shadow-soft hover-lift">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 animate-slide-in-left">
                        <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} hover-scale transition-transform duration-300 animate-pulse-glow`}>
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.participants} expected participants
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        {event.description}
                      </p>
                      <Button className="w-full mt-4 btn-primary">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          ) : (
            <AnimationWrapper>
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No upcoming events found</h3>
                <p className="text-muted-foreground">Check back later for new events in this category.</p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Past <span className="text-primary">Events</span>
            </h2>
          </AnimationWrapper>

          {filteredPast.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPast.map((event, index) => (
                <AnimationWrapper key={event.id} delay={index * 200} animation="slide-in-up">
                  <Card className="card-hover h-full overflow-hidden bg-white border-none shadow-soft hover-lift">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 animate-slide-in-left">
                        <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} hover-scale transition-transform duration-300 animate-pulse-glow`}>
                          {event.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 animate-slide-in-right">
                        <Badge variant="secondary" className="bg-black/60 text-white hover-scale transition-transform duration-300 animate-heartbeat">
                          Completed
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.participants} participants
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          ) : (
            <AnimationWrapper>
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No past events found</h3>
                <p className="text-muted-foreground">No events in this category have been completed yet.</p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;