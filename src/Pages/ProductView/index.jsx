import classNames from 'classnames/bind';
import styles from './ProductView.module.scss';
import { dataProduct } from '@/assets/fake-data/Product';
import { useParams } from 'react-router-dom';

const cl = classNames.bind(styles);

function ProductView() {
    const { productId } = useParams();

    const { View } = dataProduct.find((items) => items.id.toString() === productId);

    const { data_s, image_s } = View;

    console.log(data_s);
    console.log(image_s);

    return (
        <div className={cl('wrapper')}>
            <h1>Product View</h1>
        </div>
    );
}

export default ProductView;
