'use strict';

/**
 * Logs the request options adding useful metadata
 * @param {Logger} log Application logger instance
 * @param {NICERequestOptions} options Original Request options
 * @param {object} requestOptions Request options object
 * @return {undefined}
 */
module.exports = (log, options, requestOptions) =>
  log.info({message: 'nice-request options', exception: requestOptions});