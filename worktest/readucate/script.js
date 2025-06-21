const products1 = [
    {
        title: "Gray T-Shirt",
        price: "$14.99",
        img: "readucate.png"
    },
    {
        title: "Black Jeans",
        price: "$34.99",
        img: "readucate.png"
    },
    {
        title: "Green Jacket",
        price: "$59.95",
        img: "readucate.png"
    },
    {
        title: "White Sneakers",
        price: "$49.95",
        img: "readucate.png"
    }
];

const products2 = [
    {
        title: "Blue Sweatshirt",
        price: "$29.95 - $179.95",
        img: "readucate.png",
        colors: ["#4285F4", "#000000"] // blue, black
    },
    {
        title: "Red Hoodie",
        price: "$24.95 - $149.95",
        img: "readucate.png",
        colors: ["#EA4335", "#34A853"] // red, green
    },
    {
        title: "Yellow Pullover",
        price: "$19.95 - $129.95",
        img: "readucate.png",
        colors: ["#FBBC05", "#FF6D01"] // yellow, orange
    },
    {
        title: "Purple Jacket",
        price: "$39.95 - $199.95",
        img: "readucate.png",
        colors: ["#9C27B0", "#E91E63"] // purple, pink
    }
];

function createProductCard(product, hasColors = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image';
    
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    
    // Handle image loading errors
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/250x200?text=Product+Image';
    };
    
    // Add NEW badge to first product in each section
    if (product === products1[0] || product === products2[0]) {
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = 'NEW';
        imageDiv.appendChild(badge);
    }
    
    imageDiv.appendChild(img);
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';
    
    const title = document.createElement('div');
    title.className = 'product-title';
    title.textContent = product.title;
    
    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = product.price;
    
    infoDiv.appendChild(title);
    infoDiv.appendChild(price);
    
    if (hasColors && product.colors) {
        const colorsDiv = document.createElement('div');
        colorsDiv.className = 'color-options';
        
        product.colors.forEach(color => {
            const colorCircle = document.createElement('div');
            colorCircle.className = 'color-circle';
            colorCircle.style.backgroundColor = color;
            colorCircle.title = color; // Show color code on hover
            colorsDiv.appendChild(colorCircle);
        });
        
        infoDiv.appendChild(colorsDiv);
    }
    
    card.appendChild(imageDiv);
    card.appendChild(infoDiv);
    
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('products1-container');
    products1.forEach(product => {
        container1.appendChild(createProductCard(product));
    });
    
    const container2 = document.getElementById('products2-container');
    products2.forEach(product => {
        container2.appendChild(createProductCard(product, true));
    });
});