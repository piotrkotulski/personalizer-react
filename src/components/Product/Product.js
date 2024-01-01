import React, { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import productsData from '../../data/products';

const Product = ({ name, price, imageSrc }) => {
  const product = productsData.find((product) => product.name === name);

  const [currentColor, setCurrentColor] = useState(product.colors[0]);
  const [currentSize, setCurrentSize] = useState(product.sizes[0].name);

  // Funkcja do zmiany wybranego koloru
  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  // Funkcja do zmiany wybranego rozmiaru
  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  // Funkcja do generowania adresu obrazka na podstawie wyboru użytkownika
  const generateImageUrl = () => {
    return `${process.env.PUBLIC_URL}/images/products/shirt-${name.toLowerCase()}--${currentColor}.jpg`;
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const selectedSize = product.sizes.find(size => size.name === currentSize);
    const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
    const totalPrice = product.basePrice + additionalPrice;

    return totalPrice;
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log("Clicked addToCart button!");
    console.log("Name:", product.title);
    console.log("Price:", getPrice());
    console.log("Size:", currentSize);
    console.log("Color:", currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
            className={styles.image}
            alt={`${product.title} shirt in ${currentColor}`}
            src={generateImageUrl()}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{product.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {product.colors.map(color => (
                  <li key={color}>
                    <button
                        type="button"
                        className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                        onClick={() => handleColorChange(color)}
                    />
                  </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {product.sizes.map(size => (
                  <li key={size.name}>
                    <button
                        type="button"
                        className={clsx(styles.sizeButton, currentSize === size.name && styles.active)}
                        onClick={() => handleSizeChange(size.name)}
                    >
                      {size.name}
                    </button>
                  </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} onClick={handleAddToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;