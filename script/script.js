document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navbar links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Form validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", handleSubmit);
});

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    formData[key] = value;
  }

  // Log all form data
  console.log("formData :", formData);

  // Reset the form after submission
  form.reset();
}
