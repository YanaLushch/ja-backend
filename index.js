function DataTable(config) {
  const parentElement = document.querySelector(config.parent);
  const tableElement = document.createElement("table");
  const tHeadElement = document.createElement("thead");
  const tr1Element = document.createElement("tr");
  const tBodyElement = document.createElement("tbody");
  parentElement.appendChild(tableElement);
  tableElement.appendChild(tHeadElement);
  tHeadElement.appendChild(tr1Element);
  tableElement.appendChild(tBodyElement);
  fetch(config.apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let parsedData = Object.values(data.data);
      getTableHead(parsedData, tr1Element);
      for (let k = 0; k < parsedData.length; k++) {
        const trElement = document.createElement("tr");
        tBodyElement.appendChild(trElement);
        for (let i = 0; i < Object.values(parsedData[k]).length; i++) {
          const tdElement = document.createElement("td");
          trElement.appendChild(tdElement);
          tdElement.innerHTML = Object.values(parsedData[k])[i];
        }
        buttonDelete(trElement);
      }
      console.log(parentElement);
    });
}
function getTableHead(parsedData, tr1Element) {
  Object.keys(parsedData[0]).forEach((item) => {
    const thElement = document.createElement("th");
    tr1Element.appendChild(thElement);
    thElement.innerHTML = item.toUpperCase();
  });
  const thElement = document.createElement("th");
    tr1Element.appendChild(thElement);
    thElement.innerHTML = "Action".toUpperCase();
}
function buttonDelete(trElement){
    const tdElement = document.createElement("td");
    const button = document.createElement('button');
    trElement.appendChild(tdElement);
    tdElement.appendChild(button);
    button.innerHTML = "Delete";
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "Возраст", value: "age" },
    { title: "ID", value: "id" },
  ],
  apiUrl: "https://mock-api.shpp.me/ylushch/users",
};

DataTable(config1);
// tabulatorTable(config1, users);
