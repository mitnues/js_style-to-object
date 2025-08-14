'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const resultStrs = sourceString.split('');
  const resultArr = resultStrs.map((item, index) => {
    return {
      key: index,
      value: item
    };
  });
  
  return  resultArr;
  
 
}

module.exports = convertToObject;

