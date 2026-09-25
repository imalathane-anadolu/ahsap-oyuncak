// Ürün Listesi
const products = [
  {
    id: 1,
    name: "Doğal Ahşap Araba",
    price: "450 TL",
    image: "images/araba.jpg",
    description: "Tamamen doğal kayın ağacından üretilmiştir. Toksik boya içermez.",
    shopierUrl: "#" // Yarın buraya Shopier linki gelecek (ör: https://www.shopier.com/ShowProduct3?id=123456)
  },
  {
    id: 2,
    name: "Ahşap Denge Kulesi",
    price: "350 TL",
    image: "images/kule.jpg",
    description: "Çocukların motor becerilerini ve odaklanmasını geliştirir.",
    shopierUrl: "#" // Yarın buraya Shopier linki gelecek
  },
  {
    id: 3,
    name: "Ahşap Hayvan Figürleri Seti",
    price: "600 TL",
    image: "images/figur.jpg",
    description: "Pürüzsüz zımparalanmış, el yapımı 5'li ahşap hayvan seti.",
    shopierUrl: "#" // Yarın buraya Shopier linki gelecek
  }
];

// Ürünleri Ekrana Basan Fonksiyon
function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const card = `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-200 flex flex-col justify-between">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-bold text-amber-950">${product.name}</h2>
            <p class="text-stone-600 text-sm mt-2">${product.description}</p>
          </div>
          <div class="mt-4 pt-4 border-t border-amber-100 flex items-center justify-between">
            <span class="text-lg font-bold text-emerald-700">${product.price}</span>
            <a href="${product.shopierUrl}" target="_blank" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              Satın Al
            </a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Sayfa yüklendiğinde ürünleri göster
document.addEventListener('DOMContentLoaded', renderProducts);
