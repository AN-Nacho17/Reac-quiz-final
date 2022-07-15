import logo from './svg/logo.svg';
import quizLogo from './svg/quiz.svg';
import './css/App.css';
import './css/bootstrap.css';
import Swal from 'sweetalert2'
import { HeaderComponent } from './HeaderComponent';
import { FormComponent } from './FormComponent';
import { QuestionComponent } from './QuestionComponent';

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
