import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Product/Product.module.scss";
import clsx from 'clsx';

const OptionColor = ({colors, currentColor, handleColorChange}) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map(color => (
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
    );
};

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    handleColorChange: PropTypes.func.isRequired,
};

export default OptionColor;