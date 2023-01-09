import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let runningTotal;

  let equalsButton;
  let plusButton;
  let minusButton;
  let multiplyButton;
  let divideButton;

  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;

  beforeEach(() => {
    container = render(<Calculator/>);
    runningTotal = container.getByTestId('running-total');

    
    equalsButton = container.getByTestId('operator-equals');
    plusButton = container.getByTestId('operator-add');
    minusButton = container.getByTestId('operator-subtract');
    multiplyButton = container.getByTestId('operator-multiply');
    divideButton = container.getByTestId('operator-divide');

    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    // const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add two numbers together', () => {

    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should be able to subtract one number from another', () => {
    
    fireEvent.click(button7);
    fireEvent.click(minusButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should be able to multiply one number by another', () => {

    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');

  })

  it('should be able to divide one number by another', () => {

    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should be able to concatenate multiple button clicks', () => {

    fireEvent.click(button9);
    fireEvent.click(button8);
    fireEvent.click(button7);
    fireEvent.click(button6);
    expect(runningTotal.textContent).toEqual('9876');

  })

  it('should be able to chain multiple operations together', () => {
    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button2);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(divideButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('4.5')
  })

  it('should be able to clear the running total without affecting the calculation', () => {

    const clearButton = container.getByTestId('clear');

    fireEvent.click(button9);
    fireEvent.click(button8);
    fireEvent.click(button7);
    fireEvent.click(button6);
    fireEvent.click(clearButton);
    expect(runningTotal.textContent).toEqual("0");
  })

})

