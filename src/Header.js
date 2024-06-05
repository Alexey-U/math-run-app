import React from 'react';
import { useGlobalContext } from './context';

const Header = () => {
    const { state, setState, handleButtonPlus, handleButtonMinus, minutes, seconds, start, rightAnswers, wrongAnswers} = useGlobalContext();

  return (
    <div className="header">
{/*         { !start && <div className="header-box">
            <h3>Speed</h3>
            <div className="buttons-box">
                <button className="btn-header" onClick={() => handleButtonMinus('speed')}>-</button>
                <span>{state.speed}</span>
                <button className="btn-header" onClick={() => handleButtonPlus('speed', 5)}>+</button>
            </div>
        </div>} */}

        { !start && <div className="header-box">
            <h3>Complexity</h3>
            <div className="buttons-box">
                <button className="btn-header" onClick={() => handleButtonMinus('complexity')}>-</button>
                <span>{state.complexity}</span>
                <button className="btn-header" onClick={() => handleButtonPlus('complexity', 3)}>+</button>
            </div>
        </div> }

        { !start && <div className="header-box">
            <h3>Duration</h3>
            <div className="buttons-box">
                <button className="btn-header" onClick={() => handleButtonMinus('duration')}>-</button>
                <span>{state.duration}</span>
                <button className="btn-header" onClick={() => handleButtonPlus('duration', 15)}>+</button>
            </div>
        </div>}
        { !start && <div className="header-box">
            <h3>Mode</h3>
            <div className="select-box">
                <select value={state.mode} onChange={(e) => setState({...state, ['mode'] : e.target.value})}>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
            </div>
        </div>}
        {start &&
        <div className="header-box">
            <h3>Timer</h3>
            <div className="buttons-box">
                <span className="timer-span" style={{color:'orange', fontSize : 'x-large', fontWeight : '700'}}>{state.duration < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</span>
            </div>
        </div>}
        {start &&
        <div className="header-box">
            <h3>Right Answers</h3>
            <div className="buttons-box">
                <span className="timer-span" style={{color:'white', fontSize : 'x-large', fontWeight : '700'}}>{rightAnswers}</span>
            </div>
        </div>}
        {start &&
        <div className="header-box">
            <h3>Wrong Answers</h3>
            <div className="buttons-box">
                <span className="timer-span" style={{color:'red', fontSize : 'x-large', fontWeight : '700'}}>{wrongAnswers}</span>
            </div>
        </div>}

    </div>
  );
}

export default Header;