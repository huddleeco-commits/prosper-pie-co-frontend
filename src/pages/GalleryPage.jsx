import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Star, Heart, Eye } from 'lucide-react';
import { ScrollReveal, ParallaxSection, TiltCard } from '../effects';

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

const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      title: 'Signature Wood-Fired Margherita',
      category: 'Neapolitan Classics',
      description: 'San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil',
      featured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
      title: 'Prosper Special Pepperoni',
      category: 'House Specialties',
      description: 'Premium pepperoni, mozzarella, oregano, our signature red sauce',
      featured: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
      title: 'Quattro Formaggi',
      category: 'Gourmet Selection',
      description: 'Four cheese blend: mozzarella, gorgonzola, parmesan, ricotta'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      title: 'Prosciutto & Arugula',
      category: 'Gourmet Selection',
      description: 'Prosciutto di Parma, fresh arugula, cherry tomatoes, shaved parmesan'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800',
      title: 'Tuscan Garden',
      category: 'Fresh & Light',
      description: 'Roasted vegetables, goat cheese, balsamic glaze, fresh herbs'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=800',
      title: 'Spicy Diavola',
      category: 'Bold Flavors',
      description: 'Spicy salami, jalapeños, red pepper flakes, mozzarella'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800',
      title: 'BBQ Brisket Supreme',
      category: 'Texas Inspired',
      description: 'Local smoked brisket, BBQ sauce, red onions, cilantro'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800',
      title: 'Mediterranean Delight',
      category: 'International',
      description: 'Olives, feta, sun-dried tomatoes, spinach, olive tapenade'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800',
      title: 'Truffle Mushroom',
      category: 'Premium Selection',
      description: 'Wild mushrooms, truffle oil, fontina cheese, fresh thyme'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800',
      title: 'Buffalo Chicken Ranch',
      category: 'American Favorites',
      description: 'Buffalo chicken, ranch drizzle, celery, blue cheese crumbles'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
      title: 'Calzone Classico',
      category: 'Folded Favorites',
      description: 'Ricotta, mozzarella, Italian sausage, marinara on the side'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800',
      title: 'Caesar Salad Supreme',
      category: 'Fresh Salads',
      description: 'Romaine, parmesan, croutons, our house-made Caesar dressing'
    }
  ];

  const categories = ['All', 'House Specialties', 'Neapolitan Classics', 'Gourmet Selection', 'Fresh & Light', 'Bold Flavors', 'Texas Inspired'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const featuredItems = galleryItems.filter(item => item.featured);

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh', fontFamily: THEME.fonts.body }}>
      {/* Hero Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
        height="60vh"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(44, 24, 16, 0.75), rgba(44, 24, 16, 0.85))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px'
        }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Our Culinary Gallery
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              opacity: 0.95,
              marginBottom: '30px',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              Handcrafted wood-fired pizzas made with locally sourced ingredients and traditional Neapolitan techniques
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Items Showcase */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: THEME.colors.primary,
              marginBottom: '20px'
            }}>
              Signature Creations
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              backgroundColor: THEME.colors.accent,
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Our most beloved pizzas, perfected through years of passion and dedication
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {featuredItems.map((item, index) => (
              <TiltCard key={item.id}>
                <div style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: THEME.colors.accent,
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    zIndex: 2,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Featured
                  </div>
                  
                  <div style={{
                    height: '280px',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      padding: '40px 30px 30px',
                      color: 'white'
                    }}>
                      <h3 style={{
                        fontFamily: THEME.fonts.heading,
                        fontSize: '24px',
                        marginBottom: '8px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        opacity: 0.9,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '25px 30px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '15px',
                      fontSize: '14px',
                      color: '#666'
                    }}>
                      <span style={{
                        backgroundColor: THEME.colors.surface,
                        padding: '6px 12px',
                        borderRadius: '12px',
                        color: THEME.colors.primary
                      }}>
                        {item.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Category Filter */}
      <section style={{
        padding: '40px 20px',
        backgroundColor: 'white',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '25px',
                  border: selectedCategory === category ? `2px solid ${THEME.colors.accent}` : '2px solid transparent',
                  backgroundColor: selectedCategory === category ? THEME.colors.accent : THEME.colors.surface,
                  color: selectedCategory === category ? 'white' : THEME.colors.text,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = '#f0f0f0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = THEME.colors.surface;
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: hoveredItem === item.id ? '0 25px 50px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  transform: hoveredItem === item.id ? 'translateY(-8px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={{
                  height: '240px',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(44, 24, 16, 0.8)',
                    opacity: hoveredItem === item.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <Eye size={32} style={{ marginBottom: '8px' }} />
                      <p style={{ fontSize: '16px', fontWeight: '500' }}>View Details</p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: THEME.colors.primary
                  }}>
                    {item.category}
                  </div>
                </div>

                <div style={{ padding: '25px 20px' }}>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '20px',
                    color: THEME.colors.primary,
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.5',
                    marginBottom: '15px'
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '15px',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                        <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#888' }}>4.9</span>
                    </div>

                    <Heart 
                      size={18} 
                      style={{ 
                        color: '#ddd',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = THEME.colors.accent}
                      onMouseLeave={(e) => e.target.style.color = '#ddd'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action Section */}
      <section style={{
        backgroundColor: THEME.colors.primary,
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(28px, 4vw, 42px)',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            Ready to Experience These Flavors?
          </h2>
          <p style={{
            fontSize: '18px',
            opacity: 0.9,
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Visit us today and taste the difference that authentic wood-fired cooking and premium ingredients make.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: THEME.colors.accent,
                color: 'white',
                padding: '16px 32px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                View Full Menu
                <ArrowRight size={16} />
              </button>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '30px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              >
                <MapPin size={16} />
                Visit Us
              </button>
            </Link>
          </div>

          <div style={{
            marginTop: '40px',
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            gap: '30px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <MapPin size={20} style={{ color: THEME.colors.accent }} />
              <span style={{ fontSize: '16px' }}>123 Main Street, Prosper, TX</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Clock size={20} style={{ color: THEME.colors.accent }} />
              <span style={{ fontSize: '16px' }}>Mon-Thu: 11am-10pm | Fri-Sat: 11am-11pm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;