import { faAngleDown, faAngleRight, faCaretLeft, faListUl, faMobileScreen, faMobileScreenButton, faPiggyBank, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data_news_1, data_news_2, data_news_3, data_news_4, data_news_5, data_news_6 } from '@/assets/fake-data/News'
import { dataNewPost, dataPromotion, dataPromotion_2, listBanner } from '@/assets/fake-data/Promotion'

const DataMenuItem = [
    {
        id: 1,
        title: 'Danh mục sản phẩm',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        url: null,
        subMenu: [
            {
                title: 'Điện thoại',
                url: 'phone',
                iconLeft: <FontAwesomeIcon icon={faMobileScreenButton} />,
                iconRight: <FontAwesomeIcon icon={faAngleRight} />,
                subMenu: null
            },
        ]
    },
    {
        id: 2,
        title: 'Tim theo hãng',
        url: null,
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 3,
        title: 'Sim số - Dịch vụ',
        url: null,
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 4,
        title: 'Mua máy kèm gói cước',
        url: null,
        iconLeft: <FontAwesomeIcon icon={faMobileScreen} />,
        subMenu: null
    },
    {
        id: 5,
        title: 'Trả góp 0%',
        url: null,
        iconLeft: <FontAwesomeIcon icon={faPiggyBank} />,
        subMenu: null
    },
    {
        id: 6,
        title: 'Độc quyền online',
        url: null,
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 7,
        title: 'Tin tức',
        iconLeft: <FontAwesomeIcon icon={faListUl} />,
        url: null,
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: [
            {
                id: 1,
                title: 'Tin khuyến Mãi',
                url: 'new/tin-khuyen-mai',
                path: 'tin-khuyen-mai',
                iconLeft: <FontAwesomeIcon icon={faCaretLeft} />,
                subMenu: null,
                check: false,
                data_: {
                    heading: 'Tin khuyến mại',
                    data_bn_1: {
                        ...data_news_1
                    },
                    data_bn_2: {
                        ...data_news_2
                    },
                    data_bn_3: [
                        ...data_news_3
                    ],
                    data_news: [
                        ...dataPromotion
                    ],
                    data_list_banner: [
                        ...listBanner
                    ],
                    data_new_post_check: {

                    },
                    data_new_post: [
                        ...dataNewPost
                    ]
                }
            },
            {
                id: 2,
                title: 'Tin dịch vụ',
                url: 'new/tin-dich-vu',
                path: 'tin-dich-vu',
                iconLeft: <FontAwesomeIcon icon={faCaretLeft} />,
                subMenu: null,
                check: false,
                data_: {
                    heading: 'Tin dịch vụ',
                    data_bn_1: {
                        ...data_news_4
                    },
                    data_bn_2: {
                        ...data_news_5
                    },
                    data_bn_3: [
                        ...data_news_6
                    ],
                    data_news: [
                        ...dataPromotion_2
                    ],
                    data_new_post: [
                        ...dataNewPost
                    ],
                    data_list_banner: [
                        ...listBanner
                    ],
                }
            }
        ]
    },

]

export default DataMenuItem