import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";
import styles from './Product.module.scss'; // Import styli


const Product = (props) => {

    const [currentColor, setCurrentColor] = useState(props.colors[0]);
    const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

    const handleColorChange = (color) => {
        setCurrentColor(color);
    };

    const handleSizeChange = (size) => {
        setCurrentSize(size);
    };

    const price = useMemo(() => {
        const selectedSize = props.sizes.find((size) => size.name === currentSize);
        const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
        const totalPrice = props.basePrice + additionalPrice;
        return totalPrice;
    }, [currentSize, props.basePrice, props.sizes]);


    const handleAddToCart = (event) => {
        event.preventDefault();

        console.log("Name:", props.title);
        console.log("Price:", price);
        console.log("Size:", currentSize);
        console.log("Color:", currentColor);
    };

    return (
        <article className={styles.product}>
            <ProductImage
                name={props.name}
                title={props.title}
                currentColor={currentColor}
            />
            <ProductForm
                name={props.title}
                currentColor={currentColor}
                currentSize={currentSize}
                colors={props.colors}
                sizes={props.sizes}
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
    id: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired

};
export default Product;