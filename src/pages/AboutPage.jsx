import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard } from '../effects';
import { Heart, Users, Award, Flame, MapPin, Clock, Phone } from 'lucide-react';

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

const AboutPage = () => {
  const styles = {
    hero: {
      position: 'relative',
      height: '70vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#ffffff'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.8))',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      marginBottom: '20px',
      fontWeight: 400,
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.95,
      fontFamily: THEME.fonts.body,
      marginBottom: '30px',
      lineHeight: 1.4
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    missionSection: {
      background: THEME.colors.background,
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    missionQuote: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      color: THEME.colors.primary,
      lineHeight: 1.4,
      maxWidth: '900px',
      margin: '0 auto',
      fontStyle: 'italic',
      position: 'relative'
    },
    quoteIcon: {
      fontSize: '72px',
      color: THEME.colors.accent,
      opacity: 0.3,
      position: 'absolute',
      top: '-30px',
      left: '-40px'
    },
    storySection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      marginBottom: '60px'
    },
    storyText: {
      fontSize: '18px',
      lineHeight: 1.7,
      color: THEME.colors.text,
      fontFamily: THEME.fonts.body
    },
    storyImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    valueItem: {
      textAlign: 'left',
      padding: '30px',
      background: '#ffffff',
      borderRadius: '16px',
      borderLeft: `5px solid ${THEME.colors.accent}`,
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
    },
    valueIcon: {
      width: '60px',
      height: '60px',
      background: THEME.colors.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      color: '#ffffff'
    },
    valueTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      color: THEME.colors.primary,
      marginBottom: '15px'
    },
    valueText: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: THEME.colors.text,
      fontFamily: THEME.fonts.body
    },
    statsSection: {
      background: THEME.colors.primary,
      color: '#ffffff',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      fontWeight: 'bold',
      color: THEME.colors.accent,
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '18px',
      opacity: 0.9,
      fontFamily: THEME.fonts.body
    },
    teamSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: THEME.colors.background
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    teamCard: {
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    teamImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    },
    teamContent: {
      padding: '25px',
      textAlign: 'center'
    },
    teamName: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      color: THEME.colors.primary,
      marginBottom: '8px'
    },
    teamRole: {
      fontSize: '16px',
      color: THEME.colors.accent,
      marginBottom: '15px',
      fontWeight: 600
    },
    teamBio: {
      fontSize: '14px',
      lineHeight: 1.5,
      color: THEME.colors.text,
      fontFamily: THEME.fonts.body
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '42px',
      color: THEME.colors.primary,
      textAlign: 'center',
      marginBottom: '20px'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: THEME.colors.text,
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: 1.6,
      fontFamily: THEME.fonts.body
    },
    ctaSection: {
      background: `linear-gradient(135deg, ${THEME.colors.accent}, #d4b574)`,
      color: '#ffffff',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    ctaTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      marginBottom: '20px'
    },
    ctaText: {
      fontSize: '18px',
      marginBottom: '30px',
      maxWidth: '600px',
      margin: '0 auto 30px',
      lineHeight: 1.6
    },
    ctaButton: {
      background: THEME.colors.primary,
      color: '#ffffff',
      padding: '15px 40px',
      fontSize: '18px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: THEME.fonts.body,
      fontWeight: 600,
      transition: 'all 0.3s ease'
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '40px',
      flexWrap: 'wrap'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px'
    },
    '@media (max-width: 768px)': {
      heroTitle: {
        fontSize: '36px'
      },
      heroSubtitle: {
        fontSize: '18px'
      },
      storySection: {
        gridTemplateColumns: '1fr',
        gap: '40px'
      },
      missionQuote: {
        fontSize: '28px'
      },
      sectionTitle: {
        fontSize: '32px'
      },
      contactInfo: {
        flexDirection: 'column',
        gap: '20px'
      }
    }
  };

  const values = [
    {
      icon: <Heart size={28} />,
      title: "Family Tradition",
      text: "Our wood-fired pizza recipes have been passed down through three generations, bringing authentic Italian flavors to every pie we create."
    },
    {
      icon: <Flame size={28} />,
      title: "Wood-Fired Excellence",
      text: "Our custom-built Neapolitan oven reaches 900°F, creating the perfect leopard-spotted crust and bubbling cheese that defines true artisan pizza."
    },
    {
      icon: <MapPin size={28} />,
      title: "Local Ingredients",
      text: "We partner with Texas farms and local suppliers, sourcing the freshest ingredients to support our community and deliver exceptional flavor."
    },
    {
      icon: <Users size={28} />,
      title: "Community Focus",
      text: "From family dinners to date nights, we've created a warm gathering place where Prosper comes together over incredible food and great company."
    }
  ];

  const teamMembers = [
    {
      name: "Marco Benedetti",
      role: "Owner & Pizzaiolo",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
      bio: "Third-generation pizza maker who learned the craft in Naples before bringing authentic techniques to Texas."
    },
    {
      name: "Sofia Martinez",
      role: "Head Chef & Co-Owner",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800",
      bio: "Culinary school graduate specializing in Italian cuisine and locally-sourced ingredient preparation."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Story</h1>
          <p style={styles.heroSubtitle}>
            A family passion for authentic wood-fired pizza, brought to life in the heart of Prosper
          </p>
        </div>
      </section>

      {/* Mission Quote */}
      <ScrollReveal>
        <section style={styles.missionSection}>
          <div style={styles.missionQuote}>
            <span style={styles.quoteIcon}>"</span>
            Every pizza tells a story of tradition, craftsmanship, and community. We're not just serving food – we're creating memories, one wood-fired pie at a time.
          </div>
        </section>
      </ScrollReveal>

      {/* Our Story */}
      <section style={styles.section}>
        <div style={styles.storySection}>
          <div>
            <h2 style={styles.sectionTitle}>From Naples to Prosper</h2>
            <div style={styles.storyText}>
              <p style={{marginBottom: '20px'}}>
                It all started with Nonna Benedetti's wood-fired oven in Naples, where young Marco learned that great pizza isn't just about ingredients – it's about passion, patience, and respect for tradition.
              </p>
              <p style={{marginBottom: '20px'}}>
                After years of perfecting his craft in Italy's most celebrated pizzerias, Marco met Sofia at a culinary festival in Austin. Together, they dreamed of bringing authentic Neapolitan pizza to a community that would appreciate the artistry behind every pie.
              </p>
              <p>
                When we discovered Prosper's vibrant, family-focused community, we knew we'd found our home. Here, we could build more than just a restaurant – we could create a gathering place where traditions are shared and new memories are born.
              </p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800" 
            alt="Wood-fired pizza oven"
            style={styles.storyImage}
          />
        </div>
      </section>

      {/* Values - Not Using Standard Cards */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Drives Us</h2>
        <p style={styles.sectionSubtitle}>
          Every decision we make is guided by these core values that define who we are
        </p>
        
        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <TiltCard key={index}>
              <div style={styles.valueItem}>
                <div style={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueText}>{value.text}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <h2 style={{...styles.sectionTitle, color: '#ffffff', marginBottom: '60px'}}>
            Our Journey in Numbers
          </h2>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={8} suffix="+ Years" duration={2} />
              </div>
              <div style={styles.statLabel}>Combined Experience</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={12000} suffix="+" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Happy Customers</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={98} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Customer Satisfaction</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={25000} suffix="+" duration={3} />
              </div>
              <div style={styles.statLabel}>Pizzas Crafted</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet Our Team</h2>
        <p style={styles.sectionSubtitle}>
          The passionate artisans behind every authentic wood-fired creation
        </p>
        
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TiltCard key={index}>
              <div style={styles.teamCard}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={styles.teamImage}
                />
                <div style={styles.teamContent}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
        height="60vh"
      >
        <div style={{
          textAlign: 'center',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '42px',
            marginBottom: '20px'
          }}>
            Taste the Difference
          </h2>
          <p style={{
            fontSize: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Every ingredient matters. Every flame shapes flavor. Every pizza carries our commitment to excellence.
          </p>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Experience Authentic?</h2>
        <p style={styles.ctaText}>
          Join us for an unforgettable dining experience where tradition meets innovation, and every bite tells our story.
        </p>
        <Link to="/menu" style={styles.ctaButton}>
          View Our Menu
        </Link>
        
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <MapPin size={20} />
            <span>123 W University Dr, Prosper, TX</span>
          </div>
          <div style={styles.contactItem}>
            <Phone size={20} />
            <span>(972) 555-PIZZA</span>
          </div>
          <div style={styles.contactItem}>
            <Clock size={20} />
            <span>Sun-Thu 11am-10pm, Fri-Sat 11am-11pm</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;