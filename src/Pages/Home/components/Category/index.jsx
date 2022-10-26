import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

const cl = classNames.bind(styles);

function Category({ data }) {
    return (
        <div className={cl('wrapper')}>
            <h2 className={cl('title')}>Danh mục nổi bật</h2>
            <div className={cl('featured')}>
                {data.map((item, index) => {
                    return (
                        <Link
                            to={`/infomation-${item.id}`}
                            key={index}
                            className={cl('featured-item')}
                        >
                            <img
                                className={cl('featured-item__img')}
                                src={item.img}
                                alt={item.alt}
                            />
                            <span className={cl('featured-item__title')}>
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Category;
