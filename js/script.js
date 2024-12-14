document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#myButton");


  if (localStorage.getItem("light-mode") === "enabled") {
    document.body.classList.add("light-mode");
  }

  btn.addEventListener("click", () => {
    const b = document.body;
    const active = b.classList.toggle("light-mode");


    active ? localStorage.setItem("light-mode", "enabled") : localStorage.removeItem("light-mode");
  });
});
