// Ürün Listesi
const products = [
  {
    id: 1,
    name: "El Yapımı Ahşap Oyuncak",
    price: "450 TL",
    image: "IMG_0133.jpg",
    description: "Tamamen doğal kayın ağacından üretilmiştir. Kimyasal veya toksik madde içermez, çocuklar için tamamen güvenlidir.",
    shopierUrl: "#" // Yarın Shopier linkini buraya yapıştıracağız
  }
];

// Ürünleri Ekrana Basan Fonksiyon
function renderProducts() {
  const container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = '';

  products.forEach(product => {
    const card = `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-200 flex flex-col justify-between max-w-sm mx-auto">
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
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
