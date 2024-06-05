import React from 'react';
import { useGlobalContext } from './context';

const Footer = () => {
    const {start, setStart} = useGlobalContext();

  return (
    <div className="footer">
        <div className="footer-box">
            <button className="btn-footer" onClick={() => setStart(!start)}>{ start ? 'Stop' : 'Start' }</button>
            {/* <button className="btn-footer" onClick={() => setStart(false)}>Stop</button> */}
        </div>
    </div>
  );
}

export default Footer;