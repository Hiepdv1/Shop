import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { getItem } from '@/Components/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useReducer } from 'react';
import { initialState, Reducer } from '@/Components/Reducer';
import { deleteOrder } from '@/Components/Actions';
import Header from '@/Components/Layout/DefaultLayout/Header';

const cl = classNames.bind(styles);

function Cart() {
    const [state, ditpatch] = useReducer(Reducer, initialState);

    const data = getItem();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 3,
    });

    const handleDeleteOrder = (id) => {
        ditpatch(deleteOrder(id));
    };

    return (
        <>
            <Header />
            {data?.length > 0 ? (
                <div className={cl('wrapper-product')}>
                    <div className={cl('order')}>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className={cl('list-order')}>
                                    <div className={cl('order-choose')}>
                                        <input id={index} type="checkbox" />
                                        <label htmlFor={index}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </label>
                                    </div>
                                    <div className={cl('order-product')}>
                                        <img
                                            src={item.activeImage.img}
                                            alt={item.activeImage.alt}
                                        />
                                    </div>
                                    <div className={cl('product-name')}>{item.name}</div>
                                    <div className={cl('order-classify')}>
                                        <span className={cl('classify')}>
                                            Phân loại hàng:
                                        </span>
                                        <span className={cl('colors')}>Do</span>
                                    </div>
                                    <div className={cl('price-order')}>
                                        <span className={cl('price')}>{item.price}</span>
                                        <span className={cl('sale')}>{item.sale}</span>
                                    </div>
                                    <div className={cl('order-quantity')}>
                                        Số lượng: {item.quantity}
                                    </div>
                                    <div className={cl('total')}>
                                        {formatter.format(item.priceInt)}
                                    </div>
                                    <div
                                        onClick={() => handleDeleteOrder(item.id)}
                                        className={cl('delete-order')}
                                    >
                                        Xóa
                                    </div>
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
