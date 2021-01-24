// Nav Drawer
let toggleBtn = document.querySelector(".fa-angle-right");
// let toggleBtnLeft = document.querySelector(".fa-angle-left");
let navDrawer = document.querySelector(".nav-menu");
let navItem = document.querySelector(".nav-items");

toggleBtn.addEventListener("click", function () {
  navDrawer.classList.toggle("active");
});

// toggleBtnLeft.addEventListener("click", function () {
//   navDrawer.classList.toggle("active");
// });

navItem.addEventListener("click", function () {
  navDrawer.classList.remove("active");
});

// AOS
AOS.init({
  duration: 1500,
});
