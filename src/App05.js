import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextAPI";

function App(){

  //contextApi의 변화를 알릴때는 context의 provider를 사용합니다.
  //provider는 value props를 필수로 전달해야 합니다.

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  //ex
  //select 값이 변경되면 , state를 변경해서 , provider로 전달되는 색상을 바꿔보세요
  const [color , setColor] = useState('red');
  return(
    <>
    <h3>컨텍스트 API</h3>
    <ColorContext.Provider value={{color : color}}>
    <ColorComponent/>
    </ColorContext.Provider>

    <select value={color} onChange={handleColorChange}>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </select>

    </>
  )
}
export default App;