// Percentage will be between 0 and 1
export function getProgressValue(percentage: number, min: number, max: number) {
  const value = min + (max - min) * percentage;
  return value;
}
