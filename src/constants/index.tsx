// hanwha-motiev images
import HanwhaMainImage01 from '@/assets/images/hanwha/hanwha_home01.png';
import HanwhaMainImage02 from '@/assets/images/hanwha/hanwha_home02.png';
import HanwhaConceptImage01 from '@/assets/images/hanwha/hanwha_concept01.png';
import HanwhaProgressImage01_01 from '@/assets/images/hanwha/hanwha_map01.png';
import HanwhaProgressImage01_02 from '@/assets/images/hanwha/hanwha_map02.png';
import HanwhaProgressImage02_01 from '@/assets/images/hanwha/hanwha_reservation01.png';
import HanwhaProgressImage03_01 from '@/assets/images/hanwha/hanwha_chargingstatus01.png';
import HanwhaProgressImage03_02 from '@/assets/images/hanwha/hanwha_chargingstatus02.gif';
import HanwhaProgressImage04_01 from '@/assets/images/hanwha/hanwha_charging_history01.png';
import HanwhaProgressImage04_02 from '@/assets/images/hanwha/hanwha_charging_history02.png';
// pantos images
import PantosMainImage01 from '@/assets/images/pantos/pantos_main.png';
import PantosConceptImage01 from '@/assets/images/pantos/pantos_concept01.png';
import PantosConceptImage02 from '@/assets/images/pantos/pantos_concept02.png';
import PantosProgressImage01 from '@/assets/images/pantos/pantos_member_management01.png';
import PantosProgressImage02 from '@/assets/images/pantos/pantos_receipt.png';
import PantosProgressImage03 from '@/assets/images/pantos/pantos_dashboard.png';
import PantosProgressImage04 from '@/assets/images/pantos/pantos_settlement.png';
// convatec images
import ConvatecMainImage01 from '@/assets/images/convatec/convatec_main01.png';
import ConvatecMainImage02 from '@/assets/images/convatec/convatec_main02.png';
import ConvatecConceptImage01 from '@/assets/images/convatec/convatec_concept01.png';
import ConvatecProgressImage01_01 from '@/assets/images/convatec/convatec_pdf01.png';
import ConvatecProgressImage01_02 from '@/assets/images/convatec/convatec_pdf02.png';
import ConvatecProgressImage02_01 from '@/assets/images/convatec/convatec_bookmark.png';
import ConvatecProgressImage03_01 from '@/assets/images/convatec/convatec_memo.png';
import ConvatecProgressImage03_02 from '@/assets/images/convatec/convatec_highlight.png';
import ConvatecProgressImage04_01 from '@/assets/images/convatec/convatec_product01.png';
import ConvatecProgressImage04_02 from '@/assets/images/convatec/convatec_product02.png';

export const projectList = [
  {
    id: 0,
    title: 'sechan',
    description: '프론트엔드 김세찬입니다.',
  },
  {
    id: 1,
    title: 'hanwha-motiev',
    description: '한화모티브',
    description02: '기존 전기차 충전 한화모티브 앱 리뉴얼',
    type: 'mobile',
    project: {
      projectTitle: 'Hanwha-motiev',
      projectStack01: 'React-native',
      projectStack02: 'Typescript',
      projectStack03: 'Styled-component',
      projectStack04: 'Recoil',
      projectStack05: 'React-query',
      mainImg01: HanwhaMainImage01,
      mainImg02: HanwhaMainImage02,
      projectConceptDesc01:
        '한화모티브에서 기존에 운영중이던 전기차 충전소 찾기 및 충전 앱 리뉴얼 프로젝트',
      projectConceptImg01: HanwhaConceptImage01,
      projectConceptDesc02:
        '전국의 전기차 충전소를 대상으로 현위치 기준 주변 충전소 및 추천 충전소 노출하여 전기차 충전을 용이하게 할 수 있게 도와주는 서비스입니다.',
      projectConceptImg02: '',
      projectProgressDesc01: `현 위치를 기반으로 주변 충전소를 볼 수 있습니다. 지도 내의 marker custom을 위하여 react-native naver map api로는 한계가 있어 naver map api와 webview를 함께 이용하여 개발하였으며, 즐겨찾는 충전소 확인 / 검색도 가능합니다.\n\n 지도 내의 충전소의 경우 전체 충전기 갯수와 현재 사용가능 / 사용중 / 설치예정 / 사용불가의 상태를 핀의 색상으로 보여주어 충전소의 상태를 한눈에 확인 가능하여 전기차주의 불편함을 덜어주었습니다. 또한 지도 축소 시 충전소 여러개가 겹쳐보일 경우 clustering 기능을 사용하여 지역 내 충전소 갯수와 충전소의 현재 상태를 확인할 수 있습니다.`,
      projectProgressDescTitle01: 'MAP',
      projectProgressImg01_01: HanwhaProgressImage01_01,
      projectProgressImg01_02: HanwhaProgressImage01_02,
      projectProgressDesc02:
        '현 위치를 기반으로 주변 충전소를 확인한 후 충전소 터치 시 충전소의 상태와 바로 예약할 수 있는 찜하기 기능이 있습니다. 지도뿐만 아니라 시간 기반으로 예약을 하고 싶은 전기차주를 위하여 먼저 원하는 시간을 선택하면 그 시간에 맞는 충전소만 보여지게 되며 그 중에 원하는 충전소를 먼저 찜할 수 있습니다.',
      projectProgressDescTitle02: 'RESERVATION',
      projectProgressImg02_01: HanwhaProgressImage02_01,
      projectProgressDesc03:
        '실시간으로 충전현황도 확인 가능하며, 페이지 진입 시 충전 중일 경우 react-native animated를 이용한 인터렉션이 노출되며 실시간으로 남은 시간과 충전 금액 / 충전량 등을 확인할 수 있습니다.',
      projectProgressDescTitle03: 'CHARGING STATUS',
      projectProgressImg03_01: HanwhaProgressImage03_01,
      projectProgressImg03_02: HanwhaProgressImage03_02,
      projectProgressDesc04:
        'svg-chart를 이용하여 line-chart 및 curved-chart를 custom하여 개발하였습니다.\n 충전을 할 때마다 데이터가 점점 쌓여 가장 많이 충전한 달 / 주 / 충전량이 노출되며, 내가 선호하는 충전방식 및 자주 방문한 충전소 등의 내용을 차트를 통하여 확인할 수 있는 소소한 재미도 있습니다.',
      projectProgressDescTitle04: 'CHARGING HISTORY',
      projectProgressImg04_01: HanwhaProgressImage04_01,
      projectProgressImg04_02: HanwhaProgressImage04_02,
    },
  },
  {
    id: 2,
    title: 'pantos',
    description: '판토스입니다.',
    description02: '운송사 / 화주 / 관리자 어드민 웹 개발',
    type: 'web',
    project: {
      projectTitle: 'Pantos',
      projectStack01: 'Jquery',
      projectStack02: 'Javascript',
      projectStack03: 'css5',
      projectStack04: 'Ajax',
      mainImg01: PantosMainImage01,
      mainImg02: '',
      projectConceptDesc01:
        'pantos 운송 시스템의 전반적인 관리와 회원 관리 및 템플릿 등록과 오더 현황을 확인할 수 있는 웹 개발하였습니다.',
      projectConceptImg01: PantosConceptImage01,
      projectConceptDesc02: '',
      projectConceptImg02: PantosConceptImage02,
      projectProgressDesc01: `전체적인 회원을 jquery data-tables를 이용하여 테이블로 한눈에 볼 수 있게 개발하였으며, 상태별 / 날짜별로 검색이 가능합니다.\n현재 페이지 내에서 popup을 통하여 계정 등록이 가능합니다.`,
      projectProgressDescTitle01: 'MEMBER MANAGEMENT',
      projectProgressImg01_01: PantosProgressImage01,
      projectProgressDesc02: `기본 인수증 외의 인수증 템플릿을 custom하여 관리 가능합니다.\n기존의 종이 인수증 서명 방식은 분실의 위험이 있기에 이를 보완하기 위해 전자 인수증을 이용하여 간편하게 서명할 수 있도록 개발하였습니다.`,
      projectProgressDescTitle02: `RECEIPT\nMANAGEMENT`,
      projectProgressImg02_01: PantosProgressImage02,
      projectProgressDesc03:
        'chart.js의 line-chart와 doughnut-chart를 이용하여 각자 다른 차트를 사용함으로써 각종 운송 오더의 현황을 차별화되게 확인 할 수 있도록 개발하였습니다.\n오늘의 오더 / 이번주의 오더 / 이번달의 오더를 filter기능으로 확인 할 수 있고, 같은 방식으로 비정상인수 내역을 확인할 수 있어 인수 내역을 확실하게 관리할 수 있습니다.',
      projectProgressDescTitle03: 'CHART',
      projectProgressImg03_01: PantosProgressImage03,
      projectProgressDesc04:
        '화주와 운송사별로 상단의 버튼을 기준으로 정산 내역을 data-tables로 확인 가능합니다.\n기간별로 법인별로 구분하여 검색 가능하며, data-tables excel다운로드 기능을 이용하여 엑셀로 다운로드하여 PC내에서 관리할 수 있게 개발하였습니다.',
      projectProgressDescTitle04: `SETTLEMENT\nMANAGEMENT`,
      projectProgressImg04_01: PantosProgressImage04,
    },
  },
  {
    id: 3,
    title: 'convatec',
    description: '콘바텍입니다.',
    description02: 'PDF 뷰어 앱 개발',
    type: 'mobile',
    project: {
      projectTitle: 'Convatec',
      projectStack01: 'React-native',
      projectStack02: 'Javascript',
      projectStack03: 'Styled-component',
      projectStack04: 'Recoil',
      projectStack05: 'Axios',
      mainImg01: ConvatecMainImage01,
      mainImg02: ConvatecMainImage02,
      projectConceptDesc01:
        'convatec에서 출판한 임상 장•요루관리정석 도서를 PDF로 제공하는 앱을 개발 프로젝트',
      projectConceptImg01: ConvatecConceptImage01,
      projectConceptDesc02: `환자들 대상으로 임상 장•요루관리에 대한 정보를 담은 PDF를 제공합니다\n실제로 책을 보듯 중요한 부분에 메모를 할 수 있으며, 강조하고 싶은 부분에 형관펜으로 그어서 언제든 쉽게 다시 볼 수 있습니다.`,
      projectConceptImg02: '',
      projectProgressDesc01: `PDF 페이지 첫 진입 시 튜토리얼 페이지가 overlay되며, PDF의 기본적인 사용법이 보여집니다.\n상단의 인덱싱 터치 시, 여러가지 인덱싱 페이지 제목이 나오며 터치하여 해당페이지로 이동 가능합니다.`,
      projectProgressDescTitle01: 'PDF VIEWER',
      projectProgressImg01_01: ConvatecProgressImage01_01,
      projectProgressImg01_02: ConvatecProgressImage01_02,
      projectProgressDesc02: `PDF페이지별로 bookmark 버튼을 터치하여 등록이 가능하며, 메인페이지에서 설정해둔 bookmark로 바로 이동이 가능합니다.\n우측 상단의 메모 / 북마크 버튼 터치 시, animation으로 toggle되며 현재 등록해 둔 메모를 확인하며 해당페이지로 이동 가능합니다.`,
      projectProgressDescTitle02: 'BOOKMARK',
      projectProgressImg02_01: ConvatecProgressImage02_01,
      projectProgressDesc03: `PDF를 보며 저장해두고 싶은 위치에 memo를 입력하여 저장이 가능하며, 저장해둔 memo는 메인페이지에서 확인 가능합니다.\n실제 도서를 읽는 것처럼 highlight를 이용하여 강조를 해둘수있습니다.\n\nreact-native 내에서는 구현하기 어렵다고 판단하여 webview를 통하여 web기반으로 기능을 구현하여 앱 내에선 x,y좌표를 이용하여 해당 위치에 memo 및 highlight를 표시할 수 있게 개발하였습니다.`,
      projectProgressDescTitle03: 'HIGHLIGHT & MEMO',
      projectProgressImg03_01: ConvatecProgressImage03_01,
      projectProgressImg03_02: ConvatecProgressImage03_02,
      projectProgressDesc04: `PDF 정독 중 관련된 페이지에서 convatec의 상품정보 페이지로 갈 수 있는 버튼이 노출됩니다.\n언제든지 환자(사용자)에게 필요한 정보를 제공하기 위하여 특정 페이지에서만 버튼이 노출되게 개발하였고, 버튼 터치 시 별도의 페이지로 넘어가 해당 제품의 상세정보를 확인할 수 있습니다.`,
      projectProgressDescTitle04: 'PRODUCT DETAIL',
      projectProgressImg04_01: ConvatecProgressImage04_01,
      projectProgressImg04_02: ConvatecProgressImage04_02,
    },
  },
  {
    id: 4,
    title: 'school-trip',
    description: '스쿨트립입니다.',
    description02: '교육여행 신청 및 견적 플랫폼 웹 개발',
    type: 'web',
    project: {
      projectTitle: 'School-trip',
      projectStack01: 'React',
      projectStack02: 'Typescript',
      projectStack03: 'Styled-component',
      projectStack04: 'Recoil',
      projectStack05: 'React-query',
      mainImg01: '',
      mainImg02: '',
      projectConceptDesc01: '',
      projectConceptImg01: '',
      projectConceptDesc02: '',
      projectConceptImg02: '',
      projectProgressDesc01: '',
      projectProgressDescTitle01: '',
      projectProgressImg01: '',
      projectProgressDesc02: '',
      projectProgressDescTitle02: '',
      projectProgressImg02: '',
      projectProgressDesc03: '',
      projectProgressDescTitle03: '',
      projectProgressImg03: '',
      projectProgressDesc04: '',
      projectProgressDescTitle04: '',
      projectProgressImg04: '',
    },
  },
  {
    id: 5,
    title: 'hubbing',
    description: '허빙입니다.',
    description02: '아르바이트 / 사장님 알바 및 급여관리 앱 개발',
    type: 'mobile',
    project: {
      projectTitle: 'Hubbing',
      projectStack01: 'React-native',
      projectStack02: 'Typescript',
      projectStack03: 'Styled-component',
      projectStack04: 'Recoil',
      projectStack05: 'Axios',
      mainImg01: '',
      mainImg02: '',
      projectConceptDesc01: '',
      projectConceptImg01: '',
      projectConceptDesc02: '',
      projectConceptImg02: '',
      projectProgressDesc01: '',
      projectProgressDescTitle01: '',
      projectProgressImg01: '',
      projectProgressDesc02: '',
      projectProgressDescTitle02: '',
      projectProgressImg02: '',
      projectProgressDesc03: '',
      projectProgressDescTitle03: '',
      projectProgressImg03: '',
      projectProgressDesc04: '',
      projectProgressDescTitle04: '',
      projectProgressImg04: '',
    },
  },
  {
    id: 6,
    title: 'alba-edu',
    description: '알바에듀입니다.',
    description02: '학생,학부모 / 선생 과외 매칭 플랫폼 웹 개발',
    type: 'web',
    project: {
      projectTitle: 'Alba-edu',
      projectStack01: 'React',
      projectStack02: 'Javascript',
      projectStack03: 'Styled-component',
      projectStack04: 'Recoil',
      projectStack05: 'Axios',
      mainImg01: '',
      mainImg02: '',
      projectConceptDesc01: '',
      projectConceptImg01: '',
      projectConceptDesc02: '',
      projectConceptImg02: '',
      projectProgressDesc01: '',
      projectProgressDescTitle01: '',
      projectProgressImg01: '',
      projectProgressDesc02: '',
      projectProgressDescTitle02: '',
      projectProgressImg02: '',
      projectProgressDesc03: '',
      projectProgressDescTitle03: '',
      projectProgressImg03: '',
      projectProgressDesc04: '',
      projectProgressDescTitle04: '',
      projectProgressImg04: '',
    },
  },
];
