import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";
import styles from './Product.module.scss'; // Import styli

import productsData from '../../data/products';

const Product = ({name, imageSrc}) => {
    const product = productsData.find((product) => product.name === name);

    const [currentColor, setCurrentColor] = useState(product.colors[0]);
    const [currentSize, setCurrentSize] = useState(product.sizes[0].name);

    const handleColorChange = (color) => {
        setCurrentColor(color);
    };

    const handleSizeChange = (size) => {
        setCurrentSize(size);
    };

    const price = useMemo(() => {
        const selectedSize = product.sizes.find((size) => size.name === currentSize);
        const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
        const totalPrice = product.basePrice + additionalPrice;
        return totalPrice;
    }, [currentSize, product.basePrice, product.sizes]);


    const handleAddToCart = (event) => {
        event.preventDefault();

        console.log("Name:", product.title);
        console.log("Price:", price);
        console.log("Size:", currentSize);
        console.log("Color:", currentColor);
    };

    return (
        <article className={styles.product}>
            <ProductImage
                name={name}
                title={product.title}
                currentColor={currentColor}
            />
            <ProductForm
                basePrice={product.basePrice}
                name={product.title}
                currentColor={currentColor}
                currentSize={currentSize}
                colors={product.colors}
                sizes={product.sizes}
                handleColorChange={handleColorChange}
                handleSizeChange={handleSizeChange}
                handleAddToCart={handleAddToCart}
                price={price}
            />
        </article>
    );
};

Product.propTypes = {
    name: PropTypes.string.isRequired,

};
export default Product;