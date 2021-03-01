import IssueList from './components/IssueList'
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Issues List</h1>
      </header>
      <IssueList />
    </div>
  );
}

export default App;
