import React from 'react';
import styles from './appCardLayout.module.css'; 
import CustomTitle from '../appTitles/customTitles';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const AppCardLayout: React.FC<CardProps> = ({ title, description,className,children }) => {
  return (
    <div className={[styles.customCard,className].join(' ')}>
      {title && <CustomTitle text={title} size='middle' />}
      { description && <p className={styles.card_description}>{description}</p>}
      <div className={styles.card_content}>{children}</div>
    </div>
  );
};

export default AppCardLayout;