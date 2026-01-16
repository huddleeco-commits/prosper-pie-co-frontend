import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone, Star, Users, Pizza, Wine } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, VideoBackground, TiltCard, ParallaxSection } from '../effects';

const THEME = {
  colors: { 
    primary: '#8B4513', 
    accent: '#D2691E', 
    background: '#FFF8DC', 
    text: '#2F1B14', 
    surface: '#FFFAF0' 
  },
  fonts: { 
    heading: "'Playfair Display', Georgia, serif", 
    body: "'Lato', system-ui, sans-serif" 
  },
  spacing: { sectionPadding: '80px' }
};

const HomePage = () => {
  const featuredPizzas = [
    {
      name: "Signature Margherita",
      description: "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil",
      price: "$18",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800"
    },
    {
      name: "Prosper Pepperoni Supreme",
      description: "House-made pepperoni, aged mozzarella, oregano, parmesan",
      price: "$20",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800"
    },
    {
      name: "Wild Mushroom & Truffle",
      description: "Cremini, shiitake, truffle oil, goat cheese, arugula",
      price: "$24",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800"
    }
  ];

  const menuItems = [
    { category: "Wood-Fired Pizzas", items: [
      "Margherita - $18", "Pepperoni Supreme - $20", "Italian Sausage & Peppers - $21",
      "Quattro Formaggi - $22", "Prosciutto & Arugula - $24", "Wild Mushroom Truffle - $24"
    ]},
    { category: "Appetizers", items: [
      "Burrata & Crostini - $14", "Antipasto Platter - $18", "Garlic Bread - $8",
      "Bruschetta Trio - $12", "Arancini Balls - $11", "Italian Meatballs - $13"
    ]},
    { category: "Craft Beverages", items: [
      "Local IPA - $6", "Italian Chianti - $9", "Prosecco - $8",
      "House Sangria - $7", "Italian Sodas - $4", "Espresso - $3"
    ]}
  ];

  const styles = {
    hero: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px',
      color: 'white',
      zIndex: 2
    },
    heroTitle: {
      fontSize: '56px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px',
      textShadow: '0 2px 8px rgba(0,0,0,0.4)',
      lineHeight: 1.1
    },
    heroSubtitle: {
      fontSize: '22px',
      marginBottom: '30px',
      opacity: 0.95,
      textShadow: '0 1px 4px rgba(0,0,0,0.3)',
      fontWeight: 300
    },
    ctaButton: {
      backgroundColor: THEME.colors.accent,
      color: 'white',
      padding: '18px 40px',
      fontSize: '18px',
      fontWeight: 600,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(210,105,30,0.3)'
    },
    statsSection: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    statItem: {
      padding: '20px'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: THEME.colors.accent,
      display: 'block',
      fontFamily: THEME.fonts.heading
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9,
      marginTop: '8px'
    },
    featuredSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: THEME.colors.background,
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: '42px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: THEME.colors.text,
      marginBottom: '60px',
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto 60px'
    },
    pizzaGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pizzaCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    pizzaImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    pizzaContent: {
      padding: '25px'
    },
    pizzaName: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '10px'
    },
    pizzaDescription: {
      fontSize: '16px',
      color: THEME.colors.text,
      lineHeight: 1.6,
      marginBottom: '15px'
    },
    pizzaPrice: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: THEME.colors.accent
    },
    menuSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: 'white'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    menuCategory: {
      backgroundColor: THEME.colors.surface,
      padding: '30px',
      borderRadius: '15px',
      border: `3px solid ${THEME.colors.accent}20`
    },
    categoryTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '20px',
      textAlign: 'center'
    },
    menuList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    menuItem: {
      padding: '12px 0',
      borderBottom: `1px solid ${THEME.colors.accent}20`,
      fontSize: '16px',
      color: THEME.colors.text,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    experienceSection: {
      position: 'relative',
      color: 'white',
      textAlign: 'center'
    },
    experienceContent: {
      position: 'relative',
      zIndex: 2,
      padding: '100px 20px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    experienceTitle: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '25px',
      textShadow: '0 2px 8px rgba(0,0,0,0.4)'
    },
    experienceText: {
      fontSize: '20px',
      lineHeight: 1.6,
      marginBottom: '40px',
      opacity: 0.95,
      textShadow: '0 1px 4px rgba(0,0,0,0.3)'
    },
    locationSection: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    locationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '40px auto 0'
    },
    locationItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    },
    locationIcon: {
      width: '50px',
      height: '50px',
      color: THEME.colors.accent
    },
    locationText: {
      fontSize: '18px',
      lineHeight: 1.6
    },
    ctaSection: {
      backgroundColor: THEME.colors.accent,
      color: 'white',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '42px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px'
    },
    ctaText: {
      fontSize: '20px',
      marginBottom: '40px',
      opacity: 0.95
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: 'white',
      color: THEME.colors.accent,
      padding: '18px 35px',
      fontSize: '18px',
      fontWeight: 600,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '18px 35px',
      fontSize: '18px',
      fontWeight: 600,
      border: '2px solid white',
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div>
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
        posterImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
        overlay="linear-gradient(rgba(43, 24, 16, 0.6), rgba(43, 24, 16, 0.8))"
        height="100vh"
      >
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Authentic Wood-Fired Pizza in the Heart of Prosper</h1>
          <p style={styles.heroSubtitle}>
            Family-owned pizzeria serving Neapolitan-style pizza with locally sourced ingredients and Italian traditions
          </p>
          <Link to="/menu" style={styles.ctaButton}>
            View Our Menu <ArrowRight size={20} />
          </Link>
        </div>
      </VideoBackground>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={12} suffix="+" duration={2} />
              </span>
              <span style={styles.statLabel}>Years of Family Tradition</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={5000} suffix="+" duration={2.5} />
              </span>
              <span style={styles.statLabel}>Happy Customers</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={98} suffix="%" duration={2} />
              </span>
              <span style={styles.statLabel}>Customer Satisfaction</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={25000} suffix="+" duration={3} />
              </span>
              <span style={styles.statLabel}>Pizzas Crafted</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Pizzas */}
      <ScrollReveal>
        <section style={styles.featuredSection}>
          <h2 style={styles.sectionTitle}>Our Signature Creations</h2>
          <p style={styles.sectionSubtitle}>
            Each pizza is hand-stretched and fired in our authentic wood oven at 900°F for the perfect crispy crust
          </p>
          <div style={styles.pizzaGrid}>
            {featuredPizzas.map((pizza, index) => (
              <TiltCard key={index}>
                <div style={styles.pizzaCard}>
                  <img src={pizza.image} alt={pizza.name} style={styles.pizzaImage} />
                  <div style={styles.pizzaContent}>
                    <h3 style={styles.pizzaName}>{pizza.name}</h3>
                    <p style={styles.pizzaDescription}>{pizza.description}</p>
                    <div style={styles.pizzaPrice}>{pizza.price}</div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Menu Preview */}
      <section style={styles.menuSection}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={styles.sectionTitle}>Taste the Difference</h2>
          <p style={styles.sectionSubtitle}>
            From our wood-fired oven to your table - experience authentic Italian flavors
          </p>
        </div>
        <div style={styles.menuGrid}>
          {menuItems.map((category, index) => (
            <div key={index} style={styles.menuCategory}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <ul style={styles.menuList}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={styles.menuItem}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section with Parallax */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920"
        height="70vh"
      >
        <div style={styles.experienceContent}>
          <h2 style={styles.experienceTitle}>More Than Just Pizza</h2>
          <p style={styles.experienceText}>
            Join us on our beautiful outdoor patio for an unforgettable dining experience. 
            Pair your meal with our curated selection of craft beers and Italian wines while 
            enjoying the warm Texas evenings with family and friends.
          </p>
          <Link to="/reservations" style={styles.ctaButton}>
            Make a Reservation <ArrowRight size={20} />
          </Link>
        </div>
      </ParallaxSection>

      {/* Location & Hours */}
      <ScrollReveal>
        <section style={styles.locationSection}>
          <h2 style={styles.sectionTitle}>Visit Us in Prosper</h2>
          <div style={styles.locationGrid}>
            <div style={styles.locationItem}>
              <MapPin style={styles.locationIcon} />
              <div style={styles.locationText}>
                <strong>123 Main Street</strong><br />
                Prosper, TX 75078
              </div>
            </div>
            <div style={styles.locationItem}>
              <Clock style={styles.locationIcon} />
              <div style={styles.locationText}>
                <strong>Hours</strong><br />
                Mon-Thu: 11am-10pm<br />
                Fri-Sat: 11am-11pm<br />
                Sun: 12pm-9pm
              </div>
            </div>
            <div style={styles.locationItem}>
              <Phone style={styles.locationIcon} />
              <div style={styles.locationText}>
                <strong>Call Us</strong><br />
                (972) 555-PIZZA<br />
                Takeout & Delivery Available
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready for Authentic Italian?</h2>
        <p style={styles.ctaText}>
          Experience the warmth of Italian hospitality and the taste of tradition
        </p>
        <div style={styles.ctaButtons}>
          <Link to="/menu" style={styles.primaryButton}>
            Order Online <Pizza size={20} />
          </Link>
          <Link to="/reservations" style={styles.secondaryButton}>
            Book a Table <Users size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;