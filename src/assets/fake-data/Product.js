import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const product_1 = require('../images/ProductsHome/product1.jpeg')
const product_2 = require('../images/ProductsHome/product2.jpeg')
const product_3 = require('../images/ProductsHome/product3.jpeg')
const product_4 = require('../images/ProductsHome/product4.jpeg')
const product_5 = require('../images/ProductsHome/product5.jpeg')
const product_6 = require('../images/ProductsHome/product6.jpeg')
const product_7 = require('../images/ProductsHome/product7.jpeg')
const product_8 = require('../images/ProductsHome/product8.jpeg')

const product_view_1 = require('../images/ProductsView/Product_1/bn.jpeg')
const product_view_2 = require('../images/ProductsView/Product_1/bn2.jpeg')
const product_view_3 = require('../images/ProductsView/Product_1/bn3.jpeg')
const product_view_4 = require('../images/ProductsView/Product_1/bn4.jpeg')
const product_view_5 = require('../images/ProductsView/Product_1/bn5.jpeg')
const product_view_6 = require('../images/ProductsView/Product_1/bn6.jpeg')

const dataProduct = [
    {
        id: 1,
        img: product_1,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện thoại di động mới Note30 Plus (8G / 256G) chơi game màn hình lớn 5G camera HD phiên bản 2022 hỗ trợ COD',
        hot: '51%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 4.3k',
        View: [

        ]
    },
    {
        id: 2,
        img: product_2,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện thoại S21 Ultra Bán điện thoại di động mới 2022 (12GB / 512GB) Android 5g Trò chơi của Google COD',
        hot: '50%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 3k',
        View: [

        ]
    },
    {
        id: 3,
        img: product_3,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điên Thoại OPPO Reno 6Z 5G Mới Chính Hãng. Nguyên Seal Đầy Đủ Phụ Kiện Bảo Hành 12 tháng',
        hot: '56%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 6k',
        View: {
            data_s: {
                price: '1.000.000 ₫',
                sale: '500.000 ₫',
                star: [
                    <FontAwesomeIcon icon={faStar} />,
                    <FontAwesomeIcon icon={faStar} />,
                    <FontAwesomeIcon icon={faStar} />,
                    <FontAwesomeIcon icon={faStar} />,
                    <FontAwesomeIcon icon={faStar} />,
                ],
                sold: 'Đã bán 6k',
            },
            image_s: [
                {
                    name: 'Điên Thoại OPPO Reno 6Z 5G Mới Chính Hãng. Nguyên Seal Đầy Đủ Phụ Kiện Bảo Hành 12 tháng',
                    alt: 'Anh',
                    img: product_view_1,

                },
                {
                    alt: 'Anh',
                    img: product_view_2
                },
                {
                    alt: 'Anh',
                    img: product_view_3
                },
                {
                    alt: 'Anh',
                    img: product_view_4
                },
                {
                    alt: 'Anh',
                    img: product_view_5
                },
                {
                    alt: 'Anh',
                    img: product_view_6
                },
            ]
        }
    },
    {
        id: 4,
        img: product_4,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện thoại di động Rino6 pro mới nguyên bản (6G / 256G) bán điện thoại chơi game thẻ kép Android 5G COD',
        hot: null,
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: null,
        hot_text: 'GIẢM',
        sold: 'Đã bán 1k',
        View: [

        ]
    },
    {
        id: 5,
        img: product_5,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện thoại M3 Pro Cần bán điện thoại di động nguyên bản (8G/128GB) sim kép 5G sạc nhanh trò chơi android',
        hot: '5%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 2k',
        View: [

        ]
    },
    {
        id: 6,
        img: product_6,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện Thoại Samsung Galaxy Z Flip3 5G 128GB',
        hot: '49%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 5k',
        View: [

        ]
    },
    {
        id: 7,
        img: product_7,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: 'Điện thoại Reno6 pro mới nguyên bản (12G/512G) bán điện thoại chơi game thẻ kép Android 5G 2022 phone',
        hot: '20%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 2.1k',
        View: [

        ]
    },
    {
        id: 8,
        img: product_8,
        price: '1.000.000 ₫',
        sale: '500.000 ₫',
        name: '[Mã ELSS8  giảm 8% tối đa 600K] Điện Thoại Samsung Galaxy M23 5G (6GB/128GB) - Hàng Chính Hãng',
        hot: '65%',
        star: [
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
            <FontAwesomeIcon icon={faStar} />,
        ],
        favourite: 'Yêu thích',
        hot_text: 'GIẢM',
        sold: 'Đã bán 2.1k',
        View: [

        ]
    },
]

export {
    dataProduct
}