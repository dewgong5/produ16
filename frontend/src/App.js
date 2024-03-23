import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className = 'App'>
      <h1>Welcome to PromptCorn!</h1>

      <Card
        title="Example Card"
        description="This is a sample card component."
        imageUrl={logo}
      />
    </div>
   
  );
}

export default App;
