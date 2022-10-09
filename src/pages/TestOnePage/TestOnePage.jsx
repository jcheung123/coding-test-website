import React, { Component } from 'react';
import './TestOnePage.css';
import { testOneData } from '../../testDataBank';
import Button from 'react-bootstrap/Button';

class TestOnePage extends Component {
  state = {
    displayQuestion: 0,
    userSelection: '',
    choices: [],
    disabled: true,
    submitTest: false
  }

  componentDidMount() {
    this.setState(() => {
      return {
        questions: testOneData[this.state.displayQuestion].question,
        choices: testOneData[this.state.displayQuestion].choices
      };
    });
  }

  handleNextBtn = () => {
    this.setState({displayQuestion: this.state.displayQuestion + 1})
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.displayQuestion !== prevState.displayQuestion) {
      this.setState(() => {
        return {
          questions: testOneData[this.state.displayQuestion].question,
          choices: testOneData[this.state.displayQuestion].choices,
          disabled: true
        }
      })
    }
  }

  checkIfSelected = (hasSelected) => {
    this.setState({ userSelection: hasSelected, disabled: false });
  };


  submitTestHandler = () => {
    if (this.state.displayQuestion === testOneData.length - 1) {
      this.setState({submitTest: true})
    }
  }
  
  render() {
    const { choices, userSelection, displayQuestion, submitTest } = this.state
    
    if (submitTest) {
      return (
        <div className="quiz-section">
          <h3>Your Responses Has Been Submitted Successfully.</h3>
        </div>
      )
    } else {
      return (
        <div className="quiz-section"> 
            <h1>JavaScript Multiple Choice Test</h1>
            <br /><br />
            <h2>{this.state.questions}</h2>

            {choices.map((c) => (
              <h4
                className={userSelection === c ? "selectedStyling" : "choicesStyling"}
                onClick={() => this.checkIfSelected(c)}
              >
                {c}
              </h4>
            ))}

            {displayQuestion < testOneData.length - 1 && (
              <Button variant="primary" size="lg"
                disabled={this.state.disabled}
                onClick={this.handleNextBtn}
              > Next {'>'}
              </Button>
            )}

            {displayQuestion === testOneData.length - 1 && (
              <Button variant="primary" size="lg"
                disabled={this.state.disabled}
                onClick={this.submitTestHandler}
              > Submit Test {'>'}
              </Button>
            )}
        </div>
      )
    } 
  };
}

export default TestOnePage;