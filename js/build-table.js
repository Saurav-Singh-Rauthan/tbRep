let hackathons = [
  {HACKATHON:"Cyber Awareness Contest",DATE:"22nd October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"IC AMET 2020",DATE:"10th & 11th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"Bring Back Green ",DATE:"3rd & 4th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"CyberWar ",DATE:"October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"HackinUTU  ",DATE:"16th and 17th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
];

let hackathon = [
  {HACKATHON:"Cyber Awareness Contest",DATE:"22nd October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"IC AMET 2020",DATE:"10th & 11th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"Bring Back Green ",DATE:"3rd & 4th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"CyberWar ",DATE:"October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"HackinUTU  ",DATE:"16th and 17th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
];

let webinar = [
  {EVENT:"hackCBS 3.0",DATE:"6th to 8th November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"ICMLSC 2020" ,DATE:"18th to 19th December, 2020" ,REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"REVA HACK 20",DATE:"20  2nd to 7th November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Career Guidance Digital Conference for AI and IR ",DATE:"31st October & 1st November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Hack-Off v3.0",DATE:"12th & 13th December, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
];



function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      if(key==='REGISTER')
      {
        var x = document.createElement("A");
        var t = document.createTextNode("link");
        x.setAttribute("href", element[key]);
        x.appendChild(t);
        cell.appendChild(x);
      }
      else{
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
}

let table = document.getElementById("hack-table");
let data = Object.keys(hackathon[0]);
generateTable(table, hackathon);
generateTableHead(table, data);

let r = document.getElementById("hack-table2");
let e = Object.keys(hackathons[0]);
generateTable(r, hackathons);
generateTableHead(r, e);

let x = document.getElementById("webinar-tab");
let y = Object.keys(webinar[0]);
generateTable(x, webinar);
generateTableHead(x, y);