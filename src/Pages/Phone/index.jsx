import classNames from 'classnames/bind';
import styles from './Phone.module.scss';
import { dataPhone } from '@/assets/fake-data/Pagephone';
import { Link } from 'react-router-dom';
import { iconData_3 } from '@/assets/fake-data/icon';
import { sortData } from '@/assets/fake-data/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { dataPagesPhone } from '@/assets/fake-data/productPagePhone';
import Products from '../Home/components/Products';

const cl = classNames.bind(styles);

function Phone() {
    const { phoneSlider } = dataPhone;

    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('list-slider')}>
                    <div
                        style={{
                            backgroundImage: `url(${iconData_3.img})`,
                        }}
                        className={cl('control-left')}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${iconData_3.img})`,
                        }}
                        className={cl('control-right')}
                    ></div>
                    {phoneSlider.map((item, index) => {
                        return (
                            <div key={index} className={cl('sliderPart')}>
                                <Link>
                                    <img src={item.img} alt="" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className={cl('logo')}>
                    <div className={cl('list-img')}>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                        <div className={cl('item-img')}>
                            <Link>
                                <div
                                    style={{
                                        backgroundImage: `url(${iconData_3.img})`,
                                    }}
                                    className={cl('img')}
                                ></div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={cl('phone-new')}>
                    <Link to="">Dòng sản phẩm iPhone 14</Link>
                </div>

                <div className={cl('sort')}>
                    <span className={cl('title')}>Điện thoại:</span>
                    <div className={cl('list-sort')}>
                        {sortData.map((item, index) => {
                            return (
                                <div key={index} className={cl('item-sort')}>
                                    <button>{item}</button>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cl('feature')}>Tính năng</div>
                    <div className={cl('sort-featured')}>
                        Sản phẩm nổi bật
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>

                <div className={cl('list-product')}>
                    <Products data={dataPagesPhone} />
                </div>
            </div>
        </div>
    );
}

export default Phone;
