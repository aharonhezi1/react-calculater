import React from 'react';

import OperatorButton from './OperatorButton';
import NumButton from './NumButton';
import Screen from './Screen';
import ShortcutButtens from './ShortcutButtons';




export default class Calculater extends React.Component {
  state = {
    number1: '0',
    number2: '0',
    value: "0",
    operator: '',
    isOperatorDubbleClicked: false,
    isNumber1Clicked: true,
    isACnotCButton: true
  }
  plusMinus = String.fromCharCode(177);
  devide = String.fromCharCode(247);

  handleOnClickNumber = (label) => {
    let number;
    if (!this.state.operator) {
      number = (this.state.number1 === '0' && label !== '.' ? '' : this.state.number1) + label;
      this.setState(() => ({ number1: number, }));
    }
    else {
      if (this.state.operator === '=') {
        number = label === '.' ? '0.' : label;
        this.setState(() => ({
          number1: number,
          operator: '',
          isNumber1Clicked:true
        }));
      } else {
        number = (this.state.number2 === '0' && label !== '.' ? '' : this.state.number2) + label;
        this.setState(() => ({
          number2: number,
          isNumber1Clicked:false
        }));
      }
    }
    this.setState(() => ({
      value: number,
      isOperatorDubbleClicked: false,
      isNumberClicked:true,
      isACnotCButton: false
    }))
  }
  handleOnClickOnariOperator = (operator) => {
    const isEndDrill=this.state.operator==='=';
    if (this.state.isOperatorDubbleClicked && !isEndDrill)
    return;
     let number = !this.state.isNumber1Clicked || isEndDrill? parseFloat(this.state.number2) : parseFloat(this.state.number1)
    // let number1 = parseFloat(this.state.number1);
    // const number2 = parseFloat(this.state.number2);
    switch (operator) {
      case this.plusMinus:
        number = -number;
        break;
      case '%':
        number /= 100;
        break;
      default:
        break;
    }
    this.setState(() => ({
      value:number,
      number1:!this.state.isNumber1Clicked?this.state.number1:number,
      number2:!this.state.isOperatorDubbleClicked?number:this.state.number2
    }))
  }

  handleOnClickOperator = (operator) => {
    const isOperatorOn = !!this.state.operator;
    const lastOperator = this.state.operator;
    let number1 = parseFloat(this.state.number1);
    const number2 = parseFloat(this.state.number2);
    // const isEndDrill = !(operator === this.plusMinus || operator === '%');


    let value = number1;

    const digBelow01 = (value + '').split("").reverse().join("").indexOf('.');
    const digBelow02 = +(number2 + '').split("").reverse().join("").indexOf('.');
    const power = (digBelow01 > -1 ? digBelow01 : 0) + (digBelow02 > -1 ? digBelow02 : 0);
    let fix = 1;
    for (let i = 0; power > i; i++) fix *= 10;

    if (isOperatorOn && !this.state.isOperatorDubbleClicked)
      switch (lastOperator) {
        // case this.plusMinus:
        //   value=-value;
        case this.devide:
          value = value / number2;
          // value = (parseInt(value * fix) / fix)
          break;
        case 'x':
          value = value * number2;
          value = (parseInt(value * fix) / fix)//.toFixed(power);

          // value = fix !== -1 ? value.toFixed(fix - 1) : value;
          break;
        case '+':
          value = value + number2;
          break;
        case '-':
          value = value - number2;
          break;
        case "=":
          break;
        default:
          break;
      }

    this.setState(() => ({
      value,
      number1: value + '',
      number2: '0',
      operator,
      isOperatorDubbleClicked: true,
      is
      

    }));

  }

  handleOnClickC = () => {
    if (this.state.isACnotCButton)
      this.setState(() => ({
        number1: '0',
        number2: '0',
        value: "0",
        operator: '',
        isOperatorDubbleClicked: false
      }))
    else
      this.setState(() => ({

        number2: '0',
        value: this.state.number1,
        operator: this.state.operator,
        isOperatorDubbleClicked: true,
        isACnotCButton: true
      }))
  }

  render() {

    return (
      <div  >

        <table className="shadow" >
          <th colSpan={'4'}><div> <Screen number={this.state.value} /></div></th>
          <tr>
            <td><ShortcutButtens label={this.state.isACnotCButton ? 'AC' : 'C'} handleOnClick={this.handleOnClickC} /></td>
            <td><ShortcutButtens label={this.plusMinus} handleOnClick={this.handleOnClickOnariOperator} /></td>
            <td><ShortcutButtens label={'%'} handleOnClick={this.handleOnClickOnariOperator} /></td>
            <td><OperatorButton label={this.devide} handleOnClick={this.handleOnClickOperator} /></td>


          </tr>
          <tr>
            <td><NumButton label={'7'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'8'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'9'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><OperatorButton label={'x'} handleOnClick={this.handleOnClickOperator} /></td>
          </tr>
          <tr>
            <td><NumButton label={'4'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'5'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'6'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><OperatorButton label={'-'} handleOnClick={this.handleOnClickOperator} /></td>
          </tr>
          <tr>
            <td><NumButton label={'1'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'2'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><NumButton label={'3'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><OperatorButton label={'+'} handleOnClick={this.handleOnClickOperator} /></td>
          </tr>
          <tr>
            <td colSpan={'2'}  ><div className="bigCell"><NumButton label={'0'} handleOnClick={this.handleOnClickNumber} /></div></td>

            <td><NumButton label={'.'} handleOnClick={this.handleOnClickNumber} /></td>
            <td><OperatorButton label={'='} handleOnClick={this.handleOnClickOperator} /></td>
          </tr>
        </table>

      </div>
    );
  };
};