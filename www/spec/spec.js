specCtrl = function($scope) {
  $scope.specList = [
    {spec: 'angularjs', proficiency: '60',
      skill: [
        'controller, service, directive를 이용한 mvc형식 프로젝트 진행',
        'php, mysql을 연동하여 서버, DB connect 구현',
        'angularjs directive를 활용하여 간단한 코드 작성',
        'service의 특징을 활용한 단일 객체 데이터 관리',
        'directive를 활용한 html element수정',
        '중복 코드 작성을 피하기 위해 factory활용'
      ]
    },
    {spec: 'angularjs2', proficiency: '45',
      skill: [
        'typescript를 이용하여 고객 관리 서비스 앱 프로젝트 진행',
        'http service와 node.js를 이용하여 서버 통신',
        'phonegap push plugin을 사용하여 push기능 구현',
        'push 알람기능 구현'
      ]
    },
    {spec: 'ionic', proficiency: '55',
      skill:[
        'ionic framework를 이용한 앱 개발',
        'ionic에서 제공하는 directive 활용',
        '해상도와 화면 크기에 따른 반응형 웹앱 구현',
        'android, ios apk 생성',
        'apk 아이콘 디자인, 생성'
      ]
    },
    {spec: 'ionic2', proficiency: '45',
      skill: [
        'ionic2 framework를 이용한 앱 개발',
        'ionic2에서 제공하는 directive 활용',
        '해상도와 화면 크기에 따른 반응형 웹앱 구현',
        'android, ios apk 생성',
        'apk 아이콘 디자인, 생성'
      ]
    },
    {spec: 'node.js', proficiency: '25',
      skill: [
        'anguarjs, angularjs2와 연동하여 통신 가능',
        'mysql에 데이터 저장',
        'schedule, gcm을 활용한 push 기능 구현',
      ]
    },
    {spec: 'bootstrap', proficiency: '45',
      skill: [
        '반응형 웹/앱 구현 가능',
        'css, components를 사용하여 디자인 구상',
        'modal, carousel, dropdown등 javascript와 함께 활용'
      ]
    },
    {spec: 'html', proficiency: '60',
      skill: [
        '반응형을 고려한 화면 구현',
        'angular, javascript를 이용하여 modal, alert, popup화면 구현',
        'svg, canvas를 이용한 spinner, 그래프, 간당한 게임 구현'
      ]
    },
    {spec: 'css, scss', proficiency: '55',
      skill: [
        'element id와 class를 이용하여 css코드 재사용 고려',
        'scss의 변수를 활용하여 중복되는 코드 제거',
        'animation, translate, transition등을 이용하여 event 에니메이션 구현'
      ]
    },
    {spec: 'java', proficiency: '30', skill: '',
      skill: [
        'oracle, mysql 연동',
        'servlet과 jdbc를 이용한 자료 저장',
        'socket을 이용한 간단한 채팅 기능',
        '간단한 파일 입출력 기능',
        '싱글톤 패턴을 이용하여 단일 객체 서비스 구현',
        '클래스와 인터페이스 개념을 사용하여 코드 구현',
      ]
    },
    {spec: 'javascript', proficiency: '40',
      skill: [
        'element의 id와 class를 이용한 스타일, value 변경 가능',
        'ajax를 사용하여 메신저 제작',
        'java, angularjs, php와 함께 이용하여 홈페이지 제작'
      ]
    },
    {spec: 'jquery', proficiency: '30',
      skill: [
        'element의 id와 class를 이용한 스타일, value 변경 가능',
        'element의 위치를 이용한 홈페이지 퀵메뉴 구현',
        'ajax 통신 가능',
        'jquery plugin 사용, 필요시 customizing'
      ]
    },
    {spec: 'android', proficiency: '20',
      skill: [
        '메뉴생성과 리스트 구현',
        'socket, socket server를 이용하여 채팅 구현',
        'fragment를 이용하여 화면 구성 가능',
        '게시판과 채팅기능, 메뉴를 합한 카페 CRM앱 구현'
      ]
    },
    {spec: 'php', proficiency: '40',
      skill: [
        'angular를 이용한 서버 통신 구현',
        'crud화면 제작 가능',
        'javascript, bootstrap과 함께 사용'
      ]
    },
    {spec: 'oracle, mysql', proficiency: '40',
      skill: [
        'select, insert, delete, update등 기본적인 쿼리 작성',
        'Pk, Fk, autoincrement, not ull등을 고려한 기본적인 테이블 생성',
        'pk, fk, reference를 고려한 단순 db설계'
      ]
    },
    {spec: 'spring, eclips, vscode, android studio', proficiency: '35',
      skill: [
        '간당한 단축키 사용',
        '마켓에서 필요한 plugin 활용'
      ]
    },
    {spec: 'svn', proficiency: '35',
      skill: [
        '4인이상 그룹에서 협업 경험',
        'history관리',
        'sync활용하여 코드 취합'
      ]
    },
    {spec: 'github', proficiency: '40',
      skill: [
        'eclips, vscode, terminal을 활용하여 프로젝트 관리',
        '기존 프로젝트 github에 등록, github프로젝트 clone등 기본적인 프로젝트 관리',
        'add, commit, push, pull, checkout등 기본적인 history 관리',
        'branch 생성과 병합, 삭제를 활용한 프로젝트 버전관리',
        'release를 이용한 버전, 코드 관리'
      ]
    },
    {spec: 'trello', proficiency: '25',
      skill: [
        'agile을 위한 협업 툴로 사용',
        'sprint별로 일정 관리',
        '완료, 진행중, 지연중인 일정을 태그로 관리'
      ]
    }
  ];
}

app.controller('specCtrl', specCtrl);
