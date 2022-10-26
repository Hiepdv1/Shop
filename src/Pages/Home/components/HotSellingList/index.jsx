import classNames from 'classnames/bind';
import styles from './HotSellingList.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cl = classNames.bind(styles);

function HotSellingList({ data }) {
    const [activeSlider, setActiveSlider] = useState(0);

    const { content, title } = data;

    const inTurn = content?.length * 20 - 5 * 20;

    const handleNextSlider = () => {
        if (activeSlider >= inTurn) {
            return setActiveSlider(0);
        }
        setActiveSlider((prev) => prev + 20);
    };

    const handlePrevSlider = () => {
        if (activeSlider <= 0) {
            return setActiveSlider(inTurn);
        }
        setActiveSlider((prev) => prev - 20);
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('list-product')}>
                <h2 className={cl('title')}>{title}</h2>
                <div onClick={handlePrevSlider} className={cl('btn-left')}></div>
                <div onClick={handleNextSlider} className={cl('btn-right')}></div>
                <div
                    className={cl('products')}
                    style={{
                        transform: `translate3d(-${activeSlider}%, 0, 0)`,
                    }}
                >
                    {content?.map((item, index) => {
                        return (
                            <Link
                                className={cl('product-link')}
                                key={index}
                                to={`/products/product-${item.id}`}
                            >
                                <div className={cl('prodoct-items')}>
                                    {item.sale && (
                                        <span className={cl('sale')}>{item.sale}</span>
                                    )}
                                    <div className={cl('product-img')}>
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <div className={cl('product-name')}>
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className={cl('product-price')}>
                                        <span className={cl('price')}>
                                            {item.discount}
                                        </span>
                                        {item.price && (
                                            <span className={cl('discount')}>
                                                {item.price}
                                            </span>
                                        )}
                                    </div>
                                    <div className={cl('prodoct-script')}>
                                        {item.script}
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

export default HotSellingList;
