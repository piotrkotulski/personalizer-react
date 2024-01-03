import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import styles from "./ProductForm.module.scss"

const ProductForm = ({
                         name,
                         currentColor,
                         currentSize,
                         colors,
                         sizes,
                         handleColorChange,
                         handleSizeChange,
                         handleAddToCart,
                         price

                     }) => {


    return (
        <div>
            <header>
                <h2 className={styles.name}>{name}</h2>
                <span
                    className={styles.price}>Price: {price}$</span>
            </header>
            <form>
                <OptionSize
                    sizes={sizes}
                    currentSize={currentSize}
                    handleSizeChange={handleSizeChange}
                />
                <OptionColor
                    colors={colors}
                    currentColor={currentColor}
                    handleColorChange={handleColorChange}
                />
                <Button className={styles.button} onClick={handleAddToCart}>
                    <span className="fa fa-shopping-cart"/>
                </Button>
            </form>
        </div>
    );
};

ProductForm.propTypes = {
    name: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;
