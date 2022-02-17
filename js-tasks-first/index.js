// Exercise 1
const difference = (array) => {
  if (array.length <= 1) {
    return 0;
  } else {
    array.sort((a, b) => a - b);
    return array[array.length - 1] - array[0];
  }
};

// Exercise two
const getNewWordsInArr = (str, num) => {
  const arrFromStr = str.split(" ");
  const filteredArr = arrFromStr.filter((item) => item.length > num);
  return filteredArr;
};

// Exercise three
const searchNumberInArr = (arr) => {
  arr.sort((a, b) => a - b);
  let result = arr.find((item, index, arr) => item !== index);
  if (result) return result - 1;
  else return "All numbers is here";
};

// Exercise four
const solution = (str1, str2) => {
  return str1.includes(str2, -str2.length);
};

// Exercise five
const averages = (arr) => {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    let result = (arr[i - 1] + arr[i]) / 2;
    newArr.push(result);
  }
  return newArr;
};

// Exercise six
const maxNumber = (num) => {
  if (+num >= 0) {
    const numArr = num.toString().split("");
    numArr.sort((a, b) => +b - +a);
    const result = numArr.join("");
    return +result;
  } else return "This number is negative";
};

// Exercise seven
const isGoodName = (nameStr) => {
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };
  const result = () => {
    let total = 0;
    for (let i = 0; i < nameStr.length; i++) {
      let letterItem = nameStr[i].toUpperCase();
      for (let key in scores) {
        if (key === letterItem) {
          total += +scores[key];
          break;
        }
      }
    }
    return total;
  };
  const nameRating = () => {
    let totalScore = result();
    let message =
      totalScore <= 60
        ? "NOT TOO GOOD"
        : totalScore >= 61 && totalScore <= 300
        ? "PRETTY GOOD"
        : totalScore >= 301 && totalScore <= 599
        ? "VERY GOOD"
        : "THE BEST";
    return message;
  };
  return nameRating();
};

// Exercise eight
const countVowels = (str) => {
  const vowels = "aeiouy";
  let result = 0;
  const arrFromStr = str.split("");
  arrFromStr.forEach((item) => {
    vowels.includes(item.toLowerCase()) ? result++ : null;
  });
  return result;
};

// Exercise nine
const deleteLetters = (str) => {
  const reg = "abc";
  let score = 0;
  const arrFromStr = str.split("");
  for (let i = 0; i < reg.length; i++) {
    if (arrFromStr.indexOf(reg[i]) >= 0) {
      score++;
    }
  }
  if (score > 0) return (result = str.replace(/[abc]/gi, ""));
  else return null;
};

// Exercise ten
const uniqueItems = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  let result = [];
  for (let item of newArr) {
    !result.includes(item) ? result.push(item) : null;
  }
  return result;
};

// Exercise eleven
const changeKeysValues = (obj) => {
  const newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};

// Exercise twelwe
const calculateDifference = (obj, coverage) => {
  const totalCost = () => {
    let total = 0;
    for (let key in obj) {
      total += +obj[key];
    }
    return total;
  };
  return totalCost() - +coverage;
};

// Exercise thirteen
const leftRotations = (str) => {
  const newArr = str.split("");
  let result = new Array(newArr.join(""));
  for (let i = 0; i < newArr.length - 1; i++) {
    let deleteCount = newArr.shift();
    newArr.push(deleteCount);
    result.push(newArr.join(""));
  }
  return result;
};

const rightRotations = (str) => {
  const newArr = str.split("");
  let result = new Array(newArr.join(""));
  for (let i = 0; i < newArr.length - 1; i++) {
    let deleteCount = newArr.pop();
    newArr.unshift(deleteCount);
    result.push(newArr.join(""));
  }
  return result;
};

// Exercise fourteen
const doesBrickFit = (a, b, c, w, h) => {
  switch (
    a <= h && c <= w ? 1 : a <= h && b <= w ? 2 : c <= h && b <= w ? 3 : null
  ) {
    case 1:
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
};
