import * as constants from './constants';

/**
 * Test Action Creator
 */
export function displayEvent() {
  return {
    type: constants.DISPLAY,
    figure: 25
  };
}
