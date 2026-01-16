import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Star, Heart, Utensils, Wine, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal, TiltCard, ParallaxSection } from '../effects';

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

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  const menuCategories = [
    { id: 'pizzas', name: 'Wood-Fired Pizzas', icon: Utensils },
    { id: 'appetizers', name: 'Appetizers', icon: Star },
    { id: 'salads', name: 'Fresh Salads', icon: Heart },
    { id: 'drinks', name: 'Drinks & Wine', icon: Wine },
    { id: 'desserts', name: 'Dolci', icon: Heart }
  ];

  const menuItems = {
    pizzas: [
      {
        id: 'margherita',
        name: 'Margherita',
        description: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil',
        price: '$16',
        featured: true,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400'
      },
      {
        id: 'pepperoni',
        name: 'Prosper Pepperoni',
        description: 'House-made pepperoni, mozzarella, spicy honey drizzle',
        price: '$19',
        featured: true,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
      },
      {
        id: 'prosciutto',
        name: 'Prosciutto & Arugula',
        description: 'Prosciutto di Parma, fresh arugula, shaved Parmigiano-Reggiano',
        price: '$22',
        featured: false,
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400'
      },
      {
        id: 'quattro',
        name: 'Quattro Stagioni',
        description: 'Artichokes, mushrooms, olives, prosciutto, divided by season',
        price: '$21',
        featured: false,
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400'
      },
      {
        id: 'bianca',
        name: 'Pizza Bianca',
        description: 'Ricotta, mozzarella, garlic, rosemary, truffle oil',
        price: '$20',
        featured: false,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400'
      },
      {
        id: 'diavola',
        name: 'Diavola',
        description: 'Spicy salami, fresh mozzarella, hot peppers, oregano',
        price: '$18',
        featured: false,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
      }
    ],
    appetizers: [
      {
        id: 'bruschetta',
        name: 'Bruschetta Trio',
        description: 'Classic tomato-basil, ricotta-honey, mushroom-truffle',
        price: '$12',
        featured: false,
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400'
      },
      {
        id: 'burrata',
        name: 'Burrata Pugliese',
        description: 'Creamy burrata, heirloom tomatoes, basil oil, aged balsamic',
        price: '$14',
        featured: true,
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400'
      },
      {
        id: 'antipasto',
        name: 'Antipasto Board',
        description: 'Cured meats, artisan cheeses, olives, roasted peppers',
        price: '$18',
        featured: false,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400'
      },
      {
        id: 'arancini',
        name: 'Arancini Siciliani',
        description: 'Crispy risotto balls, meat ragu, peas, marinara sauce',
        price: '$11',
        featured: false,
        image: 'https://images.unsplash.com/photo-1601000938365-18d2b5a3c4f8?w=400'
      }
    ],
    salads: [
      {
        id: 'caesar',
        name: 'Caesar Rustica',
        description: 'Romaine hearts, house-made croutons, aged Parmesan, anchovy dressing',
        price: '$12',
        featured: false,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400'
      },
      {
        id: 'caprese',
        name: 'Caprese Grande',
        description: 'Fresh mozzarella, heirloom tomatoes, basil, balsamic pearls',
        price: '$14',
        featured: false,
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400'
      },
      {
        id: 'arugula',
        name: 'Arugula & Pear',
        description: 'Baby arugula, roasted pears, gorgonzola, candied walnuts',
        price: '$13',
        featured: false,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400'
      }
    ],
    drinks: [
      {
        id: 'chianti',
        name: 'Chianti Classico',
        description: 'House selection from Tuscany',
        price: '$8 / $32',
        featured: false,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400'
      },
      {
        id: 'craft-beer',
        name: 'Local Craft Selection',
        description: 'Rotating taps from Texas breweries',
        price: '$5-7',
        featured: false,
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400'
      },
      {
        id: 'limoncello',
        name: 'Limoncello Spritz',
        description: 'House-made limoncello, prosecco, soda water',
        price: '$9',
        featured: true,
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400'
      },
      {
        id: 'espresso',
        name: 'Espresso Romano',
        description: 'Traditional Italian espresso with lemon twist',
        price: '$3',
        featured: false,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
      }
    ],
    desserts: [
      {
        id: 'tiramisu',
        name: 'Tiramisu della Casa',
        description: 'Traditional recipe with mascarpone, ladyfingers, espresso',
        price: '$8',
        featured: true,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
      },
      {
        id: 'cannoli',
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with sweet ricotta and chocolate chips',
        price: '$7',
        featured: false,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
      },
      {
        id: 'gelato',
        name: 'Artisan Gelato',
        description: 'Daily selection of house-made flavors',
        price: '$6',
        featured: false,
        image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400'
      }
    ]
  };

  const styles = {
    page: {
      fontFamily: THEME.fonts.body,
      lineHeight: 1.6,
      color: THEME.colors.text,
      backgroundColor: THEME.colors.background
    },
    heroSection: {
      height: '70vh',
      background: `linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '30px',
      opacity: 0.95,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroButton: {
      padding: '15px 40px',
      fontSize: '18px',
      backgroundColor: THEME.colors.accent,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    infoBar: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '20px 0',
      textAlign: 'center'
    },
    infoContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      padding: '0 20px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    menuSection: {
      padding: `${THEME.spacing.sectionPadding} 0`,
      maxWidth: '1400px',
      margin: '0 auto'
    },
    categoryNav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '60px',
      padding: '0 20px',
      flexWrap: 'wrap'
    },
    categoryButton: {
      padding: '12px 24px',
      border: `2px solid ${THEME.colors.accent}`,
      backgroundColor: 'transparent',
      color: THEME.colors.primary,
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px'
    },
    categoryButtonActive: {
      backgroundColor: THEME.colors.accent,
      color: 'white'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '30px',
      padding: '0 20px'
    },
    menuCard: {
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    menuCardImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    menuCardContent: {
      padding: '25px'
    },
    menuCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    menuCardName: {
      fontFamily: THEME.fonts.heading,
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: THEME.colors.primary,
      margin: 0
    },
    menuCardPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: THEME.colors.accent,
      minWidth: 'fit-content'
    },
    menuCardDescription: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '15px'
    },
    favoriteButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(255,255,255,0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    featuredBadge: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      backgroundColor: THEME.colors.accent,
      color: 'white',
      padding: '5px 12px',
      borderRadius: '15px',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    orderSection: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '60px 0',
      textAlign: 'center'
    },
    orderContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px'
    },
    orderTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '2.5rem',
      marginBottom: '20px'
    },
    orderButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '30px'
    },
    orderButton: {
      padding: '15px 30px',
      fontSize: '18px',
      fontWeight: 'bold',
      border: '2px solid white',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    orderButtonPrimary: {
      backgroundColor: 'white',
      color: THEME.colors.primary
    },
    orderButtonSecondary: {
      backgroundColor: 'transparent',
      color: 'white'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Authentic Italian Menu</h1>
          <p style={styles.heroSubtitle}>Wood-fired perfection with locally sourced ingredients</p>
          <a href="#menu" style={styles.heroButton}>
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Info Bar */}
      <section style={styles.infoBar}>
        <div style={styles.infoContent}>
          <div style={styles.infoItem}>
            <Clock size={20} />
            <span>Mon-Thu 11am-10pm | Fri-Sat 11am-11pm | Sun 12pm-9pm</span>
          </div>
          <div style={styles.infoItem}>
            <MapPin size={20} />
            <span>123 Main Street, Prosper, TX 75078</span>
          </div>
          <div style={styles.infoItem}>
            <Phone size={20} />
            <span>(469) 555-PIES | Order Online</span>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <ScrollReveal>
        <section id="menu" style={styles.menuSection}>
          {/* Category Navigation */}
          <div style={styles.categoryNav}>
            {menuCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  style={{
                    ...styles.categoryButton,
                    ...(activeCategory === category.id ? styles.categoryButtonActive : {})
                  }}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <IconComponent size={18} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          <div style={styles.menuGrid}>
            {menuItems[activeCategory]?.map((item) => (
              <TiltCard key={item.id}>
                <div style={styles.menuCard}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={styles.menuCardImage}
                  />
                  {item.featured && (
                    <div style={styles.featuredBadge}>
                      Chef's Special
                    </div>
                  )}
                  <button
                    style={styles.favoriteButton}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Heart 
                      size={20} 
                      fill={favorites.has(item.id) ? '#c4a35a' : 'none'}
                      color={favorites.has(item.id) ? '#c4a35a' : '#666'}
                    />
                  </button>
                  <div style={styles.menuCardContent}>
                    <div style={styles.menuCardHeader}>
                      <h3 style={styles.menuCardName}>{item.name}</h3>
                      <span style={styles.menuCardPrice}>{item.price}</span>
                    </div>
                    <p style={styles.menuCardDescription}>{item.description}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Order Section */}
      <section style={styles.orderSection}>
        <div style={styles.orderContent}>
          <h2 style={styles.orderTitle}>Ready to Order?</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '30px' }}>
            Dine-in on our beautiful patio or order for pickup and delivery
          </p>
          <div style={styles.orderButtons}>
            <Link 
              to="/reservations" 
              style={{...styles.orderButton, ...styles.orderButtonPrimary}}
            >
              Make Reservation
            </Link>
            <a 
              href="tel:469-555-7437" 
              style={{...styles.orderButton, ...styles.orderButtonSecondary}}
            >
              Call to Order
            </a>
            <Link 
              to="/contact" 
              style={{...styles.orderButton, ...styles.orderButtonSecondary}}
            >
              Catering Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;