
// Variavel de produtos
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
    newRow.insertCell().appendChild(descNode);

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    // Insert price product
    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode);

    // Insert category product
    var categoryName = categories.find(cat => cat.id === prod.category).name;
    newRow.insertCell().appendChild(document.createTextNode(categoryName));

    // Insert promotion product
    var promoNode = document.createTextNode(prod.promotion);

    // Insert new product
    var options = "";

    if (prod.promotion) {
        options = '<span class=" badge text-bg-success me-1"> P </span>';
    }

    if (prod.new) {
        options += '<span class=" badge text-bg-primary"> L </span>';
    }

    newRow.insertCell().innerHTML = options;
}