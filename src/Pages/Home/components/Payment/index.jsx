import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Payment.module.scss';

const cl = classNames.bind(styles);

function Payment({ data }) {
    return (
        <div className={cl('wrapper')}>
            <h2>Ưu đãi thanh toán</h2>
            <div className={cl('list-payment')}>
                {data.map((item, index) => {
                    return (
                        <Link
                            to={`payment-${item.id}`}
                            key={index}
                            className={cl('payment-item')}
                        >
                            <img
                                className={cl('payment-img')}
                                src={item.img}
                                alt={item.alt}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Payment;
