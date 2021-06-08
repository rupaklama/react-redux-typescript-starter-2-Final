import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositoriesAction } from '../../redux/repositories/repositoriesAction';
import {
  errorSelectors,
  loadingSelectors,
  selectRepositoriesList,
} from '../../redux/repositories/repositoriesList.selector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(loadingSelectors);
  const data = useSelector(selectRepositoriesList);
  const error = useSelector(errorSelectors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositoriesAction(term));

    setTerm('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
