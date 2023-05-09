(() => {
  "use strict";

  const burger = document.querySelector(".menu__btn");
  const menuList = document.querySelector(".menu__list");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuList.classList.toggle("active");
  });
  const age = document.getElementById("age");
  if (age) {
    const ageType = age.querySelectorAll(".koleid_select_item");
    if (ageType.length > 0)
      ageType.forEach((item) => {
        item.addEventListener("click", (e) => {
          ageType.forEach((el) => {
            el.classList.remove("koleid_select_item_active");
          });
          e.target.classList.add("koleid_select_item_active");
          viewTab();
        });
      });
  }
  const hobby = document.getElementById("hobby");
  if (hobby) {
    const ageType = hobby.querySelectorAll(".koleid_select_item");
    if (ageType.length > 0)
      ageType.forEach((item) => {
        item.addEventListener("click", (e) => {
          ageType.forEach((el) => {
            el.classList.remove("koleid_select_item_active");
          });
          e.target.classList.add("koleid_select_item_active");
          viewTab();
        });
      });
  }
  function viewTab() {
    if (!age || !hobby) return;
    const changeAge = age.querySelector(".koleid_select_item_active");
    const changeHobby = hobby.querySelector(".koleid_select_item_active");
    if (!changeAge || !changeHobby) return;
    const tabs = document.querySelectorAll(".koleid_tab");
    const changeTab = document.getElementById(changeHobby.dataset.tab);
    if (tabs.length > 0) {
      tabs.forEach((item) => {
        item.classList.remove("koleid_tab_active");
      });
      changeTab.classList.add("koleid_tab_active");
    }
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });

})();
