import React from "react";
import ReactDOM from "react-dom";
import Header from "./App";
import About from "./about";
import Footer from "./footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="">
          <About />

          <Footer />
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body
);
