import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productivity state domain
 */

const selectProductivityDomain = state => state.productivity || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Productivity
 */

const makeSelectProductivity = () =>
  createSelector(
    selectProductivityDomain,
    substate => substate,
  );

export default makeSelectProductivity;
export { selectProductivityDomain };
