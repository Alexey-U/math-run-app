import React, { useState, useContext, useEffect, useRef } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [start, setStart] = useState(false);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [condition, setCondition] = useState('showPressStart');
    const [seconds, setSeconds] = useState(0);
    const [firstNum, setFirstNum] = useState(getNum(112, 998));
    const [secondNum, setSecondNum] = useState(getNum(12, 98));
    const [result, setResult] = useState('');
    const [state, setState] = useState({
        speed : 3,
        complexity : 1,
        duration : 3,
        mode : '+'
    });
    const [minutes, setMinutes] = useState(state.duration);


useEffect(() => {
  setMinutes(state.duration);
  setSeconds(0);
}, [state.duration]);

useEffect(() => {
  const counterInterval = setInterval(() => {
    if(start === true) {
      if(minutes === 0 && seconds === 0) {
        setCondition('showStatistics');
        setTimeout(() => {
          setStart(false);
        }, 4000);
      }
      counter();
    }
    clearInterval(counterInterval);
  }, 1000);

});

useEffect(() => {
  if(start === true) {
    setCondition('showMathExpression');
  }
  if(start === false) {
    setCondition('showPressStart');
    setSeconds(0);
    setMinutes(state.duration);
    setRightAnswers(0);
    setWrongAnswers(0);
  }
}, [start]);


  function complexitySetter() {
    if(state.mode === '+') {
      setFirstNum(getNum(parseInt('1'.repeat(state.complexity-1) + '12'), parseInt('9'.repeat(state.complexity-1) + '98')));
      setSecondNum(getNum(parseInt('1'.repeat(state.complexity-1) + '12'), parseInt('9'.repeat(state.complexity-1) + '98')));
    }
    if(state.mode === '-') {
      setFirstNum(getNum(parseInt('1'.repeat(state.complexity) + '12'), parseInt('9'.repeat(state.complexity) + '98')));
      setSecondNum(getNum(parseInt('1'.repeat(state.complexity-1) + '2'), parseInt('9'.repeat(state.complexity) + '8')));
    }

    if(state.mode === '*') {
      setFirstNum(getNum(parseInt('1'.repeat(state.complexity) + '2'), parseInt('9'.repeat(state.complexity) + '8')));
      setSecondNum(getNum(12, 98));
    }

    if(state.mode === '/') {
      setFirstNum(getNum(parseInt('1'.repeat(state.complexity) + '2'), parseInt('9'.repeat(state.complexity) + '8')));
      setSecondNum(getNum(12, 98));
    }
  }


  function counter() {
    if(seconds === 0) {
      setSeconds(59);
      if(minutes > 0) {
        setMinutes(minutes - 1);
      }
    } else {
        if(condition !== 'showStatistics') {
          setSeconds(seconds - 1);
        }
    }
  }

  function resultChecker() {
    let res = 0;
    switch (state.mode) {
      case '+':
        res = firstNum + secondNum;
        break;
      case '-':
        res = firstNum - secondNum;
        break;
      case '/':
        res = firstNum / secondNum;
        break;
      case '*':
        res = firstNum * secondNum;
      break;
    }
    if(res === parseInt(result)) {
      setCondition('showCheckMark');
      complexitySetter();
      setResult('');
      setTimeout(() => {
        setCondition('showMathExpression');
      }, 600);  
      setRightAnswers(rightAnswers + 1);
    } else {
      setCondition('showError');
      complexitySetter();
      setResult('');
      setTimeout(() => {
        setCondition('showMathExpression');
      }, 600);
      setWrongAnswers(wrongAnswers + 1);
    }
  }

    function handleButtonPlus(button, maxArg) {
        if(state[button] < maxArg) {
            setState({...state, [button] : state[button] + 1});
        } 
    }

    function handleButtonMinus(button) {
        if(state[button] > 1) {
            setState({...state, [button] : state[button] - 1});
        }
    }

    function getNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

  return (
    <AppContext.Provider
      value={{ 
        start,
        setStart,
        state,
        setState,
        handleButtonPlus,
        handleButtonMinus,
        minutes,
        seconds,
        firstNum,
        secondNum,
        resultChecker,
        result,
        setResult,
        condition,
        rightAnswers,
        wrongAnswers
      
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }


/* 
condition('showPressStart')
condition('showExpression')
condition('showError')
condition('showMark')



*/