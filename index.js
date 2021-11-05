function getMethod(request) {
  const splitArr = request.split('\n');
  console.log(splitArr);
  const splitArr2 = splitArr[1].split(' ');
  console.log(splitArr2);
  console.log(splitArr2[0]);
  return splitArr2[0];
}

const request = `
DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`;
const request2 = `
GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`;
console.log(getMethod(request2));
console.log(getMethod(request));
module.exports = getMethod;
