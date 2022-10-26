import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {
    policeSecurity_1,
    policeSecurity_2,
    policeSecurity_3,
} from '@/assets/fake-data/police';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function Footer() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('policy-security')}>
                <div className={cl('cl')}>
                    {policeSecurity_1.map((item, index) => {
                        return (
                            <div key={index} className={cl('group')}>
                                <Link className={cl('policy-link')}>{item.title}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className={cl('cl')}>
                    {policeSecurity_2.map((item, index) => {
                        return (
                            <div key={index} className={cl('group')}>
                                <Link className={cl('policy-link')}>{item.title}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className={cl('cl')}>
                    {policeSecurity_3.map((item, index) => {
                        return (
                            <div key={index} className={cl('group')}>
                                <Link className={cl('policy-link')}>{item.title}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={cl('address')}>
                © 2018 Công ty TNHH Nhà nước Một thành viên Thương mại và Xuất nhập khẩu
                Viettel. Đăng ký doanh nghiệp số 0104831030, do Sở Kế hoạch và Đầu tư Hà
                Nội cấp lần đầu ngày 25/01/2006, thay đổi lần thứ 38 ngày 01/07/2019. Địa
                chỉ: Số 01, Phố Giang Văn Minh, phường Kim Mã, quận Ba Đình, Thành phố Hà
                Nội. Chịu trách nhiệm nội dung: Đinh Sơn Tùng.
            </div>
        </div>
    );
}

export default Footer;
