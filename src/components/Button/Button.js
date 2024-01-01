import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    const { className, onClick, children } = props;
    return (
        <button className={clsx(styles.button, className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;