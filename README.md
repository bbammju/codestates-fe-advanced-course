# codestates-fe-advanced-course 사전과제
완성된 GIF 파일 및 배포 링크
  ![Animation](https://user-images.githubusercontent.com/96031088/182527368-7d45cf79-8055-41a9-bac7-756e96d66c60.gif)

  http://fe-course.s3-website.ap-northeast-2.amazonaws.com/

프로젝트 실행 방법

  npm install
  
  npm start
  
사용한 스택 목록

  React
  
  Styled-Component
  
  Axios

구현한 기능 목록

  게시글 리스트 받아와서 보여주기
  
  게시글 리스트에 마우스 올리면 글 색상 변경
  
  게시글 상세 페이지 구현 (댓글 수와 댓글 내용)

구현 방법 혹은 구현하면서 어려웠던 점

  파이널 프로젝트 당시 백엔드를 맡아 진행했던 터라 프론트쪽 코드는 오랜만에 작성하다보니 생각보다 시간이 많이 걸림
  
  Link 태그를 사용하려 했으나 오류가 나서 Navigate로 변경하는데 시간이 걸림

성능 최적화에 대해서 고민하고 개선한 방법

  comment를 받아올 때 처음에는 api 요청을 통해 500개를 다 받아와서 거기서 map을 돌리면서 일치하는 id를 찾아서 했으나 api 요청을 보내는 링크에 들어가보니 id에 맞는 comment만 보내줄 수 있는 요청이 있어 이를 사용해 500개를 받아오지 않고 id에 맞는 5개만 받아와서 바로 뿌려주는 식으로 변경
