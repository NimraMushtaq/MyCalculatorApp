
import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1,2,3,"+"],
  [0, ".", "="],
];

function App() {
  return (
    <div>
      <h2 className='title'>My Calculator App</h2>
      <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn,index)=>(
            <Button
            value={btn}
            key={index}
            />
    
          ))}
        </ButtonBox>
      </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
