import { wineData } from "../data/Wine-Data";

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

const calculateMedian = (array, flag) => {
  const { length } = array;
  array.sort((a, b) => +a[flag] - +b[flag]);
  // even sized array
  if (length % 2 === 0) {
    return (array[length / 2 - 1][flag] + array[length / 2][flag]) / 2;
  }
  // odd sized array
  return array[(length - 1) / 2][flag];
};

const calculateMode = (array, flag) => {
  const mode = {};
  let max = 0,
    count = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i][flag];

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

// formatting to seperate class based items
const formatData = () => {
  let formattedData = {};
  let classes = extractClasses();
  console.log(classes)
  classes.forEach((e) => (formattedData[e] = []));
  console.log(formattedData)
  wineData.forEach((e) => {
    formattedData[`Class ${e.Alcohol}`].push(e);
  });
  return formattedData;
};

// extracting class keys from dataset
const extractClasses = () => {
  // using a set to avoid duplicate classes
  let classes = new Set();
  wineData.forEach((e) => {
    e.Flavanoids = +e.Flavanoids;
    // Gamma value calculation
    e["Gamma"] = +((e.Ash * e.Hue) / e.Magnesium).toFixed(3);
    classes.add(`Class ${e.Alcohol}`);
  });
  return classes;
};

