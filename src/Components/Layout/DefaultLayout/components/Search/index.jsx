import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { iconData_1 } from '@/assets/fake-data/icon';

const cl = classNames.bind(styles);

function Search() {
    return (
        <div className={cl('search')}>
            <form className={cl('form')} action="">
                <div className={cl('form-search')}>
                    <input
                        className={cl('form-input__search')}
                        type="text"
                        placeholder="Bạn cần tìm sản phẩm nào..."
                    />
                    <div className={cl('form-item__icon-search')}>
                        <img
                            className={cl('icon-search')}
                            src={iconData_1.img}
                            alt={iconData_1.alt}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
