/* eslint-disable */
import { useState } from 'react'; // 새로고침 없이 HRML에 랜더링되는 장점 (state 변경시 스무스하게 변경 가능)
import logo from './logo.svg';
import './App.css';

function App() {

  // 데이터를 변수에 저장하기
  let [글제목, 글제목변경] = useState(['코트 추천', '강남 고기 맛집', '홍대 스튜디오 추천']) // 자주 바뀌는, 중요한 데이터
  // let posts = '강남 고기 맛집' // 잘 안 바뀌는 데이터
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기(){
    var newAry = [...글제목]; //shallowcopy
    newAry[0] = '자켓 추천';
    글제목변경(newAry);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span> { 좋아요 } </h3>
        <p>12월 24일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>12월 25일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>

      <Modal />

    </div>
  );
}

//Component 만들기 (대문자로 시작) 반복출현하는 HTML 덩어리들, 자주 변경되는 HTML UI 덩어리들, 다른 페이지들 component로
function Modal(){
  return(
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>내용</p>
  </div>
  )
}

export default App;
