const bn1 = require('../images/News/Promotion-information/bn1.jpg')
const bn2 = require('../images/News/Promotion-information/bn2.png')
const bn3 = require('../images/News/Promotion-information/bn3.jpg')
const bn4 = require('../images/News/Promotion-information/bn4.jpg')
const bn5 = require('../images/News/Promotion-information/bn5.jpg')

const bn6 = require('../images/News/Promotion-information/bn6.jpg')
const bn7 = require('../images/News/Promotion-information/bn7.jpg')
const bn8 = require('../images/News/Promotion-information/bn8.jpg')
const bn9 = require('../images/News/Promotion-information/bn9.png')
const bn10 = require('../images/News/Promotion-information/bn10.jpg')


const b_n1 = require('../images/News/banner/bn1.png')
const b_n2 = require('../images/News/banner/bn2.jpg')

const new_post_1 = require('../images/News/Newpost/bn1.jpg')
const new_post_2 = require('../images/News/Newpost/bn2.jpg')
const new_post_3 = require('../images/News/Newpost/bn3.jpg')

const listBanner = [
    {
        img: b_n1
    },
    {
        img: b_n2
    }
]

const dataNewPost = [
    {
        title: '12 tính năng mới trên hệ điều hành MacOS Ventura ra mắt 2022',
        date: '12/11/2022 | 07:00 AM',
        img: new_post_1
    },
    {
        title: 'Đánh giá Redmi A1: Thiết kế cao cấp, pin khủng, giá hời',
        date: ' 11/11/2022 | 03:00 PM',
        img: new_post_2
    },
    {
        title: 'Đập hộp iPhone 14 Plus gồm những gì?',
        date: '11/11/2022 | 02:20 PM',
        img: new_post_3
    },
]

const dataPromotion = [
    {
        title: 'Tưng bừng khai trương siêu thị VHHsmartphone mới tại Vĩnh Long, tặng voucher mua sắm giá trị tới 1.000.000đ',
        date: '04/11/2022 | 12:26 PM',
        descript: 'Từ ngày 01/11 - 15/11/2022 khách hàng mua hàng tại siêu thị mới khai trương của VHHsmartphone tại địa...',
        img: bn1,
        category: 'Tin công nghệ'
    },
    {
        title: 'VHHsmartphone khai trương siêu thị mới tại Bình Dương, , 100% khách hàng nhận phiếu quà tặng trị giá tới 1.000.000đ',
        date: '04/11/2022 | 12:26 PM',
        descript: 'Để tiếp tục cung cấp cho khách hàng những sản phẩm công nghệ chính hãng giá tốt cùng dịch vụ...',
        img: bn2,
        category: 'Tin công khuyến mãi'
    },
    {
        title: 'Samsung Galaxy Week – Cơ hội mua sắm Samsung giảm đến 1,4 triệu thêm quà cực đã',
        date: '04/11/2022 | 12:26 PM',
        descript: 'Tham gia tuần lễ hotsale Samsung Galaxy Week tại VHHsmartphone, bạn sẽ được hưởng rất nhiều ưu đãi giảm...',
        img: bn3,
        category: 'Tin công nghệ'
    },
    {
        title: 'Đặt trước OPPO Reno8 Pro 5G rước ngay bộ quà trị giá 2.490.000đ',
        date: '06/10/2022 | 11:00 AM',
        descript: 'Từ ngày 05/10 – 14/10/2022, Viettel Store mở đặt trước OPPO Reno8 Pro 5G với giá bán hấp dẫn cùng...',
        img: bn4,
        category: 'Tin công nghệ'
    },
    {
        title: '[HOT] Tham gia ngay chương trình “Đập hộp trúng iPhone 14” trên Viettel Money',
        date: '06/10/2022 | 11:58 PM',
        descript: 'Toàn bộ khách hàng Viettel Money khi tham gia chương trình "Đập hộp trúng iPhone 14" trên Viettel Money sẽ...',
        img: bn5,
        category: 'Tin công nghệ'
    },
]


const dataPromotion_2 = [
    {
        title: 'Viettel Store mở kho SIM số online với vô vàn gói cước hấp dẫn',
        date: '13/06/2022 | 10:40 AM',
        descript: 'Nếu bạn đang muốn tìm một chiếc SIM mới thật đẹp như SIM phong thủy, SIM lộc tài, SIM sảnh...',
        img: bn6,
        category: 'Tin công nghệ'
    },
    {
        title: 'Nhận voucher giảm 20% cho hóa đơn kế tiếp khi thanh toán qua Viettel Money QR',
        date: '01/06/2022 | 02:44 AM',
        descript: 'Từ ngày 01/06/2022 tới hết ngày 30/06/2022, Viettel Store triển khai chương trình "Tung voucher giảm 20% cho hóa đơn...',
        img: bn7,
        category: 'Tin công nghệ'
    },
    {
        title: 'Tiền mặt liền tay, thỏa ngay mong đợi – Tới Viettel Store vay tiền mặt Mcredit ngay hôm nay',
        date: '04/11/2022 | 12:26 PM',
        descript: 'Vay tiêu dùng Mcredit là vay trả góp tiền không cần tài sản đảm bảo do Công ty Tài chính TNHH...',
        img: bn8,
        category: 'Dịch vụ tiện ích khác'
    },
    {
        title: 'Mua sim số đẹp trị giá từ 180.000đ – Nhận cơ hội vi vu du lịch nhân dịp sinh nhật Viettel Store',
        date: '06/10/2022 | 11:00 AM',
        descript: 'Từ ngày 01/05/2022 đến 31/05/2022, khách hàng mua SIM số đẹp có giá từ 180.000 đồng trở lên ( đã..',
        img: bn9,
        category: 'Danh sách khách hàng trúng thưởng'
    },
    {
        title: 'Bảo hiểm Thiết bị di động – Bảo vệ sức khỏe dế yêu của bạn giảm tới 35%, giá chỉ còn từ 165.000đ',
        date: '06/10/2022 | 11:58 PM',
        descript: 'Lại một chương trình đặc biệt nữa Viettel Store dành cho bạn đây!!! Mua bảo hiểm Thiết bị di động...',
        img: bn10,
        category: 'Dịch vụ tiện ích khác'
    },
]


export {
    dataPromotion,
    listBanner,
    dataNewPost,
    dataPromotion_2
}