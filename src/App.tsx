import './styles/App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { BGLayout } from './components/BGLayout';

function App() {
  return (
    <div className="App">
      <BGLayout />
      <TodoWrapper />
      <a href="https://github.com/khizarq313" 
        target="_blank" 
        rel="noreferrer"
        className="signature-text hover:text-my-blue">
        -Muhammad Khizar
      </a>
    </div>
  );
}

export default App;
