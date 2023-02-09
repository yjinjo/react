import logo from "./logo.svg";
import { Button } from 'antd';
import React from 'react';
import "./App.css";

class Counter1 extends React.Component {
  state = {
    value: this.props.initialValue
  }

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  }

  render() {
    const { value } = this.state;  // 현재의 상탯값을 참조
    return (
      <div>
        Counter1: { value }
        <Button onClick={this.onClick}>+1</Button>
      </div>
    ); // jsx 문법
  }
}

class FruitComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          <li>바나나</li>
          <li>사과</li>
          <li>딸기</li>
        </ul>
      </div>
    )
  }
}

function App() {
  return <div>
    <Counter1 initialValue={ 10 } />
    <FruitComponent />
  </div>;
}

export default App;
