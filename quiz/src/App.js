import logo from './logo.svg';
import './App.css';

import Questionnaire from './components/Questionnaire'
function App() {
  return (
    <div className="App">
    <h1 style={{color:"red" , fontWeight:"bold"}}>JavaScript Quiz</h1>
    <Questionnaire />
    </div>
  );
}

export default App;
