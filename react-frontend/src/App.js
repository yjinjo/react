import logo from "./logo.svg";
import { Button } from 'antd';
import "./App.css";

function App() {
  return <div>
    <Button type="primary" onClick={ () => console.log("clicked") }>
      Hello, Antd.
    </Button>
  </div>;
}

export default App;
