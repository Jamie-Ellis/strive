const navbar = document.getElementById("navbuttons-top");
const main = document.querySelector("#main");

const _navColorOnScrollHOME = () => {
  const { scrollTop, scrollHeight, clientHeight } = main;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  navbar.style.backgroundColor = `rgba(7, 7, 7, ${ratio * 10})`;
};
const _navColorOnScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = main;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  navbar.style.backgroundColor = `rgba(7, 7, 7, ${ratio * 10})`;
};
const _navColorOnScroll_LIKED = () => {
  const { scrollTop, scrollHeight, clientHeight } = main;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  navbar.style.backgroundColor = `rgba(32, 22, 64, ${ratio * 10})`;
};
const _navColorOnScroll_PLAYLIST = () => {
  const { scrollTop, scrollHeight, clientHeight } = main;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  navbar.style.backgroundColor = `rgba(32, 22, 64, ${ratio * 10})`;
};
