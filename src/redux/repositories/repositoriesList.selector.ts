import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

// input selectors
const selectLoading = (state: RootState) => state.repositories;
const selectError = (state: RootState) => state.repositories;
const selectRepositories = (state: RootState) => state.repositories;

// reselect memoized selectors
export const selectRepositoriesList = createSelector([selectRepositories], repositories => repositories.data);

export const loadingSelectors = createSelector([selectLoading], repositories => repositories.loading);

export const errorSelectors = createSelector([selectError], repositories => repositories.error);

// to avoid writing too many selectors like above
// use createStructuredSelector to return an object with only the values you need
// const repositoriesStatusSelector = createStructuredSelector({
//   loading: selectLoading,
//   error: selectError,
//   data: selectRepositories
// })
