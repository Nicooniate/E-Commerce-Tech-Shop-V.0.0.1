// Array de productos
const products = [
    { id: 1, name: 'PC', price: 700 },
    { id: 2, name: 'Monitor', price: 80 },
    { id: 3, name: 'Mouse', price: 15},
    { id: 4, name: 'Teclado', price: 200},
    { id: 5, name: 'Auriculares', price: 150},
    { id: 6, name: 'Pack  Gamer', price: 1700}
];

// Funcion para mostrar el catalogo de productos en una alerta
function showProductCatalogAlert() {
    let catalogMessage = 'Catálogo de Productos:\n';

    products.forEach(product => {
        catalogMessage += `${product.id}: ${product.name} - $${product.price}\n`;
    });

    alert(catalogMessage);
}

// Funcion para obtener el producto seleccionado por ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Funcion para agregar productos a la lista y mostrar el total
function addToCartAndShowTotal() {
    let cartTotal = 0;
    let selectedProducts = [];

    while (true) {
        const selectedProductID = parseInt(prompt('Ingrese el ID del producto que desea agregar al carrito, al finalizar precione aceptar para ver el total de su compra (o cancelar para finalizar):'));

        if (!selectedProductID) {
            break;
        }

        const selectedProduct = getProductById(selectedProductID);

        if (selectedProduct) {
            selectedProducts.push(selectedProduct);
            cartTotal += selectedProduct.price;
        } else {
            alert('Producto no encontrado. Introduzca un ID válido.');
        }
    }

    let cartItems = 'Productos en el carrito:\n';
    selectedProducts.forEach(product => {
        cartItems += `${product.name} - $${product.price}\n`;
    });

    alert(`${cartItems}\nTotal: $${cartTotal}`);
}


showProductCatalogAlert();
addToCartAndShowTotal();