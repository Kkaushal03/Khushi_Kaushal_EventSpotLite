
import React from 'react';
import '../styles/EventModal.css'; 

const EventModal = ({ event, onClose }) => {
  console.log('Event Data in Modal:' , event)
  if (!event) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        
        <p>{event.description}</p>
        <button className="close-btn" onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default EventModal;