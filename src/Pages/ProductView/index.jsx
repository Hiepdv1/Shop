import classNames from 'classnames/bind';
import styles from './ProductView.module.scss';
import { dataProduct } from '@/assets/fake-data/Product';
import { useParams } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faCheck,
    faChevronDown,
    faMinus,
    faPlus,
    faTruckArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import ListView from './Components/ListView';
import { useReducer } from 'react';
import { initialState, Reducer } from '@/Components/Reducer';
import { addCart } from '@/Components/Actions';

const cl = classNames.bind(styles);

function ProductView() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const { productId } = useParams();
    const { View } = dataProduct.find((items) => items.id.toString() === productId);
    const { data_s, image_s } = View;
    const [activeImage, setActiveImage] = useState(image_s[0]);
    const [quantity, setQuantity] = useState(1);

    const handleActiveImg = useCallback(
        (item) => {
            setActiveImage(item);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [activeImage],
    );

    const handleOrder = () => {
        const value = {
            activeImage,
            name: data_s.name,
            price: data_s.price,
            sale: data_s.sale,
        };
        dispatch(addCart(value));
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('product-briefing')}>
                <div className={cl('product-view')}>
                    <div className={cl('product-img')}>
                        <div
                            style={{
                                backgroundImage: `url(${activeImage.img})`,
                            }}
                        ></div>
                    </div>
                    <div className={cl('list-img')}>
                        <ListView
                            data={image_s}
                            Over={handleActiveImg}
                            active={activeImage}
                        />
                    </div>
                </div>
                <div className={cl('orders')}>
                    <div className={cl('orders-title')}>{data_s.name}</div>
                    <div className={cl('product-reviews')}>
                        <div className={cl('group')}>
                            <span className={cl('line')}>{data_s.product_reviews}</span>
                            <span>Đã Bán</span>
                            <span className={cl('number')}>{data_s.sold}</span>
                        </div>
                        <div className={cl('denounce')}>Tố cáo</div>
                    </div>
                    <div className={cl('orders-price')}>
                        <span className={cl('price')}>{data_s.price}</span>
                        <span className={cl('sale')}>{data_s.sale}</span>
                        <span className={cl('title')}>GIẢM {data_s.hot}</span>
                    </div>
                    <div className={cl('discount-code')}>
                        <span className={cl('title')}>Mã Giảm Giá Của Shop</span>
                        <div className={cl('list-voucher')}>
                            {data_s.discount_code.map((item, index) => {
                                return (
                                    <div className={cl('item')} key={index}>
                                        <span>{item.voucher}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cl('transport')}>
                        <div className={cl('title')}>Vận Chuyển</div>
                        <div className={cl('transport-content')}>
                            <FontAwesomeIcon
                                className={cl('icon-car')}
                                icon={faTruckArrowRight}
                            />
                            <span className={cl('transport_to')}>Vận Chuyển Tới</span>
                            <span className={cl('address')}>
                                Phường Tràng Tiền, Quận Hoàn Kiếm
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                            <div className={cl('transport-fee')}>
                                Phí Vận Chuyển
                                <span className={cl('transport-fee-price')}>₫0</span>
                            </div>
                        </div>
                    </div>
                    <div className={cl('color')}>
                        <span className={cl('title')}>Màu Sắc</span>
                        <div className={cl('list-color')}>
                            {data_s.color.map((item, index) => {
                                return (
                                    <div className={cl('phone-color')} key={index}>
                                        {item}
                                        <FontAwesomeIcon
                                            className={cl('icon-check')}
                                            icon={faCheck}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cl('quantity')}>
                        <span className={cl('title')}>Số Lượng</span>
                        <div className={cl('quantiy-item')}>
                            <FontAwesomeIcon
                                onClick={() =>
                                    !(quantity <= 1) && setQuantity((prev) => prev - 1)
                                }
                                icon={faMinus}
                            />
                            <input
                                onChange={(e) =>
                                    +e.target.value && setQuantity(+e.target.value)
                                }
                                type="text"
                                value={quantity}
                            />
                            <FontAwesomeIcon
                                onClick={() => setQuantity((prev) => prev + 1)}
                                icon={faPlus}
                            />
                        </div>
                    </div>

                    <div className={cl('buy')}>
                        <div onClick={() => handleOrder()} className={cl('add')}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            Thêm vào giỏ hàng
                        </div>
                        <div className={cl('buy-now')}>Mua ngay</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
