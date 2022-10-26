import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import Menuitem from '../Menuitem';
import PropTypes from 'prop-types';

const cl = classNames.bind(styles);

Menuitem.prototype = {
    data: PropTypes.array,
};

Menuitem.defaultProps = {
    data: [],
};

function Navigation({ data }) {
    return (
        <ul className={cl('menu')}>
            {data.map((menuitem, index) => {
                return <Menuitem key={index} items={menuitem} />;
            })}
        </ul>
    );
}

export default Navigation;
