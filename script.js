// CONFIGURACIÓN DE PRODUCTOS CON MÚLTIPLES FOTOS Y DETALLES
const PRODUCTS = [
    {
        id: 1,
        name: "Guantes de patas de gatito tejidos para jóvenes",
        price: 7.00,
        category: "Tejido",
        description: "Guantes hechos de estambre acrílico suave y semi-elástica de excelente calidad. Para manos delgadas, perfecta para climas frescos o looks de invierno coquetos. Pídalos con una semana de anticipación y pregunte por colores disponibles.",
        images: [
            "imagenes/GuantesNegros.png",
            "imagenes/GuantesBlancos.png",
            "imagenes/GuantesBlancosyNegros.jpeg"
        ]
    },
    {
        id: 2,
        name: "Guantes de patas de gatito tejidos para niñas",
        price: 4.00,
        category: "Tejido",
        description: "Guantes hechos de estambre acrílico suave. Para manos pequeñas de niñas, perfecta para climas frescos. Pídalos con una semana de anticipación y pregunte por colores disponibles.",
        images: [
            "imagenes/GuantesRosas.png",
            "imagenes/GuantesRosasPuestos1.jpeg",
            "imagenes/GuantesRosasPuestos2.jpeg"
        ]
    },
    {
        id: 3,
        name: "Álbum de Figuritas Kpop Demon-Hunters",
        price: 6.00,
        category: "Papelería",
        description: "Revivie los momentos más inolvidables de la película más taquillera del año. Contiene 50 páginas Tamaño A5, 32 hojas, con capacidad para 160 figuritas coleccionables",
        images: [
            "imagenes/album1.png",
            "imagenes/album2.png",
            "imagenes/album3.png"
        ]
    },
    {
        id: 4,
        name: "Paquete de 32 figuritas Kpop Demon-Hunters",
        price: 21.00,
        category: "Papelería",
        description: "Cada paquete trae 5 figuritas de un tamaño.",
        images: [
            "imagenes/figuritas1.png",
            "imagenes/figuritas2.png",
            "imagenes/figuritas3.png"
        ]
    },
    {
        id: 5,
        name: "Gorro con orejas de gatito tejido",
        price: 20.00,
        category: "Tejido",
        description: "Prenda de punto suave y elástica de excelente calce. Ajustable en la espalda, perfecta para climas frescos o looks veraniegos coquetos.",
        images: [
            "imagenes/GorrodeGatito1.png",
            "imagenes/GorrodeGatito2.png",
            "imagenes/GorrodeGatito3.png"
        ]
    },
    {
        id: 6,
        name: "Conejo Amigurumi",
        price: 10.00,
        category: "Tejido",
        description: "Un tierno compañero tejido con la técnica amigurumi. Relleno suave y esponjoso con ojos de seguridad. El regalo perfecto para cualquier edad.",
        images: [
            "imagenes/conejo1.png",
            "imagenes/conejo2.png"
        ]
    },

    // ========== NUEVOS PRODUCTOS PARA PERFUMES ==========
    {
        id: 7,
        name: "Perfume Floral Encanto",
        price: 35.00,
        category: "Perfumes",
        description: "Fragancia floral con notas de jazmín, rosa y un toque de vainilla. Perfecto para el día a día.",
        images: [
            "imagenes/perfume1.png",
            "imagenes/perfume2.png",
            "imagenes/perfume3.png"
        ]
    },
    {
        id: 8,
        name: "Perfume Misterio Nocturno",
        price: 45.00,
        category: "Perfumes",
        description: "Aroma intenso con notas de sándalo, ámbar y bergamota. Ideal para ocasiones especiales.",
        images: [
            "imagenes/perfume4.png",
            "imagenes/perfume5.png",
            "imagenes/perfume6.png"
        ]
    },
    // ========== NUEVOS PRODUCTOS PARA FLORES ==========
    {
        id: 9,
        name: "Ramo de Rosas Eternas",
        price: 25.00,
        category: "Flores",
        description: "Hermoso ramo de rosas preservadas que duran hasta un año. Caja decorativa incluida.",
        images: [
            "imagenes/rosas1.png",
            "imagenes/rosas2.png",
            "imagenes/rosas3.png"
        ]
    },
    {
        id: 10,
        name: "Arreglo Floral Primavera",
        price: 30.00,
        category: "Flores",
        description: "Combinación de flores de temporada en tonos pastel. Incluye jarrón de vidrio.",
        images: [
            "imagenes/flores1.png",
            "imagenes/flores2.png",
            "imagenes/flores3.png"
        ]
    },
    // ========== NUEVOS PRODUCTOS PARA BIRRETES ==========
    {
        id: 11,
        name: "Birrete Personalizado",
        price: 18.00,
        category: "Birretes",
        description: "Birrete universitario con bordado personalizado. Disponible en varios colores.",
        images: [
            "imagenes/birrete1.png",
            "imagenes/birrete2.png",
            "imagenes/birrete3.png"
        ]
    },
    {
        id: 12,
        name: "Birrete con Borla Dorada",
        price: 22.00,
        category: "Birretes",
        description: "Birrete elegante con borla dorada. Ideal para graduaciones.",
        images: [
            "imagenes/birrete4.png",
            "imagenes/birrete5.png",
            "imagenes/birrete6.png"
        ]
    }
];

const WHATSAPP_PHONE = '+584147429116';
let cart = [];

// ELEMENTOS DOM
const productsGrid = document.getElementById('products-grid');
const mainStoreContainer = document.querySelector('.store-container');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalAmount = document.getElementById('cart-total-amount');
const cartCount = document.getElementById('cart-count');
const checkoutSection = document.getElementById('checkout-section');
const checkoutForm = document.getElementById('checkout-form');

// ============================================================
// NUEVA FUNCIÓN: OBTENER CATEGORÍA DESDE LA URL
// ============================================================
function getCategoryFromURL() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    const categoryMap = {
        'index.html': 'Todos',
        'tejido.html': 'Tejido',
        'papeleria.html': 'Papelería',
        'perfumes.html': 'Perfumes',
        'flores.html': 'Flores',
        'birretes.html': 'Birretes'
    };
    
    return categoryMap[page] || 'Todos';
}

// RENDERIZAR PRODUCTOS (FILTRADO POR CATEGORÍA DE LA URL)
function renderCatalog() {
    if (!productsGrid) return;
    
    const currentCategory = getCategoryFromURL();
    
    // Si es "Todos", mostrar todos los productos
    const filteredProducts = currentCategory === 'Todos'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === currentCategory);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="empty-cart-msg">Próximamente más productos en esta sección 🌸</p>';
        return;
    }

    productsGrid.innerHTML = '';
    filteredProducts.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="product-card-clickable" onclick="openProductDetails(${p.id})">
                <img src="${p.images[0] || ''}" class="product-img" alt="${p.name}">
                <span class="product-card-category">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-price">$${p.price.toFixed(2)}</p>
            </div>
            <button class="btn-add-cart" onclick="addToCart(${p.id})">Añadir al carrito 🌸</button>
        `;
        productsGrid.appendChild(div);
    });

    // Actualizar el título de la sección
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.textContent = currentCategory === 'Todos' 
            ? 'Dulces Creaciones' 
            : `${currentCategory} 🌸`;
    }
}

// ============================================================
// RESTO DEL CÓDIGO (MODALES, CARRITO, ETC.)
// ============================================================

// ELEMENTOS DEL MODAL DE DETALLES
const productDetailModal = document.getElementById('product-detail-modal');
const closeDetailBtn = document.getElementById('close-detail-btn');
const popoutMainImg = document.getElementById('popout-main-img');
const popoutThumbnails = document.getElementById('popout-thumbnails');
const popoutCategory = document.getElementById('popout-category');
const popoutName = document.getElementById('popout-name');
const popoutPrice = document.getElementById('popout-price');
const popoutDescription = document.getElementById('popout-description');
const popoutAddBtn = document.getElementById('popout-add-btn');

// ELEMENTOS DEL MODAL DE SEGURIDAD
const securityModal = document.getElementById('security-modal');
const securityConfirmBtn = document.getElementById('security-confirm-btn');
const securityCancelBtn = document.getElementById('security-cancel-btn');

// MODAL DE ÉXITO PAGO
const successModal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// ABRIR DETALLES DEL PRODUCTO (MODAL FLOTANTE)
function openProductDetails(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    // Poblar textos básicos
    popoutCategory.textContent = p.category;
    popoutName.textContent = p.name;
    popoutPrice.textContent = `$${p.price.toFixed(2)}`;
    popoutDescription.textContent = p.description;
    
    // Configurar imagen principal inicial
    popoutMainImg.src = p.images[0] || '';

    // Limpiar y poblar miniaturas de fotos
    popoutThumbnails.innerHTML = '';
    p.images.forEach((imgUrl, index) => {
        const img = document.createElement('img');
        img.src = imgUrl || '';
        img.className = `thumb-img ${index === 0 ? 'active' : ''}`;
        
        // Evento al dar clic a la miniatura
        img.onclick = () => {
            popoutMainImg.src = imgUrl || '';
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            img.classList.add('active');
        };
        popoutThumbnails.appendChild(img);
    });

    // Vincular acción del botón del modal al carrito
    popoutAddBtn.onclick = () => {
        addToCart(p.id);
        closeProductDetails();
    };

    // Mostrar modal flotante
    productDetailModal.classList.remove('hidden');
}

function closeProductDetails() {
    productDetailModal.classList.add('hidden');
}

// CERRAR MODAL DETALLES AL TOCAR FUERA O LA X
if (closeDetailBtn) closeDetailBtn.onclick = closeProductDetails;
if (productDetailModal) {
    productDetailModal.onclick = (e) => {
        if (e.target === productDetailModal) closeProductDetails();
    };
}

// CARRITO DE COMPRAS LÓGICA
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({...p, quantity: 1});
    updateUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateUI();
}

function updateUI() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Aún no hay tesoros en tu carrito.</p>';
        if (checkoutSection) checkoutSection.classList.add('hidden');
    } else {
        if (checkoutSection) checkoutSection.classList.remove('hidden');
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            const div = document.createElement('div');
            div.className = 'cart-item-row';
            div.innerHTML = `
                <div><b>${item.name}</b> x${item.quantity}</div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    <button class="btn-delete-item" onclick="removeFromCart(${item.id})" title="Eliminar del pedido">🗑️</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });
    }
    if (cartTotalAmount) cartTotalAmount.textContent = `$${total.toFixed(2)}`;
    if (cartCount) cartCount.textContent = count;
}

// INTERCEPCIÓN DEL FORMULARIO: SE ABRE LA VENTANA DE SEGURIDAD PRIMERO
if (checkoutForm) {
    checkoutForm.onsubmit = (e) => {
        e.preventDefault();
        if (securityModal) securityModal.classList.remove('hidden');
    };
}

// ACCIÓN DEL BOTÓN CANCELAR EN EL MODAL DE SEGURIDAD
if (securityCancelBtn) {
    securityCancelBtn.onclick = () => {
        if (securityModal) securityModal.classList.add('hidden');
    };
}

// ACCIÓN DEL BOTÓN ACEPTAR EN EL MODAL DE SEGURIDAD
if (securityConfirmBtn) {
    securityConfirmBtn.onclick = () => {
        if (securityModal) securityModal.classList.add('hidden');
        if (successModal) successModal.classList.remove('hidden');
    };
}

// FINALIZAR HACIA WHATSAPP DESDE EL MODAL DE ÉXITO
if (closeModalBtn) {
    closeModalBtn.onclick = () => {
        const name = document.getElementById('customer-name')?.value || '';
        const phone = document.getElementById('customer-phone')?.value || '';
        const state = document.getElementById('shipping-state')?.value || '';
        const agency = document.getElementById('shipping-agency')?.value || '';
        const bank = document.getElementById('payment-bank')?.value || '';
        const ref = document.getElementById('payment-reference')?.value || '';

        let msg = `🌸 *NUEVO PEDIDO*\n\n`;
        msg += `👤 *Cliente:* ${name}\n`;
        msg += `📞 *Tel:* ${phone}\n\n`;
        msg += `📦 *Agencia:* ${state} - ${agency}\n\n`;
        msg += `💳 *Pago:* ${bank} (Ref: ${ref})\n`;
        msg += `🖼️ *NOTA:* Adjunto captura de pago en el siguiente mensaje.\n\n`;
        msg += `🛒 *PRODUCTOS:*\n`;
        
        cart.forEach(item => {
            msg += `- ${item.name} (x${item.quantity})\n`;
        });
        
        msg += `\n💰 *TOTAL:* ${cartTotalAmount?.textContent || '$0.00'}`;

        const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        
        // Resetear Estado de la Tienda por completo
        cart = [];
        if (checkoutForm) checkoutForm.reset();
        updateUI();
        if (successModal) successModal.classList.add('hidden');
    };
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', renderCatalog);