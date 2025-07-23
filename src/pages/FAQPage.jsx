import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Users, MapPin, HelpCircle, Award } from 'lucide-react';

function FAQPage() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "How do I get Forensic Science services?",
      answer: "DFSS primarily serves law enforcement agencies, the judiciary, and other government entities. However, we also collaborate with academic institutions, legal professionals, and international organizations to advance forensic science and promote justice.",
      icon: <Users size={20} />,
      category: "Services"
    },
    {
      question: "Are your services offered countrywide?",
      answer: "DFSS is headquartered in Harare, currently housed on the 2nd floor of the Chingaira Makoni Building (Immigration Headquarters). Although we operate from this central base, we provide our forensic services nationwide, ensuring comprehensive support across the country.",
      icon: <MapPin size={20} />,
      category: "Coverage"
    },
    {
      question: "Do Forensic Scientists deal with dead bodies?",
      answer: "Forensic scientists do not directly deal with dead bodies. However, they may handle evidence collected from bodies, such as biological samples (blood, hair, tissue), in their laboratory analyses. These forensic scientists include DNA analysts, toxicologists, and trace evidence examiners. They play a crucial role in analyzing the collected evidence to help solve cases but do not perform post mortems or directly work with the deceased.",
      icon: <HelpCircle size={20} />,
      category: "General"
    },
    {
      question: "Are you a law enforcement agency?",
      answer: "The Department of Forensic Science Services (DFSS) is a civilian-staffed department operating under the Ministry of Home Affairs and Cultural Heritage. We provide expert forensic analysis and support to law enforcement agencies and the justice system in Zimbabwe.",
      icon: <Award size={20} />,
      category: "About Us"
    },
    {
      question: "How can one be a forensic scientist?",
      answer: "To be a forensic scientist, one typically needs a Bachelor's degree in the natural sciences field e.g. Biology, Chemistry, Physics or a degree in Forensic Science. A Master's degree or Ph.D. may be required for advanced positions or specialized areas like DNA analysis.",
      icon: <Award size={20} />,
      category: "Careers"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'Arial, sans-serif'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px'
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '12px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#6b7280',
      marginBottom: '32px'
    },
    searchContainer: {
      position: 'relative',
      maxWidth: '400px',
      marginBottom: '32px'
    },
    searchInput: {
      width: '100%',
      paddingLeft: '40px',
      paddingRight: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    faqContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    faqItem: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s'
    },
    faqButton: {
      width: '100%',
      padding: '20px 24px',
      textAlign: 'left',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background-color 0.2s',
      outline: 'none'
    },
    faqContent: {
      display: 'flex',
      alignItems: 'center',
      flex: 1
    },
    iconContainer: {
      padding: '8px',
      backgroundColor: '#dcfce7',
      color: '#16a34a',
      borderRadius: '6px',
      marginRight: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    questionText: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#111827',
      margin: 0
    },
    categoryBadge: {
      fontSize: '12px',
      fontWeight: '500',
      padding: '4px 8px',
      borderRadius: '12px',
      backgroundColor: '#dcfce7',
      color: '#166534',
      border: '1px solid #bbf7d0',
      marginBottom: '8px',
      display: 'inline-block'
    },
    chevronContainer: {
      padding: '4px',
      marginLeft: '16px',
      transition: 'transform 0.2s'
    },
    answerContainer: {
      padding: '0 24px 20px 24px',
      backgroundColor: '#f9fafb',
      borderTop: '1px solid #e5e7eb'
    },
    answerText: {
      color: '#374151',
      lineHeight: '1.6',
      fontSize: '16px',
      margin: '16px 0 0 0'
    },
    noResults: {
      textAlign: 'center',
      padding: '48px 24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    noResultsIcon: {
      color: '#d1d5db',
      marginBottom: '16px'
    },
    noResultsTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#6b7280',
      marginBottom: '8px'
    },
    noResultsText: {
      color: '#9ca3af'
    },
    contactSection: {
      marginTop: '48px',
      backgroundColor: '#16a34a',
      borderRadius: '8px',
      padding: '32px',
      textAlign: 'center',
      color: 'white'
    },
    contactTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '12px'
    },
    contactText: {
      color: '#bbf7d0',
      marginBottom: '24px',
      fontSize: '16px'
    },
    contactButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: 'white',
      color: '#16a34a',
      fontWeight: '600',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>
        <p style={styles.subtitle}>
          Get answers to common questions about our forensic services and the Department of Forensic Science Services (DFSS).
        </p>

        <div style={styles.searchContainer}>
          <Search style={styles.searchIcon} size={20} />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
            onFocus={(e) => e.target.style.borderColor = '#16a34a'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>
        
        <div style={styles.faqContainer}>
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              style={styles.faqItem}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
            >
              <button
                onClick={() => toggleAccordion(index)}
                style={styles.faqButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <div style={styles.faqContent}>
                  <div style={styles.iconContainer}>
                    {faq.icon}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={styles.categoryBadge}>
                      {faq.category}
                    </div>
                    <h3 style={styles.questionText}>
                      {faq.question}
                    </h3>
                  </div>
                </div>
                
                <div 
                  style={{
                    ...styles.chevronContainer,
                    transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <ChevronDown size={20} color="#6b7280" />
                </div>
              </button>
              
              {openAccordion === index && (
                <div style={styles.answerContainer}>
                  <p style={styles.answerText}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div style={styles.noResults}>
            <div style={styles.noResultsIcon}>
              <HelpCircle size={64} />
            </div>
            <h3 style={styles.noResultsTitle}>No results found</h3>
            <p style={styles.noResultsText}>Try adjusting your search terms</p>
          </div>
        )}
        
        <div style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Still have questions?</h2>
          <p style={styles.contactText}>
            Can't find what you're looking for? Contact the Department of Forensic Science Services for additional information.
          </p>
          <button 
            style={styles.contactButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f0fdf4'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Contact DFSS
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;