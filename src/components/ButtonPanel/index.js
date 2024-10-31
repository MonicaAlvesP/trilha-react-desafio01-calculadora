import { Button } from '../Button/index';
import { Row } from '../../Styles/_styleBody';

export const ButtonPanel = ({ onClear, onAddNumber, onOperation, onEquals }) => {
  return (
    <>
      <Row>
        <Button label="CE" onClick={onClear} />
        <Button label="C" onClick={onClear} />
        <Button label="%" onClick={() => onOperation('%')} />
        <Button label="/" onClick={() => onOperation('/')} />
      </Row>
      <Row>
        <Button label="7" onClick={() => onAddNumber('7')} />
        <Button label="8" onClick={() => onAddNumber('8')} />
        <Button label="9" onClick={() => onAddNumber('9')} />
        <Button label="x" onClick={() => onOperation('x')} />
      </Row>
      <Row>
        <Button label="4" onClick={() => onAddNumber('4')} />
        <Button label="5" onClick={() => onAddNumber('5')} />
        <Button label="6" onClick={() => onAddNumber('6')} />
        <Button label="-" onClick={() => onOperation('-')} />
      </Row>
      <Row>
        <Button label="1" onClick={() => onAddNumber('1')} />
        <Button label="2" onClick={() => onAddNumber('2')} />
        <Button label="3" onClick={() => onAddNumber('3')} />
        <Button label="+" onClick={() => onOperation('+')} />
      </Row>
      <Row>
        <Button label="FIM" />
        <Button label="0" onClick={() => onAddNumber('0')} />
        <Button label="." onClick={() => onAddNumber('.')} />
        <Button label="=" onClick={onEquals} />
      </Row>
    </>
  );
}
