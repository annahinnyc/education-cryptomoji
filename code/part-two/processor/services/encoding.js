'use strict';

/**
 * A function that takes an object and returns it encoded as JSON Buffer.
 * Should work identically to the client version. Feel free to copy and paste
 * any work you did there.
 *
 * Example:
 *   const encoded = encode({ hello: 'world', foo: 'bar' })
 *   console.log(encoded)  // <Buffer 7b 22 66 6f 6f 22 3a 22 62 61 72 22 ... >
 *   console.log(encoded.toString())  // '{"foo":"bar","hello":"world"}'
 *
 * Hint:
 *   Remember that all transactions and blocks must be generated
 *   deterministically! JSON is convenient, but you will need to sort
 *   your object's keys or random transactions may fail.
 */
const encode = object => {
  // Enter your solution here

};

/**
 * A function that takes a JSON Buffer and decodes it into an object.
 *
 * Hint:
 *   Although you encoded it as a Buffer originally, the REST API will send
 *   any binary data as a base64 string. So you will need to go from
 *   base64 string -> Buffer -> JSON string -> object
 */
const decode = buffer => {
  // Your code here

};

module.exports = {
  encode,
  decode
};
