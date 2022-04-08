export const showOverlay = (element) => {
  const overlay = element.querySelector('.overlay'); // TODO: change to "> .overlay"
  overlay.classList.add('active');
};

export const hideOverlay = (element) => {
  element.querySelector('.overlay')?.classList.remove('active'); // TODO: change to "> .overlay"
};