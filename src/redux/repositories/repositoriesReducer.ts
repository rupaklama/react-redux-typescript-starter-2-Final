import { ActionType } from './repositories.types';
import { Action } from './repositoriesAction';

// reducer state interface
export interface RepositoriesState {
  loading: boolean;

  // If we have an error, set error message to error or
  // if no error, set error to null to indicate that there's no error
  error: string | null;

  data: string[];
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {
  // NOTE: Switch statement works as a Type Guard in typescript
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
