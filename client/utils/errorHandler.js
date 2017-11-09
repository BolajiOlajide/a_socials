import toastr from 'toastr';

/**
 * Handles errors coming from api calls
 * @param {object} error
 * @param {function} dispatch
 * @returns {function} error display
 */
export function handleError(error, dispatch) {
  if (error) {
    return toastr.error(error);
  }
}

/**
 * Throws error to be handled somewhere else
 * @param {object} error
 * @param {function} dispatch
 */
export function throwError(error, dispatch) {
  throw error;
}
