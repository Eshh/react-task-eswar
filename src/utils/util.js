import { wineData } from "../data/Wine-Data";

const extractClasses = () => {
  let classes = new Set();
  wineData.forEach((e) => {
    e.Flavanoids = +e.Flavanoids;
    classes.add(`Class ${e.Alcohol}`);
  });
  calculateGamma();
  return classes;
};
export const formatData = () => {
  let formattedData = {};
  let classes = extractClasses();
  classes.forEach((e) => (formattedData[e] = []));
  wineData.forEach((e) => {
    formattedData[`Class ${e.Alcohol}`].push(e);
  });

  return formattedData;
};
export const calculateMeanMedianMode = (flag) => {
  let data = formatData();
  let finalObservation = {};
  Object.keys(data).forEach((e) => {
    finalObservation[e] = {
      mean: calculateMean(data[e], flag).toFixed(3),
      median: calculateMedian(data[e], flag),
      mode: calculateMode(data[e], flag),
    };
  });
  return finalObservation;
};

const calculateMean = (array, flag) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += +array[i][flag];
  }
  return total / array.length;
};
const calculateMedian = (arr, flag) => {
  const { length } = arr;
  arr.sort((a, b) => +a[flag] - +b[flag]);
  if (length % 2 === 0) {
    return (arr[length / 2 - 1][flag] + arr[length / 2][flag]) / 2;
  }

  return arr[(length - 1) / 2][flag];
};
const calculateMode = (arr, flag) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i][flag];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
};

export const calculateGamma = () => {
  wineData.forEach((e) => {
    e["Gamma"] = +((e.Ash * e.Hue) / e.Magnesium).toFixed(3);
  });
  return wineData;
};
