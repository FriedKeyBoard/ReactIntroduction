import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [title,setTitle] = useState(['남자 코트 추천', '남자 바지 추천', '연희동 맛집 추천']);
    let [likeCount, setLikeCount] = useState([0,0,0]);
    let [modal, setModal] = useState(false);


    function titleMod() {
        var newArr = [...title];
        newArr.sort();

        setTitle(newArr);
    }

    function addLikeCount(i){
        var newlikeCount = {...likeCount}
        newlikeCount[i] = newlikeCount[i]+1;
        setLikeCount(newlikeCount);
    }

  return (
      <div>
          <div className="black-nav">
              <h4>React  Blog</h4>
              {/*<div className={posts} style={{color : 'blue', fontSize : '30px'}}>개발 Blog</div>*/}
          </div>
          <button onClick={titleMod}>button</button>
          {/*<div className="list">*/}
          {/*    <h3> {title[0]} <span onClick={ ()=>setLikeCount(likeCount+1)}>👍</span> {likeCount} </h3>*/}
          {/*    <p>2월 17일 발행</p>*/}
          {/*    <hr/>*/}
          {/*</div>*/}
          {/*<div className="list">*/}
          {/*    <h3> {title[1]} </h3>*/}
          {/*    <p>2월 17일 발행</p>*/}
          {/*    <hr/>*/}
          {/*</div>*/}
          {/*<div className="list">*/}
          {/*    <h3 onClick={ () => modal === false ? setModal(true) : setModal(false)}> {title[2]} </h3>*/}
          {/*    <p>2월 17일 발행</p>*/}
          {/*    <hr/>*/}
          {/*</div>*/}

          {
              title.map(function (a,i){
                  return (
                      <div className="list" key={i}>
                          <h3 onClick={ () => setModal(!modal)}> {title[i]} <span onClick={() => addLikeCount(i)}>👍</span> {likeCount[i]} </h3>
                          <p>2월 17일 발행</p>
                          <hr/>
                      </div>
                  )
              })
          }

          {
            modal === true ? <Modal></Modal> : null
          }

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
