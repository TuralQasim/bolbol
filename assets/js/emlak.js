document.querySelectorAll("#emlakRoom").forEach(function (room) {
  const type = room.dataset.value;
  const emlakRoomDropdown = room.querySelector(".emlak_room_dropdown");
  const checkedEmlakRoom = room.querySelector("#checkedEmlakRoom");
  const emlakRoomArrow = room.querySelector("#emlakRoomArrow");
  const otherRoom = room.querySelector("#otherRoom");
  const room1 = room.querySelector("#room1");
  const room2 = room.querySelector("#room2");
  const room3 = room.querySelector("#room3");
  const room4 = room.querySelector("#room4");
  const room5 = room.querySelector("#room5");
  let emlakRoomOpen = false;
  let roomArr = [];
  document.addEventListener("click", function (e) {
    if (
      e.target !== room &&
      e.target !== emlakRoomDropdown &&
      e.target !== emlakRoomArrow &&
      e.target !== checkedEmlakRoom
    ) {
      emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
      emlakRoomOpen = false;
      emlakRoomArrow.style.transform = "rotate(0)";
    }
  });
  room.addEventListener("click", () => {
    // room.querySelector(".emlak_room_dropdown").style.visibility = "visible";
    // room.querySelector(".emlak_room_dropdown").style.opacity = "1";
    // room.querySelector(".emlak_room_dropdown").style.transform =
    //   "translateY(0)";
    emlakRoomDropdown.classList.toggle("emlak_room_dropdown_visible");

    // if (emlakRoomOpen) {
    //   emlakRoomDropdown.style.visibility = "hidden";
    //   emlakRoomDropdown.style.opacity = "0";
    //   emlakRoomDropdown.style.transform = "translateY(50%)";
    // emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");

    //   emlakRoomOpen = false;
    //   emlakRoomArrow.style.transform = "rotate(0)";
    // } else {

    //   // emlakRoomDropdown.classList.toggle("emlak_room_dropdown_visible");
    //   emlakRoomOpen = true;
    //   emlakRoomArrow.style.transform = "rotate(180deg)";
    // }
  });
  emlakRoomDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  otherRoom.addEventListener("click", () => {
    roomArr = [];
    room1.checked = false;
    room2.checked = false;
    room3.checked = false;
    room4.checked = false;
    room5.checked = false;
    emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
    emlakRoomOpen = false;
    emlakRoomArrow.style.transform = "rotate(0)";
    checkedEmlakRoom.textContent = "Otaq sayı";
  });
  room1.addEventListener("click", () => {
    otherRoom.checked = false;
    const text = "1";
    if (roomArr.includes(text)) {
      roomArr = roomArr.filter((a) => a != text);
    } else {
      roomArr.push(text);
    }
    roomArr = roomArr.sort((a, b) => a - b);
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = `${word} otaqlı`;
    }
    if (!roomArr.length) {
      checkedEmlakRoom.textContent = "Otaq sayı";
    }
    if (checkedEmlakRoom.textContent.length > 15) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  });
  room2.addEventListener("click", () => {
    otherRoom.checked = false;
    const text = "2";
    if (roomArr.includes(text)) {
      roomArr = roomArr.filter((a) => a != text);
    } else {
      roomArr.push(text);
    }
    roomArr = roomArr.sort((a, b) => a - b);
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = `${word} otaqlı`;
    }
    if (!roomArr.length) {
      checkedEmlakRoom.textContent = "Otaq sayı";
    }
    if (checkedEmlakRoom.textContent.length > 15) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  });
  room3.addEventListener("click", () => {
    otherRoom.checked = false;
    const text = "3";
    if (roomArr.includes(text)) {
      roomArr = roomArr.filter((a) => a != text);
    } else {
      roomArr.push(text);
    }
    roomArr = roomArr.sort((a, b) => a - b);
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = `${word} otaqlı`;
    }
    if (!roomArr.length) {
      checkedEmlakRoom.textContent = "Otaq sayı";
    }
    if (checkedEmlakRoom.textContent.length > 15) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  });
  room4.addEventListener("click", () => {
    otherRoom.checked = false;
    const text = "4";
    if (roomArr.includes(text)) {
      roomArr = roomArr.filter((a) => a != text);
    } else {
      roomArr.push(text);
    }
    roomArr = roomArr.sort((a, b) => a - b);
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = `${word} otaqlı`;
    }
    if (!roomArr.length) {
      checkedEmlakRoom.textContent = "Otaq sayı";
    }
    if (checkedEmlakRoom.textContent.length > 15) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  });
  room5.addEventListener("click", () => {
    otherRoom.checked = false;
    const text = "5";
    if (roomArr.includes(text)) {
      roomArr = roomArr.filter((a) => a != text);
    } else {
      roomArr.push(text);
    }
    roomArr = roomArr.sort((a, b) => a - b);
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = `${word} otaqlı`;
    }
    if (!roomArr.length) {
      checkedEmlakRoom.textContent = "Otaq sayı";
    }
    if (checkedEmlakRoom.textContent.length > 15) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  });
});

// // ----------------------------------------------------------

// const emlakSearch = document.querySelector(".emlak_search");
// const emlakDropdown = document.querySelector(".emlak_dropdown");
// const emlakSearchArrow = document.getElementById("emlakSearchArrow");
// let emlakSearchOpen = false;
// emlakSearch.addEventListener("click", () => {
//   if (emlakSearchOpen) {
//     emlakDropdown.style.transform = "translateY(100px)";
//     emlakDropdown.style.opacity = "0";
//     emlakDropdown.style.visibility = "hidden";
//     emlakSearchArrow.style.transform = "rotate(0)";
//     emlakSearchOpen = false;
//   } else {
//     scrollToElement("emlak_title");
//     emlakDropdown.style.transform = "translateY(0)";
//     emlakDropdown.style.opacity = "1";
//     emlakDropdown.style.visibility = "visible";
//     emlakSearchArrow.style.transform = "rotate(180deg)";
//     emlakSearchOpen = true;
//   }
// });
// emlakDropdown.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
// function scrollToElement(className) {
//   const element = document.querySelector("." + className);

//   if (element) {
//     const offset = element.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({
//       top: offset,
//       behavior: "smooth",
//     });
//   }
// }
// document.addEventListener("click", function (e) {
//   if (
//     e.target !== emlakSearch &&
//     e.target !== emlakDropdown &&
//     e.target !== emlakSearchArrow
//   ) {
//     emlakDropdown.style.transform = "translateY(100px)";
//     emlakDropdown.style.opacity = "0";
//     emlakDropdown.style.visibility = "hidden";
//     emlakSearchArrow.style.transform = "rotate(0)";
//     emlakSearchOpen = false;
//   }
// });
// ----------------------------------------------------------
document.querySelectorAll(".emlak_floor_hero").forEach(function (floorHero) {
  const emlakFloorNotOneInput1 = floorHero.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = floorHero.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = floorHero.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;

  emlakFloorNotOneInput3.addEventListener("click", () => {
    if (emlakFloorNotOneInput3.checked == true) {
      emlakFloorNotOneInput2.checked = false;
    }
  });
  emlakFloorNotOneInput2.addEventListener("click", () => {
    if (emlakFloorNotOneInput2.checked == true) {
      emlakFloorNotOneInput3.checked = false;
    }
  });
});

const emlakHideBtn = document.querySelector(".emlak_hide");
const emlakShowBtn = document.querySelector(".emlak_show");
const emlakReset = document.querySelector(".emlak_reset");
// emlakHideBtn.addEventListener("click", () => {
//   scrollToElement("emlak_title");
//   emlakDropdown.style.transform = "translateY(-100px)";
//   emlakDropdown.style.opacity = "0";
//   emlakDropdown.style.visibility = "hidden";
//   emlakSearchArrow.style.transform = "rotate(0)";
//   emlakSearchOpen = false;
//   setTimeout(() => {
//     emlakDropdown.style.transform = "translateY(100px)";
//   }, 400);
// });
// emlakShowBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   scrollToElement("emlak_title");
//   emlakDropdown.style.transform = "translateY(-100px)";
//   emlakDropdown.style.opacity = "0";
//   emlakDropdown.style.visibility = "hidden";
//   emlakSearchArrow.style.transform = "rotate(0)";
//   emlakSearchOpen = false;
//   setTimeout(() => {
//     emlakDropdown.style.transform = "translateY(100px)";
//   }, 400);
// });
// emlakReset.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("hamisi_input").checked = true;
//   document.getElementById("temirli_input").checked = false;
//   document.getElementById("temirsiz_input").checked = false;
//   document.getElementById("emlak_place_input_min").value = "";
//   document.getElementById("emlak_place_input_max").value = "";
//   document.getElementById("emlak_floor_input_min").value = "";
//   document.getElementById("emlak_floor_input_max").value = "";
//   document.getElementById("emlak_floor_not_one_input1").checked = false;
//   document.getElementById("emlak_floor_not_one_input2").checked = false;
//   document.getElementById("emlak_floor_not_one_input3").checked = false;
//   document.getElementById("emlak_cixarish1").checked = false;
//   document.getElementById("emlak_ipoteka1").checked = false;
//   document.getElementById("emlak_place_p_min").style.fontSize = "18px";
//   document.getElementById("emlak_place_p_min").style.transform =
//     "translate(0, -50%)";
//   document.getElementById("emlak_place_p_max").style.fontSize = "18px";
//   document.getElementById("emlak_place_p_max").style.transform =
//     "translate(0, -50%)";
//   document.getElementById("emlak_floor_p_min").style.fontSize = "18px";
//   document.getElementById("emlak_floor_p_min").style.transform =
//     "translate(0, -50%)";
//   document.getElementById("emlak_floor_p_max").style.fontSize = "18px";
//   document.getElementById("emlak_floor_p_max").style.transform =
//     "translate(0, -50%)";
// });
// ----------------------------------------------------------

// const emlakMobiRoom = document.getElementById("emlakMobiRoom");
// const emlakMobiRoomDropdown = document.querySelector(
//   ".emlak_mobi_room_dropdown"
// );
// const checkedEmlakMobiRoom = document.getElementById("checkedEmlakMobiRoom");
// const emlakMobiRoomArrow = document.getElementById("emlakMobiRoomArrow");
// const otherMobiRoom = document.getElementById("otherMobiRoom");
// const room1mobi = document.getElementById("room1mobi");
// const room2mobi = document.getElementById("room2mobi");
// const room3mobi = document.getElementById("room3mobi");
// const room4mobi = document.getElementById("room4mobi");
// const room5mobi = document.getElementById("room5mobi");
// let emlakMobiRoomOpen = false;
// let roomMobiArr = [];

// emlakMobiRoom.addEventListener("click", () => {
//   if (emlakMobiRoomOpen) {
//     // emlakMobiRoomDropdown.style.visibility = "hidden";
//     // emlakMobiRoomDropdown.style.opacity = "0";
//     // emlakMobiRoomDropdown.style.transform = "translateY(50%)";
//     emlakMobiRoomDropdown.classList.add("emlak_mobi_room_dropdown");
//     emlakMobiRoomDropdown.classList.remove("emlak_mobi_room_dropdown_visible");
//     emlakMobiRoomOpen = false;
//     emlakMobiRoomArrow.style.transform = "rotate(0)";
//   } else {
//     // emlakMobiRoomDropdown.style.visibility = "visible";
//     // emlakMobiRoomDropdown.style.opacity = "1";
//     // emlakMobiRoomDropdown.style.transform = "translateY(0)";
//     emlakMobiRoomDropdown.classList.add("emlak_mobi_room_dropdown_visible");
//     emlakMobiRoomDropdown.classList.remove("emlak_mobi_room_dropdown");
//     emlakMobiRoomOpen = true;
//     emlakMobiRoomArrow.style.transform = "rotate(180deg)";
//   }
// });
// emlakMobiRoomDropdown.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
// otherMobiRoom.addEventListener("click", () => {
//   roomMobiArr = [];
//   room1mobi.checked = false;
//   room2mobi.checked = false;
//   room3mobi.checked = false;
//   room4mobi.checked = false;
//   room5mobi.checked = false;
//   emlakMobiRoomDropdown.style.visibility = "hidden";
//   emlakMobiRoomDropdown.style.opacity = "0";
//   emlakMobiRoomDropdown.style.transform = "translateY(50%)";
//   emlakMobiRoomOpen = false;
//   emlakMobiRoomArrow.style.transform = "rotate(0)";
//   checkedEmlakMobiRoom.textContent = "Otaq sayı";
// });
// room1mobi.addEventListener("click", () => {
//   otherMobiRoom.checked = false;
//   const text = "1";
//   if (roomMobiArr.includes(text)) {
//     roomMobiArr = roomMobiArr.filter((a) => a != text);
//   } else {
//     roomMobiArr.push(text);
//   }
//   roomMobiArr = roomMobiArr.sort((a, b) => a - b);
//   let word = roomMobiArr.join(", ");
//   if (roomMobiArr.includes("5")) {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
//   } else {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
//   }
//   if (!roomMobiArr.length) {
//     checkedEmlakMobiRoom.textContent = "Otaq sayı";
//   }
//   if (checkedEmlakMobiRoom.textContent.length > 15) {
//     checkedEmlakMobiRoom.textContent =
//       checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
//   }
// });
// room2mobi.addEventListener("click", () => {
//   otherMobiRoom.checked = false;
//   const text = "2";
//   if (roomMobiArr.includes(text)) {
//     roomMobiArr = roomMobiArr.filter((a) => a != text);
//   } else {
//     roomMobiArr.push(text);
//   }
//   roomMobiArr = roomMobiArr.sort((a, b) => a - b);
//   let word = roomMobiArr.join(", ");
//   if (roomMobiArr.includes("5")) {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
//   } else {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
//   }
//   if (!roomMobiArr.length) {
//     checkedEmlakMobiRoom.textContent = "Otaq sayı";
//   }
//   if (checkedEmlakMobiRoom.textContent.length > 15) {
//     checkedEmlakMobiRoom.textContent =
//       checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
//   }
// });
// room3mobi.addEventListener("click", () => {
//   otherMobiRoom.checked = false;
//   const text = "3";
//   if (roomMobiArr.includes(text)) {
//     roomMobiArr = roomMobiArr.filter((a) => a != text);
//   } else {
//     roomMobiArr.push(text);
//   }
//   roomMobiArr = roomMobiArr.sort((a, b) => a - b);
//   let word = roomMobiArr.join(", ");
//   if (roomMobiArr.includes("5")) {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
//   } else {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
//   }
//   if (!roomMobiArr.length) {
//     checkedEmlakMobiRoom.textContent = "Otaq sayı";
//   }
//   if (checkedEmlakMobiRoom.textContent.length > 15) {
//     checkedEmlakMobiRoom.textContent =
//       checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
//   }
// });
// room4mobi.addEventListener("click", () => {
//   otherMobiRoom.checked = false;
//   const text = "4";
//   if (roomMobiArr.includes(text)) {
//     roomMobiArr = roomMobiArr.filter((a) => a != text);
//   } else {
//     roomMobiArr.push(text);
//   }
//   roomMobiArr = roomMobiArr.sort((a, b) => a - b);
//   let word = roomMobiArr.join(", ");
//   if (roomMobiArr.includes("5")) {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
//   } else {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
//   }
//   if (!roomMobiArr.length) {
//     checkedEmlakMobiRoom.textContent = "Otaq sayı";
//   }
//   if (checkedEmlakMobiRoom.textContent.length > 15) {
//     checkedEmlakMobiRoom.textContent =
//       checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
//   }
// });
// room5mobi.addEventListener("click", () => {
//   otherMobiRoom.checked = false;
//   const text = "5";
//   if (roomArr.includes(text)) {
//     roomMobiArr = roomMobiArr.filter((a) => a != text);
//   } else {
//     roomMobiArr.push(text);
//   }
//   roomMobiArr = roomMobiArr.sort((a, b) => a - b);
//   let word = roomMobiArr.join(", ");
//   if (roomMobiArr.includes("5")) {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
//   } else {
//     checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
//   }
//   if (!roomMobiArr.length) {
//     checkedEmlakMobiRoom.textContent = "Otaq sayı";
//   }
//   if (checkedEmlakMobiRoom.textContent.length > 15) {
//     checkedEmlakMobiRoom.textContent =
//       checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
//   }
// });
// document.addEventListener("click", function (e) {
//   if (e.target !== emlakMobiRoom || e.target !== emlakMobiRoomDropdown) {
//     emlakMobiRoomDropdown.style.visibility = "hidden";
//     emlakMobiRoomDropdown.style.opacity = "0";
//     emlakMobiRoomDropdown.style.transform = "translateY(50%)";
//     emlakMobiRoomOpen = false;
//     emlakMobiRoomArrow.style.transform = "rotate(0)";
//   }
// });
// --------------------------------------

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const citiesArr = [
    "Ağcabədi",
    "Ağdam",
    "Ağdaş",
    "Ağstafa",
    "Ağsu",
    "Astara",
    "Babək",
    "Bakı",
    "Balakən",
    "Beyləqan",
    "Bərdə",
    "Biləsuvar",
    "Cəbrayıl",
    "Cəlilabad",
    "Culfa",
    "Daşkəsən",
    "Dəliməmmədli",
    "Füzuli",
    "Gədəbəy",
    "Gəncə",
    "Goranboy",
    "Göyçay",
    "Göygöl",
    "Göytəpə",
    "Hacıqabul",
    "Horadiz",
    "İmişli",
    "İsmayıllı",
    "Kürdəmir",
    "Laçın",
    "Lerik",
    "Lənkəran",
    "Liman",
    "Masallı",
    "Mingəçevir",
    "Naftalan",
    "Naxçıvan",
    "Neftçala",
    "Oğuz",
    "Ordubad",
    "Qax",
    "Qazax",
    "Qəbələ",
    "Qobustan",
    "Quba",
    "Qusar",
    "Saatlı",
    "Sabirabad",
    "Şabran",
    "Şahbuz",
    "Salyan",
    "Şamaxı",
    "Samux",
    "Şəki",
    "Şəmkir",
    "Şərur",
    "Şirvan",
    "Siyəzən",
    "Sumqayıt",
    "Şuşa",
    "Tərtər",
    "Tovuz",
    "Ucar",
    "Xaçmaz",
    "Xırdalan",
    "Xızı",
    "Xudat",
    "Yardımlı",
    "Yevlax",
    "Zaqatala",
    "Zərdab",
  ];
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const type = dropDownBtn.dataset.value;
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  if (type == "emkak-buy") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Alış";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikili";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-city") {
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Şəhər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-mobi-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikililər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emlak_desc_city") {
    const dropDownListHero = dropDownWrapper.querySelector(
      ".dropdown__list_hero"
    );
    const dropDownList = document.createElement("ul");
    dropDownList.classList.add("dropdown__list");
    const input = document.createElement("input");
    input.classList.add("universal_search_input");
    input.setAttribute("type", "text");
    dropDownListHero.append(input);
    input.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListHero.append(p);
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropArrow = dropDownWrapper.querySelector("i");
    dropDownListHero.append(dropDownList);

    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    // Клик по кнопке. Открыть/Закрыть select
    let dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        citiesArr.map((a) => {
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a);
          li.textContent = a;
          dropDownList.append(li);
        });
        input.value = "";
        dropOpen = true;
      }
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          e.target.classList.toggle("added_city");
          let ifCheck = [];
          dropDownListItems.forEach((a) => {
            let gfgf = a.classList.value;
            let b = gfgf.split(" ");
            if (a.classList.value.split(" ").includes("added_city")) {
              ifCheck.push(a);
            } else {
              ifCheck.filter((n) => n != a);
            }
          });
          let name = [];
          if (ifCheck.length) {
            for (let i = 0; i < ifCheck.length; i++) {
              name.push(ifCheck[i].innerText);
            }
          }
          dropDownBtn.innerText = name.length ? name.join(", ") : "Şəhər";
          if (dropDownBtn.innerText.length > 20) {
            dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
          }
          dropDownListHero
            .querySelector(".items_reset_btn")
            .addEventListener("click", () => {
              dropDownBtn.innerText = "Şəhər";
              name = [];
              ifCheck = [];
            });
          dropDownBtn.focus();
          dropDownInput.value = dropDownInput.value.length
            ? dropDownInput.value + this.dataset.value
            : dropDownInput.value;
        });
      });
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_city");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_city")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Şəhər";
        if (dropDownBtn.innerText.length > 12) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 12) + "...";
        }
        document
          .querySelector(".filter_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Şəhər";
            name = [];
            ifCheck = [];
          });
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
      });
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Şəhər";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_city");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      });
    });

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const newList = [];
      dropDownList.innerText = "";
      dropDownListItems.forEach(function (listItem) {
        const newItem = listItem.textContent.toLowerCase();
        if (newItem.includes(value.toLowerCase())) {
          newList.push(listItem);
        }
      });
      const h4 = document.createElement("h4");
      h4.classList.add("none_text");
      h4.textContent = "Nəticə tapılmadi";
      dropDownList.append(h4);
      if (newList.length) {
        newList.map((a) => {
          dropDownList.append(a);
        });
        h4.classList.remove("none_text_visible");
      } else {
        h4.classList.add("none_text_visible");
      }
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });
  }
});

document
  .querySelectorAll(".unersal_inputs")
  .forEach(function (universalInputs) {
    const labels = universalInputs.querySelectorAll("label");
    labels.forEach((label) => {
      const input = label.querySelector("input");
      const p = label.querySelector("p");
      input.addEventListener("focus", () => {
        p.classList.add("active_p");
      });
      document.addEventListener("click", function (e) {
        if (e.target !== input && input.value == "") {
          p.classList.remove("active_p");
        }
        document
          .querySelector(".emlakMobiSearchDropdown_reset")
          .addEventListener("click", () => {
            p.classList.remove("active_p");
            input.value = "";
          });
      });
    });
  });

document.querySelector(".emlakMobiSearchBtn").addEventListener("click", () => {
  document
    .querySelector(".emlakMobiSearchDropdown")
    .classList.add("emlakMobiSearchDropdown_visible");
});
document
  .querySelector(".emlakMobiSearchDropdown_header i")
  .addEventListener("click", () => {
    document
      .querySelector(".emlakMobiSearchDropdown")
      .classList.remove("emlakMobiSearchDropdown_visible");
  });

const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
alqiSatqi.checked = true;
document.querySelector(".month").classList.add("dnone");
document
  .querySelector(".emlak_ipoteka_cixarish_mobi")
  .classList.remove("dnone");
document.querySelector(".floor_check").classList.remove("dnone");
document.querySelector(".floor_floor").classList.remove("dnone");
document.querySelector(".sand_place").classList.add("dnone");
document.querySelector(".emlak_biznes").classList.add("dnone");
document.querySelector(".floor_all").classList.remove("dnone");
document.querySelector(".sand_metr").classList.remove("dnone");

alqiSatqi.addEventListener("change", () => {
  if (alqiSatqi.checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
});
kiraye.addEventListener("change", () => {
  document.querySelector(".month").classList.remove("dnone");
  document.querySelector(".emlak_ipoteka_cixarish_mobi").classList.add("dnone");
});

const checksHome = document.getElementById("checks_home");
const checksNewHome = document.getElementById("checks_Newhome");
const checksOldHome = document.getElementById("checks_Oldhome");
const checksGarden = document.getElementById("checks_garden");
const checksOffice = document.getElementById("checks_ofise");
const checksQarage = document.getElementById("checks_qaraje");
const checksLand = document.getElementById("checks_land");
const checksObject = document.getElementById("checks_object");

checksHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksNewHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOldHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksGarden.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOffice.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.remove("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksQarage.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksLand.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksObject.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});

const additional = [
  "1ci olmasın",
  "Ən üst olmasın",
  "Yalnız ən üst",
  "İpoteka var",
  "Çıxarış var",
];
const additionalChekings = document.querySelector(".additional_chekings_emlak");
additional.map((a, i) => {
  const div = document.createElement("div");
  div.classList.add("additional_chekings_item");
  const label = document.createElement("label");
  label.textContent = a;
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `additional_chekings_input${i}`);
  label.setAttribute("for", `additional_chekings_input${i}`);
  div.append(input);
  div.append(label);
  additionalChekings.append(div);
});

const emlakResetBtn = document.querySelector(".emlakMobiSearchDropdown_reset");

emlakResetBtn.addEventListener("click", () => {
  const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
  const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
  alqiSatqi.checked = true;
  kiraye.checked = false;
  document.querySelector(".month").classList.add("dnone");
  document
    .querySelector(".emlak_ipoteka_cixarish_mobi")
    .classList.remove("dnone");

  const checksHome = document.getElementById("checks_home");
  const checksNewHome = document.getElementById("checks_Newhome");
  const checksOldHome = document.getElementById("checks_Oldhome");
  const checksGarden = document.getElementById("checks_garden");
  const checksOffice = document.getElementById("checks_ofise");
  const checksQarage = document.getElementById("checks_qaraje");
  const checksLand = document.getElementById("checks_land");
  const checksObject = document.getElementById("checks_object");
  checksHome.checked = true;
  checksNewHome.checked = false;
  checksOldHome.checked = false;
  checksGarden.checked = false;
  checksOffice.checked = false;
  checksQarage.checked = false;
  checksLand.checked = false;
  checksObject.checked = false;
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
  document.getElementById("checks_1").checked = false;
  document.getElementById("checks_2").checked = false;
  document.getElementById("checks_3").checked = false;
  document.getElementById("checks_4").checked = false;
  document.getElementById("checks_5").checked = false;
  document.getElementById("emlak_cixarish3").checked = false;
  document.getElementById("emlak_ipoteka4").checked = false;
  document.getElementById("emlak_cixarish5").checked = false;
  document.getElementById("emlak_ipoteka5").checked = false;
  const emlakFloorNotOneInput1 = document.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = document.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = document.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;
});
document.getElementById("emlak_mobi_alqi_input").checked = true;
document.getElementById("emlak_mobi_kiraye_input").checked = false;

const emlakAllResetBtn = document.getElementById("emlak_all_reset_btn");

emlakAllResetBtn.addEventListener("click", () => {
  const additionalCheckings = document.querySelectorAll(
    ".additional_chekings_emlak div"
  );
  additionalCheckings.forEach((item) => {
    item.querySelector("input").checked = false;
  });
  document.getElementById("emlakBuy").querySelector("button").textContent =
    "Alış";
  document.getElementById("emlakHouse").querySelector("button").textContent =
    "Yeni tikili";
  document.getElementById("checkedEmlakRoom").textContent = "Otaq sayı";
  document
    .getElementById("emlakRoom")
    .querySelectorAll("input")
    .forEach((input) => {
      input.checked = false;
    });
  document
    .querySelectorAll(".unersal_inputs")
    .forEach(function (universalInputs) {
      const labels = universalInputs.querySelectorAll("label");
      labels.forEach((label) => {
        const input = label.querySelector("input");
        const p = label.querySelector("p");
        p.classList.remove("active_p");
        input.value = "";
      });
    });
  document.getElementById("hamisi_input").checked = true;
  document.getElementById("temirli_input").checked = false;
  document.getElementById("temirsiz_input").checked = false;
  document.getElementById("emlak_city").querySelector("button").textContent =
    "Şəhər";
});
