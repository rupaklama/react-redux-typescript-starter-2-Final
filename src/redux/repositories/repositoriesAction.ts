// Inside of Redux Type Definition file, there’s actually an Interface for it to define what the Dispatch function is.
// We don’t have to create Custom Interface ourself, instead we are going to IMPORT interface 'Dispatch' from there
// to use it to Annotate Dispatch in Action Creators.
import { Dispatch } from 'redux';

import axios from 'axios';
import { ActionType } from './repositories.types';

// actions interfaces
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
// 'Type Alias' is just a name that represents another Type, similar to variable but for type.
// 'Type Alias' is to create New Name for another Type.
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

// action creator
// we need to provide Type Annotation for 'dispatch'
// Using Default Dispatch Interface inside of Redux Type Definition file
// and our 'Action' - type alias from above to return only our define Action types - correct ones
export const searchRepositoriesAction = (term: string) => async (dispatch: Dispatch<Action>) => {
  // dispatch an action
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });

  // making request
  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term,
      },
    });

    // to get names of the library from the endpoint
    const names = data.objects.map((object: any) => object.package.name);

    // dispatching an action
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
};
