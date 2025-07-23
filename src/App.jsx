// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import  theme  from './styles/theme';

// Import existing components
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Import existing pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Import pages to be created
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingSpinner />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <Header />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              
              {/* Service specific routes */}
              <Route path="/services/biology" element={<ServicesPage section="biology" />} />
              <Route path="/services/chemistry" element={<ServicesPage section="chemistry" />} />
              <Route path="/services/criminalistics" element={<ServicesPage section="criminalistics" />} />
              <Route path="/services/document-examination" element={<ServicesPage section="document" />} />
              
              {/* 404 Route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;