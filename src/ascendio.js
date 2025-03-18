document.addEventListener("DOMContentLoaded", function () {
    console.log("Ascendio Loaded!");
  
    // Dark Mode Toggle
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode");
    };
  
    // Add event listener to any element with the 'toggle-dark' class
    document.querySelectorAll(".toggle-dark").forEach((btn) => {
      btn.addEventListener("click", toggleDarkMode);
    });
  });
  