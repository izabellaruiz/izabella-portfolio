import React from 'react';
import './Bag.css';

const bagItems = [
  { name: 'Laptop', label: 'Where the magic happens 💻', emoji: '💻' },
  { name: 'iPad', label: 'For sketching & designing ✏️', emoji: '📱' },
  { name: 'Headphones', label: 'My focus booster 🎧', emoji: '🎧' },
  { name: 'Coffee', label: 'What fuels me ☕', emoji: '☕' },
  { name: 'Sketchbook', label: 'My ideas start here 📓', emoji: '📓' },
];

const Bag = () => {
  return (
    <section className="bag-section" id="bag">
      <h2>What’s in My Bag</h2>
      <div className="bag-grid">
        {bagItems.map((item, index) => (
          <div className="bag-item" key={index}>
            <span className="bag-emoji">{item.emoji}</span>
            <span className="bag-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bag;
