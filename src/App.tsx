import './App.css';
import { Resume } from './components/Resume';
import { resumeJan2020 } from './data/ResumeJan2020';

function App() {
  return (
    <div className="App">
      <Resume
        {...resumeJan2020} />
    </div>
  );
}

export default App;
