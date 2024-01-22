// Returns the progress of how much an element is in view
export function getPercentageInView(distanceToTop: number, height: number) {
  const windowHeight = window.innerHeight;
  const distanceFromBottom = windowHeight - distanceToTop;
  const percentageFromBottom = distanceFromBottom / height;

  return percentageFromBottom;
}
