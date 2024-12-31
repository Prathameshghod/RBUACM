import React, { useState, useEffect } from 'react';
import styles from '../styles/team.module.css';

const TeamCard = ({ name, position, image, github, linkedin, description, style, isActive, onCardClick, index }) => {
  const [flipped, setFlipped] = useState(false);

  const handleDoubleClick = () => {
    setFlipped(!flipped); 
  };

  const handleClick = () => {
    onCardClick(index); 
  };

  useEffect(() => {
    if (isActive) {
      setFlipped(false);
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.teamCard} ${flipped ? styles.flipped : ''} ${isActive ? styles.clicked : ''}`}
      style={style}
      onClick={handleClick}
    >
      <div className={styles.cardInner} onDoubleClick={handleDoubleClick}>
        {/* Front of the Card */}
        <div className={styles.cardFront}>
          <img
            src={image}
            alt={name}
            className={styles.cardImage}
            onClick={handleDoubleClick}
          />
          <div className={styles.cardInfoFront}>
            <h3 className={styles.name}>{name}</h3>
          </div>
        </div>

        {/* Back of the Card */}
        <div className={styles.cardBack}>
          <div className={styles.cardInfo}>
            <p className={styles.position}>{position}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.socialIcons}>
              {github && (
                <a href={github} className={styles.icon} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} className={styles.icon} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
