const THEATERS = [
    {
      name : '충무아트센터 대극장',
      prefix: 'ㅊ',
      addr : '서울 중구 퇴계로 387',
      home : 'https://www.caci.or.kr',
      img  : '../img/theater-chungmu.png',
      note : '시야·잔향 모두 준수. 2층 D·E 구역이 가성비 최고.'
    },
    {
        name : '충무아트센터 블랙',
        prefix: 'ㅊ',
        addr : '서울 중구 퇴계로 387',
        home : 'https://www.caci.or.kr',
        img  : '../img/theater-chungmublack.png',
        note : '시야·잔향 모두 준수. 2층 D·E 구역이 가성비 최고.'
      },
    {
      name : '광림아트센터 BBCH홀',
      prefix: 'ㄱ',
      addr : '서울 강남구 압구정로 161',
      home : 'http://www.klarts.kr/',
      img  : '../img/theater-bbch.png',
      note : '1층 중앙 C~E구역 최적, 3층은 거리감 큼.'
    },
    {
      name : '샤롯데씨어터',
      prefix: 'ㅅ',
      addr : '서울 송파구 올림픽로 240',
      home : 'http://www.charlottetheater.co.kr',
      img  : '../img/theater-charlotte.png',
      note : '2층 C구역 앞열은 중앙 음향·시야 우수.'
    },
    {
        name : '예술의 전당',
        prefix: 'ㅇ',
        addr : '서울 서초구 서초동 700',
        home : 'https://www.sac.or.kr/site/main/home',
        img  : '../img/theater-yedang.png',
        note : ''
      },
      {
        name : '세종문화회관 대극장',
        prefix: 'ㅅ',
        addr : '서울 종로구 세종로 175',
        home : 'https://www.sejongpac.or.kr/portal/main/main.do',
        img  : '../img/theater-sejong.png',
        note : ''
      },
      {
        name : '두산아트센터 연강홀',
        prefix: 'ㄷ',
        addr : 'https://www.doosanartcenter.com/ko',
        home : '서울 종로구 종로33길 15',
        img  : '../img/theater-dusan.png',
        note : ''
      },{
        name : '백암아트홀',
        prefix: 'ㅂ',
        addr : '서울 강남구 삼성동 170-5',
        home : 'http://www.baekamhall.com/',
        img  : '../img/theater-100am.png',
        note : ''
      },{
        name : '블루스퀘어 신한카드홀',
        prefix: 'ㅂ',
        addr : '서울 용산구 이태원로 294',
        home : 'https://www.bluesquare.kr/',
        img  : '../img/theater-blue.png',
        note : ''
      },{
        name : '유니버설아트센터',
        prefix: 'ㅇ',
        addr : '서울 광진구 능동 25',
        home : 'http://www.uac.co.kr/',
        img  : '../img/theater-univer.png',
        note : ''
      },{
        name : '홍익대 대학로 아트센터 대극장',
        prefix: 'ㅎ',
        addr : '서울 종로구 대학로 57',
        home : 'https://www.hongik.ac.kr/kr/index.do',
        img  : '../img/theater-hongikbig.png',
        note : ''
      },
      {
        name : '홍익대 대학로 아트센터 소극장',
        prefix: 'ㅎ',
        addr : '서울 종로구 대학로 57',
        home : 'https://www.hongik.ac.kr/kr/index.do',
        img  : '../img/theater-hongiksmall.png',
        note : ''
      },{
        name : 'GS아트센터',
        prefix: 'G',
        addr : '서울 강남구 논현로 508',
        home : 'https://www.gsartscenter.com/',
        img  : '../img/theater-gs.png',
        note : ''
      },{
        name : 'KT & G 상상마당 대치아트홀',
        prefix: 'K',
        addr : '서울 강남구 대치동 1002',
        home : 'https://www.sangsangmadang.com/main/DC',
        img  : '../img/theater-ktg.png',
        note : ''
      },{
        name : 'NOL 유니플렉스 1관',
        prefix: 'N',
        addr : '서울 종로구 동숭동 1-94',
        home : 'http://www.uniplex.co.kr/',
        img  : '../img/theater-uni1.png',
        note : ''
      },
      {
        name : 'NOL 유니플렉스 2관',
        prefix: 'N',
        addr : '서울 종로구 동숭동 1-94',
        home : 'http://www.uniplex.co.kr/',
        img  : '../img/theater-uni2.png',
        note : ''
      },{
        name : '국립정동극장',
        prefix: 'ㄱ',
        addr : '서울 중구 정동길 43',
        home : 'https://www.jeongdong.or.kr/portal/main/main.do',
        img  : '../img/theater-jung.png',
        note : ''
      },{
        name : '대학로 TOM 1관',
        prefix: 'ㄷ',
        addr : '서울 종로구 대학로8가길 85',
        home : 'http://www.towntom.com/',
        img  : '../img/theater-tom1.png',
        note : ''
      },
      {
        name : '대학로 TOM 2관',
        prefix: 'ㄷ',
        addr : '서울 종로구 대학로8가길 85',
        home : 'http://www.towntom.com/',
        img  : '../img/theater-tom2.png',
        note : ''
      },{
        name : '링크아트센터드림 드림1관',
        prefix: 'ㄹ',
        addr : '서울 종로구 동숭길 123',
        home : 'https://blog.naver.com/dreamartcenter',
        img  : '../img/theater-link1.png',
        note : ''
      },
      {
        name : '링크아트센터드림 드림2관',
        prefix: 'ㄹ',
        addr : '서울 종로구 동숭길 123',
        home : 'https://blog.naver.com/dreamartcenter',
        img  : '../img/theater-link2.png',
        note : ''
      },
      {
        name : '링크아트센터드림 드림3관',
        prefix: 'ㄹ',
        addr : '서울 종로구 동숭길 123',
        home : 'https://blog.naver.com/dreamartcenter',
        img  : '../img/theater-link3.png',
        note : ''
      },
      {
        name : '링크아트센터드림 드림4관',
        prefix: 'ㄹ',
        addr : '서울 종로구 동숭길 123',
        home : 'https://blog.naver.com/dreamartcenter',
        img  : '../img/theater-link4.png',
        note : ''
      },
      {
        name : '링크아트센터 페이코홀',
        prefix: 'ㄹ',
        addr : '서울 종로구 대학로14길 29',
        home : 'http://www.linkartscenter.com',
        img  : '../img/theater-pay.png',
        note : ''
      },
      {
        name : '링크아트센터 벅스홀',
        prefix: 'ㄹ',
        addr : '서울 종로구 대학로14길 29',
        home : 'http://www.linkartscenter.com',
        img  : '../img/theater-bucks.png',
        note : ''
      },
      {
        name : '예스24 스테이지 1관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로12길 21',
        home : 'https://yes24stage.com',
        img  : '../img/theater-stage1.png',
        note : ''
      },
      {
        name : '예스24 스테이지 2관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로12길 21',
        home : 'https://yes24stage.com',
        img  : '../img/theater-stage2.png',
        note : ''
      },
      {
        name : '예스24 스테이지 3관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로12길 21',
        home : 'https://yes24stage.com',
        img  : '../img/theater-stage3.png',
        note : ''
      },
      {
        name : '예스24 아트원 1관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로 12길 83',
        home : 'https://yes24stage.com/',
        img  : '../img/theater-art1.png',
        note : ''
      },
      {
        name : '예스24 아트원 2관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로 12길 83',
        home : 'https://yes24stage.com/',
        img  : '../img/theater-art2.png',
        note : ''
      },
      {
        name : '예스24 아트원 3관',
        prefix: 'ㅇ',
        addr : '서울 종로구 대학로 12길 83',
        home : 'https://yes24stage.com/',
        img  : '../img/theater-art3.png',
        note : ''
      },
      {
        name : 'LG아트센터 서울 LG SICNATURE홀',
        prefix: 'L',
        addr : '서울 강서구 마곡중앙로 136',
        home : 'https://www.lgart.com/home/ko/main',
        img  : '../img/theater-lg.png',
        note : ''
      },
      {
        name : '국립극장 해오름극장',
        prefix: 'ㄱ',
        addr : '서울 중구 장충단로 59',
        home : 'https://www.ntok.go.kr/ntok/main.do',
        img  : '../img/theater-sun.png',
        note : ''
      },
        {
        name : '우리금융아트홀',
        prefix: 'ㅇ',
        addr : '서울 송파구 올림픽로 424',
        home : 'https://www.ksponco.or.kr/olympicpark/menu.es?mid=a20301031100',
        img  : '../img/theater-uri.png',
        note : ''
      },
      {
        name : '이해랑예술극장',
        prefix: 'ㅇ',
        addr : '서울 중구 필동로 1길 30',
        home : 'https://larts.dongguk.edu/main',
        img  : '../img/theater-lee.png',
        note : ''
      },
      {
        name : '대학로 자유극장',
        prefix: 'ㄷ',
        addr : '서울 종로구 동숭동 1-45',
        home : 'https://jautheater.modoo.at/',
        img  : '../img/theater-free.png',
        note : ''
      },
      {
        name : '플러스씨어터',
        prefix: 'ㅍ',
        addr : '서울 종로구 대학로 12길 73',
        home : 'https://plustheater.modoo.at/',
        img  : '../img/theater-plus.png',
        note : ''
      },
      {
        name : '한전아트센터',
        prefix: 'ㅎ',
        addr : '서울 서초구 서초동 1355',
        home : 'https://home.kepco.co.kr/kepco/AR/main.do?menuCd=FN10',
        img  : '../img/theater-elec.png',
        note : ''
      },
      {
        name : '인터파크 서경스퀘어 스콘 1관',
        prefix: 'ㅇ',
        addr : '서울 종로구 동숭길 148',
        home : 'https://www.skuniv.ac.kr/main',
        img  : '../img/theater-scone1.png',
        note : ''
      },
      {
        name : '인터파크 서경스퀘어 스콘 2관',
        prefix: 'ㅇ',
        addr : '서울 종로구 동숭길 148',
        home : 'https://www.skuniv.ac.kr/main',
        img  : '../img/theater-scone2.png',
        note : ''
      },
      {
        name : 'et theatre 1',
        prefix: 'E',
        addr : '서울 종로구 혜화로 17',
        home : '',
        img  : '../img/theater-et.png',
        note : ''
      },
      {
        name : '코엑스 신한카드 아티움',
        prefix: 'ㅋ',
        addr : '서울 강남구 영동대로 513',
        home : 'https://www.coexartium.co.kr/',
        img  : '../img/theater-coex.png',
        note : ''
      },
      {
        name : '동덕여대 공연예술센터 코튼홀',
        prefix: 'ㄷ',
        addr : '서울 종로구 동숭길 126-0',
        home : 'https://www.dongduk.ac.kr/www/main/index.do#none',
        img  : '../img/theater-dong.png',
        note : ''
      },
      {
        name : '예그린씨어터',
        prefix: 'ㅇ',
        addr : '서울 종로구 동숭길 130-8',
        home : 'https://www.yegreen.kr/',
        img  : '../img/theater-yegreen.png',
        note : ''
      }

  ];