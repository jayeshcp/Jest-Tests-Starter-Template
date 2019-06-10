const productArray = (arr) => {
  const leftArray = [1];
  const rightArray = [1];

  for (let i = 1; i < arr.length; i++) {
    leftArray[i] = arr[i - 1] * leftArray[i - 1];
  }

  for (let i = 1; i < arr.length; i++) {
    leftArray[arr.length - i - 1] = arr[i - 1] * leftArray[i - 1];
  }

  const prod = [];

  return prod;
};

export default productArray;
