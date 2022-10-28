/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import { logoData_1 } from '@/assets/fake-data/logo';
import Search from '../components/Search';
import { iconData_2 } from '@/assets/fake-data/icon';
import Navigation from '../components/Navigation';
import DataMenuItem from '../components/DataMenuItem';
import { getItem } from '@/Components/localStorage';

const cl = classNames.bind(styles);

function Header() {
    const classHd = cl('header-account__item', {
        'straight-line': true,
    });

    const quantity = getItem().length;

    return (
        <header className={cl('header')}>
            <div className={cl('content')}>
                <div className={cl('header-top')}>
                    <div className={cl('header-logo')}>
                        <Link to="/">
                            <img src={logoData_1.img} alt={logoData_1.title} />
                        </Link>
                    </div>
                    <Search />
                    <div className={cl('cart')}>
                        <div className={cl('header-location')}>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className={cl('icon-location')}
                            />
                            <a href="#" className={cl('header-location__link')}>
                                Siêu thị gần nhất
                            </a>
                        </div>
                        <Link to="/cart" className={cl('header-text')}>
                            <img
                                className={cl('icon-cart')}
                                src={iconData_2.img}
                                alt={iconData_2.alt}
                            />
                            <span
                                className={cl('header-cart__text')}
                            >{`Giỏ hàng(${quantity})`}</span>
                        </Link>
                    </div>
                    <div className={cl('header-account')}>
                        <Link to="/login" className={classHd}>
                            Đăng Nhập
                        </Link>
                        <Link to="/register" className={cl('header-account__item')}>
                            Đăng ký
                        </Link>
                    </div>
                </div>

                <nav className={cl('nav')}>
                    <Navigation data={DataMenuItem} />
                </nav>
            </div>
        </header>
    );
}

export default Header;
