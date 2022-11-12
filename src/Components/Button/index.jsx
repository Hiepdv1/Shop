import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cl = classNames.bind(styles);

function Button({ children, small }) {
    const classes = cl({
        small,
    });

    return <button className={classes}>{children}</button>;
}

export default Button;
