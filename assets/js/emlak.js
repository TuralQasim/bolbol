const emlakBuy = document.getElementById("emlakBuy");
const emlakBuyDropdown = document.querySelector(".emlak_buy_dropdown");
const checkedEmlakBuy = document.getElementById("checkedEmlakBuy");
const emlakBuyArrow = document.getElementById("emlakBuyArrow");
let emlakOpen = false;
emlakBuy.addEventListener("click", () => {
  if (emlakOpen) {
    emlakBuyDropdown.style.visibility = "hidden";
    emlakBuyDropdown.style.opacity = "0";
    emlakBuyDropdown.style.transform = "translateY(50%)";
    emlakOpen = false;
    emlakBuyArrow.style.transform = "rotate(0)";
  } else {
    emlakBuyDropdown.style.visibility = "visible";
    emlakBuyDropdown.style.opacity = "1";
    emlakBuyDropdown.style.transform = "translateY(0)";
    emlakOpen = true;
    emlakBuyArrow.style.transform = "rotate(180deg)";
  }
});
emlakBuyDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  checkedEmlakBuy.textContent = e.target.textContent;
  emlakBuyDropdown.style.visibility = "hidden";
  emlakBuyDropdown.style.opacity = "0";
  emlakBuyDropdown.style.transform = "translateY(50%)";
  emlakOpen = false;
  emlakBuyArrow.style.transform = "rotate(0)";
});

// --------------------------------------------------------

const emlakHouse = document.getElementById("emlakHouse");
const emlakHouseDropdown = document.querySelector(".emlak_house_dropdown");
const checkedEmlakHouse = document.getElementById("checkedEmlakHouse");
const emlakHouseArrow = document.getElementById("emlakHouseArrow");
let emlakHouseOpen = false;
emlakHouse.addEventListener("click", () => {
  if (emlakHouseOpen) {
    emlakHouseDropdown.style.visibility = "hidden";
    emlakHouseDropdown.style.opacity = "0";
    emlakHouseDropdown.style.transform = "translateY(50%)";
    emlakHouseOpen = false;
    emlakHouseArrow.style.transform = "rotate(0)";
  } else {
    emlakHouseDropdown.style.visibility = "visible";
    emlakHouseDropdown.style.opacity = "1";
    emlakHouseDropdown.style.transform = "translateY(0)";
    emlakHouseOpen = true;
    emlakHouseArrow.style.transform = "rotate(180deg)";
  }
});
emlakHouseDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  checkedEmlakHouse.textContent = e.target.textContent;
  emlakHouseDropdown.style.visibility = "hidden";
  emlakHouseDropdown.style.opacity = "0";
  emlakHouseDropdown.style.transform = "translateY(50%)";
  emlakHouseOpen = false;
  emlakHouseArrow.style.transform = "rotate(0)";
});

// ----------------------------------------------------------

const emlakRoom = document.getElementById("emlakRoom");
const emlakRoomDropdown = document.querySelector(".emlak_room_dropdown");
const checkedEmlakRoom = document.getElementById("checkedEmlakRoom");
const emlakRoomArrow = document.getElementById("emlakRoomArrow");
const otherRoom = document.getElementById("otherRoom");
const room1 = document.getElementById("room1");
const room2 = document.getElementById("room2");
const room3 = document.getElementById("room3");
const room4 = document.getElementById("room4");
const room5 = document.getElementById("room5");
let emlakRoomOpen = false;
let roomArr = [];
emlakRoom.addEventListener("click", () => {
  if (emlakRoomOpen) {
    emlakRoomDropdown.style.visibility = "hidden";
    emlakRoomDropdown.style.opacity = "0";
    emlakRoomDropdown.style.transform = "translateY(50%)";
    emlakRoomOpen = false;
    emlakRoomArrow.style.transform = "rotate(0)";
  } else {
    emlakRoomDropdown.style.visibility = "visible";
    emlakRoomDropdown.style.opacity = "1";
    emlakRoomDropdown.style.transform = "translateY(0)";
    emlakRoomOpen = true;
    emlakRoomArrow.style.transform = "rotate(180deg)";
  }
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
  emlakRoomDropdown.style.visibility = "hidden";
  emlakRoomDropdown.style.opacity = "0";
  emlakRoomDropdown.style.transform = "translateY(50%)";
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

// ----------------------------------------------------------

const emlakCity = document.querySelector(".emlak_city");
const checkedEmlakCity = document.getElementById("checkedEmlakCity");
const emlakCityArrow = document.getElementById("emlakCityArrow");
const emlakCityDropdown = document.querySelector(".emlak_city_dropdown");
let emlakCityOpen = false;
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
emlakCity.addEventListener("click", () => {
  if (emlakCityOpen) {
    emlakCityDropdown.style.transform = "translateY(50px)";
    emlakCityDropdown.style.visibility = "hidden";
    emlakCityDropdown.style.opacity = "0";
    emlakCityArrow.style.transform = "rotate(0)";
    emlakCityDropdown.textContent = "";
    emlakCityOpen = false;
  } else {
    emlakCityDropdown.style.transform = "translateY(0)";
    emlakCityDropdown.style.visibility = "visible";
    emlakCityDropdown.style.opacity = "1";
    emlakCityArrow.style.transform = "rotate(180deg)";
    emlakCityDropdown.textContent = "";
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      emlakCityDropdown.append(li);
    });
    emlakCityOpen = true;
  }
});
emlakCityDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  emlakCityDropdown.style.transform = "translateY(50px)";
  emlakCityDropdown.style.visibility = "hidden";
  emlakCityDropdown.style.opacity = "0";
  emlakCityArrow.style.transform = "rotate(0)";
  emlakCityOpen = false;
  emlakCityDropdown.textContent = "";
  checkedEmlakCity.textContent = e.target.textContent;
});

// ----------------------------------------------------------

const emlakSearch = document.querySelector(".emlak_search");
const emlakDropdown = document.querySelector(".emlak_dropdown");
const emlakSearchArrow = document.getElementById("emlakSearchArrow");
let emlakSearchOpen = false;
emlakSearch.addEventListener("click", () => {
  if (emlakSearchOpen) {
    emlakDropdown.style.transform = "translateY(100px)";
    emlakDropdown.style.opacity = "0";
    emlakDropdown.style.visibility = "hidden";
    emlakSearchArrow.style.transform = "rotate(0)";
    emlakSearchOpen = false;
  } else {
    scrollToElement("emlak_title");
    emlakDropdown.style.transform = "translateY(0)";
    emlakDropdown.style.opacity = "1";
    emlakDropdown.style.visibility = "visible";
    emlakSearchArrow.style.transform = "rotate(180deg)";
    emlakSearchOpen = true;
  }
});
emlakDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});
function scrollToElement(className) {
  const element = document.querySelector("." + className);

  if (element) {
    const offset = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

// ----------------------------------------------------------

const emlakFloorNotOneInput1 = document.getElementById(
  "emlak_floor_not_one_input1"
);
const emlakFloorNotOneInput2 = document.getElementById(
  "emlak_floor_not_one_input2"
);
const emlakFloorNotOneInput3 = document.getElementById(
  "emlak_floor_not_one_input3"
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
const emlakHideBtn = document.querySelector(".emlak_hide");
const emlakShowBtn = document.querySelector(".emlak_show");
const emlakReset = document.querySelector(".emlak_reset");
emlakHideBtn.addEventListener("click", () => {
  scrollToElement("emlak_title");
  emlakDropdown.style.transform = "translateY(-100px)";
  emlakDropdown.style.opacity = "0";
  emlakDropdown.style.visibility = "hidden";
  emlakSearchArrow.style.transform = "rotate(0)";
  emlakSearchOpen = false;
  setTimeout(() => {
    emlakDropdown.style.transform = "translateY(100px)";
  }, 400);
});
emlakShowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement("emlak_title");
  emlakDropdown.style.transform = "translateY(-100px)";
  emlakDropdown.style.opacity = "0";
  emlakDropdown.style.visibility = "hidden";
  emlakSearchArrow.style.transform = "rotate(0)";
  emlakSearchOpen = false;
  setTimeout(() => {
    emlakDropdown.style.transform = "translateY(100px)";
  }, 400);
});
emlakReset.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("hamisi_input").checked = true;
  document.getElementById("temirli_input").checked = false;
  document.getElementById("temirsiz_input").checked = false;
  document.getElementById("emlak_place_input_min").value = "";
  document.getElementById("emlak_place_input_max").value = "";
  document.getElementById("emlak_floor_input_min").value = "";
  document.getElementById("emlak_floor_input_max").value = "";
  document.getElementById("emlak_floor_not_one_input1").checked = false;
  document.getElementById("emlak_floor_not_one_input2").checked = false;
  document.getElementById("emlak_floor_not_one_input3").checked = false;
  document.getElementById("emlak_cixarish1").checked = false;
  document.getElementById("emlak_ipoteka1").checked = false;
  document.getElementById("emlak_place_p_min").style.fontSize = "18px";
  document.getElementById("emlak_place_p_min").style.transform =
    "translate(0, -50%)";
  document.getElementById("emlak_place_p_max").style.fontSize = "18px";
  document.getElementById("emlak_place_p_max").style.transform =
    "translate(0, -50%)";
  document.getElementById("emlak_floor_p_min").style.fontSize = "18px";
  document.getElementById("emlak_floor_p_min").style.transform =
    "translate(0, -50%)";
  document.getElementById("emlak_floor_p_max").style.fontSize = "18px";
  document.getElementById("emlak_floor_p_max").style.transform =
    "translate(0, -50%)";
});
document
  .getElementById("emlak_place_input_min")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_place_p_min").style.fontSize = "14px";
      document.getElementById("emlak_place_p_min").style.transform =
        "translate(-1px, -24px)";
    } else {
      document.getElementById("emlak_place_p_min").style.fontSize = "18px";
      document.getElementById("emlak_place_p_min").style.transform =
        "translate(0, -50%)";
    }
  });
document
  .getElementById("emlak_place_input_max")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_place_p_max").style.fontSize = "14px";
      document.getElementById("emlak_place_p_max").style.transform =
        "translate(-1px, -24px)";
    } else {
      document.getElementById("emlak_place_p_max").style.fontSize = "18px";
      document.getElementById("emlak_place_p_max").style.transform =
        "translate(0, -50%)";
    }
  });
document
  .getElementById("emlak_floor_input_min")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_floor_p_min").style.fontSize = "14px";
      document.getElementById("emlak_floor_p_min").style.transform =
        "translate(-1px, -24px)";
    } else {
      document.getElementById("emlak_floor_p_min").style.fontSize = "18px";
      document.getElementById("emlak_floor_p_min").style.transform =
        "translate(0, -50%)";
    }
  });
document
  .getElementById("emlak_floor_input_max")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_floor_p_max").style.fontSize = "14px";
      document.getElementById("emlak_floor_p_max").style.transform =
        "translate(-1px, -24px)";
    } else {
      document.getElementById("emlak_floor_p_max").style.fontSize = "18px";
      document.getElementById("emlak_floor_p_max").style.transform =
        "translate(0, -50%)";
    }
  });
document
  .getElementById("emlak_price_min_input")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_price_min_p").style.fontSize = "14px";
      document.getElementById("emlak_price_min_p").style.top = "9px";
      document.getElementById("emlak_price_min_p").style.left = "5px";
    } else {
      document.getElementById("emlak_price_min_p").style.fontSize = "16px";
      document.getElementById("emlak_price_min_p").style.top = "50%";
      document.getElementById("emlak_price_min_p").style.left = "5px";
    }
  });
document
  .getElementById("emlak_price_max_input")
  .addEventListener("input", (e) => {
    if (e.target.value != "") {
      document.getElementById("emlak_price_max_p").style.fontSize = "14px";
      document.getElementById("emlak_price_max_p").style.top = "9px";
      document.getElementById("emlak_price_max_p").style.left = "5px";
    } else {
      document.getElementById("emlak_price_max_p").style.fontSize = "16px";
      document.getElementById("emlak_price_max_p").style.top = "50%";
      document.getElementById("emlak_price_max_p").style.left = "5px";
    }
  });

// ----------------------------------------------------------

const emlakMobiHouse = document.querySelector(".emlak_mobi_house");
const checkedEmlakMobiHouse = document.getElementById("checkedEmlakMobiHouse");
const emlakMobiHouseArrow = document.getElementById("emlakMobiHouseArrow");
const emlakMobiDropdown = document.querySelector(".emlak_mobi_house_dropdown");
let emlakMobiOpen = false;

emlakMobiHouse.addEventListener("click", () => {
  if (emlakMobiOpen) {
    emlakMobiDropdown.style.opacity = "0";
    emlakMobiDropdown.style.visibility = "hidden";
    emlakMobiDropdown.style.transform = "translateY(100px)";
    emlakMobiHouseArrow.style.transform = "rotate(0)";
    emlakMobiOpen = false;
  } else {
    emlakMobiDropdown.style.opacity = "1";
    emlakMobiDropdown.style.visibility = "visible";
    emlakMobiDropdown.style.transform = "translateY(0)";
    emlakMobiHouseArrow.style.transform = "rotate(180deg)";
    emlakMobiOpen = true;
  }
});
emlakMobiDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  checkedEmlakMobiHouse.textContent = e.target.textContent;
  emlakMobiDropdown.style.opacity = "0";
  emlakMobiDropdown.style.visibility = "hidden";
  emlakMobiDropdown.style.transform = "translateY(100px)";
  emlakMobiHouseArrow.style.transform = "rotate(0)";
  emlakMobiOpen = false;
});

// ----------------------------------------------------------

const emlakMobiRoom = document.getElementById("emlakMobiRoom");
const emlakMobiRoomDropdown = document.querySelector(
  ".emlak_mobi_room_dropdown"
);
const checkedEmlakMobiRoom = document.getElementById("checkedEmlakMobiRoom");
const emlakMobiRoomArrow = document.getElementById("emlakMobiRoomArrow");
const otherMobiRoom = document.getElementById("otherMobiRoom");
const room1mobi = document.getElementById("room1mobi");
const room2mobi = document.getElementById("room2mobi");
const room3mobi = document.getElementById("room3mobi");
const room4mobi = document.getElementById("room4mobi");
const room5mobi = document.getElementById("room5mobi");
let emlakMobiRoomOpen = false;
let roomMobiArr = [];
emlakMobiRoom.addEventListener("click", () => {
  if (emlakMobiRoomOpen) {
    emlakMobiRoomDropdown.style.visibility = "hidden";
    emlakMobiRoomDropdown.style.opacity = "0";
    emlakMobiRoomDropdown.style.transform = "translateY(50%)";
    emlakMobiRoomOpen = false;
    emlakMobiRoomArrow.style.transform = "rotate(0)";
  } else {
    emlakMobiRoomDropdown.style.visibility = "visible";
    emlakMobiRoomDropdown.style.opacity = "1";
    emlakMobiRoomDropdown.style.transform = "translateY(0)";
    emlakMobiRoomOpen = true;
    emlakMobiRoomArrow.style.transform = "rotate(180deg)";
  }
});
emlakMobiRoomDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});
otherMobiRoom.addEventListener("click", () => {
  roomMobiArr = [];
  room1mobi.checked = false;
  room2mobi.checked = false;
  room3mobi.checked = false;
  room4mobi.checked = false;
  room5mobi.checked = false;
  emlakMobiRoomDropdown.style.visibility = "hidden";
  emlakMobiRoomDropdown.style.opacity = "0";
  emlakMobiRoomDropdown.style.transform = "translateY(50%)";
  emlakMobiRoomOpen = false;
  emlakMobiRoomArrow.style.transform = "rotate(0)";
  checkedEmlakMobiRoom.textContent = "Otaq sayı";
});
room1mobi.addEventListener("click", () => {
  otherMobiRoom.checked = false;
  const text = "1";
  if (roomMobiArr.includes(text)) {
    roomMobiArr = roomMobiArr.filter((a) => a != text);
  } else {
    roomMobiArr.push(text);
  }
  roomMobiArr = roomMobiArr.sort((a, b) => a - b);
  let word = roomMobiArr.join(", ");
  if (roomMobiArr.includes("5")) {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
  } else {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
  }
  if (!roomMobiArr.length) {
    checkedEmlakMobiRoom.textContent = "Otaq sayı";
  }
  if (checkedEmlakMobiRoom.textContent.length > 15) {
    checkedEmlakMobiRoom.textContent =
      checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
  }
});
room2mobi.addEventListener("click", () => {
  otherMobiRoom.checked = false;
  const text = "2";
  if (roomMobiArr.includes(text)) {
    roomMobiArr = roomMobiArr.filter((a) => a != text);
  } else {
    roomMobiArr.push(text);
  }
  roomMobiArr = roomMobiArr.sort((a, b) => a - b);
  let word = roomMobiArr.join(", ");
  if (roomMobiArr.includes("5")) {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
  } else {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
  }
  if (!roomMobiArr.length) {
    checkedEmlakMobiRoom.textContent = "Otaq sayı";
  }
  if (checkedEmlakMobiRoom.textContent.length > 15) {
    checkedEmlakMobiRoom.textContent =
      checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
  }
});
room3mobi.addEventListener("click", () => {
  otherMobiRoom.checked = false;
  const text = "3";
  if (roomMobiArr.includes(text)) {
    roomMobiArr = roomMobiArr.filter((a) => a != text);
  } else {
    roomMobiArr.push(text);
  }
  roomMobiArr = roomMobiArr.sort((a, b) => a - b);
  let word = roomMobiArr.join(", ");
  if (roomMobiArr.includes("5")) {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
  } else {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
  }
  if (!roomMobiArr.length) {
    checkedEmlakMobiRoom.textContent = "Otaq sayı";
  }
  if (checkedEmlakMobiRoom.textContent.length > 15) {
    checkedEmlakMobiRoom.textContent =
      checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
  }
});
room4mobi.addEventListener("click", () => {
  otherMobiRoom.checked = false;
  const text = "4";
  if (roomMobiArr.includes(text)) {
    roomMobiArr = roomMobiArr.filter((a) => a != text);
  } else {
    roomMobiArr.push(text);
  }
  roomMobiArr = roomMobiArr.sort((a, b) => a - b);
  let word = roomMobiArr.join(", ");
  if (roomMobiArr.includes("5")) {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
  } else {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
  }
  if (!roomMobiArr.length) {
    checkedEmlakMobiRoom.textContent = "Otaq sayı";
  }
  if (checkedEmlakMobiRoom.textContent.length > 15) {
    checkedEmlakMobiRoom.textContent =
      checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
  }
});
room5mobi.addEventListener("click", () => {
  otherMobiRoom.checked = false;
  const text = "5";
  if (roomArr.includes(text)) {
    roomMobiArr = roomMobiArr.filter((a) => a != text);
  } else {
    roomMobiArr.push(text);
  }
  roomMobiArr = roomMobiArr.sort((a, b) => a - b);
  let word = roomMobiArr.join(", ");
  if (roomMobiArr.includes("5")) {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı və daha çox`;
  } else {
    checkedEmlakMobiRoom.textContent = `${word} otaqlı`;
  }
  if (!roomMobiArr.length) {
    checkedEmlakMobiRoom.textContent = "Otaq sayı";
  }
  if (checkedEmlakMobiRoom.textContent.length > 15) {
    checkedEmlakMobiRoom.textContent =
      checkedEmlakMobiRoom.textContent.slice(0, 15) + "...";
  }
});
