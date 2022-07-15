import logo from './logo.svg';
import './App.css';
import './FormCss.css';
import './bootstrap.css';
import './QuestionComponent.css';
import { HeaderComponent } from './HeaderComponent';
import { FormComponent } from './FormComponent';
import { QuestionComponent } from './QuestionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the React App lab by <strong>ASSEMBLER</strong> group
        </p>
        <HeaderComponent />
        <FormComponent />
        <QuestionComponent />
      </header>
    </div>
  );
}

export default App;
