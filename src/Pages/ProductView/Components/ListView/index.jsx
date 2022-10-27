import classNames from 'classnames/bind';
import styles from './ListView.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cl = classNames.bind(styles);

function ListView({ data, Over, active }) {
    const [transfer, setTransfer] = useState(0);

    const width = data.length * 20 - 5 * 20;

    const handleNext = () => {
        return transfer < width && setTransfer((prev) => prev + 20);
    };

    const handlePrev = () => {
        return transfer > 0 && setTransfer((prev) => prev - 20);
    };

    return (
        <div className={cl('wrapper')}>
            {data.length > 5 && (
                <>
                    <div onClick={handlePrev} className={cl('control-left')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div onClick={handleNext} className={cl('control-right')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </>
            )}
            <div
                style={{
                    transform: `translate3d(-${transfer}%, 0px, 0px)`,
                }}
                className={cl('list')}
            >
                {data.map((item, index) => {
                    return (
                        <div
                            onMouseOver={() => Over(item)}
                            key={index}
                            className={cl('img-part-item', {
                                active: item.id === active.id,
                            })}
                        >
                            <img src={cl(item.img)} alt={item.alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListView;
