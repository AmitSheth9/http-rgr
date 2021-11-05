
const getMethod = require('./index');


describe('get the method of http request', () => {
  it('takes an http request and returns a function that gets the method', () => {
    const request1 = `
DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

      
    expect(getMethod(request1)).toEqual('DELETE');
  });

  
});

