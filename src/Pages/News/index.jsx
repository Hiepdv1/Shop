import classNames from 'classnames/bind';
import styles from './News.module.scss';
import DataMenuItem from '@/Components/Layout/DefaultLayout/components/DataMenuItem';
import { Link, NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Button from '@/Components/Button';

const cl = classNames.bind(styles);

function News() {
    const linked = useParams();
    let data = [];

    const findData = (data) => {
        return data.find((item) => {
            if (item.path === linked.news) {
                item.check = true;
                return item;
            }
            if (item.subMenu) {
                const sub = findData(item.subMenu);
                return sub && item;
            }
        });
    };

    const { subMenu } = findData(DataMenuItem);

    subMenu.forEach((item) => {
        if (item.path === linked.news) {
            item.check = true;
            data = item.data_;
        } else {
            item.check = false;
        }
    });

    return (
        <div className={cl('wrapper')}>
            <div className={cl('news')}>
                <div className={cl('list-news')}>
                    {subMenu.map((item, index) => {
                        return (
                            <NavLink
                                to={`/${item.url}`}
                                key={index}
                                className={cl('new-item')}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#000',
                                    backgroundColor: isActive ? '#ed1b35' : '#F0F0F0',
                                })}
                            >
                                <span className={cl('item-title')}>{item.title}</span>
                            </NavLink>
                        );
                    })}
                </div>
                <div className={cl('content')}>
                    <div className={cl('list-tech-news')}>
                        <div className={cl('tech-news-left')}>
                            {data?.data_bn_1 && (
                                <>
                                    <span className={cl('tech-news-title')}>
                                        <div className={cl('tab')}>
                                            {data.data_bn_1.title_new}
                                        </div>
                                        <div>{data.data_bn_1.title}</div>
                                    </span>
                                    <img src={data.data_bn_1.img} alt="" />
                                </>
                            )}
                        </div>
                        <div className={cl('tech-news-right')}>
                            {data?.data_bn_2 && (
                                <div className={cl('tab-right-top')}>
                                    <span className={cl('tech-news-title')}>
                                        <div className={cl('tab')}>
                                            {data.data_bn_2.title_new}
                                        </div>
                                        <div>{data.data_bn_2.title}</div>
                                    </span>
                                    <img src={data.data_bn_2.img} alt="" />
                                </div>
                            )}
                            <div className={cl('tech-news-bottom')}>
                                {data?.data_bn_3?.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={cl('tab-right-bottom')}
                                        >
                                            <span className={cl('tech-news-title')}>
                                                <div className={cl('tab')}>
                                                    {item.title_new}
                                                </div>
                                                <div>{item.title}</div>
                                            </span>
                                            <img src={item.img} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cl('container')}>
                <div className={cl('left')}>
                    {data?.heading && (
                        <div className={cl('title')}>
                            <h2 className={cl('heading')}>Tin khuyến mại</h2>
                            <div className={cl('title-descript')}>
                                Tin khuyến mãi Viettel Store | Chuyên trang tổng hợp các
                                ưu đãi, chương trình khuyến mãi tại hệ thống cửa hàng
                                Viettel Store trên toàn quốc và trên website
                                <Link to="/"> {''}VHHsmartphone.vn.</Link>
                            </div>
                        </div>
                    )}
                    <div className={cl('list-news-promotion')}>
                        {data?.data_news?.map((item, index) => {
                            return (
                                <Link key={index} className={cl('item-news')}>
                                    <div className={cl('new-banner')}>
                                        <img src={item.img} alt="" />
                                        <span className={cl('promotion-category')}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className={cl('banner-content')}>
                                        <div className={cl('banner-content-title')}>
                                            {item.title}
                                        </div>
                                        <div className={cl('date-submitted')}>
                                            <FontAwesomeIcon icon={faClock} />
                                            {item.date}
                                        </div>
                                        <div className={cl('descript-banner')}>
                                            {item.descript}
                                        </div>

                                        <div className={cl('btn-more')}>
                                            <Button rim small mouse>
                                                XEM THÊM
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className={cl('right')}>
                    <div className={cl('list-banner')}>
                        {data?.data_list_banner?.map((item, index) => {
                            return (
                                <Link key={index} className={cl('item-banner')}>
                                    <img src={item.img} alt="" />
                                </Link>
                            );
                        })}
                    </div>
                    <div className={cl('new-post')}>
                        {data?.data_new_post && (
                            <>
                                <div className={cl('new-post-heading')}>
                                    <span className={cl('new-post-heading')}>
                                        BÀI VIẾT MỚI
                                    </span>
                                </div>
                                <div className={cl('list-new-post')}>
                                    {data?.data_new_post?.map((item, index) => {
                                        return (
                                            <Link key={index} className={cl('post-item')}>
                                                <div className={cl('post-item__img')}>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className={cl('post-content')}>
                                                    <div
                                                        className={cl(
                                                            'post-content__title',
                                                        )}
                                                    >
                                                        {item.title}
                                                    </div>
                                                    <div
                                                        className={cl(
                                                            'post-content__date',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon icon={faClock} />
                                                        {item.date}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
