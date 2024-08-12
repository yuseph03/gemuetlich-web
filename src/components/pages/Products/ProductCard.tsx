import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  level: string;
  rate: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, level, rate, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{level}</p>
      <p>💼 Hourly Rate: {rate}</p>
      <Link to={'/social'} style={{color: 'white'}}> <b>Contact</b> us to book classes</Link>
    </div>
  );
};

export default ProductCard;
