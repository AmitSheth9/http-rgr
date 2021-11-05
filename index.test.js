const getMethod = require('./index');

describe('get the method of http request', () => {
    it('takes an http request and returns a function that gets the method', async() => {

      
      expect(getMethod(str)).toEqual('GET' || 'POST' || 'PUT' || 'DELETE');
    });
});