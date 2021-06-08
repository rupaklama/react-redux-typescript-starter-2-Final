import './App.css';
import RepositoriesList from './components/repositories/RepositoriesList';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  );
};

export default App;
