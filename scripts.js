document.addEventListener("DOMContentLoaded", initialize);

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

const inputs = [
  {
    input: document.getElementById("input1"),
    image: document.getElementById("image1"),
    link: document.getElementById("link1"),
  },
  {
    input: document.getElementById("input2"),
    image: document.getElementById("image2"),
    link: document.getElementById("link2"),
  },
  {
    input: document.getElementById("input3"),
    image: document.getElementById("image3"),
    link: document.getElementById("link3"),
  },
];

let chips = [
  {
    name: "74LS00",
    image: "./images/74LS00.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS00.shtml",
  },
  {
    name: "74LS01",
    image: "./images/74LS01.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS01.shtml",
  },
  {
    name: "74LS02",
    image: "./images/74LS02.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS02.shtml",
  },
  {
    name: "74LS03",
    image: "./images/74LS03.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS03.shtml",
  },
  {
    name: "74LS04",
    image: "./images/74LS04.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS04.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS08",
    image: "./images/74LS08.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS08.shtml",
  },
  {
    name: "74LS09",
    image: "./images/74LS09.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS09.shtml",
  },
  {
    name: "74LS10",
    image: "./images/74LS10.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS10.shtml",
  },
  {
    name: "74LS11",
    image: "./images/74LS11.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS11.shtml",
  },
  {
    name: "74LS14",
    image: "./images/74LS14.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS14.shtml",
  },
  {
    name: "74LS20",
    image: "./images/74LS20.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS20.shtml",
  },
  {
    name: "74LS30",
    image: "./images/74LS30.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS30.shtml",
  },
  {
    name: "74LS32",
    image: "./images/74LS32.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS32.shtml",
  },
  {
    name: "74LS38",
    image: "./images/74LS38.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS38.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },

  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
  {
    name: "74LS05",
    image: "./images/74LS05.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS05.shtml",
  },
];

function initialize() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

function handleInput(inputElement, imageElement, linkElement) {
  inputElement.addEventListener("input", function () {
    const inputValue = inputElement.value.trim();

    const chip = chips.find(
      (c) => c.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (chip) {
      imageElement.src = chip.image;
      linkElement.href = chip.dataSheet;
      linkElement.style.display = "block";
    } else {
      linkElement.style.display = "none";
    }
  });
}

inputs.forEach(({ input, image, link }) => {
  handleInput(input, image, link);
});
