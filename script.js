document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "IPA Clásica", description: "Una IPA con un equilibrio perfecto entre lúpulo y malta. Su sabor es suave con notas de cítricos y un toque de caramelo." },
        { name: "IPA Roja", description: "Con un color rojizo y un perfil de sabor robusto, esta IPA ofrece notas de frutas rojas y un acabado ligeramente amargo." },
        { name: "IPA Negra", description: "Una IPA oscura con sabores intensos de café y chocolate, complementados con un leve amargor de lúpulo." },
        { name: "IPA Doble", description: "Esta IPA de doble lúpulo es intensa y aromática, con un perfil de sabor fuerte que mezcla notas de frutas tropicales y resina." },
        { name: "IPA con Miel", description: "Una IPA dulce y suave con un toque de miel, ofreciendo un sabor único y una textura aterciopelada." },
        { name: "IPA de Trigo", description: "Ligera y refrescante, esta IPA de trigo combina notas de pan recién horneado con un leve toque cítrico." },
        { name: "IPA Tropical", description: "Cargada de frutas tropicales como piña y mango, esta IPA tiene un sabor vibrante y refrescante." },
        { name: "IPA de Cítricos", description: "Con un perfil explosivo de cítricos, esta IPA ofrece una experiencia refrescante con notas prominentes de pomelo y naranja." },
        { name: "IPA Ahumada", description: "Una IPA con un sabor distintivo a madera ahumada y un toque de especias, perfecta para los amantes de sabores intensos." },
        { name: "IPA de Frambuesa", description: "Con un delicado sabor a frambuesa, esta IPA combina dulzura y acidez en una experiencia frutal y refrescante." },
        { name: "IPA de Café", description: "Ideal para los amantes del café, esta IPA tiene un sabor robusto a café tostado y un ligero toque de chocolate oscuro." },
        { name: "IPA de Chocolate", description: "Una combinación indulgente de lúpulo y chocolate, creando una IPA con un sabor rico y cremoso." },
        { name: "IPA de Coco", description: "Suave y exótica, esta IPA ofrece un sabor distintivo a coco con un acabado dulce y tropical." },
        { name: "IPA de Piña", description: "Con un sabor refrescante a piña, esta IPA ofrece una explosión de frutas tropicales en cada sorbo." },
        { name: "IPA de Jengibre", description: "Una IPA con un toque picante de jengibre, creando una experiencia única y especiada en cada trago." }
    ];

    const prices = [250, 300, 350]; // Precios fijos entre 250 y 350 pesos
    const menuSection = document.getElementById('menu');

    const images = [
        "https://freerangestock.com/thumbnail/118370/close-up-of-beer-foam.jpg",
        "https://freerangestock.com/thumbnail/138094/cold-bottles-of-beer-in-ice-on-yellow-background.jpg",
        "https://freerangestock.com/thumbnail/82504/bottles-of-beer-lined-up-on-shelf.jpg",
        "https://freerangestock.com/thumbnail/165621/bartender-pouring-a-beer-at-a-pub.jpg",
        "https://freerangestock.com/thumbnail/106544/group-of-people-toasting-with-glasses-of-beer.jpg"
    ];

    function getRandomImage() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function createProductElement(product) {
        const price = prices[Math.floor(Math.random() * prices.length)];
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p><p>Precio: $${price} por dos botellas de 355 ml más envío</p>`;
        return productDiv;
    }

    function createImageElement(src) {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'decorative-image';
        imageDiv.innerHTML = `<img src="${src}" alt="Imagen decorativa">`;
        return imageDiv;
    }

    products.forEach((product, index) => {
        if (index % 2 === 0) {
            menuSection.appendChild(createProductElement(product));
        }
        menuSection.appendChild(createImageElement(getRandomImage()));
        if (index % 2 !== 0 || index === products.length - 1) {
            menuSection.appendChild(createProductElement(product));
        }
    });

    const whatsappButton = document.getElementById('whatsapp-btn');
    whatsappButton.addEventListener('click', function() {
        const phoneNumber = "525533355687";
        const message = "Hola, me gustaría hacer un pedido.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
