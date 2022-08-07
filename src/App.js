import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textQuote: 'freeCodeCamp' ,
      Author: '' ,
      colorR: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          textQuote: result.content,
          Author: result.author,
         
        });
        console.log(result);
      });
  }
  generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          textQuote: result.content,
          Author: result.author,
          colorR: "#" + Math.floor(Math.random() * 16777215).toString(16)
        });
        
      });
  };

  render() {
    let randomColor = "#" + this.state.colorR;
    console.log(randomColor);
    return (
      <div className="back" style={{backgroundColor: this.state.colorR ,height:"100vh"}}>
        <div className="quote-box" id="quote-box" style={{backgroundColor: 'white' }}>
          <p className="text"  id="text">"{this.state.textQuote}"</p>
          <p className="author" id="author">- {this.state.Author}</p>
          <div className='buttons'>
          <a
            className="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${this.state.textQuote}" + - +${this.state.Author}`}
            target="_blank"
            rel="noreferrer"
            style={{backgroundColor: this.state.colorR }}
            id="tweet-quote"
          >
            Tweet
          </a>
          <button
            className="new-quote"
            id="new-quote"
            onClick={this.generateQuote}
            style={{ backgroundColor: this.state.colorR }}
          >
            New Quote
          </button>
          </div>
        </div>
      </div>
    );
  }
}
