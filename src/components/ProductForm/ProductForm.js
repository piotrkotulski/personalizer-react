import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import styles from "./ProductForm.module.scss"

const ProductForm = ({
                         basePrice,
                         name,
                         currentColor,
                         currentSize,
                         colors,
                         sizes,
                         product,
                         handleColorChange,
                         handleSizeChange,
                         handleAddToCart,
                         getPrice

                     }) => {


    return (
        <div>
            <header>
                <h2 className={styles.name}>{name}</h2> {/* Użyj przekazanej nazwy, a nie produkt.title */}
                <span
                    className={styles.price}>Price: {getPrice()}$</span> {/* Użyj przekazanej ceny, a nie getPrice() */}
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
                    profuct={{product}}
                />

                <Button className={styles.button} onClick={handleAddToCart}>
                    <span className="fa fa-shopping-cart"/>
                </Button>
            </form>
        </div>
    );
};

ProductForm.propTypes = {
    basePrice: PropTypes.number.isRequired,
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
