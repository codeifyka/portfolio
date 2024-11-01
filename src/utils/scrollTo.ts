export const scrollToCallToAction = () => {
  const element = document.getElementById("callToAction");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
