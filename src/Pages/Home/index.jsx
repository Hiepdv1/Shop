import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { dataBanner } from '@/assets/fake-data/banner';
import CitiesSlider from './components/CitiesSlider';
import { dataSlider, dataSlider_2, dataSlider_3 } from '@/assets/fake-data/slider';
import SliderRight from './components/SliderRight';
import { Link } from 'react-router-dom';
import { dataBanner_2 } from '@/assets/fake-data/banner';
import Category from './components/Category';
import { dataFeaturedProducts } from '@/assets/fake-data/featuredProduct';
import { dataProduct } from '@/assets/fake-data/Product';
import Products from './components/Products';
import Payment from './components/Payment';
import { dataPayments } from '@/assets/fake-data/payment';
import HotSellingList from './components/HotSellingList';
import { dataSliderProduct } from '@/assets/fake-data/product-slider';
import { dataBanner_3, dataBanner_4 } from '@/assets/fake-data/banner';

const cl = classNames.bind(styles);

function Home() {
    const { data1, data2 } = dataSliderProduct;

    return (
        <div className={cl('container')}>
            <div className={cl('banner')}>
                <img
                    className={cl('banner__img')}
                    src={dataBanner.img}
                    alt={dataBanner.alt}
                />
            </div>
            <div className={cl('tranfer')}>
                <div className={cl('slide-left')}>
                    <CitiesSlider data={dataSlider} />
                </div>
                <div className={cl('slide-right')}>
                    <SliderRight time={3000} data={dataSlider_2} />
                    <SliderRight time={2500} data={dataSlider_3} />
                    <div className={cl('advertisement')}>
                        <Link>
                            <div className={cl('content')}>
                                <span className={cl('content-name')}>VHH Smartphone</span>
                                <div className={cl('spec-note')}>
                                    <span className={cl('dots')}></span>
                                    <span className={cl('ping')}></span>
                                </div>
                                <span className={cl('content-title')}>
                                    Đặt trước AirPods Pro thế hệ 2 - Chỉ từ 6.165.500đ
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className={cl('banner', {
                    modify: true,
                })}
            >
                <img
                    className={cl('banner__img')}
                    src={dataBanner_2.img}
                    alt={dataBanner_2.alt}
                />
            </div>

            <Category data={dataFeaturedProducts} />

            <Products data={dataProduct} />

            <Payment data={dataPayments} />

            <HotSellingList data={data1} />
            <HotSellingList data={data2} />

            <div className={cl('banner-last-container')}>
                <div className={cl('banner-last')}>
                    <Link>
                        <img src={dataBanner_3.img} alt={dataBanner_3.alt} />
                    </Link>
                </div>
                <div className={cl('banner-last')}>
                    <Link>
                        <img src={dataBanner_4.img} alt={dataBanner_4.alt} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
