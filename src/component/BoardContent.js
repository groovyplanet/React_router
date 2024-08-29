import { useParams } from "react-router-dom";

function BoardComponent(){
  const {num} = useParams();
  
  return(
    <>
  <h3>글 상세</h3>
  {num}번글 입니다. (추후에 네트워크 통신 처리)
    </>
  )
  
  }
  export default BoardComponent;