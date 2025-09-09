import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [title,setTitle] = useState(['남자 코트 추천', '남자 바지 추천', '연희동 맛집 추천']);
    let [likeCount, setLikeCount] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [titleNumber, setTitleNumber] = useState(0);
    let [inputValue, setInputValue] = useState('');


    function titleMod() {
        var newArr = [...title];
        newArr.sort();

        setTitle(newArr);
    }
    
    function titleChange(){
        var newArr = [...title];
        newArr = ['여자 코트 추천', '남자 바지 추천', '연희동 맛집 추천'];

        setTitle(newArr);
    }

    function addLikeCount(i){
        var newlikeCount = {...likeCount}
        newlikeCount[i] = newlikeCount[i]+1;
        setLikeCount(newlikeCount);
    }

    function addList(str){
        var newArr = [...title];

        // for (var i = newArr.length-1; i>=0; i--){
        //     newArr[i+1] = newArr[i];
        // }
        // newArr[0] = str;

        newArr.unshift(str);

        setTitle(newArr);
    }

    function deleteList(num){
        var newArr = [...title];
        // var modArr = [];
        //
        // for (var i = 0; i < newArr.length-1; i++){
        //
        //     if(i < num){
        //         modArr[i] = newArr[i];
        //     }else {
        //         modArr[i] = newArr[i+1];
        //     }
        // }

        newArr.splice(num, 1);

        setTitle(newArr);
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
                          <h3 onClick={ () => {setModal(!modal); setTitleNumber(i)}}> {title[i]} <span onClick={(e) => {e.stopPropagation(); addLikeCount(i)}}>👍</span> {likeCount[i]} </h3>
                          <p>2월 17일 발행 <button onClick={ () => {deleteList(i)} }>삭제</button></p>
                          <hr/>
                      </div>
                  )
              })
          }

          <input type="text" onChange={(e)=>{setInputValue(e.target.value);}}/>
          <button onClick={() => {addList(inputValue)} }>추가</button>

          {
            modal === true ? <Modal color={'yellow'} title={title} titleChange={titleChange} titleNumber={titleNumber}></Modal> : null
          }
          <Modal2></Modal2>

      </div>
  )
}

function Modal(props){
    return (
        <>
            <div className="modal" style={{background : props.color}}>
                <h2>{props.title[props.titleNumber]}</h2>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={props.titleChange}>글수정</button>
            </div>
            <div></div>
        </>
    )
}

class Modal2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name : 'kim',
            age : 20
        }
    }
    render() {
        return(
            <div>
                안녕 {this.state.age}
                <button onClick={()=>{this.setState({age : 21})}}>버튼</button>
            </div>
        )
    }
}

export default App
