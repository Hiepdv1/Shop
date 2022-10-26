import classNames from 'classnames/bind';
import styles from './SliderRight.module.scss';
import { iconData_3 } from '@/assets/fake-data/icon';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function SliderRight({ data, time }) {
    const [activeSlider, setActiveSlider] = useState(0);

    const timeID = useRef();

    const maxSlider = (data.length - 1) * 100;
    const handlePrevSlider = () => {
        return activeSlider === 0
            ? setActiveSlider(maxSlider)
            : setActiveSlider((prev) => prev - 100);
    };

    const handleNextSlider = () => {
        return activeSlider >= maxSlider
            ? setActiveSlider(0)
            : setActiveSlider((prev) => prev + 100);
    };

    const handleCleatAutoNextSlider = () => {
        clearInterval(timeID.current);
    };

    const handleAutoNextSlider = () => {
        const timeId = setTimeout(() => {
            handleNextSlider();
        }, time);
        timeID.current = timeId;
    };

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleNextSlider();
        }, time);
        timeID.current = timeId;

        return () => {
            return clearTimeout(timeId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlider]);

    return (
        <div className={cl('slider')}>
            <div className={cl('slider-list')}>
                <div className={cl('control-btn')}>
                    <div
                        onClick={handlePrevSlider}
                        style={{
                            backgroundImage: `url(${iconData_3.img})`,
                        }}
                        className={cl('btn-left')}
                    ></div>
                    <div
                        onClick={handleNextSlider}
                        style={{
                            backgroundImage: `url(${iconData_3.img})`,
                        }}
                        className={cl('btn-right')}
                    ></div>
                </div>
                <div
                    onMouseOver={handleCleatAutoNextSlider}
                    onMouseOut={handleAutoNextSlider}
                    style={{
                        transform: `translate3d(-${activeSlider}%, 0, 0)`,
                    }}
                    className={cl('slider-parts')}
                >
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={cl('slider-part')}>
                                <Link>
                                    <img
                                        className={cl('slider-img')}
                                        src={item.img}
                                        alt={item.alt}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SliderRight;
