import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { dataBanner_5 } from '@/assets/fake-data/banner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function Login() {
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
                    <h2 className={cl('title-text')}>Đăng Nhập</h2>
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
                    <div className={cl('control')}>
                        <input id="check" className={cl('check')} type="checkbox" />
                        <label htmlFor="check" className={cl('control-checkbox')}>
                            <span className={cl('btn-check')}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={cl('caption')}>Nhớ mật khẩu</span>
                        </label>
                        <span>
                            <Link
                                className={cl('forgot-password')}
                                to="/login/forgotpassword"
                            >
                                Quên mật khẩu
                            </Link>
                        </span>
                    </div>
                    <input
                        className={`btn ${cl('btn-login')}`}
                        type="submit"
                        value="Đăng nhập"
                    />
                    <div className={cl('no-account')}>— Chưa có tài khoản —</div>
                    <div>
                        <Link to="/register">
                            <input
                                className={cl(`btn ${cl('btn-register')}`)}
                                type="submit"
                                value="Đăng ký"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
