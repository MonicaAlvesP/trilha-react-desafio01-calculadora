import { useState } from "react";
import { Input } from "./components/Input";
import { Container, Content } from "./Styles/_styleBody";
import { ButtonPanel } from "./components/ButtonPanel";

export function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    if (num === '.' && currentNumber.includes('.')) return;
    setCurrentNumber(prev => `${prev === '0' && num !== '.' ? '' : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (op === '%') {
      if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
      }
      setOperation(op);
    } else {
      if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
      }
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      const firstNum = Number(firstNumber);
      const currentNum = Number(currentNumber);
      let result;

      switch (operation) {
        case '+':
          result = firstNum + currentNum;
          break;
        case '-':
          result = firstNum - currentNum;
          break;
        case 'x':
          result = firstNum * currentNum;
          break;
        case '/':
          if (currentNum === 0) {
            setCurrentNumber('Erro');
            return;
          }
          result = firstNum / currentNum;
          break;
          case '%':
            result = (firstNum * currentNum) / 100;
            break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <ButtonPanel
          onClear={handleOnClear}
          onAddNumber={handleAddNumber}
          onOperation={handleOperation}
          onEquals={handleEquals}
        />
      </Content>
    </Container>
  );
}
