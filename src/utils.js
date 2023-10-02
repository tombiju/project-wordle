export const sample = (arr) => {
  const randomSample = arr[Math.floor(Math.random() * arr.length)];
  console.info({ randomSample });
  return randomSample;
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
