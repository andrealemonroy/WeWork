document.getElementById("buttonStart").addEventListener('click', () => {
    getData('data.json', (err, dataCompanies) => {
        let search = document.getElementById('textSearch').value.toUpperCase();
        filterCompanies(dataCompanies, search);
    })
});

document.getElementById('textSearch').addEventListener('keyup', () => {
    document.getElementById("buttonStart").click();
});