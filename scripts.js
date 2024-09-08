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
    name: "74LS42",
    image: "./images/74LS42.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS42.shtml",
  },
  {
    name: "74LS47",
    image: "./images/74LS47.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS47.shtml",
  },
  {
    name: "74LS48",
    image: "./images/74LS48.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS48.shtml",
  },
  {
    name: "74LS51",
    image: "./images/74LS51.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS51.shtml",
  },
  {
    name: "74LS54",
    image: "./images/74LS54.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS54.shtml",
  },
  {
    name: "74LS73",
    image: "./images/74LS73.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS73.shtml",
  },
  {
    name: "74LS74",
    image: "./images/74LS74.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS74.shtml",
  },
  {
    name: "74LS75",
    image: "./images/74LS75.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS75.shtml",
  },
  {
    name: "74LS76",
    image: "./images/74LS76.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS76.shtml",
  },
  {
    name: "74LS83",
    image: "./images/74LS83.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS83.shtml",
  },
  {
    name: "74LS85",
    image: "./images/74LS85.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS85.shtml",
  },
  {
    name: "74LS86",
    image: "./images/74LS86.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS86.shtml",
  },
  {
    name: "74LS90",
    image: "./images/74LS90.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS90.shtml",
  },
  {
    name: "74LS92",
    image: "./images/74LS92.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS92.shtml",
  },
  {
    name: "74LS93",
    image: "./images/74LS93.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS93.shtml",
  },
  {
    name: "74LS95",
    image: "./images/74LS95.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS95.shtml",
  },
  {
    name: "74LS112",
    image: "./images/74LS112.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS112.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS123",
    image: "./images/74LS123.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS123.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS125",
    image: "./images/74LS125.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS125.shtml",
  },
  {
    name: "74LS126",
    image: "./images/74LS126.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS126.shtml",
  },
  {
    name: "74LS132",
    image: "./images/74LS132.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS132.shtml",
  },
  {
    name: "74LS136",
    image: "./images/74LS136.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS136.shtml",
  },
  {
    name: "74LS137",
    image: "./images/74LS137.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS137.shtml",
  },
  {
    name: "74LS138",
    image: "./images/74LS138.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS138.shtml",
  },
  {
    name: "74LS139",
    image: "./images/74LS139.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS139.shtml",
  },
  {
    name: "74LS145",
    image: "./images/74LS145.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS145.shtml",
  },
  {
    name: "74LS147",
    image: "./images/74LS147.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS147.shtml",
  },
  {
    name: "74LS148",
    image: "./images/74LS148.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS148.shtml",
  },
  {
    name: "74LS151",
    image: "./images/74LS151.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS151.shtml",
  },
  {
    name: "74LS153",
    image: "./images/74LS153.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS153.shtml",
  },
  {
    name: "74LS154",
    image: "./images/74LS154.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS154.shtml",
  },
  {
    name: "74LS155",
    image: "./images/74LS155.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS155.shtml",
  },
  {
    name: "74LS156",
    image: "./images/74LS156.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS156.shtml",
  },
  {
    name: "74LS160",
    image: "./images/74LS160.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS160.shtml",
  },
  {
    name: "74LS161",
    image: "./images/74LS161.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS161.shtml",
  },
  {
    name: "74LS162",
    image: "./images/74LS162.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS162.shtml",
  },
  {
    name: "74LS163",
    image: "./images/74LS163.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS163.shtml",
  },
  {
    name: "74LS164",
    image: "./images/74LS164.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS164.shtml",
  },
  {
    name: "74LS165",
    image: "./images/74LS165.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS165.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },

  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
  },
  {
    name: "74LS122",
    image: "./images/74LS122.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS122.shtml",
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
