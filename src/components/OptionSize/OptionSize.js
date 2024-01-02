import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Product/Product.module.scss";
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, handleSizeChange }) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map(size => (
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
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
};

export default OptionSize;