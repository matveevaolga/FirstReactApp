import logo from './logo.svg';
import './App.css';
import Question1 from './components/Question1'
import Question2 from './components/Question2'

const Test = () => {
  return (
    <>
    <h1>Тест по математике</h1>

    <form id="quizForm">
      <Question1/>
      <Question2/>
      <button type="button" onclick="submitTest()">Завершить тест</button>
    </form>
    
    {/* проблема из-за display: none */}
    {/* <div id="results" style="display: none">
      <h2>Результаты теста</h2>
      <p id="resultMessage"></p>
    </div> */}
    </>
  );
}

export default Test;
