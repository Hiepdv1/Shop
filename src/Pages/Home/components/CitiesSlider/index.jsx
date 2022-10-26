import classNames from 'classnames/bind';
import styles from './CitiesSlider.module.scss';
import { useState, useRef, useEffect } from 'react';
import { iconData_3 } from '@/assets/fake-data/icon';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function CitiesSlider({ data }) {
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
        }, 3000);
        timeID.current = timeId;
    };

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleNextSlider();
        }, 3000);
        timeID.current = timeId;

        return () => {
            return clearTimeout(timeId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlider]);

    return (
        <div
            onMouseOver={handleCleatAutoNextSlider}
            onMouseOut={handleAutoNextSlider}
            className={cl('slider')}
        >
            <div
                onClick={handlePrevSlider}
                style={{
                    backgroundImage: `url(${iconData_3.img})`,
                }}
                className={cl('btn-left')}
            ></div>
            <div className={cl('slider-parts')}>
                <div
                    style={{
                        transform: `translate3d(-${activeSlider}%, 0, 0)`,
                    }}
                    className={cl('list-slide')}
                >
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={cl('slider-part')}>
                                <Link className={cl('slider-link')}>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className={cl('slider-link__img')}
                                    />
                                </Link>
                                <h3 className={cl('title-banner')}>
                                    {item.title} {item.price}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                onClick={handleNextSlider}
                style={{
                    backgroundImage: `url(${iconData_3.img})`,
                }}
                className={cl('btn-right')}
            ></div>
        </div>
    );
}

export default CitiesSlider;
