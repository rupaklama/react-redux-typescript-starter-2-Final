import { combineReducers } from 'redux';
import repositoriesReducer from './repositories/repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// NOTE - we need this built in helper since 'useSelector' hook or react-redux library has no idea
// about what the 'Type of Data' is inside of our redux store.
// No information has been communicated from Redux to react-redux.
// note - This describe what type of data inside of redux store.
export type RootState = ReturnType<typeof reducers>;
// Mouse over RootState
// We are going to have an root object 'global state' with our reducers

// note - now we have a TYPE that describes the TYPE of data/information
// inside of our store
