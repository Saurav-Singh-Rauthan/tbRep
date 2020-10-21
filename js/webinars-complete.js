let webinars = [
  {EVENT:"hackCBS 3.0",DATE:"6th to 8th November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"ICMLSC 2020" ,DATE:"18th to 19th December, 2020" ,REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"REVA HACK 20",DATE:"20  2nd to 7th November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Career Guidance Digital Conference for AI and IR ",DATE:"31st October & 1st November, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Hack-Off v3.0",DATE:"12th & 13th December, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Tic Tech ToE",DATE:" '20  07-08 November ‘20",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"HACK THIS FALL",DATE:"October 31 - November 01 2020" ,REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:" IC AMET 2020",DATE:"10th & 11th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform" },
  {EVENT:"Bring Back Green",DATE:"3rd & 4th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"CyberWar",DATE:"OCctober, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"HackinUTU",DATE:"16th and 17th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Ease the error 1.0",DATE:"10th October, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform" },
  {EVENT:"EVOTECH 4.0",DATE:"30th September, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"HACKFINITY " ,DATE:"19th Sep to 3rd oct, 2020 ",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"CODEOX v2.0", DATE:"26th September 2020" ,REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"AARAMBH-2020",DATE:"September 19 - 21, 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Global conference hub",DATE:"19 & 20 September 2020",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
  {EVENT:"Spider: The Web Crawler",DATE:"17th SEP, competition ends-24th SEP",REGISTER:"https://docs.google.com/forms/d/e/1FAIpQLSc7iduqoc6Cal0Xdx74x-DsM0FE2igXWw_r5zoDnqpRCq0UkQ/viewform"},
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

let table = document.getElementById("webinar-table");
let data = Object.keys(webinars[0]);
generateTable(table, webinars);
generateTableHead(table, data);