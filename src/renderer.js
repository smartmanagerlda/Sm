// let { remote } = require("electron");
// console.log(process.versions.electron);

const { PosPrinter } = require('@electron/remote').require("electron-pos-printer");
// const {PosPrinter} = require("electron-pos-printer"); //dont work in production (??)

const path = require("path");

let webContents = require('@electron/remote').getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers
console.log(printers);

printers.map((item, index) => {
  //write in the screen the printers for choose
  document.getElementById("list_printers").innerHTML +=
    ' <input type="radio" id="printer_' +
    index +
    '" name="printer" value="' +
    item.name +
    '"><label for="printer_' +
    index +
    '">' +
    item.name +
    "</label><br>";
});


const data = [
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "Systems Manager Lda.<br>Av Dom Alexandre<br>NUIT: 00000<br>Tel: 000000000",
    style: `text-align:center;`,
    css: { "font-weight": "100", "font-size": "14px", "margin": "0px", "padding": "0px"},
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "-------------------<br>-------------------",
    style: `text-align:center;`,
    css: { "font-size": "12px" },
  },
  
  // {
  //   type: "image",
  //   path: path.join(__dirname, "assets/img_test.png"), // file path
  //   position: "center", // position of image: 'left' | 'center' | 'right'
  //   width: "auto", // width of image in px; default: auto
  //   height: "60px", // width of image in px; default: 50 or '50px'
  // },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
    value:
      "Venda a Dinheiro<br><br>No 00000<br><br>Data: 00/00/2022<br>Caixa: Coutinho<br>Cliente: Lucas<br>",

    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "left",
      "margin": "0px",
      "padding": "0px"
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
    value:
      "-------------------<br>Produto----------Qt----------Total<br>",

    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "center",
      "margin": "0px",
      "padding": "0px"
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "Total Items: 0.00 Mt",
    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "right",
      "margin": "0px",
      "padding": "0px"
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "Total IVA: 0.00 Mt",
    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "right",
      "margin": "0px",
      "padding": "0px"
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "Total Desc: 0.00 Mt",
    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "right",
      "margin": "0px",
      "padding": "0px"
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "Total: 0.00 Mt",
    css: {
      "font-size": "10px",
      "font-family": "sans-serif",
      "text-align": "left",
      "margin": "0px",
      "padding": "0px"
    },
  },
];

function date() {
  const x = new Date();

  const y = "0" + x.getHours();
  const z = "0" + x.getMinutes();
  const s = "0" + x.getSeconds();
  const h = "0" + x.getDate();
  const ano = x.getFullYear().toString().substr(-2);
  const ms = x.getMonth();
  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    y.substr(-2) +
    ":" +
    z.substr(-2) +
    ":" +
    s.substr(-2) +
    " -  " +
    h.substr(-2) +
    "/" +
    meses[ms]
  );
}

function print() {
  let printerName;
  let widthPage;

  var p = document.getElementsByName("printer");
  var w = document.getElementsByName("width");

  for (var i = 0, length = p.length; i < length; i++) {
    if (p[i].checked) {
      printerName = p[i].value;

      break;
    }
  }

  for (var i = 0, length = w.length; i < length; i++) {
    if (w[i].checked) {
      widthPage = w[i].value;

      break;
    }
  }

  console.log(printerName, widthPage);

  const options = {
    preview: false, // Preview in window or print
    width: widthPage, //  width of content body
    margin: "0 0 0 0", // margin of content body
    copies: 1, // Number of copies to print
    printerName: printerName, // printerName: string, check it at webContent.getPrinters()
    timeOutPerLine: 500,
    silent: true,
  };

  const now = {
    type: "text",
    value: "" + date(),
    style: `text-align:center;`,
    css: { "font-size": "12px", "font-family": "sans-serif" },
  };

  const d = [...data, now];

  if (printerName && widthPage) {
    PosPrinter.print(d, options)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Select the printer and the width");
  }
}
