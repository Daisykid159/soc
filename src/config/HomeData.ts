// const image1 = require('../assets/image/ic_khancap.png');
// const image2 = require('../assets/image/ic_baocao.png');
// const image3 = require('../assets/image/ic_canhbao.png');
// const image4 = require('../assets/image/ic_hdat.png');
// const image5 = require('../assets/image/ic_ttanm.png');
// const image6 = require('../assets/image/ic_tools.png');
import {SvgXml} from 'react-native-svg';
import {svgs} from '../assets/index';
export default {
  data: [
    {
      // imageUrl: image1,
      title: 'DS Cảnh báo',
      path: 'WarningScreen',
      svgPath: svgs.SvgWarning,
    },
    {
      // imageUrl: image2,
      title: 'Báo cáo',
      path: 'ReportScreen',
      svgPath: svgs.SvgReport,
    },
    {
      // imageUrl: image3,
      title: `Tin tức`,
      path: 'NewsScreen',
      svgPath: svgs.SvgNews,
    },
    {
      // imageUrl: image4,
      title: `Nguy cơ \n An ninh`,
      path: 'SecurityRickScreen',
      svgPath: svgs.SvgEarth,
    },
    {
      // imageUrl: image5,
      title: `Đào tạo`,
      path: 'ReportData',
      svgPath: svgs.SvgEducate,
    },

    {
      // imageUrl: image6,
      title: 'Hướng dẫn \n    An toàn',
      path: 'Help',
      svgPath: svgs.SvgBills,
    },
    {
      // imageUrl: image5,
      title: `Liên hệ`,
      path: 'NewsScreen',
      svgPath: svgs.SvgPhone,
    },
    {
      // imageUrl: image6,
      title: 'FAQ',
      path: 'ToolScreen',
      svgPath: svgs.SvgFAQ,
    },
  ],
};
