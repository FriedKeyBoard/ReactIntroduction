import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [title,setTitle] = useState(['남자 코트 추천', '남자 바지 추천', '연희동 맛집 추천']);
    let [likeCount, setLikeCount] = useState(0);

    let posts = '고기 맛집'
    function titleMod() {
        var newArr = [...title];
        newArr.sort();

        setTitle(newArr);
    }
  return (
      <div>
          <div className="black-nav">
              <h4>React  Blog</h4>
              {/*<div className={posts} style={{color : 'blue', fontSize : '30px'}}>개발 Blog</div>*/}
          </div>
          <button onClick={titleMod}>button</button>
          <div className="list">
              <h3> {title[0]} <span onClick={ ()=>setLikeCount(likeCount+1)}>👍</span> {likeCount} </h3>
              <p>2월 17일 발행</p>
              <hr/>
          </div>
          <div className="list">
              <h3> {title[1]} </h3>
              <p>2월 17일 발행</p>
              <hr/>
          </div>
          <div className="list">
              <h3> {title[2]} </h3>
              <p>2월 17일 발행</p>
              <hr/>
          </div>

          <Modal></Modal>
      </div>
  )
}

function Modal(){
    return (
        <>
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
            <div></div>
        </>
    )
}

export default App
