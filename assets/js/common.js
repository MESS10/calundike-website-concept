/* Calundike website - design concept. Shared data, the quote list (kept in this browser only) and the header/footer. */
(function () {
  'use strict';
  var IMG = 'assets/img/';

  var products = [
    { id: 'lounge', name: 'Three-seater lounge suite', room: 'Living room', spin: true, img: IMG + 'sofa-front.jpg',
      gallery: [['Front', 'sofa-front'], ['Close-up', 'sofa-detail'], ['In a room', 'scene-living'], ['Evening light', 'sofa-room']] },
    { id: 'couch', name: 'Two-seater couch', room: 'Living room', spin: true, img: IMG + 'couch.jpg' },
    { id: 'coffee', name: 'Coffee table', room: 'Living room', img: IMG + 'coffee-table.jpg' },
    { id: 'tv', name: 'TV unit', room: 'Living room', img: IMG + 'tv-unit.jpg' },
    { id: 'bed', name: 'Queen bed with headboard', room: 'Bedroom', spin: true, img: IMG + 'bed.jpg' },
    { id: 'wardrobe', name: 'Double wardrobe', room: 'Bedroom', img: IMG + 'wardrobe.jpg' },
    { id: 'dresser', name: 'Dressing table', room: 'Bedroom', custom: true, img: IMG + 'dresser.jpg' },
    { id: 'dining', name: 'Six-seater dining set', room: 'Dining', spin: true, img: IMG + 'dining.jpg' },
    { id: 'sideboard', name: 'Sideboard', room: 'Dining', custom: true, img: IMG + 'sideboard.jpg' },
    { id: 'desk', name: 'Executive office desk', room: 'Office', spin: true, img: IMG + 'desk.jpg' },
    { id: 'cabinet', name: 'Filing cabinet', room: 'Office', img: IMG + 'filing.jpg' },
    { id: 'boardroom', name: 'Boardroom table', room: 'Office', custom: true, img: IMG + 'boardroom.jpg' },
    { id: 'shelf', name: 'Bookshelf', room: 'Storage', img: IMG + 'bookshelf.jpg' },
    { id: 'unit', name: 'Storage unit', room: 'Storage', custom: true, img: IMG + 'storage.jpg' }
  ];
  products.forEach(function (p) {
    p.custom = !!p.custom;
    p.spin = !!p.spin;
    p.url = 'product.html?id=' + p.id;
    p.size = p.custom ? 'Made to your measurements' : 'W × D × H: [size, mm]';
    p.price = p.custom ? 'Price on your quotation' : 'US$ [price]';
    p.priceNote = p.custom ? '' : 'incl. VAT';
    p.photos = (p.gallery || [['Photo', null]]).map(function (g) {
      return { label: g[0], src: g[1] ? IMG + g[1] + '.jpg' : p.img };
    });
  });
  function byId(id) {
    for (var i = 0; i < products.length; i++) { if (products[i].id === id) { return products[i]; } }
    return null;
  }

  // The quote list lives in this browser only (a concept: nothing is sent anywhere).
  var KEY = 'calundike-concept-quote-v1';
  function load() {
    try { var v = JSON.parse(window.localStorage.getItem(KEY) || '{}'); return v && typeof v === 'object' ? v : {}; }
    catch (e) { return {}; }
  }
  var store = Vue.reactive({ q: load() });
  function persist() { try { window.localStorage.setItem(KEY, JSON.stringify(store.q)); } catch (e) { /* private window */ } }
  function setQty(id, n) {
    if (n <= 0) { delete store.q[id]; } else { store.q[id] = Math.min(99, n); }
    persist();
  }
  function toggle(id) { setQty(id, store.q[id] ? 0 : 1); }
  function inList(id) { return !!store.q[id]; }
  var count = Vue.computed(function () { return Object.keys(store.q).length; });

  var LOGO = IMG + 'calundike-logo.png';
  var LOGO_ALT = 'Calundike Exports - a member of the Nyaradzo Group';
  var CHAT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>';
  var LIST = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>';

  var SiteHeader = {
    props: { active: { type: String, default: '' } },
    setup: function () { return { count: count, LOGO: LOGO, LOGO_ALT: LOGO_ALT }; },
    template:
      '<header class="hdr"><div class="wrap hdr-in">' +
      '<a href="index.html" class="brand" aria-label="Calundike Exports, home"><img :src="LOGO" :alt="LOGO_ALT"></a>' +
      '<nav class="nav" aria-label="Main">' +
      '<a href="catalogue.html" :class="{ on: active === \'catalogue\' }" :aria-current="active === \'catalogue\' ? \'page\' : null">Catalogue</a>' +
      '<a href="catalogue.html?kind=made">Made to measure</a>' +
      '<a href="index.html#showroom">Visit the showroom</a>' +
      '<a href="account.html" :class="{ on: active === \'account\' }" :aria-current="active === \'account\' ? \'page\' : null">My account</a>' +
      '</nav>' +
      '<div class="hdr-act">' +
      '<a href="quote-list.html" class="btn btn-line btn-sm">' + LIST + ' Quote list <span class="badge">{{ count }}</span></a>' +
      '<a href="index.html#contact" class="btn btn-navy btn-sm">' + CHAT + ' WhatsApp us</a>' +
      '</div></div></header>'
  };

  var SiteFooter = {
    props: { full: { type: Boolean, default: false } },
    setup: function () { return { LOGO: LOGO, LOGO_ALT: LOGO_ALT }; },
    template:
      '<footer id="contact" class="foot" :style="{ padding: full ? \'64px 0 32px\' : \'36px 0\' }"><div class="wrap" style="display: flex; flex-direction: column; gap: 36px">' +
      '<div v-if="full" class="grid4" style="gap: 32px">' +
      '<div style="display: flex; flex-direction: column; gap: 14px"><span class="foot-logo"><img :src="LOGO" :alt="LOGO_ALT"></span>' +
      '<p style="margin: 0; font-size: 14px; line-height: 1.6">Furniture made in our own workshop. Standard pieces and made-to-measure.</p></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Shop</span>' +
      '<a href="catalogue.html">Catalogue</a><a href="catalogue.html?kind=made">Made to measure</a><a href="quote-list.html">Your quote list</a></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Your order</span>' +
      '<a href="account.html">My account</a><a href="index.html#how">How quoting works</a><a href="index.html#how">Delivery</a></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Talk to us</span>' +
      '<span>WhatsApp: [number]</span><span>E-mail: [sales address]</span><span>[Showroom address]</span></div>' +
      '</div>' +
      '<div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 14px" :style="{ borderTop: full ? \'1px solid #2A2A7A\' : \'0\', paddingTop: full ? \'22px\' : \'0\' }">' +
      '<span v-if="!full" class="foot-logo" style="padding: 8px 12px"><img :src="LOGO" :alt="LOGO_ALT" style="height: 36px"></span>' +
      '<span v-if="!full" style="display: flex; gap: 22px; flex-wrap: wrap"><a href="catalogue.html">Catalogue</a><a href="quote-list.html">Quote list</a><a href="account.html">My account</a><span>WhatsApp: [number]</span></span>' +
      '<span>© 2026 Calundike Exports</span><a v-if="full" href="index.html#contact">Privacy notice</a>' +
      '</div></div></footer>'
  };

  function param(name) {
    try { return new URLSearchParams(window.location.search).get(name); } catch (e) { return null; }
  }

  /** Mount a page: setup returns the page's own state and handlers; the shared ones are added. */
  function mount(setup) {
    var app = Vue.createApp({
      setup: function () {
        var own = setup ? setup() : {};
        return Object.assign({ count: count, inList: inList, toggle: toggle, store: store }, own);
      }
    });
    app.component('site-header', SiteHeader);
    app.component('site-footer', SiteFooter);
    app.mount('#app');
  }

  window.CK = { products: products, byId: byId, store: store, setQty: setQty, toggle: toggle, inList: inList,
    count: count, mount: mount, param: param, IMG: IMG };
})();
