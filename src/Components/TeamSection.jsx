import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard.jsx';
import SubHeading from './SubHeading.jsx';
import styles from '../styles/team.module.css';

const TeamSection = ({ title, members }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  // Function to handle click outside the card
  const handleOutsideClick = (e) => {
    if (!e.target.closest(`.${styles.teamCard}`)) {
      setActiveCardIndex(null); 
    }
  };

  // Listen for outside clicks when activeCardIndex is set
  useEffect(() => {
    if (activeCardIndex !== null) {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [activeCardIndex]);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);  
  };

  return (
    <div className={styles.teamSection}>
      <SubHeading
        title={title}
        borderColor1="#0066cc"
        borderColor2="#1ad5ea"
        textColor1="#0066cc"
        textColor2="#1ad5ea"
      />
      <div className={styles.cardContainer}>
        {members.map((member, index) => (
          <TeamCard
            key={index}
            index={index}
            name={member.name}
            position={member.position}
            description={member.description}
            image={member.image}
            github={member.github}
            linkedin={member.linkedin}
            style={{ animationDelay: `${index * 0.1}s` }}
            isActive={index === activeCardIndex}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
