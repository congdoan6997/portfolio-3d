export const adjustIslandForScreenSize = () => {
  let screenScale = null;
  let screenPosition = [0, -6.5, -43];
  let rotation = [0.1, 4.7, 0];
  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
  } else {
    screenScale = [1, 1, 1];
  }
  return [screenScale, screenPosition, rotation];
};

export const adjustPlaneForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -2, -2];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -3, -5];
  }
  return [screenScale, screenPosition];
};
