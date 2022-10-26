import { faAngleDown, faAngleRight, faHeadphonesSimple, faListUl, faMobileScreen, faMobileScreenButton, faPiggyBank, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const DataMenuItem = [
    {
        title: 'Danh mục sản phẩm',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        url: '',
        subMenu: [
            {
                title: 'Điện thoại',
                url: '',
                iconLeft: <FontAwesomeIcon icon={faMobileScreenButton} />,
                iconRight: <FontAwesomeIcon icon={faAngleRight} />,
                subMenu: null
            },
            {
                title: 'Máy tính bảng',
                url: '',
                iconLeft: <FontAwesomeIcon icon={faTabletScreenButton} />,
                iconRight: <FontAwesomeIcon icon={faAngleRight} />,
                subMenu: null

            },
            {
                title: 'Phụ kiện',
                url: '',
                iconLeft: <FontAwesomeIcon icon={faHeadphonesSimple} />,
                iconRight: <FontAwesomeIcon icon={faAngleRight} />,
                subMenu: null
            }
        ]
    },
    {
        id: 2,
        title: 'Tim theo hãng',
        url: '',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 3,
        title: 'Sim số - Dịch vụ',
        url: '',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 4,
        title: 'Mua máy kèm gói cước',
        url: '',
        iconLeft: <FontAwesomeIcon icon={faMobileScreen} />,
        subMenu: null
    },
    {
        id: 5,
        title: 'Trả góp 0%',
        url: '',
        iconLeft: <FontAwesomeIcon icon={faPiggyBank} />,
        subMenu: null
    },
    {
        id: 6,
        title: 'Độc quyền online',
        url: '',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },
    {
        id: 7,
        title: 'Tin tức',
        iconLeft: <FontAwesomeIcon icon={faListUl} />,
        url: '',
        iconRight: <FontAwesomeIcon icon={faAngleDown} />,
        subMenu: null
    },

]

export default DataMenuItem