class Table {
  filterCountry() {    
    const filterCountry = searchCountry.value.toString().toUpperCase();
    const table = document.getElementById('dataTable');
    const tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
      const cell = tr[i].getElementsByTagName('td')[0];
      if (cell) {
        const cellValue = cell.innerText;
        cellValue.toUpperCase().indexOf(filterCountry) > -1 ? tr[i].style.display = '' : tr[i].style.display = "none";
      }
    }
  }

  filterCompany() {    
    const filterCompany = searchCompany.value.toString().toUpperCase();
    const table = document.getElementById('dataTable');
    const tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
      const cell = tr[i].getElementsByTagName('td')[1];
      if (cell) {
        const cellValue = cell.innerText;
        cellValue.toUpperCase().indexOf(filterCompany) > -1 ? tr[i].style.display = '' : tr[i].style.display = "none";
      }
    }
  }

  sortCountry(){
  const table = document.getElementById("dataTable");
  const tr = table.getElementsByTagName('tr');
  let switching = true;
  let shouldSwitch;
  let i;
  while (switching) {
    switching = false;
    for (i = 1; i < (tr.length - 1); i++) {
      shouldSwitch = false;
      const rowOne = tr[i].getElementsByTagName("td")[0];
      const rowTwo = tr[i + 1].getElementsByTagName("td")[0];
      if (rowOne.innerText.toLowerCase() > rowTwo.innerText.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      tr[i].parentNode.insertBefore(tr[i + 1], tr[i]);
      switching = true;
    }
  }
  }

  sortCompany(){
    const table = document.getElementById("dataTable");
    const tr = table.getElementsByTagName('tr');
    let switching = true;
    let shouldSwitch;
    let i;
    while (switching) {
      switching = false;
      for (i = 1; i < (tr.length - 1); i++) {
        shouldSwitch = false;
        const rowOne = tr[i].getElementsByTagName("td")[1];
        const rowTwo = tr[i + 1].getElementsByTagName("td")[1];
        if (rowOne.innerText.toLowerCase() > rowTwo.innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        tr[i].parentNode.insertBefore(tr[i + 1], tr[i]);
        switching = true;
      }
    }
    }
}
const searchCountry = document.getElementById('searchCountry');
const searchCompany = document.getElementById('searchCompany');
const buttonSortCountry = document.getElementById('buttonSortCountry');
const buttonSortCompany = document.getElementById('buttonSortCompany');
searchCountry.addEventListener('keyup', () => {new Table().filterCountry()});
searchCompany.addEventListener('keyup', () => {new Table().filterCompany()});
buttonSortCountry.addEventListener('click', () => {new Table().sortCountry()});
buttonSortCompany.addEventListener('click', () => {new Table().sortCompany()});