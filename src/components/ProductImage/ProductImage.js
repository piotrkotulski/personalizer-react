import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = ({ name, title, currentColor }) => {
    const generateImageUrl = () => {
        return `${process.env.PUBLIC_URL}/images/products/shirt-${name.toLowerCase()}--${currentColor}.jpg`;
    };

    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={`${title} shirt in ${currentColor}`}
                src={generateImageUrl()}
            />
        </div>
    );
};

ProductImage.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
};

export default ProductImage;