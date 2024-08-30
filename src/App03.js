
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){

  const [raw, setRaw] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
        const data = await response.json();
        setRaw(data);
    };
    fetchData(); // useEffect가 마운트될 때 fetchData를 실행
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleClick = async()=>{

    //비동기 방식에서 데이터의 순서를 보장받고 싶다면 , 이렇게 작성해야 합니다.
    //  axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then(response=>{
    //   console.log(response.data);
    //   console.log(1);
    //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then(response=>{
    //   console.log(response.data);
    //   console.log(3);
    //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //   .then(response=>{
    //     console.log(response.data);
    //     console.log(5);
    //   });
    // });
    // });
    //async(이거 비동기야), await (그러니까 기다려)
    //1. async 함수 안에서만 await 키워드를 쓸 수 있음.
    //2. 만약 function 앞에 async를 붙이면 , 언제나 Promise 객체를 반환함
    //3. 함수의 return이 Promise라면 await 키워드를 붙이고 then을 생략할 수 있음
   
    //장점
    // 1. 코드가 간결해짐
    // 2. 수행 방식을 동기방식으로 바꾸면서 , 순서 보장이 들어감
    const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(data1.data);
    console.log(1);
    
    const data2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    console.log(data2.data);
    console.log(2);

    const data3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    console.log(data3.data);
    console.log(3);

    const result = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
                                .then(response=>response.json())
  

    console.log(result);
    
    
    // https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json
    // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
    
  }

//실습 - 힌트는 즉시실행 함수를 사용함
    // 화면 로드 시에 hi.json 데이터를 async, await으로 가져오는 프로그램 코드를 작성

  return(
    <>
    <h3>엑시오스로 데이터 받기</h3>
    <button onClick={handleClick}>
      클릭시 네트워크 통신으로 데이터 가져오기
    </button>

    <h3>로드시에 데이터 가져오기</h3>
{
    raw && <div>
    {raw.userId}<br/>
    {raw.userPw}<br/>
    {raw.userName}<br/>

    </div>
  }
   
    </>
  )
}
export default App;