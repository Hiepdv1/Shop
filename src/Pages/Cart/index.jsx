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
    });

    const handleDeleteOrder = (index) => {
        ditpatch(deleteOrder(index));
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
                                            Ph??n lo???i h??ng:
                                        </span>
                                        <span className={cl('colors')}>{item.type}</span>
                                    </div>
                                    <div className={cl('price-order')}>
                                        <span className={cl('price')}>{item.price}</span>
                                        <span className={cl('sale')}>{item.sale}</span>
                                    </div>
                                    <div className={cl('order-quantity')}>
                                        S??? l?????ng: {item.quantity}
                                    </div>
                                    <div className={cl('total')}>
                                        {formatter.format(item.priceInt * item.quantity)}
                                    </div>
                                    <div
                                        onClick={() => handleDeleteOrder(index)}
                                        className={cl('delete-order')}
                                    >
                                        X??a
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className={cl('wrapper')}>
                    <div className={cl('null')}>
                        <div className={cl('title-null')}>Gi??? h??ng c???a b???n c??n tr???ng</div>
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
