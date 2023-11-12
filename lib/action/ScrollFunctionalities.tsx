export const scrollToSection = (tragetID: string) => {
  // Find the target element you want to scroll to
  const targetElement = document.getElementById(tragetID);

  // Scroll to the target element
  targetElement!.scrollIntoView({
    behavior: "smooth", // Use smooth scrolling
    block: "start", // Scroll to the top of the target element
  });
};
