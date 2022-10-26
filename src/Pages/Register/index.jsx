import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { dataBanner_5 } from '@/assets/fake-data/banner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function Register() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('bg')}>
                <div
                    style={{
                        backgroundImage: `url(${dataBanner_5.img})`,
                    }}
                    className={cl('bg-img')}
                ></div>
            </div>
            <div className={cl('content')}>
                <div className={cl('title')}>
                    <h2 className={cl('title-text')}>Đăng Ký</h2>
                </div>
                <form className={cl('form')} action="">
                    <div className={cl('form-group')}>
                        <input
                            id="useremail"
                            required
                            className={cl('input-text')}
                            type="text"
                        />
                        <label htmlFor="useremail" className={cl('title-input')}>
                            Email/Số điện thoại
                        </label>
                    </div>
                    <div className={cl('form-group')}>
                        <input
                            id="userpassword"
                            className={cl('input-text')}
                            type="password"
                            required
                        />
                        <label htmlFor="userpassword" className={cl('title-input')}>
                            Mật khẩu
                        </label>
                    </div>
                    <div className={cl('form-group')}>
                        <input
                            id="confirm-password"
                            className={cl('input-text')}
                            type="password"
                            required
                        />
                        <label htmlFor="confirm-password" className={cl('title-input')}>
                            Xác nhận mật khẩu
                        </label>
                    </div>
                    <input
                        className={`btn ${cl('btn-login')}`}
                        type="submit"
                        value="Đăng ký"
                    />
                    <div className={cl('no-account')}>— Đã có tài khoản —</div>
                    <div>
                        <Link to="/login">
                            <input
                                className={cl(`btn ${cl('btn-register')}`)}
                                type="submit"
                                value="Đăng nhập"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
