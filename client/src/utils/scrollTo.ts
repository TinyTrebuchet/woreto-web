export const scrollTo = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const header = document.querySelector('header');
    const headerHeight = header ? header.clientHeight : 0;
    
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
};
