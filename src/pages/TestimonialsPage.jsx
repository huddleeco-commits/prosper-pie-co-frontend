import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowLeft, ArrowRight, Award, Users, Pizza, Heart } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, StaggeredList, ParallaxSection, TiltCard } from '../effects';

const TestimonialsPage = () => {
  const THEME = {
    colors: { 
      primary: '#2c1810', 
      accent: '#c4a35a', 
      background: '#faf7f2', 
      text: '#2c1810', 
      surface: '#f8fafc' 
    },
    fonts: { 
      heading: "'Playfair Display', Georgia, serif", 
      body: "'Lato', system-ui, sans-serif" 
    },
    spacing: { sectionPadding: '80px' }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Local Food Blogger",
      rating: 5,
      text: "Prosper Pie Co. has completely transformed my expectations of pizza in North Texas. Their Neapolitan-style crust is absolutely perfect - crispy edges with that perfect chewy center. The wood-fired flavor is incredible!",
      dish: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1494790108755-2616c041ba41?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Prosper Resident",
      rating: 5,
      text: "This place is our new Friday night tradition! The atmosphere is so warm and welcoming - perfect for our family. Kids love the personal pizzas, and the craft beer selection is fantastic.",
      dish: "Pepperoni Supreme",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      name: "Jennifer Lee",
      role: "Date Night Regular",
      rating: 5,
      text: "The outdoor patio is absolutely magical for date nights. String lights, cozy atmosphere, and the best Italian wine selection in the area. Their prosciutto and arugula pizza is divine!",
      dish: "Prosciutto & Arugula",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Owner",
      rating: 5,
      text: "Ordered catering for our office party and everyone was blown away. The team went above and beyond to make sure everything was perfect. Fresh, hot, and delivered exactly on time!",
      dish: "Catering Order",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Chen",
      role: "Food Enthusiast",
      rating: 5,
      text: "As someone who lived in Italy for two years, I can confidently say this is authentic Neapolitan pizza. The locally sourced ingredients make all the difference - you can taste the quality!",
      dish: "Quattro Stagioni",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Pizza Connoisseur",
      rating: 5,
      text: "I've tried pizza places all over DFW, and Prosper Pie Co. is in a league of its own. The wood-fired oven makes such a difference. Even their simple cheese pizza is perfection.",
      dish: "Classic Cheese",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Amanda Garcia",
      role: "Family Dining",
      rating: 5,
      text: "The small team here remembers our order and always greets us with genuine smiles. It's rare to find this level of personal service. The kids' menu is creative and healthy too!",
      dish: "Family Feast",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Chris Johnson",
      role: "Local Reviewer",
      rating: 5,
      text: "Best value for authentic wood-fired pizza in North Texas. The portions are generous, prices are fair, and the quality is consistently outstanding. Their tiramisu is also incredible!",
      dish: "Meat Lovers & Tiramisu",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    }
  ];

  const stats = [
    { number: 500, suffix: "+ Happy Customers", icon: Users },
    { number: 98, suffix: "% Satisfaction", icon: Heart },
    { number: 15000, suffix: "+ Pizzas Served", icon: Pizza },
    { number: 4, suffix: ".9/5 Average Rating", icon: Star }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        style={{
          color: index < rating ? '#fbbf24' : '#d1d5db',
          fill: index < rating ? '#fbbf24' : 'none',
          marginRight: '2px'
        }}
      />
    ));
  };

  return (
    <div style={{ 
      backgroundColor: THEME.colors.background, 
      minHeight: '100vh',
      fontFamily: THEME.fonts.body 
    }}>
      {/* Hero Section */}
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
        height="70vh"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.7))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <ScrollReveal>
            <div style={{ maxWidth: '800px' }}>
              <Quote size={48} style={{ color: THEME.colors.accent, marginBottom: '20px', opacity: 0.8 }} />
              <h1 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                lineHeight: '1.2'
              }}>
                What Our Community Says
              </h1>
              <p style={{
                fontSize: '20px',
                color: 'white',
                opacity: 0.9,
                marginBottom: '30px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Authentic wood-fired pizza that brings families together in the heart of Prosper
              </p>
              <Link to="/menu" style={{
                display: 'inline-block',
                backgroundColor: THEME.colors.accent,
                color: 'white',
                padding: '15px 40px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                Try Our Pizza Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={{
          padding: '60px 20px',
          backgroundColor: THEME.colors.primary,
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <IconComponent size={40} style={{ color: THEME.colors.accent }} />
                  <div>
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      duration={2}
                      style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: THEME.colors.accent,
                        display: 'block',
                        marginBottom: '5px'
                      }}
                    />
                    <p style={{
                      fontSize: '14px',
                      opacity: 0.8,
                      margin: 0
                    }}>
                      Since Opening in Prosper
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Testimonials */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <Award size={40} style={{ color: THEME.colors.accent, marginBottom: '20px' }} />
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '42px',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Featured Reviews
              </h2>
              <p style={{
                fontSize: '18px',
                color: THEME.colors.text,
                opacity: 0.7,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Hear from our amazing customers about their favorite dishes and experiences
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <TiltCard key={testimonial.id}>
                <div style={{
                  background: 'linear-gradient(135deg, #faf7f2 0%, #f8fafc 100%)',
                  padding: '40px',
                  borderRadius: '15px',
                  border: `2px solid ${THEME.colors.accent}`,
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Quote 
                    size={30} 
                    style={{ 
                      color: THEME.colors.accent, 
                      opacity: 0.3,
                      position: 'absolute',
                      top: '20px',
                      right: '20px'
                    }} 
                  />
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '15px',
                        border: `3px solid ${THEME.colors.accent}`
                      }}
                    />
                    <div>
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: THEME.colors.primary,
                        margin: '0 0 5px 0'
                      }}>
                        {testimonial.name}
                      </h4>
                      <p style={{
                        fontSize: '14px',
                        color: THEME.colors.text,
                        opacity: 0.6,
                        margin: 0
                      }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '20px',
                    gap: '10px'
                  }}>
                    <div style={{ display: 'flex' }}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <span style={{
                      fontSize: '14px',
                      color: THEME.colors.accent,
                      fontWeight: '600',
                      backgroundColor: 'rgba(196, 163, 90, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {testimonial.dish}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: THEME.colors.text,
                    flex: 1,
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "{testimonial.text}"
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '36px',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                More Happy Customers
              </h2>
              <p style={{
                fontSize: '18px',
                color: THEME.colors.text,
                opacity: 0.7
              }}>
                Every review tells the story of our commitment to quality
              </p>
            </div>
          </ScrollReveal>

          <StaggeredList
            items={testimonials.filter(t => !t.featured)}
            renderItem={(testimonial) => (
              <div key={testimonial.id} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(44, 24, 16, 0.1)',
                border: '1px solid rgba(196, 163, 90, 0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '12px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: THEME.colors.primary,
                      margin: '0 0 3px 0'
                    }}>
                      {testimonial.name}
                    </h4>
                    <div style={{ display: 'flex' }}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: THEME.colors.text,
                  flex: 1,
                  margin: '0 0 15px 0'
                }}>
                  "{testimonial.text}"
                </p>

                <div style={{
                  fontSize: '13px',
                  color: THEME.colors.accent,
                  fontWeight: '600',
                  borderTop: '1px solid rgba(196, 163, 90, 0.2)',
                  paddingTop: '10px'
                }}>
                  Favorite: {testimonial.dish}
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #2c1810 0%, #3d2317 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Pizza size={60} style={{ color: THEME.colors.accent, marginBottom: '30px' }} />
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '40px',
              marginBottom: '20px',
              color: 'white'
            }}>
              Ready to Create Your Own Story?
            </h2>
            <p style={{
              fontSize: '18px',
              opacity: 0.9,
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Join the hundreds of families who've made Prosper Pie Co. their go-to spot for 
              authentic wood-fired pizza and memorable dining experiences.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center'
            }}>
              <Link to="/menu" style={{
                backgroundColor: THEME.colors.accent,
                color: 'white',
                padding: '18px 50px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform 0.3s ease'
              }}>
                View Our Menu
                <ArrowRight size={20} />
              </Link>
              <p style={{
                fontSize: '16px',
                opacity: 0.7,
                margin: 0
              }}>
                📍 Located in the heart of Prosper, TX | Dine-in • Takeout • Delivery
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default TestimonialsPage;