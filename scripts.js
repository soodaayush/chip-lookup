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
    name: "28C16",
    image: "./images/28C16.png",
    dataSheet: "https://eater.net/datasheets/28c16.pdf",
  },
  {
    name: "28C64B",
    image: "./images/28C64B.png",
    dataSheet: "https://ww1.microchip.com/downloads/en/DeviceDoc/doc0270.pdf",
  },
  {
    name: "28C256",
    image: "./images/28C256.png",
    dataSheet: "https://eater.net/datasheets/28c256.pdf",
  },
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
    name: "74LS06",
    image: "./images/74LS06.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls06.pdf",
  },
  {
    name: "74LS07",
    image: "./images/74LS07.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls07.pdf",
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
    name: "74LS21",
    image: "./images/74LS21.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls21.pdf",
  },
  {
    name: "74LS27",
    image: "./images/74LS27.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls27.pdf",
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
    name: "74LS37",
    image: "./images/74LS37.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn54ls37.pdf",
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
    name: "74LS107",
    image: "./images/74LS107.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls107a.pdf",
  },
  {
    name: "74LS109",
    image: "./images/74LS109.png",
    dataSheet: "https://www.jameco.com/Jameco/Products/ProdDS/46421.pdf",
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
    name: "74LS157",
    image: "./images/74LS157.png",
    dataSheet: "https://www.jameco.com/Jameco/Products/ProdDS/301612-DS01.pdf",
  },
  {
    name: "74LS158",
    image: "./images/74LS158.png",
    dataSheet: "https://www.farnell.com/datasheets/3970099.pdf",
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
    name: "74LS166",
    image: "./images/74LS166.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS166.shtml",
  },
  {
    name: "74LS169",
    image: "./images/74LS169.png",
    dataSheet:
      "https://www.alldatasheet.com/datasheet-pdf/view/51042/FAIRCHILD/DM74LS169A.html",
  },
  {
    name: "74LS173",
    image: "./images/74LS173.png",
    dataSheet: "https://www.jameco.com/Jameco/Products/ProdDS/46922.pdf",
  },
  {
    name: "74LS174",
    image: "./images/74LS174.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS174.shtml",
  },
  {
    name: "74LS175",
    image: "./images/74LS175.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS175.shtml",
  },
  {
    name: "74LS181",
    image: "./images/74LS181.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS181.shtml",
  },
  {
    name: "74LS190",
    image: "./images/74LS190.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS190.shtml",
  },
  {
    name: "74LS191",
    image: "./images/74LS191.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS191.shtml",
  },
  {
    name: "74LS192",
    image: "./images/74LS192.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS192.shtml",
  },
  {
    name: "74LS193",
    image: "./images/74LS193.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS193.shtml",
  },
  {
    name: "74LS194",
    image: "./images/74LS194.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS194.shtml",
  },
  {
    name: "74LS195",
    image: "./images/74LS195.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS195.shtml",
  },
  {
    name: "74LS221",
    image: "./images/74LS221.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS221.shtml",
  },
  {
    name: "74LS240",
    image: "./images/74LS240.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS240.shtml",
  },
  {
    name: "74LS240",
    image: "./images/74LS240.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS240.shtml",
  },
  {
    name: "74LS240",
    image: "./images/74LS240.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS240.shtml",
  },
  {
    name: "74LS241",
    image: "./images/74LS241.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS241.shtml",
  },
  {
    name: "74LS243",
    image: "./images/74LS243.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS243.shtml",
  },
  {
    name: "74LS244",
    image: "./images/74LS244.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS244.shtml",
  },
  {
    name: "74LS245",
    image: "./images/74LS245.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS245.shtml",
  },
  {
    name: "74LS247",
    image: "./images/74LS247.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS247.shtml",
  },
  {
    name: "74LS251",
    image: "./images/74LS251.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS251.shtml",
  },
  {
    name: "74LS253",
    image: "./images/74LS253.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS253.shtml",
  },
  {
    name: "74LS257",
    image: "./images/74LS257.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS257.shtml",
  },
  {
    name: "74LS259",
    image: "./images/74LS259.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS259.shtml",
  },
  {
    name: "74LS260",
    image: "./images/74LS260.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS260.shtml",
  },
  {
    name: "74LS266",
    image: "./images/74LS266.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS266.shtml",
  },
  {
    name: "74LS273",
    image: "./images/74LS273.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS273.shtml",
  },
  {
    name: "74LS279",
    image: "./images/74LS279.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS279.shtml",
  },
  {
    name: "74LS280",
    image: "./images/74LS280.png",
    dataSheet: "https://wiki.sj.ifsc.edu.br/images/f/f4/74LS280.pdf",
  },
  {
    name: "74LS283",
    image: "./images/74LS283.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS283.shtml",
  },
  {
    name: "74LS293",
    image: "./images/74LS293.png",
    dataSheet:
      "https://www.arcade-museum.com/tech-center/ttl-and-cmos/motorola/290.pdf",
  },
  {
    name: "74LS299",
    image: "./images/74LS299.png",
    dataSheet:
      "https://pdf.datasheetcatalog.com/datasheet/motorola/SN74LS299N.pdf",
  },
  {
    name: "74LS365",
    image: "./images/74LS365.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls367a.pdf",
  },
  {
    name: "74LS367",
    image: "./images/74LS367.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS367.shtml",
  },
  {
    name: "74LS368",
    image: "./images/74LS368.png",
    dataSheet:
      "https://www.silicon-ark.co.uk/datasheets/74ls368n%20datasheet%20texas.pdf",
  },
  {
    name: "74LS373",
    image: "./images/74LS373.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS373.shtml",
  },
  {
    name: "74LS374",
    image: "./images/74LS374.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS374.shtml",
  },
  {
    name: "74LS375",
    image: "./images/74LS375.png",
    dataSheet: "https://www.farnell.com/datasheets/3970102.pdf",
  },
  {
    name: "74LS377",
    image: "./images/74LS377.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS377.shtml",
  },
  {
    name: "74LS390",
    image: "./images/74LS390.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS390.shtml",
  },
  {
    name: "74LS393",
    image: "./images/74LS393.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS393.shtml",
  },
  {
    name: "74LS423",
    image: "./images/74LS423.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls423.pdf",
  },
  {
    name: "74LS540",
    image: "./images/74LS540.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS540.shtml",
  },
  {
    name: "74LS541",
    image: "./images/74LS541.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS541.shtml",
  },
  {
    name: "74LS573",
    image: "./images/74LS573.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS573.shtml",
  },
  {
    name: "74LS574",
    image: "./images/74LS574.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS574.shtml",
  },
  {
    name: "74LS590",
    image: "./images/74LS590.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn54ls590.pdf",
  },
  {
    name: "74LS595",
    image: "./images/74LS595.png",
    dataSheet: "https://www.ti.com/lit/ds/symlink/sn74ls595.pdf",
  },
  {
    name: "74LS640",
    image: "./images/74LS640.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS640.shtml",
  },
  {
    name: "74LS645",
    image: "./images/74LS645.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS645.shtml",
  },
  {
    name: "74LS682",
    image: "./images/74LS682.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS682.shtml",
  },
  {
    name: "74LS688",
    image: "./images/74LS688.png",
    dataSheet: "https://www.futurlec.com/74LS/74LS688.shtml",
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
