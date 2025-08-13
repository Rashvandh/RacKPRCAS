import { useEffect } from 'react';
import { Users, Calendar, Award, ArrowRight, Heart, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import AnimationWrapper from '@/components/AnimationWrapper';
import heroBanner from '../assets/hero-banner.jpg';
import communityService from '../assets/community-service.jpg';
import rotaryLogos from '../assets/Rotary Logo_UFG_Azure.png';
import kprLogo from '../assets/kprcas.png';
import clubLogo from '../assets/club-logo.png';
const Home = () => {
  useEffect(() => {
    document.title = 'Rotaract Club of KPRCAS | Youth Leadership & Service';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Rotaract Club of KPRCAS: Empowering youth through service, leadership, and fellowship. Discover events, join our club, and make an impact.');
  }, []);
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Lives Impacted', value: '1000+' },
  ];

  const features = [
    {
      icon: Target,
      title: 'Leadership Development',
      description: 'Empowering young leaders through hands-on experience and mentorship programs.',
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Making a positive impact in our local community through various service projects.',
    },
    {
      icon: Users,
      title: 'Professional Networking',
      description: 'Building lasting connections with like-minded individuals and industry professionals.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 text-center text-white container-custom">
          <AnimationWrapper className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Rotaract Club
              <span className="block text-gold">of KPRCAS</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering youth through service, leadership, and fellowship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/join">
                <Button size="lg" className="btn-primary group">
                  Join Our Club
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  View Events
                </Button>
              </Link>
            </div>
          </AnimationWrapper>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-gold/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Official Logos Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              <AnimationWrapper delay={100}>
                <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 w-full max-w-sm">
                  <img
                    src={rotaryLogos}
                    alt="Rotary & Rotaract District 3206 Logos"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </AnimationWrapper>
              <AnimationWrapper delay={200}>
                <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 w-full max-w-sm">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="w-32">
                      <img
                        src={kprLogo}
                        alt="KPR College Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="w-32">
                      <img
                        src={clubLogo}
                        alt="Rotaract Club Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimationWrapper key={stat.label} delay={index * 200}>
                  <Card className="card-hover text-center bg-gradient-to-br from-white to-gray-50 border-none shadow-soft">
                    <CardContent className="p-6">
                      <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Building Leaders,
                  <span className="text-primary"> Serving Communities</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Rotaract Club of KPRCAS is a vibrant community of young leaders 
                  dedicated to making a positive impact through service, fellowship, and 
                  professional development. We believe in the power of youth to create 
                  meaningful change in our world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 text-primary" />
                    <span><strong>Vision:</strong> Creating leaders who serve with purpose</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span><strong>Mission:</strong> Empowering youth through service and leadership</span>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="btn-primary group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300} animation="slide-in-right">
              <div className="relative">
                <img
                  src={communityService}
                  alt="Community Service showcasing Rotaract KPRCAS members"
                  className="rounded-2xl shadow-strong w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container-custom">
          <AnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join <span className="text-primary">Rotaract?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the opportunities that await you as a member of our dynamic community
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimationWrapper key={feature.title} delay={index * 200} animation="bounce-in">
                <Card className="card-hover h-full bg-white border-none shadow-soft">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="container-custom text-center">
          <AnimationWrapper>
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in creating positive change in our community and developing 
                your leadership potential
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Become a Member
                  </Button>
                </Link>
                <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;