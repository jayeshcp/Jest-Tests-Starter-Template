const kSum = (arr, k) => {
  const hash = {};
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (hash.hasOwnProperty(k / item)) {
      found = true;
      break;
    } else {
      hash[item] = k / item;
    }
  }

  return found;
};

export default kSum;
