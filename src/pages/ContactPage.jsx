import React, { useState } from 'react';
import { ScrollReveal, ParallaxSection } from '../effects';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const styles = {
    hero: {
      position: 'relative',
      height: '50vh',
      background: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920") center/cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(rgba(44, 24, 16, 0.8), rgba(196, 163, 90, 0.3))',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '600px',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '42px',
      fontFamily: "'Playfair Display', Georgia, serif",
      marginBottom: '15px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '18px',
      fontFamily: "'Lato', system-ui, sans-serif",
      opacity: 0.9,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    contactSection: {
      padding: '80px 0',
      background: '#faf7f2'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '60px',
      alignItems: 'start'
    },
    formCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(44, 24, 16, 0.1)',
      border: '1px solid rgba(196, 163, 90, 0.2)'
    },
    formTitle: {
      fontSize: '28px',
      fontFamily: "'Playfair Display', Georgia, serif",
      color: '#2c1810',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 600,
      color: '#2c1810',
      marginBottom: '8px',
      fontFamily: "'Lato', system-ui, sans-serif"
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: "'Lato', system-ui, sans-serif",
      transition: 'border-color 0.3s ease',
      background: '#fafafa'
    },
    textarea: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: "'Lato', system-ui, sans-serif",
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease',
      background: '#fafafa'
    },
    select: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: "'Lato', system-ui, sans-serif",
      background: '#fafafa',
      cursor: 'pointer'
    },
    submitBtn: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #c4a35a 0%, #d4b366 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: "'Lato', system-ui, sans-serif",
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 4px 16px rgba(196, 163, 90, 0.3)'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    },
    infoCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(44, 24, 16, 0.08)',
      border: '1px solid rgba(196, 163, 90, 0.1)'
    },
    infoHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    },
    infoIcon: {
      width: '24px',
      height: '24px',
      color: '#c4a35a'
    },
    infoTitle: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#2c1810',
      fontFamily: "'Playfair Display', Georgia, serif"
    },
    infoText: {
      fontSize: '16px',
      color: '#64748b',
      lineHeight: 1.6,
      fontFamily: "'Lato', system-ui, sans-serif"
    },
    hoursGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      marginTop: '12px'
    },
    hoursRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#64748b',
      fontFamily: "'Lato', system-ui, sans-serif"
    },
    hoursDay: {
      fontWeight: 600,
      color: '#2c1810'
    },
    specialNote: {
      background: 'linear-gradient(135deg, rgba(196, 163, 90, 0.1), rgba(196, 163, 90, 0.05))',
      padding: '20px',
      borderRadius: '12px',
      marginTop: '20px',
      border: '1px solid rgba(196, 163, 90, 0.2)'
    },
    specialTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#2c1810',
      marginBottom: '8px',
      fontFamily: "'Playfair Display', Georgia, serif"
    },
    specialText: {
      fontSize: '14px',
      color: '#64748b',
      fontFamily: "'Lato', system-ui, sans-serif"
    },
    patioSection: {
      background: 'linear-gradient(135deg, #2c1810 0%, #3d2518 100%)',
      color: 'white',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    patioContent: {
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    patioTitle: {
      fontSize: '36px',
      fontFamily: "'Playfair Display', Georgia, serif",
      marginBottom: '20px'
    },
    patioText: {
      fontSize: '18px',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
      fontFamily: "'Lato', system-ui, sans-serif"
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroSubtitle}>
            Questions about our wood-fired pizzas or planning your visit? Our small team is here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ScrollReveal>
        <section style={styles.contactSection}>
          <div style={styles.container}>
            <div style={styles.contactGrid}>
              {/* Contact Form */}
              <div style={styles.formCard}>
                <h2 style={styles.formTitle}>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="(214) 555-0123"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>What can we help with?</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="general">General Question</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="private">Private Event</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={styles.textarea}
                      placeholder="Tell us about your visit, question, or how we can help make your experience special..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    style={styles.submitBtn}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(196, 163, 90, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 16px rgba(196, 163, 90, 0.3)';
                    }}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div style={styles.infoSection}>
                <div style={styles.infoCard}>
                  <div style={styles.infoHeader}>
                    <Phone style={styles.infoIcon} />
                    <h3 style={styles.infoTitle}>Call Us</h3>
                  </div>
                  <p style={styles.infoText}>
                    (469) 555-PIZZA<br />
                    Perfect for quick questions, reservations, or to check if your favorite pizza is available tonight!
                  </p>
                </div>

                <div style={styles.infoCard}>
                  <div style={styles.infoHeader}>
                    <MapPin style={styles.infoIcon} />
                    <h3 style={styles.infoTitle}>Visit Our Pizzeria</h3>
                  </div>
                  <p style={styles.infoText}>
                    285 E 1st Street<br />
                    Prosper, TX 75078<br />
                    <br />
                    Easy parking available. Look for the wood-fired oven smoke - that's us!
                  </p>
                </div>

                <div style={styles.infoCard}>
                  <div style={styles.infoHeader}>
                    <Mail style={styles.infoIcon} />
                    <h3 style={styles.infoTitle}>Email Us</h3>
                  </div>
                  <p style={styles.infoText}>
                    hello@prosperpie.com<br />
                    catering@prosperpie.com<br />
                    <br />
                    We typically respond within 4 hours during business days.
                  </p>
                </div>

                <div style={styles.infoCard}>
                  <div style={styles.infoHeader}>
                    <Clock style={styles.infoIcon} />
                    <h3 style={styles.infoTitle}>Hours</h3>
                  </div>
                  <div style={styles.hoursGrid}>
                    <div style={styles.hoursRow}>
                      <span style={styles.hoursDay}>Mon-Thu</span>
                      <span>4pm-10pm</span>
                    </div>
                    <div style={styles.hoursRow}>
                      <span style={styles.hoursDay}>Fri-Sat</span>
                      <span>4pm-11pm</span>
                    </div>
                    <div style={styles.hoursRow}>
                      <span style={styles.hoursDay}>Sunday</span>
                      <span>4pm-9pm</span>
                    </div>
                  </div>
                  <div style={styles.specialNote}>
                    <h4 style={styles.specialTitle}>Wood-fired Oven Schedule</h4>
                    <p style={styles.specialText}>
                      Our oven fires up at 3:30pm daily. Peak flavor window is 5-8pm when the oven hits perfect temperature!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Patio Section */}
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
        height="40vh"
      >
        <section style={styles.patioSection}>
          <div style={styles.container}>
            <div style={styles.patioContent}>
              <h2 style={styles.patioTitle}>Join Us on the Patio</h2>
              <p style={styles.patioText}>
                Experience our wood-fired pizzas under the Texas stars. Our outdoor patio features string lights, 
                comfortable seating, and the perfect ambiance for date nights or family gatherings. 
                Weather permitting - call ahead for patio availability!
              </p>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
};

export default ContactPage;