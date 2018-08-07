const getData = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data1 = JSON.parse(xhr.responseText);
      callback(null, data1);
    }
  }
  xhr.send();
}



window.filterCompanies = (dataCompanies, search) => {
  filter = search.trim(); // tiene la cadena ingresada sin espacios
  length = filter.length;
  arrayFilter = [];
  if (length > 0) { // esta condición determina si hay algo en el texto de búsqueda
    for (let company in dataCompanies) {
      arrayFilter.push(company);
      var countdata = arrayFilter.length;
      strhtml = '';
      let i = 0;
      if (countdata > 0) {
        while (i < countdata) {
          company = arrayFilter[i].toUpperCase(); // obtiene el nombre de cada usuario
          ubication = company.indexOf(filter); // ubica la cadena en otra
          if (ubication > -1) { // si la variable tiene un número mayor a 0 la cadena existe en el nombre
            console.log(strhtml);
            strhtml += arrayFilter[i]
          }
          ++i;
        }
      }
    }
  }

  document.getElementById('companies').innerHTML = strhtml;
  console.log(arrayFilter);
  return arrayFilter;
}

window.filterWorkers = (dataCompanies, searchWorkers) => {
  filterWorkers = searchWorkers.trim();
  length = filterWorkers.length;
  arrayWorkers = [];
  if (length > 0);
  for (let company in dataCompanies) {
    arrayWorkers.push(worker)
  }

}
