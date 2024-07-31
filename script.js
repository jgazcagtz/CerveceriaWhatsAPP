document.addEventListener('DOMContentLoaded', function() {
    const products = [
        "IPA Clásica",
        "IPA Roja",
        "IPA Negra",
        "IPA Doble",
        "IPA con Miel",
        "IPA de Trigo",
        "IPA Tropical",
        "IPA de Cítricos",
        "IPA Ahumada",
        "IPA de Frambuesa",
        "IPA de Café",
        "IPA de Chocolate",
        "IPA de Coco",
        "IPA de Piña",
        "IPA de Jengibre"
    ];

    const prices = [200, 250, 300]; // Precios fijos entre 200 y 300 pesos
    const menuSection = document.getElementById('menu');

    products.forEach(product => {
        const price = prices[Math.floor(Math.random() * prices.length)];
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h2>${product}</h2><p>Precio: $${price} por dos botellas de 355 ml más envío</p>`;
        menuSection.appendChild(productDiv);
    });

    const whatsappButton = document.getElementById('whatsapp-btn');
    whatsappButton.addEventListener('click', function() {
        const phoneNumber = "525533355687";
        const message = "Hola, me gustaría hacer un pedido.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
