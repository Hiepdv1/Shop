import classNames from 'classnames/bind';
import styles from './Menuitem.module.scss';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function Menuitem({ items }) {
    const options = [];

    const getSubMenu = (menuitem) => {
        if (menuitem.length > 0) {
            return (
                <>
                    {menuitem.map((items, index) => {
                        return (
                            <li className={cl('menu-item-sub')} key={index}>
                                <Link
                                    className={cl('menu-item__link-sub')}
                                    to={items.url}
                                >
                                    <div className={cl('menu-item__title-sub')}>
                                        {items.iconLeft}
                                        <span>{items.title}</span>
                                    </div>
                                    {items.iconRight}
                                </Link>
                                {items.subMenu && (
                                    <ul className={cl(`sub-menu__level-${index}`)}>
                                        {getSubMenu(items.subMenu)}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </>
            );
        }
    };

    if (items.subMenu && items.subMenu.length > 0) {
        options.push(getSubMenu(items.subMenu));
    }

    return (
        <li className={cl('menu-item')}>
            <Link className={cl('menu-item__link')} to={items.url}>
                {items.iconLeft}
                <span className={cl('menu-item__title')}>{items.title}</span>
                {items.iconRight}
            </Link>
            {options.length > 0 && (
                <>
                    {options.map((items, index) => (
                        <ul className={cl(`menu-level__${index + 1}`)} key={index}>
                            {items}
                        </ul>
                    ))}
                </>
            )}
        </li>
    );
}

export default Menuitem;
