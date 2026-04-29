// ===== Data =====
const CATEGORIES = [
  { id: 'electronics', icon: '📱', name: 'אלקטרוניקה', count: '1,240 פריטים' },
  { id: 'fashion', icon: '👗', name: 'אופנה', count: '3,580 פריטים' },
  { id: 'home', icon: '🏠', name: 'בית וגן', count: '890 פריטים' },
  { id: 'beauty', icon: '💄', name: 'יופי', count: '670 פריטים' },
  { id: 'sports', icon: '⚽', name: 'ספורט', count: '450 פריטים' },
  { id: 'books', icon: '📚', name: 'ספרים', count: '2,100 פריטים' },
];

const PRODUCTS = [
  { id: 1, name: 'אוזניות אלחוטיות Pro', cat: 'electronics', icon: '🎧', price: 399, old: 599, rating: 4.8, reviews: 234, tag: 'מבצע', ai: true },
  { id: 2, name: 'שעון חכם Series 9', cat: 'electronics', icon: '⌚', price: 1299, old: 1599, rating: 4.9, reviews: 512, ai: true },
  { id: 3, name: 'מצלמה דיגיטלית 4K', cat: 'electronics', icon: '📷', price: 2499, rating: 4.7, reviews: 89 },
  { id: 4, name: 'נעלי ספורט Air', cat: 'fashion', icon: '👟', price: 459, old: 599, rating: 4.6, reviews: 421, tag: '-23%' },
  { id: 5, name: 'תיק יד עור', cat: 'fashion', icon: '👜', price: 289, rating: 4.5, reviews: 156, ai: true },
  { id: 6, name: 'משקפי שמש מעוצבים', cat: 'fashion', icon: '🕶️', price: 199, rating: 4.4, reviews: 78 },
  { id: 7, name: 'מנורת לד חכמה', cat: 'home', icon: '💡', price: 149, old: 199, rating: 4.7, reviews: 312, tag: 'חדש' },
  { id: 8, name: 'מכונת קפה אספרסו', cat: 'home', icon: '☕', price: 899, rating: 4.8, reviews: 245, ai: true },
  { id: 9, name: 'שמיכה רכה XL', cat: 'home', icon: '🛏️', price: 169, rating: 4.6, reviews: 134 },
  { id: 10, name: 'סט טיפוח פנים', cat: 'beauty', icon: '✨', price: 249, old: 329, rating: 4.9, reviews: 567, tag: 'הכי נמכר' },
  { id: 11, name: 'בושם פרחוני', cat: 'beauty', icon: '🌸', price: 379, rating: 4.7, reviews: 198, ai: true },
  { id: 12, name: 'מסכת זהב', cat: 'beauty', icon: '🧖', price: 89, rating: 4.5, reviews: 89 },
];

const fmt = n => '₪' + n.toLocaleString('he-IL');
const $ = id => document.getElementById(id);

const PRODUCT_DESCS = {
  1: 'אוזניות Premium עם ביטול רעשים אקטיבי, 30 שעות סוללה, וחיבור Bluetooth 5.3. מושלמות לעבודה, ספורט, ונסיעות.',
  2: 'שעון חכם עם מסך AMOLED, GPS מובנה, מדידת דופק 24/7, ו-7 ימי סוללה. עמיד למים עד 50 מטר.',
  3: 'מצלמה מקצועית 24MP עם וידאו 4K/60fps, OIS, ועדשה ייחודית. אידיאלית ליוצרי תוכן ולצלמים.',
  4: 'נעלי ספורט עם סוליית Air לספיגת זעזועים מירבית. קלות במיוחד, מתאימות לריצה ולספורט יומיומי.',
  5: 'תיק עור איטלקי אמיתי, בעבודת יד. נרתיק פנים מרוחב, רצועה מתכווננת, מגיע בשלושה צבעים.',
  6: 'משקפיים בסגנון Retro עם עדשות UV400 ומסגרת טיטניום קלה. הגנה מלאה מהשמש בסטייל.',
  7: 'מנורה חכמה עם 16M צבעים, בקרה מהאפליקציה, ותאימות ל-Alexa ו-Google Home.',
  8: 'מכונת אספרסו מקצועית עם לחץ 15 בר, קיטור לחלב, ושעון מתזמן. קפה מושלם כל בוקר.',
  9: 'שמיכה מיקרופייבר רכה במיוחד, 300GSM, מתאימה לכל עונות השנה. ניתנת לכביסה במכונה.',
  10: 'סט 5 מוצרי טיפוח: ניקוי, טונר, סרום ויטמין C, קרם לח ו-SPF50. לכל סוגי העור.',
  11: 'בושם פרחוני עדין עם נוטי Jasmine, Rose ו-Sandalwood. עמידות גבוהה - 8-10 שעות.',
  12: 'מסכת זהב 24K לטיפוח ולחות עמוקה. 30 דקות = עור זוהר ורענן. לכל סוגי העור.',
};

// ===== State =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let activeFilter = 'all';

// ===== Render =====
function renderCategories() {
  $('categoriesGrid').innerHTML = CATEGORIES.map(c => `
    <div class="category-card" onclick="filterBy('${c.id}')">
      <div class="ico">${c.icon}</div>
      <h3>${c.name}</h3>
      <span>${c.count}</span>
    </div>
  `).join('');
}

function renderProducts(list = null) {
  const items = list || (activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeFilter));
  $('productsGrid').innerHTML = items.map(p => `
    <article class="product fade-in" onclick="openModal(${p.id})">
      <div class="product-img">
        ${p.icon}
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        ${p.ai ? `<span class="ai-pick">✨ AI Pick</span>` : ''}
        <span class="wish-ico" onclick="event.stopPropagation(); toggleWish(${p.id})">${wishlist.includes(p.id) ? '❤️' : '🤍'}</span>
      </div>
      <div class="product-body">
        <span class="product-cat">${categoryName(p.cat)}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          ${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}
          <span>(${p.reviews})</span>
        </div>
        <div class="product-bottom">
          <div>
            ${p.old ? `<span class="product-old">${fmt(p.old)}</span>` : ''}
            <span class="product-price">${fmt(p.price)}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})" aria-label="הוסף לעגלה">+</button>
        </div>
      </div>
    </article>
  `).join('');
  observeFadeIns();
}

const categoryName = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;

// ===== Filters =====
function filterBy(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === cat);
  });
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.querySelectorAll('.filter').forEach(b => {
  b.addEventListener('click', () => filterBy(b.dataset.filter));
});

// ===== Cart =====
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  updateCartUI();
  toast(`✓ ${p.name} נוסף לעגלה`);
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('cartBadge').textContent = count;
  $('cartBadge').style.display = count ? 'grid' : 'none';
  $('cartTotal').textContent = fmt(total);
  $('cartItems').innerHTML = cart.length === 0
    ? '<div class="cart-empty">העגלה ריקה<br/>הוסיפו מוצרים כדי להתחיל</div>'
    : cart.map(i => `
      <div class="cart-item">
        <div class="ci-img">${i.icon}</div>
        <div>
          <h4>${i.name}</h4>
          <div class="ci-price">${fmt(i.price)}</div>
          <div class="ci-qty">
            <button class="qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
            <span>${i.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeItem(${i.id})">הסר</button>
      </div>
    `).join('');
}

function openCart() {
  $('cartDrawer').classList.add('show');
  $('overlay').classList.add('show');
}
function closeAll() {
  $('cartDrawer').classList.remove('show');
  $('overlay').classList.remove('show');
}
function checkout() {
  if (cart.length === 0) return toast('העגלה ריקה');
  toast('🎉 ההזמנה התקבלה! תודה רבה');
  cart = [];
  saveCart();
  updateCartUI();
  setTimeout(closeAll, 800);
}
$('cartBtn').addEventListener('click', openCart);

// ===== Wishlist =====
function toggleWish(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    toast('הוסר מהמועדפים');
  } else {
    wishlist.push(id);
    toast('❤️ נוסף למועדפים');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  renderProducts();
}

// ===== Search =====
function openSearch() {
  $('searchBar').classList.add('show');
  setTimeout(() => $('searchInput').focus(), 100);
}
function closeSearch() {
  $('searchBar').classList.remove('show');
  $('searchInput').value = '';
  $('searchResults').innerHTML = '';
}
$('searchBtn').addEventListener('click', openSearch);
$('searchInput').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { $('searchResults').innerHTML = ''; return; }
  const results = PRODUCTS.filter(p =>
    p.name.includes(q) || categoryName(p.cat).includes(q)
  );
  $('searchResults').innerHTML = results.length
    ? results.map(p => `
        <div class="search-item" onclick="closeSearch(); openModal(${p.id})">
          <span class="si-ico">${p.icon}</span>
          <div><h4>${p.name}</h4><span>${fmt(p.price)}</span></div>
        </div>
      `).join('')
    : '<div class="search-empty">לא נמצאו מוצרים</div>';
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeModal(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

// ===== Product Modal =====
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const desc = PRODUCT_DESCS[id] || '';
  const inWish = wishlist.includes(id);
  $('modalBody').innerHTML = `
    <div class="modal-img">${p.icon}</div>
    <div class="modal-info">
      <span class="product-cat">${categoryName(p.cat)}</span>
      <h2>${p.name}</h2>
      <div class="product-rating">
        ${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}
        <span>(${p.reviews} ביקורות)</span>
      </div>
      <p class="modal-desc">${desc}</p>
      <div class="modal-price-row">
        <span class="modal-price">${fmt(p.price)}</span>
        ${p.old ? `<span class="modal-old">${fmt(p.old)}</span>` : ''}
        ${p.old ? `<span class="badge" style="margin:0">חסכון ${fmt(p.old - p.price)}</span>` : ''}
      </div>
      <div class="modal-tags">
        ${p.ai ? '<span class="modal-tag">✨ AI Pick</span>' : ''}
        ${p.tag ? `<span class="modal-tag">${p.tag}</span>` : ''}
        <span class="modal-tag">🚚 משלוח חינם</span>
        <span class="modal-tag">↩️ 30 יום החזרה</span>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal()">הוסף לעגלה</button>
        <button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="toggleWish(${p.id}); this.classList.toggle('active')" aria-label="מועדפים">${inWish ? '❤️' : '🤍'}</button>
      </div>
    </div>
  `;
  $('productModal').classList.add('show');
  $('modalOverlay').classList.add('show');
}
function closeModal() {
  $('productModal').classList.remove('show');
  $('modalOverlay').classList.remove('show');
}

// ===== Scroll Fade-in =====
function observeFadeIns() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ===== Toast =====
let toastTimer;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ===== AI Chat =====
const BOT_REPLIES = [
  { match: /היי|שלום|הי/, reply: 'היי! 👋 איך אוכל לעזור היום? אני יכול להמליץ על מוצרים, לעזור עם הזמנה או לענות על שאלות.' },
  { match: /אוזני|headphone/i, reply: 'יש לנו אוזניות אלחוטיות Pro במבצע ב-₪399 (במקום ₪599). דירוג 4.8★ מ-234 לקוחות. רוצה שאוסיף לעגלה?' },
  { match: /שעון|watch/i, reply: 'השעון החכם Series 9 הוא הבחירה המובילה שלנו - ₪1,299 עם דירוג 4.9★. כולל מדידת דופק, GPS ו-7 ימי סוללה.' },
  { match: /משלוח|delivery|הגעה/, reply: '🚚 משלוח חינם מעל ₪199. הגעה תוך 24 שעות לרוב הארץ. ניתן לעקוב אחר המשלוח באמצעות לינק שיישלח באימייל.' },
  { match: /מבצע|הנחה|זול/, reply: 'יש לנו מבצעים מצוינים עכשיו! 🔥 חיסכון של עד 40% במחלקת אלקטרוניקה ויופי. רוצה שאראה לך את הפופולריים?' },
  { match: /החזר|return/, reply: 'מדיניות החזרה שלנו: 30 יום החזרה ללא שאלות. החזר כספי מלא תוך 7 ימי עסקים.' },
  { match: /תשלום|payment|אשראי/, reply: '💳 אנחנו מקבלים: ויזה, מאסטרקארד, אמריקן אקספרס, PayPal, וביט. כל התשלומים מוצפנים ב-SSL.' },
  { match: /תודה|thanks/, reply: 'בכיף! אם תצטרך עוד עזרה, אני כאן 24/7 ✨' },
];

function botResponse(msg) {
  const found = BOT_REPLIES.find(b => b.match.test(msg));
  if (found) return found.reply;
  return 'מעניין! אני יכול לעזור לך עם המלצות מוצרים, מבצעים, משלוחים, החזרות ועוד. נסה לשאול על קטגוריה ספציפית 🛍️';
}

function openChat() { $('chatWindow').classList.add('show'); }
function closeChat() { $('chatWindow').classList.remove('show'); }

function sendMessage(e) {
  e.preventDefault();
  const input = $('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  input.value = '';
  setTimeout(() => addMsg(botResponse(text), 'bot'), 600);
}

function addMsg(text, role) {
  const el = document.createElement('div');
  el.className = `msg msg-${role}`;
  el.textContent = text;
  $('chatMessages').appendChild(el);
  $('chatMessages').scrollTop = $('chatMessages').scrollHeight;
}

// ===== Init =====
renderCategories();
renderProducts();
updateCartUI();
observeFadeIns();
