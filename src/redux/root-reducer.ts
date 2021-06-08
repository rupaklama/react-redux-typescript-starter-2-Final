import { combineReducers } from 'redux';
import repositoriesReducer from './repositories/repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// NOTE - we need this built in helper since 'react-redux' library has no idea
// about what the 'Type of Data' is inside of our redux store
// This is saying we are creating some reducers above,
// telling 'Typescript' to take all those Reducers functions & give us back the
// 'TYPE' of Object whatever the function returns.
// We are going to assign that TYPE to RootState - type alias
export type RootState = ReturnType<typeof reducers>;
// Mouse over RootState
// We are going to have an root object 'global state' with our reducers

// note - now we have a TYPE that describes the TYPE of data/information
// inside of our store
