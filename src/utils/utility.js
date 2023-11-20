function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${randomPart}${timestamp}`;
}


const calculateMean = (data, term) => {
  if (data.length === 0) {
    return null; // or any other value to indicate no data
  }

  if(!term){
    throw new Error('Please provide property for operation')
  }

  const sum = data.reduce((acc, item) => {
    return acc + Number(item[term]);
  }, 0);

  return (sum / data.length).toFixed(3);
};

const calculateMedian = (data, term) => {
  if (data.length === 0) {
    return null; // or any other value to indicate no data
  }

  if(!term){
    throw new Error('Please provide property for operation')
  }

  const sortedData = [...data].sort((a, b) => a[term] - b[term]);
  const middle = Math.floor(sortedData.length / 2);
  
  const result =
    sortedData.length % 2 === 0
      ? (Number(sortedData[middle - 1][term]) + Number(sortedData[middle][term])) / 2
      : Number(sortedData[middle][term]);

  return result.toFixed(3);
};

const calculateMode = (data, term) => {
  if (data.length === 0) {
    return null; // or any other value to indicate no data
  }

  if(!term){
    throw new Error('Please provide property for operation')
  }

  const counts = {};
  let mode;
  let maxCount = 0;

  data.forEach(item => {
    counts[item[term]] = (counts[item[term]] || 0) + 1;
  });

  Object.entries(counts).forEach(([key, value]) => {
    if (value > maxCount) {
      mode = Number(key);
      maxCount = value;
    }
  });

  return mode.toFixed(3);
};

export const calculateStats = (data, term) => {
  const cloneData = structuredClone(data);

  for (let key in cloneData) {
    const mean = calculateMean(cloneData[key]?.data, term);
    const median = calculateMedian(cloneData[key]?.data, term);
    const mode = calculateMode(cloneData[key]?.data, term);

    cloneData[key] = { ...cloneData[key], mean, median, mode };
  }
  return cloneData;
};

export const parseFlavanoidData = data => {
  let hash = {};

  data.forEach(item => {
    segmentData(hash, item);
  });

  return hash;
};

export const parseGammaData = data => {
  let hash = {};

  let cloneData = structuredClone(data);

  cloneData.forEach(item => {
    const { Ash, Hue, Magnesium } = item;
    const gamma = (Ash * Hue) / Magnesium;
    item = { ...item, gamma };
    segmentData(hash, item);
  });

  return hash;
};

/**
 * Data is being segemented into 3 classed based upon Alcohol type
 * @param {Object} hash - object for storing different data class.
 * @param {Object} item - Data to work upon
 */

function segmentData(hash, item) {
  if (!hash[item.Alcohol]) {
    const data = [item];
    const id = generateUniqueId();
    hash[item.Alcohol] = { data,  id};
  } else {
    hash[item.Alcohol].data.push(item);
  }

}
