'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/async-validator-x.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/async-validator-x-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, validate')
      .expect(200);
  });

  it('should get a ctx', async () => {
    const ctx = app.mockContext({});
    await ctx.validate(
      {
        name: [
          { required: true, message: '必填参数' },
          { type: 'string', message: '类型错误' },
        ],
      },
      { name: 'test' }
    )
      .catch(errors => {
        assert.fail(JSON.stringify(errors));
      });
  });

});
