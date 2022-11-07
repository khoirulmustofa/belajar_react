import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';



// // make function component
// function HelloComponent() {
//   return <p>Ini Dari HelloComponet</p>
// };

// // make arrow functions /statless component
// const HelloArrowComponent = () => {
//   return <p>Ini Dari HelloArrowComponent</p>
// };

// // make class component
// class HalloStatfullComponent extends React.Component {
//   render() {
//     return <p>Ini Dari HalloStatfullComponent</p>
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
