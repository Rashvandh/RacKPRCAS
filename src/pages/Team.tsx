import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import AnimationWrapper from '../components/AnimationWrapper';

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

const Team = () => {
  const [showPresidentDetails, setShowPresidentDetails] = useState(false);
  const [showVicePresidentDetails, setShowVicePresidentDetails] = useState(false);
  const [showSecretaryDetails, setShowSecretaryDetails] = useState(false);
  const [showJointSecretaryDetails, setShowJointSecretaryDetails] = useState(false);
  const [showPastPresidentDetails, setShowPastPresidentDetails] = useState(false);
  const [showStaffCoordinatorDetails, setShowStaffCoordinatorDetails] = useState(false);
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rtr. Angala Pariwar',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/angala pariwar.jpg',
    },
    {
      id: 2,
      name: 'Rtr. Brinda',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Brinda.jpg',
    },
    {
      id: 3,
      name: 'Rtr. Drashan',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Darshan.jpg',
    },
    {
      id: 4,
      name: 'Rtr. Deepana',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/deepana.jpg',
    },
    {
      id: 5,
      name: 'Rtr. Hari Priya',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Hari Priya.Y .jpg',
    },
    {
      id: 6,
      name: 'Rtr. Hari Priya G',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Hari PriyaG .jpg',
    },
    {
      id: 7 ,
      name: 'Rtr. Jairam',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Jairam.jpg',
    },
    {
      id: 8,
      name: 'Rtr. Priyanka',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/JK priyanka .jpg',
    },
    {
      id: 9,
      name: 'Rtr. Lohit',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/lohit.jpeg',
    },
    {
      id: 10,
      name: 'Rtr. Mirthal Sri ',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/mirthal sri .jpg',
    },
    {
      id: 11,
      name: 'Rtr. Mirthural',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/mirthural.jpg',
    },
    {
      id: 12,
      name: 'Rtr. Mounish',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/mounish.jpg',
    },
    {
      id: 13,
      name: 'Rtr. Niswetha',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/niswetha.jpg',
    },
    {
      id: 14,
      name: 'Rtr. Pavithra',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Pavithra.jpg',
    },
    {
      id: 15,
      name: 'Rtr. Prabha',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Prabha.jpg',
    },
    {
      id: 16,
      name: 'Rtr. Prateesh',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/prateesh.jpg',
    },  
    {
      id: 17,
      name: 'Rtr. Praveen ',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/praveen .jpeg',
    },  
    {
      id: 18,
      name: 'Rtr. Rithanaya ',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/rithanaya.jpg',
    },  
    {
      id: 19,
      name: 'Rtr. Sanjay',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Sanjay.jpg',
    },  
    {
      id: 20,
      name: 'Rtr. Sivaharini',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/sivaharini.jpg',
    },  
    {
      id: 21,
      name: 'Rtr. Srinith',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Srinithjpg.jpg',
    },  
    {
      id: 22,
      name: 'Rtr. Srisakti',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/srisakti.jpg',
    },  
    {
      id: 23,
      name: 'Rtr. Surya Prakash',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/Surya  Prakash.jpg',
    },
    {
      id: 24,
      name: 'Rtr. Vallamai',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/vallamai.jpg',
    },
    {
      id: 25,
      name: 'Rtr. Vishnu Prasad',
      image: '/src/assets/drive-download-20250813T152136Z-1-001/vishnu prasad.jpg',
    }
  ];
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dedicated leaders and passionate members working together to create 
                positive change in our community.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-primary">Chairman</span>
              </h2>
            </div>
          </AnimationWrapper>

          {/* Chairman Card */}
          <div className="max-w-4xl mx-auto">
            <AnimationWrapper delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="\src\assets\Head\Chairman sir.png" 
                        alt="Chairman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Dr. K.P. Ramasamy
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Chairman
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        KPR Group of Institutions
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm text-center">
                      Guiding the institution with visionary leadership and unwavering commitment to excellence in education.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-primary">Principal</span>
              </h2>
            </div>
          </AnimationWrapper>

          {/* Principal Card */}
          <div className="max-w-4xl mx-auto">
            <AnimationWrapper delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="src\assets\Head\principal mam.jpg" 
                        alt="Principal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Dr. Geetha .P
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Principal
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        KPRCAS
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm text-center">
                      Leading the institution with vision and dedication, our Principal provides invaluable support to all student initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Staff Coordinator Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Staff <span className="text-primary">Coordinator</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dedicated staff coordinator who provides guidance and support to our club activities.
              </p>
            </div>
          </AnimationWrapper>

          {/* Staff Coordinator Card */}
          <div className="max-w-4xl mx-auto">
            <AnimationWrapper delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Staff Coordinator Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="\src\assets\staff coordinator.jpg" 
                        alt="Staff Coordinator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Staff Coordinator Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Dr. Vinayak SP
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Head Staff Coordinator
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Faculty Advisor
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      As the Staff Coordinator, it has been an honor to support and guide our Rotaract Club through the Roar year 2024-25. 
                      I have always believed in the incredible potential of student leadership, and it has been truly inspiring to 
                      witness the enthusiasm, creativity, and commitment of our members.
                    </p>
                    
                    {showStaffCoordinatorDetails && (
                      <>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                          My role has been to provide steady support, help navigate administrative processes, and encourage bold 
                          ideas that can make a meaningful impact. Seeing the club's revival and growth has been one of the most 
                          rewarding experiences in my career.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                          I am proud of how the team has taken ownership and demonstrated resilience in the face of challenges. 
                          Together, we have created a culture of trust and collaboration that will continue to strengthen the club's future. 
                          I look forward to continuing this journey and supporting our members as they lead with passion and purpose.
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Contributions</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Guided the club through the transformative Roar year 2024-25</li>
                            <li>• Provided steady administrative support and mentorship</li>
                            <li>• Encouraged innovative ideas and bold initiatives</li>
                            <li>• Fostered a culture of trust and collaboration</li>
                            <li>• Supported student leadership development</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Vision for the Club</h5>
                          <p className="text-gray-700 text-sm">
                            Committed to continuing the journey of supporting passionate student leaders who drive meaningful change 
                            in our community through service, innovation, and collaborative leadership.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowStaffCoordinatorDetails(!showStaffCoordinatorDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showStaffCoordinatorDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-primary">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet the dedicated individuals who lead our club with passion and commitment.
              </p>
            </div>
          </AnimationWrapper>
              
          {/* Team Members Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Rtr. Sanjith Kumar Sri Krishnan - President */}
            <AnimationWrapper delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Team Member Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="../src/assets/team-member-sanjith.jpg" 
                        alt="Rtr. Sanjith Kumar Sri Krishnan - President"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Rtr. Sanjith Kumar Sri Krishnan
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        President
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Since 2024
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      A dedicated and dynamic member of Rotary since 2021, Rtr. Sanjith Kumar Sri Krishnan has made a significant 
                      impact through his leadership and passion for service.
                    </p>
                    
                    {showPresidentDetails && (
                      <>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Early Achievements</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Sergeant-at-Arms, Interact Club of National Model (2021-2022)</li>
                            <li>• Advisor and Deputy Secretary, Interact Club of National Model (2022-2023)</li>
                            <li>• Recipient of the Best Interactor Award</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Impactful Contributions</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Conducted over 40 dynamic events during school days, positively impacting society</li>
                            <li>• Supported the club as All Avenue Chair, setting and planning events as a Rotaractor (2024-2025)</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Leadership Roles</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Secretary Administration (2024-2025): Led administrative aspects, framed bylaws, and structured club functions</li>
                            <li>• Led a team of 100 members</li>
                            <li>• Best Secretary (2024-2025): Achieved outstanding membership growth and mentored the club for wholesome success</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Transformational Impact</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Transformed the club from active to hyper-active, earning a Rolling Trophy with 10+ recognitions</li>
                            <li>• Built a strong foundation for legacy and attracted potential Rotaractors</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Future Vision</h5>
                          <p className="text-gray-700 text-sm">
                            Poised to lead the club in the new district with a clear vision and framework, set to unleash the legacy in 2025-2026.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowPresidentDetails(!showPresidentDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showPresidentDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Awards and Achievements */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600 text-xs">🏆</span>
                        <span className="text-xs text-gray-700">Best Secretary 2024-2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-xs">⭐</span>
                        <span className="text-xs text-gray-700">Best Interactor Award</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">🎯</span>
                        <span className="text-xs text-gray-700">Rolling Trophy with 10+ Recognition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-xs">👥</span>
                        <span className="text-xs text-gray-700">Led Team of 100 Members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 text-xs">🚀</span>
                        <span className="text-xs text-gray-700">40+ Impactful Events Conducted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Rtr.Saran G - Vice President */}
            <AnimationWrapper delay={200}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Team Member Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="/src/assets/team-member-saran.jpg" 
                        alt="Rtr.Saran G - Vice President"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Rtr.Saran G
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Vice President
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Since 2022
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      Rtr.Saran G is serving the Rotaract Club of KPRCAS since 2022. This is his 4th year of Rotaraction. 
                      He served in the Club as Community Service Chair, The Rotary Foundation Chair, District Priority 
                      Projects Chair in the past three years.
                    </p>
                    
                    {showVicePresidentDetails && (
                      <>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                          Currently, he serves as Vice President with 100% commitment. As the DPP Chair he organized events 
                          under the Theme BLOOMING in an admirable way and won the Outstanding DPP Performance Award from 
                          the District and the our event BLOOMING BLOSSOM 🌸 was also named as the BEST PROJECT for the Year.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                          He had also received Radiant Circle of Academic Excellence Award from the District for his exemplary 
                          Performance in Rotaract as well as Academics.
                        </p>
                        {/* Awards and Achievements */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Awards & Achievements</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600 text-xs">🏆</span>
                              <span className="text-xs text-gray-700">Outstanding DPP Performance Award</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600 text-xs">🌸</span>
                              <span className="text-xs text-gray-700">BEST PROJECT - BLOOMING BLOSSOM</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600 text-xs">⭐</span>
                              <span className="text-xs text-gray-700">Radiant Circle of Academic Excellence Award</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowVicePresidentDetails(!showVicePresidentDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showVicePresidentDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Awards and Achievements */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Awards & Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600 text-xs">🏆</span>
                        <span className="text-xs text-gray-700">Outstanding DPP Performance Award</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-xs">🌸</span>
                        <span className="text-xs text-gray-700">BEST PROJECT - BLOOMING BLOSSOM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">⭐</span>
                        <span className="text-xs text-gray-700">Radiant Circle of Academic Excellence Award</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Rtr. Haripriya - Secretary Administration */}
            <AnimationWrapper delay={300}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Team Member Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="/src/assets/team-member-haripriya.jpg" 
                        alt="Rtr. Haripriya - Secretary Administration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Rtr. Haripriya
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Secretary Administration
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Vision Year
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      A Visionary Leader, A Creative Soul. Rtr. Haripriya has been a defining presence in the Roar Year of the 
                      Rotaract Club of KPRCAS, embodying quiet strength and impactful leadership.
                    </p>
                    
                    {showSecretaryDetails && (
                      <>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Leadership Journey</h5>
                          <p className="text-gray-700 text-sm mb-3">
                            As Vice President, she played a crucial role in club operations—coordinating with the board, tracking events, 
                            resolving concerns, and maintaining seamless communication. Her calm, detail-oriented approach made her a strong 
                            support system to the President and a dependable force within the team.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h5>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Event Chairperson of "Blooming Blossom" - Major District Priority Project</li>
                            <li>• Impacted over 100 beneficiaries across Coimbatore and Tiruppur</li>
                            <li>• Earned esteemed Roar Recognition from the District</li>
                            <li>• Editor of the Roar Year Scrapbook - Creative documentation</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">District Representation</h5>
                          <p className="text-gray-700 text-sm">
                            Actively represented at district-level events such as Tanzanite, XVII District Conference, Rotabuzz, 
                            Rotamind, the Incoming IDYE, and the District Awards. Her consistent presence reflects her dedication 
                            to Rotaract's larger purpose and enthusiasm to grow through collaboration.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Current Role</h5>
                          <p className="text-gray-700 text-sm">
                            Continuing her commitment to service as Secretary - Administration for the Vision Year. With her proven 
                            leadership, creative capabilities, and unwavering dedication, she is all set to contribute with renewed 
                            purpose, adding value to every initiative she touches and leading with both heart and vision.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowSecretaryDetails(!showSecretaryDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showSecretaryDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Awards and Achievements */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600 text-xs">🏆</span>
                        <span className="text-xs text-gray-700">Roar Recognition from District</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-xs">🌸</span>
                        <span className="text-xs text-gray-700">Blooming Blossom Project Lead</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">📖</span>
                        <span className="text-xs text-gray-700">Roar Year Scrapbook Editor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-xs">👥</span>
                        <span className="text-xs text-gray-700">100+ Beneficiaries Impacted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 text-xs">🎯</span>
                        <span className="text-xs text-gray-700">District Events Representative</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Rtr. Netra - Joint Secretary */}
            <AnimationWrapper delay={400}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Team Member Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="/src/assets/team-member-netra.jpg" 
                        alt="Rtr. Netra - Joint Secretary"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Rtr. Netra
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Joint Secretary
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        3rd Year
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      Netra, the Joint Secretary of the Rotaract Club of KPRCAS, has been a dynamic and committed member of the club, 
                      showcasing exceptional leadership and a deep passion for community service.
                    </p>
                    
                    {showJointSecretaryDetails && (
                      <>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Leadership Journey</h5>
                          <p className="text-gray-700 text-sm mb-3">
                            Throughout her journey, she has actively contributed to the growth and visibility of the club by taking part 
                            in impactful initiatives and fostering youth engagement. Her consistent dedication and ability to work 
                            collaboratively have made her a respected and inspiring figure within the Rotaract community.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">World Record Achievement</h5>
                          <p className="text-gray-700 text-sm mb-3">
                            One of Netra's most remarkable achievements is her contribution to a world record in Bharathanatyam, 
                            performed with 1,200 students through the Rotaract Club. This extraordinary feat stands as a symbol of 
                            cultural pride, discipline, and unity, and reflects her dedication to preserving and promoting India's 
                            classical art forms.
                          </p>
                          <p className="text-gray-700 text-sm mb-3">
                            Her efforts played a key role in coordinating and bringing together a large group of performers, making 
                            the event a memorable moment in both club and cultural history.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Current Role & Growth</h5>
                          <p className="text-gray-700 text-sm">
                            Now in her third year with the Rotaract Club, Netra continues to grow as a leader and changemaker. 
                            Her journey reflects a perfect balance of passion, cultural commitment, and organizational skills.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowJointSecretaryDetails(!showJointSecretaryDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showJointSecretaryDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Awards and Achievements */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600 text-xs">🏆</span>
                        <span className="text-xs text-gray-700">World Record - Bharathanatyam</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-xs">🎭</span>
                        <span className="text-xs text-gray-700">1,200 Students Coordinated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">⭐</span>
                        <span className="text-xs text-gray-700">Cultural Preservation Champion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-xs">👥</span>
                        <span className="text-xs text-gray-700">Youth Engagement Leader</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 text-xs">🚀</span>
                        <span className="text-xs text-gray-700">3rd Year Dedicated Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Rtr. Sanjay Harish - Past President */}
            <AnimationWrapper delay={500}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-8">
                  {/* Team Member Photo */}
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105">
                      <img 
                        src="/src/assets/team-member-sanjay.jpg" 
                        alt="Rtr. Sanjay Harish - Past President"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Rtr. Sanjay Harish
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Past President
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Mentor
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      Rtr. Sanjay Harish, Past President of the Rotaract Club of KPRCAS, is known for his exceptional leadership, 
                      vision, and unwavering dedication to the ideals of Rotaract.
                    </p>
                    
                    {showPastPresidentDetails && (
                      <>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Presidential Leadership</h5>
                          <p className="text-gray-700 text-sm mb-3">
                            During his tenure, he played a pivotal role in elevating the club's presence through innovative projects, 
                            impactful community service, and strong team-building initiatives. Under his guidance, the club reached 
                            new milestones and gained recognition for its vibrant activities and strong member engagement.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Leadership Philosophy</h5>
                          <p className="text-gray-700 text-sm mb-3">
                            Sanjay's presidency was marked by a focus on inclusivity, professionalism, and service excellence. 
                            He encouraged members to step out of their comfort zones and take up responsibilities that would develop 
                            both personal and professional skills.
                          </p>
                          <p className="text-gray-700 text-sm mb-3">
                            His approachable nature and commitment to teamwork created a motivating environment for everyone involved.
                            He also encouraged members to take up responsibilities that would develop both personal and professional skills.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Ongoing Impact</h5>
                          <p className="text-gray-700 text-sm">
                            Even after completing his term, Sanjay Harish continues to be an active mentor and guiding force within 
                            the club. His journey stands as an inspiration for future leaders, reflecting the spirit of service above 
                            self and the lasting impact of strong Rotaract leadership.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div className="text-center mt-4">
                      <Button 
                        onClick={() => setShowPastPresidentDetails(!showPastPresidentDetails)}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {showPastPresidentDetails ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Awards and Achievements */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600 text-xs">🏆</span>
                        <span className="text-xs text-gray-700">Exceptional Leadership</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-xs">🎯</span>
                        <span className="text-xs text-gray-700">Innovative Projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">⭐</span>
                        <span className="text-xs text-gray-700">Service Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-xs">👥</span>
                        <span className="text-xs text-gray-700">Team Building Expert</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 text-xs">🚀</span>
                        <span className="text-xs text-gray-700">Active Mentor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Team member section */}
          <AnimationWrapper delay={600}>
            <div className="text-center mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {teamMembers.map((member, index) => (
                  <AnimationWrapper 
                    key={member.id} 
                    delay={0.1 * (index + 1)}
                    className="h-full"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                      <div className="p-6 text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                        <div className="flex justify-center space-x-3">
                        </div>
                      </div>
                    </Card>
                  </AnimationWrapper>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Our <span className="text-primary">Team</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Here we have our dedicated team members who are working hard to make our club a success.
              </p>
              <Button className="btn-primary mb-12">
                Join Our Team
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Team;