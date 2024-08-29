import { Route, Routes } from 'react-router-dom';
import Info from './component/Info';
import Home from './component/Home';
import UserComponent from './component/User';  // User 이름을 UserComponent로 변경
import BoardContentComponent from './component/BoardContent';  // User 이름을 BoardContentComponent로 변경
import BoardComponent from './component/Board';  // User 이름을 BoardComponent로 변경
import Header from './layout/Header';
import Mypage from './component/Mypage';

function App() {
  return (
    <Routes>
      {/* 중첩라우터 */}
      <Route element={<Header/>}>
      <Route path='/' element={<Home />} />
      <Route path='/info/:num' element={<Info />} />
      <Route path='/user' element={<UserComponent />} />
      </Route>
      {/* <Route path='/board' element={<BoardComponent />} />
      <Route path='/board/:num' element={<BoardContentComponent />} /> */}
       {/* 중첩라우터 */}
      <Route path='/board' element={<BoardComponent />} >
      <Route path=':num' element={<BoardContentComponent />} />
      </Route>
      {/* navigate 컴포넌트  */}
        <Route path="/mypage" element={<Mypage/>}/>
    </Routes>
  );
}

export default App;
