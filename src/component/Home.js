import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
    <h3>홈화면</h3>
    <Link to='/user?name=홍길동&age=20'>유저페이지</Link>
    <br/>
    <Link to='/info/1'>인포1페이지</Link>
    <Link to='/info/2'>인포2페이지</Link>
    <Link to='/info/3'>인포3페이지</Link>
    </div>
  )
}
export default Home;