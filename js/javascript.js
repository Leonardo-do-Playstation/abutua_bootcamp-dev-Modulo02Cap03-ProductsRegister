
function convertToNumber(priceFormat){
    return priceFormat.replace(/\./g,'').replace(',','.');
}

// Variavel de produtos iniciais 
var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    }
];

// Variavel de categorias
var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

// Onload
loadProducts();

// Load all products
function loadProducts() {
    for (let prod of products) {
        addNewRow(prod);
    }
}

// Função para salvar produtos
function save() {
    event.preventDefault();

    var prod =
    {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDescription").value,
        price: convertToNumber(document.getElementById("inputPrice").value),
        category: document.getElementById("selectCategory").value,
        promotion: document.getElementById("checkPromotion").checked,
        new: document.getElementById("checkBoxNewProduct").checked
    };
    addNewRow(prod);
    products.push(prod);

    document.getElementById("formProduct").reset();
}

// Add a new row
function addNewRow(prod) {
    var table = document.getElementById("ProductsTable");

    var newRow = table.insertRow();

    // Insert id product
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    // Insert name product
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    // Insert description product
    var descNode = document.createTextNode(prod.description);
    var cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(descNode)

    // Format price product
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    // Insert price product
    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode);

    // Insert category product
    var categoryNode = document.createTextNode(categories[prod.category - 1].name);
    newRow.insertCell().appendChild(categoryNode);

    // Insert promotion product
    var promoNode = document.createTextNode(prod.promotion);

    // Insert new product
    var options = "";

    if (prod.promotion) {
        options = "<span class='badge text-bg-success me-1'> P </span>";
    }

    if (prod.new) {
        options += "<span class='badge text-bg-primary'> L </span>";
    }

    var cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell me-1";
    cell.innerHTML = options;
}