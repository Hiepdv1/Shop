import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';

const cl = classNames.bind(styles);

function Products({ data }) {
    const listStar = (listStart) => {
        return listStart?.map((item, index) => {
            return (
                <div key={index} className={cl('star-item')}>
                    {item}
                </div>
            );
        });
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('list')}>
                <div className={cl('products')}>
                    {data.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={`/products/product-${item.id}`}
                                className={cl('product-link')}
                            >
                                <div className={cl('product')}>
                                    <div className={cl('product-item')}>
                                        <img
                                            className={cl('product-img')}
                                            src={item.img}
                                            alt={item.alt}
                                        />
                                        {item.hot && (
                                            <div className={cl('discount')}>
                                                <span className={cl('percent')}>
                                                    {item.hot}
                                                </span>
                                                <span className={cl('bzhmIc')}>
                                                    {item.hot_text}
                                                </span>
                                            </div>
                                        )}

                                        {item.favourite && (
                                            <div className={cl('lable-favourite')}>
                                                {item.favourite}
                                            </div>
                                        )}

                                        <div className={cl('product-text')}>
                                            {item.name}
                                        </div>

                                        <div className={cl('product-price')}>
                                            {item.sale ? (
                                                <div className={cl('price-list')}>
                                                    <span className={cl('price')}>
                                                        {item.sale}
                                                    </span>
                                                    <span className={cl('sale')}>
                                                        {item.price}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className={cl('price-list')}>
                                                    <span className={cl('price')}>
                                                        {item.price}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={cl('selling')}>
                                            {item.star?.length > 0 && (
                                                <>
                                                    <div className={cl('list-star')}>
                                                        {listStar(item.star)}
                                                    </div>
                                                </>
                                            )}

                                            <div className={cl('sold')}>{item.sold}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
