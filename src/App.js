import quizLogo from './svg/quiz.svg';
import './css/App.css';
import './css/bootstrap.css';
import { HeaderComponent } from './js/HeaderComponent';
import { FormComponent } from './js/FormComponent';
import { QuestionComponent } from './js/QuestionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={quizLogo} className="App-logo" alt="logo" />
        <p>
          This is the React App lab by <strong>ASSEMBLER</strong> group
        </p>
        <FormComponent />
        <HeaderComponent />
        <QuestionComponent />
      </header>
    </div>
  );
}

export default App;
