
import React from 'react';
import '../styles/EventList.css'; 

const EventList = ({ events, handleEventClick }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
          <img src={event.image} alt={event.name} className="event-image" />
          <div className="event-info">
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
