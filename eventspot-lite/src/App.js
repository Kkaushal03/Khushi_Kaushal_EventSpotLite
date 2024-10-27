

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import mockEvents from './data/mockEvents';
import './styles/App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loading time
  }, []);

  const handleEventClick = (event) => {
    console.log('Selected Event : ', event);
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
{/* Fallback Background Image for Mobile */}
<div className="bg-image"></div>

      {/* Content */}
      <div className="content">
        <Navbar />

        {loading ? (
          <div className="spinner"></div>
        ) : (
           
          <>
            {/* Search Bar Section */}
            <section id="search-section" className="search-section">
            <div className="website-description">
                <h2>Welcome to EventSpot Lite</h2>
                <p>Discover and explore exciting events happening around you. Use the search bar below to find events by name or location.</p>
              </div>
              
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </section>

            {/* Events Section */}
            <section id="events-section" className="events-section">
              <EventList events={filteredEvents} handleEventClick={handleEventClick} />
            </section>
          </>
        )}

        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}

        {/* Feedback Us Section */}
        <section id="contact-section" className="contact-section">
          <h2>Feedback</h2>
          <form className="contact-form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <hr />
          <p>2024 &copy; EventSpot Lite | <a href="#">Privacy Policy</a></p>
          <div className="footer-quick-links">
  <a href="#">About Us</a> | 
  <a href="#">FAQs</a> | 
  <a href="#">Terms & Conditions</a>
</div>
<form className="footer-newsletter">
  <input type="email" placeholder="Subscribe to our newsletter" />
  <button type="submit">Subscribe</button>
</form><div className="footer-social">
  <a href="https://facebook.com">Facebook</a> | 
  <a href="https://twitter.com">Twitter</a> | 
  <a href="https://instagram.com">Instagram</a>
</div>


        </footer>
      </div>
    </div>
  );
};

export default App;
