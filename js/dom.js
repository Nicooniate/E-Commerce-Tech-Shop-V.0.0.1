const navBar = document.getElementById('NavBar');
navBar.innerHTML = `			
<div>
<ul>
    <li><a href="#">MARCAS</a></li>
    <li><a href="#">HOME</a></li>
    <li><a href="#">CONTACTO</a></li>
</ul>
</div>`;

class Productos{
    constructor(marca, nombre, precio,img){
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const mother = new Productos("ASUS", "A320M-A PRO MAX", 80000, "../assets/img/a320m.webp");
const procesador = new Productos("AMD", "Ryzen 5 2600", 129000, "../assets/img/a320m.webp");
const grafica = new Productos("Nvidia", "Nvidia GFORCE 1660 Super", 200000, "../assets/img/a320m.webp");
const ram = new Productos("Geil", "Geil RGB 8GB 3200MHZ x2", 40000, "../assets/img/a320m.webp");

const carrito = [mother, procesador, grafica, ram];

carrito.forEach(Producto =>{
    const DIV = document.createElement("div");
    DIV.className = "card";
    DIV.innerHTML = `	
    <img src="${Producto.img}" alt="itemShop">
    <p>nombre: ${Producto.nombre} </p>
    <p>marca: ${Producto.marca} </p>
    <p>precio: ${Producto.precio} </p>
    <button>SHOP</button>
    `;

    CardsShop.appendChild(DIV);
})