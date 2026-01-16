import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin, Phone, Mail, Utensils, Users, Car, CreditCard } from 'lucide-react';
import { ScrollReveal, ParallaxSection } from '../effects';

const THEME = {
  colors: { 
    primary: '#2c1810', 
    accent: '#c4a35a', 
    background: '#faf7f2', 
    text: '#2c1810', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'Playfair Display', Georgia, serif", body: "'Lato', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      title: 'Menu & Dining',
      icon: <Utensils size={24} />,
      color: '#d4621a',
      faqs: [
        {
          question: 'What makes your wood-fired pizzas special?',
          answer: 'Our pizzas are crafted using authentic Neapolitan techniques in our custom wood-fired oven, reaching temperatures of 900°F. We use locally sourced ingredients from Texas farms and import our 00 flour directly from Italy. Each pizza cooks in just 90 seconds, creating that perfect charred crust with a tender, airy interior.'
        },
        {
          question: 'Do you have gluten-free and vegan options?',
          answer: 'Absolutely! We offer gluten-free crusts made from a rice and almond flour blend. For our vegan friends, we have house-made cashew mozzarella and a variety of fresh vegetable toppings. Our Vegan Margherita and Garden Supreme are customer favorites.'
        },
        {
          question: 'Can I customize my pizza with different toppings?',
          answer: 'Of course! Start with any of our signature pizzas and add or remove toppings as you like. We have over 20 fresh toppings including house-made sausage, pepperoni, roasted vegetables, artisanal cheeses, and fresh herbs from our garden.'
        },
        {
          question: 'What other dishes do you serve besides pizza?',
          answer: 'While pizza is our specialty, we also serve fresh salads with locally sourced greens, handmade calzones, antipasto boards, and seasonal pasta dishes. Our Burrata Caprese and Wood-Fired Caesar salad are must-tries!'
        },
        {
          question: 'Do you have a kids menu?',
          answer: 'Yes! Our Little Chefs menu includes 8" personal pizzas (cheese or pepperoni), pasta with marinara, and fresh fruit cups. We also offer smaller portions of our adult dishes. Kids love watching their pizza being made in our open kitchen!'
        }
      ]
    },
    {
      title: 'Ordering & Service',
      icon: <Phone size={24} />,
      color: '#8b5a2b',
      faqs: [
        {
          question: 'Do you take reservations?',
          answer: 'We accept reservations for parties of 4 or more through our website or by calling (469) 555-PIZZA. For smaller groups, we operate on a first-come, first-served basis. Our average wait time is 15-20 minutes during peak hours.'
        },
        {
          question: 'Do you offer delivery and takeout?',
          answer: 'Yes! We offer free delivery within 5 miles of our Prosper location for orders over $25. You can order online, call us, or use popular delivery apps. Takeout orders are typically ready in 15-20 minutes.'
        },
        {
          question: 'What are your hours of operation?',
          answer: 'We\'re open Monday-Thursday 11am-10pm, Friday-Saturday 11am-11pm, and Sunday 12pm-9pm. Our kitchen closes 30 minutes before closing time. We\'re closed on Thanksgiving and Christmas Day.'
        },
        {
          question: 'Do you cater events and parties?',
          answer: 'Absolutely! We cater everything from office lunches to wedding receptions. Our catering includes pizza platters, salad bowls, and appetizer trays. We can even bring our mobile wood-fired oven to your location for special events! Contact us 48 hours in advance.'
        },
        {
          question: 'Can I place large orders for pickup?',
          answer: 'Yes! For orders of 10+ pizzas, please call us directly at least 2 hours in advance. We\'ll have everything ready at your requested time and can provide serving supplies if needed.'
        }
      ]
    },
    {
      title: 'Location & Atmosphere',
      icon: <MapPin size={24} />,
      color: '#228b22',
      faqs: [
        {
          question: 'Where are you located in Prosper?',
          answer: 'We\'re located at 2847 Preston Road in the heart of Prosper, just south of the Prosper Trail crossing. We have ample free parking and are easily accessible from both Preston Road and the Dallas North Tollway.'
        },
        {
          question: 'Do you have outdoor seating?',
          answer: 'Yes! Our beautiful patio features 16 tables under string lights with heat lamps for cooler evenings. It\'s perfect for date nights or family dinners. The patio is dog-friendly too - we love our four-legged customers!'
        },
        {
          question: 'Is your restaurant family-friendly?',
          answer: 'Absolutely! We have high chairs, booster seats, and a kids menu. Children love watching our pizza makers toss dough through our open kitchen window. We also have coloring sheets and crayons to keep little ones entertained.'
        },
        {
          question: 'Do you have private dining options?',
          answer: 'Our back dining room can accommodate up to 35 guests for private events like birthday parties, business meetings, or rehearsal dinners. It includes a dedicated server and customizable menu options.'
        },
        {
          question: 'Is parking available?',
          answer: 'We have a large parking lot with 40+ spaces right in front of our restaurant. Parking is always free, and we\'re fully wheelchair accessible with automatic doors and accessible restrooms.'
        }
      ]
    },
    {
      title: 'Drinks & Specials',
      icon: <CreditCard size={24} />,
      color: '#8b008b',
      faqs: [
        {
          question: 'What drinks do you serve?',
          answer: 'We feature 12 craft beers on tap from local Texas breweries, plus a curated selection of Italian wines including Chianti, Pinot Grigio, and Prosecco. We also serve Italian sodas, fresh lemonades, and specialty coffee drinks.'
        },
        {
          question: 'Do you have daily specials or happy hour?',
          answer: 'Yes! Tuesday is $2 off all pizzas, Wednesday is Wine Wednesday (half-price bottles), and Sunday is Family Day (kids eat free with adult entree). Our happy hour runs Monday-Friday 3-6pm with $1 off beers and appetizers.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, cash, Apple Pay, Google Pay, and contactless payments. For catering orders, we also accept checks with valid ID.'
        },
        {
          question: 'Do you have a loyalty program?',
          answer: 'Our Pie Club loyalty program gives you points for every dollar spent! Earn a free appetizer after your 5th visit and a free pizza after your 10th. Sign up in-store or online to start earning immediately.'
        },
        {
          question: 'Can I purchase gift cards?',
          answer: 'Yes! Gift cards are available in any denomination and can be purchased in-restaurant or online. They never expire and make perfect gifts for the pizza lovers in your life!'
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaq(openFaq === key ? null : key);
  };

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh', fontFamily: THEME.fonts.body }}>
      {/* Hero Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
        height="60vh"
        overlay="linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.8))"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            opacity: 0.95,
            maxWidth: '600px',
            lineHeight: 1.6,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Everything you need to know about our wood-fired pizzas, cozy atmosphere, and family-friendly dining experience
          </p>
        </div>
      </ParallaxSection>

      {/* Quick Contact Bar */}
      <ScrollReveal>
        <div style={{
          backgroundColor: THEME.colors.primary,
          color: 'white',
          padding: '16px 0',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} />
              <span>(469) 555-PIZZA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} />
              <span>2847 Preston Road, Prosper, TX</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} />
              <span>Mon-Thu 11am-10pm | Fri-Sat 11am-11pm | Sun 12pm-9pm</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ Categories */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <ScrollReveal>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Got Questions? We Have Answers!
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              From our wood-fired cooking process to catering options, find everything you need to know about dining with us
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {faqCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(196, 163, 90, 0.1)'
              }}>
                {/* Category Header */}
                <div style={{
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                  color: 'white',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  {category.icon}
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '22px',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    {category.title}
                  </h3>
                </div>

                {/* FAQ Items */}
                <div style={{ padding: '8px 0' }}>
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openFaq === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex} style={{
                        borderBottom: faqIndex < category.faqs.length - 1 ? '1px solid #f0f0f0' : 'none'
                      }}>
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            padding: '20px 24px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: THEME.colors.primary,
                            transition: 'all 0.3s ease',
                            backgroundColor: isOpen ? '#faf7f2' : 'transparent'
                          }}
                          onMouseEnter={(e) => {
                            if (!isOpen) e.target.style.backgroundColor = '#f9f9f9';
                          }}
                          onMouseLeave={(e) => {
                            if (!isOpen) e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span style={{ paddingRight: '16px', lineHeight: 1.4 }}>
                            {faq.question}
                          </span>
                          {isOpen ? 
                            <ChevronUp size={20} style={{ color: THEME.colors.accent, flexShrink: 0 }} /> : 
                            <ChevronDown size={20} style={{ color: '#999', flexShrink: 0 }} />
                          }
                        </button>
                        
                        <div style={{
                          maxHeight: isOpen ? '400px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease'
                        }}>
                          <div style={{
                            padding: '0 24px 20px 24px',
                            color: '#666',
                            lineHeight: 1.6,
                            fontSize: '15px'
                          }}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <ScrollReveal>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '50px 40px',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            border: `3px solid ${THEME.colors.accent}`,
            background: `linear-gradient(135deg, white 0%, ${THEME.colors.background} 100%)`
          }}>
            <div style={{
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '32px',
                color: THEME.colors.primary,
                marginBottom: '16px'
              }}>
                Still Have Questions?
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#666',
                marginBottom: '30px',
                lineHeight: 1.6
              }}>
                Our friendly team is here to help! Give us a call, stop by our restaurant, or send us a message online.
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '30px'
              }}>
                <button style={{
                  backgroundColor: THEME.colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 4px 16px rgba(44, 24, 16, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <Phone size={18} />
                  Call Us Now
                </button>
                
                <button style={{
                  backgroundColor: THEME.colors.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 4px 16px rgba(196, 163, 90, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <Mail size={18} />
                  Email Us
                </button>
                
                <button style={{
                  backgroundColor: '#228b22',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 4px 16px rgba(34, 139, 34, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <Car size={18} />
                  Visit Us
                </button>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
                fontSize: '14px',
                color: '#888'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={14} />
                  <span>Family Owned Since 2024</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Utensils size={14} />
                  <span>Authentic Wood-Fired</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} />
                  <span>Proudly Serving Prosper</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default FaqPage;