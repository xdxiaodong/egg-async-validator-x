'use strict';

const schema = require('async-validator').default;

module.exports = app => {
  /**
   * Validate
   *
   * ```js
   * app.validator.addRule('jsonString', (rule, value) => {
   *   try {
   *     JSON.parse(value);
   *   } catch (err) {
   *     return 'must be json string';
   *   }
   * });
   *
   * app.validator.validate({
   * 	 name: 'string',
   * 	 info: { type: 'jsonString', required: false },
   * }, {
   *   name: 'Egg',
   *   info: '{"foo": "bar"}',
   * });
   * ```
   */
  app.validator = schema;
};
