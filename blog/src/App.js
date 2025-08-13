import logo from './logo.svg';
import './App.css';
import {useState} from "react";

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
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
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
            {/*<img src={logo} alt=""/>*/}
            {/*<h4>{func()}</h4>*/}


        </div>
    );
}

export default App;
