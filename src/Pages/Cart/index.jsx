import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { getItem } from '@/Components/localStorage';

const cl = classNames.bind(styles);

function Cart() {
    const data = getItem();

    return (
        <>
            {data?.length > 0 ? (
                <div className={cl('wrapper-product')}>
                    <div className={cl('order')}>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className={cl('list-order')}>
                                    <div className={cl('order-product')}>
                                        <input type="checkbox" />
                                    </div>
                                    <div className={cl('order-product')}>
                                        <img
                                            src={item.activeImage.img}
                                            alt={item.activeImage.alt}
                                        />
                                    </div>
                                    <div className={cl('order-product')}></div>
                                    <div className={cl('order-product')}></div>
                                    <div className={cl('order-product')}></div>
                                    <div className={cl('order-product')}></div>
                                    <div className={cl('order-product')}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className={cl('wrapper')}>
                    <div className={cl('null')}>
                        <div className={cl('title-null')}>Giỏ hàng của bạn còn trống</div>
                        <Link className={cl('btn')} to="/">
                            MUA NGAY
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
