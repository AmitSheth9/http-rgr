function getMethod(request) {
  const splitArr = request.split('\n');
  const splitArr2 = splitArr[1].split(' ');
  return splitArr2[0];
}


module.exports = getMethod;
