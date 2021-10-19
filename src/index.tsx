import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {HashRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {FaSass} from "@react-icons/all-files/fa/FaSass";
import {FaAngleDoubleRight} from "@react-icons/all-files/fa/FaAngleDoubleRight";


const Test = () => {
    return(
        <div>
            <FontAwesomeIcon  size={"7x"} icon={faCoffee}  pull="right" />
            <FontAwesomeIcon  size={"7x"} icon={['far', "arrow-alt-right"]}  pull="left" />
    <p>sadas <FaAngleDoubleRight /> </p>
            <FaSass size={'8em'}  color={'red'} />
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
    <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

