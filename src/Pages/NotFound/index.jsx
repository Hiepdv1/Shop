import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cl('wrapper')}>
            <h1>NotFound</h1>
            <div>
                <Link to="/">Trở về trang chủ</Link>
            </div>
        </div>
    );
}

export default NotFound;
