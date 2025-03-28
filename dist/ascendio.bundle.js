*{box-sizing:border-box;margin:0;padding:0}body{background-color:#f8f9fa;color:#333;font-family:Inter,sans-serif;font-size:16px;line-height:1.6}ol,ul{list-style:none}button{all:unset;cursor:pointer}body{font-family:var(--font-family)}.m-0{margin:0}.m-1{margin:4px}.m-2{margin:8px}.m-4{margin:16px}.m-8{margin:32px}.p-0{padding:0}.p-1{padding:4px}.p-2{padding:8px}.p-4{padding:16px}.p-8{padding:32px}.flex{display:flex}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.grid{display:grid}.grid-cols-2{grid-template-columns:repeat(2,1fr)}.grid-cols-3{grid-template-columns:repeat(3,1fr)}.bg-white{background-color:#fff}.bg-black{background-color:#000}.bg-gray{background-color:#f8f9fa}.bg-primary{background-color:#007bff}.bg-secondary{background-color:#6c757d}.text-white{color:#fff}.text-black{color:#000}.text-gray{color:#6c757d}.text-sm{font-size:14px}.text-md{font-size:16px}.text-lg{font-size:20px}.text-xl{font-size:24px}.text-bold{font-weight:700}.text-center{text-align:center}@media (min-width:640px){.sm\:text-sm{font-size:14px}.sm\:text-md{font-size:16px}.sm\:text-lg{font-size:20px}}@media (min-width:768px){.md\:text-sm{font-size:15px}.md\:text-md{font-size:18px}.md\:text-lg{font-size:22px}}@media (min-width:1024px){.lg\:text-sm{font-size:16px}.lg\:text-md{font-size:20px}.lg\:text-lg{font-size:24px}}@media (min-width:768px){.md\:grid-cols-2{grid-template-columns:repeat(2,1fr)}.md\:grid-cols-3{grid-template-columns:repeat(3,1fr)}}.btn{border-radius:5px;display:inline-block;font-weight:700;padding:10px 16px;text-align:center;transition:.3s ease-in-out}.btn-primary{background-color:#007bff;color:#fff}.btn-primary:hover{background-color:#0056b3}.card{background-color:#fff;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);padding:16px}.card-header{font-size:20px;font-weight:700}.card-body{color:#555;font-size:16px}:root{--primary-color:#007bff;--secondary-color:#6c757d;--font-family:"Inter",sans-serif}document.addEventListener("DOMContentLoaded", function () {
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
  