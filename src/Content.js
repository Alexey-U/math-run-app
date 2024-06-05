import { useGlobalContext } from './context';
import { FcCheckmark } from 'react-icons/fc';
import { VscClose } from 'react-icons/vsc';

const Content = () => {
    const { start, firstNum, secondNum, state, resultChecker, result, setResult, condition, rightAnswers, wrongAnswers } = useGlobalContext();

  const handleKeypress = e => {
    if (e.charCode === 13) {
      resultChecker();
    }
  };

  return (
    <>
    <div className="content">
        { condition === 'showPressStart' && <h1 className="content-h1">PRESS START</h1>}

        { condition === 'showError' && <h1 className="content-h1">< VscClose size={60} style={{ fill: 'red', position : 'absolut' }} /></h1>}

        { condition === 'showCheckMark' && <h1 className="content-h1">< FcCheckmark size={60} /></h1>}

        { condition === 'showStatistics' && <h1 className="content-h1" style={{color : 'orange'}}>Correct : {rightAnswers} - Wrong : {wrongAnswers}</h1>}

        { condition === 'showMathExpression' && <h1 className="content-h1">{firstNum}{state.mode}{secondNum} = 
        <input value={result} autoFocus={true} onKeyPress={handleKeypress} onChange={(e) => setResult(e.target.value)} className="content-input" type="text" placeholder="?" /><button className="btn-check" onClick={resultChecker} type="button">Check</button></h1> }
    </div>
    </>
  );
}

export default Content;