export const generateNumbersRange = (start, end) => {
  const rangeArray = Array.from(
    { length: Math.ceil(end - start + 1) },
    (_, i) => start + i
  );

  return rangeArray;
};
