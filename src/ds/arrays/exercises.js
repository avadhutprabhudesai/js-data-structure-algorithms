export const reverseString = (str) => {
  let result = [];
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    result.push(strArr[i]);
  }
  return result.join('');
};

export const mergeSorted = (a, b) => {
  let result = [],
    i = 0,
    j = 0,
    c = 0,
    total = a.length + b.length;
  if (a.length === 0) {
    return b;
  } else if (b.length === 0) {
    return a;
  }

  while (c < total) {
    if (a[i] < b[j] || j == b.length) {
      result.push(a[i++]);
      c++;
    } else if (a[i] > b[j] || i == a.length) {
      result.push(b[j++]);
      c++;
    } else if (a[i] === b[j]) {
      result.push(a[i++]);
      result.push(b[j++]);
      c += 2;
    }
  }
  return result;
};
