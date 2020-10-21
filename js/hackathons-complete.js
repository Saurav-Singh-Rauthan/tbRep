let hackathon = [
 {HACKATHON:"Cyber Awareness Contest",DATE:"22nd October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"IC AMET 2020",DATE:"10th & 11th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"Bring Back Green ",DATE:"3rd & 4th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"CyberWar ",DATE:"October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"HackinUTU  ",DATE:"16th and 17th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"Ease the error 1.0 ",DATE:"10th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"EVOTECH 4.0  ",DATE:"30th September, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"HACKFINITY ",DATE:"19th Sep to 3rd oct, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"CODEOX v2.0 ",DATE:" 26th September 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"ARAMBH-2020  ",DATE:"September 19 - 21, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
 {HACKATHON:"Global conference hub  ",DATE:"19 & 20 September 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
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

let table = document.getElementById("hackathon-table");
let data = Object.keys(hackathon[0]);
generateTable(table, hackathon);
generateTableHead(table, data);