import React, { Component } from 'react';
import '../TestOnePage/TestOnePage.css';
import { testTwoData } from '../../testDataBank';
import Button from 'react-bootstrap/Button';

class TestTwoPage extends Component {
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
        questions: testTwoData[this.state.displayQuestion].question,
        choices: testTwoData[this.state.displayQuestion].choices
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
          questions: testTwoData[this.state.displayQuestion].question,
          choices: testTwoData[this.state.displayQuestion].choices,
          disabled: true
        }
      })
    }
  }

  checkIfSelected = (hasSelected) => {
    this.setState({ userSelection: hasSelected, disabled: false });
  };


  submitTestHandler = () => {
    if (this.state.displayQuestion === testTwoData.length - 1) {
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
            <h1>Python Multiple Choice Test</h1>
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

            {displayQuestion < testTwoData.length - 1 && (
              <Button variant="primary" size="lg"
                disabled={this.state.disabled}
                onClick={this.handleNextBtn}
              > Next {'>'}
              </Button>
            )}

            {displayQuestion === testTwoData.length - 1 && (
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

export default TestTwoPage;