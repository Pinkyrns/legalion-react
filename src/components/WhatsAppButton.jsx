import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919945293599?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank');
  };

  // Hide button on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className={`whatsapp-button ${isVisible ? 'visible' : 'hidden'}`}>
        <button className="whatsapp-icon" onClick={toggleChat}>
          <FaWhatsapp size={24} />
        </button>
        
        {/* Chat Bubble */}
        {isOpen && (
          <div className="chat-bubble">
            <div className="chat-header">
              <span>Chat with us</span>
              <button className="close-chat" onClick={toggleChat}>
                <FaTimes size={12} />
              </button>
            </div>
            <div className="chat-message">
              <p>Hello! 👋 How can we help you today?</p>
            </div>
            <button className="start-chat-btn" onClick={handleWhatsAppClick}>
              Start Chat
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;