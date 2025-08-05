'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultStrs = sourceString.split(' ');
  const finalResult = [];
  const finalObjct = {
    key,
    value,
  };

  for (const result of resultStrs) {
      finalResult.push(result);
  }

  for (let i = 0; i < finalResult.length; i++) {
    finalObjct.key = finalResult[i];
    finalObjct.value = finalResult[i + 1];
  }
  console.log(finalObjct);
  return finalObjct;

}

module.exports = convertToObject;

