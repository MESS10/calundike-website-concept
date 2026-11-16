/* Calundike website - design concept. Shared data, the quote list (kept in this browser only) and the header/footer. */
(function () {
  'use strict';
  var IMG = 'assets/img/';

  // The Calundike range, as listed on calundike.co.zw (names and photos from there; it shows no prices, so the prices
  // stay placeholders). Caskets are left out for now. fit 'contain' = a long or tall piece shown whole, not cropped.
  var P = IMG + 'products/';
  var products = [
    // Office
    { id: 'ruby-presidential-desk', name: 'Ruby presidential desk', room: 'Office', range: 'Ruby', img: P + 'ruby-presidential-desk.jpg' },
    { id: 'ruby-executive-desk', name: 'Ruby executive desk', room: 'Office', range: 'Ruby', img: P + 'ruby-executive-desk.jpg' },
    { id: 'managers-desk-wall-unit', name: "Manager's desk and wall unit", room: 'Office', range: 'Ruby', img: P + 'managers-desk-wall-unit.jpg' },
    { id: 'ruby-executive-wall-unit', name: 'Ruby executive wall unit', room: 'Office', range: 'Ruby', img: P + 'ruby-executive-wall-unit.jpg' },
    { id: 'ruby-credenza', name: 'Ruby credenza', room: 'Office', range: 'Ruby', img: P + 'ruby-credenza.jpg' },
    { id: 'ruby-meeting-table', name: 'Ruby meeting table', room: 'Office', range: 'Ruby', img: P + 'ruby-meeting-table.png' },
    { id: 'ruby-boardroom', name: 'Ruby boardroom table', room: 'Office', range: 'Ruby', img: P + 'ruby-boardroom.jpg' },
    { id: 'jasper-presidential-desk', name: 'Jasper presidential desk', room: 'Office', range: 'Jasper', img: P + 'jasper-presidential-desk.jpg' },
    { id: 'jasper-executive-desk', name: 'Jasper executive desk', room: 'Office', range: 'Jasper', img: P + 'jasper-executive-desk.jpg' },
    { id: 'jasper-pa-desk', name: "Jasper executive PA's desk", room: 'Office', range: 'Jasper', img: P + 'jasper-pa-desk.jpg' },
    { id: 'jasper-meeting-table', name: 'Jasper meeting table', room: 'Office', range: 'Jasper', img: P + 'jasper-meeting-table.jpg' },
    { id: 'jasper-boardroom', name: 'Jasper boardroom table', room: 'Office', range: 'Jasper', img: P + 'jasper-boardroom.jpg' },
    { id: 'jasper-wall-unit', name: 'Jasper junior executive 2-door wall unit', room: 'Office', range: 'Jasper', img: P + 'jasper-wall-unit.jpg' },
    { id: 'jasper-2-door-filer', name: 'Jasper executive 2-door filer', room: 'Office', range: 'Jasper', img: P + 'jasper-2-door-filer.jpg' },
    { id: 'jasper-4-drawer-filer', name: 'Jasper 4-drawer filer', room: 'Office', range: 'Jasper', img: P + 'jasper-4-drawer-filer.jpg' },
    { id: 'jasper-mobile-server', name: 'Jasper mobile server unit', room: 'Office', range: 'Jasper', img: P + 'jasper-mobile-server.jpg' },
    { id: 'iolite-presidential-desk', name: 'Iolite presidential desk', room: 'Office', range: 'Iolite', img: P + 'iolite-presidential-desk.jpg' },
    { id: 'iolite-boardroom', name: 'Iolite boardroom table', room: 'Office', range: 'Iolite', img: P + 'iolite-boardroom.jpg' },
    { id: 'sapphire-boardroom', name: 'Sapphire boardroom table', room: 'Office', range: 'Sapphire', img: P + 'sapphire-boardroom.jpg' },
    { id: 'pearl-boardroom', name: 'Pearl boardroom table', room: 'Office', range: 'Pearl', img: P + 'pearl-boardroom.jpg' },
    { id: 'topaz-boardroom', name: 'Topaz boardroom table', room: 'Office', range: 'Topaz', img: P + 'topaz-boardroom.jpg' },
    { id: 'topaz-standard-desk', name: 'Topaz 3-drawer standard desk', room: 'Office', range: 'Topaz', img: P + 'topaz-standard-desk.jpg' },
    { id: 'topaz-junior-desk', name: 'Topaz junior desk', room: 'Office', range: 'Topaz', img: P + 'topaz-junior-desk.jpg' },
    { id: 'topaz-l-shaped-desk', name: "Topaz L-shaped PA's desk", room: 'Office', range: 'Topaz', img: P + 'topaz-l-shaped-desk.jpg' },
    { id: 'training-room-desk', name: 'Training room desk', room: 'Office', range: '', img: P + 'training-room-desk.jpg' },
    // Bedroom
    { id: 'rossal-headboard', name: 'Rossal bed with headboard', room: 'Bedroom', range: 'Rossal', img: P + 'rossal-headboard.jpg' },
    { id: 'headboard-double-bed', name: 'Double bed headboard', room: 'Bedroom', range: '', img: P + 'headboard-double-bed.jpg' },
    { id: 'rossal-single-beds', name: 'Rossal single and ¾ beds', room: 'Bedroom', range: 'Rossal', img: P + 'rossal-single-beds.jpg' },
    { id: 'rossal-dresser', name: 'Rossal dresser with mirror', room: 'Bedroom', range: 'Rossal', img: P + 'rossal-dresser.jpg' },
    { id: 'side-table', name: 'Bedside table', room: 'Bedroom', range: '', img: P + 'side-table.jpg' },
    { id: 'cot-bed', name: 'Cot bed', room: 'Bedroom', range: '', img: P + 'coat-bed.jpg' },
    // Living room and dining
    { id: 'coffee-table', name: 'Coffee table set', room: 'Living room', range: '', img: P + 'coffee-table-real.jpg' },
    { id: 'sapphire-tv-stand', name: 'Sapphire TV stand', room: 'Living room', range: 'Sapphire', img: P + 'sapphire-tv-stand.jpg' },
    { id: 'sapphire-dining-table', name: 'Sapphire dining room table', room: 'Dining', range: 'Sapphire', img: P + 'sapphire-dining-table.jpg' },
    // Chapel
    { id: 'jerusalem-bench', name: 'Jerusalem bench', room: 'Chapel', range: '', fit: 'contain', img: P + 'jerusalem-bench.jpg' },
    { id: 'israel-bench', name: 'Israel bench', room: 'Chapel', range: '', fit: 'contain', img: P + 'israel-bench.png' },
    { id: 'bethel-bench', name: 'Bethel bench', room: 'Chapel', range: '', fit: 'contain', img: P + 'bethel-bench.jpg' },
    { id: 'israel-pulpit', name: 'Israel pulpit', room: 'Chapel', range: '', img: P + 'israel-pulpit.jpg' },
    { id: 'jericho-pulpit', name: 'Jericho pulpit', room: 'Chapel', range: '', img: P + 'jericho-pulpit.jpg' },
    { id: 'bethel-pulpit', name: 'Bethel pulpit', room: 'Chapel', range: '', fit: 'contain', img: P + 'bethel-pulpit.jpg' }
  ];
  products.forEach(function (p) {
    p.custom = !!p.custom;
    p.spin = !!p.spin;
    p.fit = p.fit || 'cover';
    p.url = 'product.html?id=' + p.id;
    p.size = p.custom ? 'Made to your measurements' : 'W × D × H: [size, mm]';
    p.price = p.custom ? 'Price on your quotation' : 'US$ [price]';
    p.priceNote = p.custom ? '' : 'incl. VAT';
    p.photos = (p.gallery || [['Photo', null]]).map(function (g) {
      return { label: g[0], src: g[1] ? IMG + g[1] + '.jpg' : p.img };
    });
  });

  // Company details, from calundike.co.zw.
  var CONTACT = {
    address: '171 Mupfuti Road, Ruwa',
    where: '25 km east of Harare',
    phones: '(0242) 132909 · 132982 · 133010-12',
    email: 'sales@calundike.co.zw',
    tour: 'https://www.calundike.co.zw/showroom/',
    warranty: 'https://www.calundike.co.zw/calundike-structural-warranty/',
    maps: 'https://www.google.com/maps/search/?api=1&query=171+Mupfuti+Road+Ruwa+Zimbabwe'
  };
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

  var MENU = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  var CLOSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  var LINKS = [
    { href: 'catalogue.html', label: 'Catalogue', key: 'catalogue' },
    { href: 'index.html#made', label: 'Made to measure', key: 'made' },
    { href: 'index.html#showroom', label: 'Visit the showroom', key: 'showroom' },
    { href: 'account.html', label: 'My account', key: 'account' }
  ];

  // Wide screens: logo, links and both buttons on one line. Below laptop width: logo, the quote list and a Menu
  // button that opens the links underneath.
  var SiteHeader = {
    props: { active: { type: String, default: '' } },
    setup: function () {
      var open = Vue.ref(false);
      return { count: count, LOGO: LOGO, LOGO_ALT: LOGO_ALT, LINKS: LINKS, open: open,
        close: function () { open.value = false; } };
    },
    template:
      '<header class="hdr"><div class="wrap hdr-in">' +
      '<a href="index.html" class="brand" aria-label="Calundike Exports, home"><img :src="LOGO" :alt="LOGO_ALT"></a>' +
      '<nav class="nav" aria-label="Main">' +
      '<a v-for="l in LINKS" :key="l.key" :href="l.href" :class="{ on: active === l.key }" :aria-current="active === l.key ? \'page\' : null">{{ l.label }}</a>' +
      '</nav>' +
      '<div class="hdr-act">' +
      '<a href="quote-list.html" class="btn btn-line btn-sm" aria-label="Quote list">' + LIST + '<span class="hide-sm">Quote list</span><span class="badge">{{ count }}</span></a>' +
      '<a href="index.html#contact" class="btn btn-navy btn-sm hide-md">' + CHAT + ' WhatsApp us</a>' +
      '<button type="button" class="btn btn-navy btn-sm menu-btn" aria-controls="mnav" :aria-expanded="open ? \'true\' : \'false\'" @click="open = !open">' +
      '<span v-if="!open" style="display: inline-flex">' + MENU + '</span><span v-else style="display: inline-flex">' + CLOSE + '</span>' +
      '<span class="hide-sm">Menu</span></button>' +
      '</div></div>' +
      '<nav id="mnav" class="mnav" v-show="open" aria-label="Main menu"><div class="wrap">' +
      '<a v-for="l in LINKS" :key="l.key" class="ml" :href="l.href" :class="{ on: active === l.key }" @click="close">{{ l.label }}</a>' +
      '<a href="index.html#contact" class="btn btn-navy" @click="close">' + CHAT + ' WhatsApp us</a>' +
      '</div></nav></header>'
  };

  var SiteFooter = {
    props: { full: { type: Boolean, default: false } },
    setup: function () { return { LOGO: LOGO, LOGO_ALT: LOGO_ALT, C: CONTACT }; },
    template:
      '<footer id="contact" class="foot" :style="{ padding: full ? \'64px 0 32px\' : \'36px 0\' }"><div class="wrap" style="display: flex; flex-direction: column; gap: 36px">' +
      '<div v-if="full" class="grid4" style="gap: 32px">' +
      '<div style="display: flex; flex-direction: column; gap: 14px"><span class="foot-logo"><img :src="LOGO" :alt="LOGO_ALT"></span>' +
      '<p style="margin: 0; font-size: 14px; line-height: 1.6">Quality furniture and shop fittings, made in our factories in Ruwa and Gweru. A member of the Nyaradzo Group.</p></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Shop</span>' +
      '<a href="catalogue.html">Catalogue</a><a href="index.html#made">Made to measure</a><a href="quote-list.html">Your quote list</a><a :href="C.tour" target="_blank" rel="noopener">360° showroom tour</a></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Your order</span>' +
      '<a href="account.html">My account</a><a href="index.html#how">How quoting works</a><a :href="C.warranty" target="_blank" rel="noopener">5-year structural warranty</a><a href="index.html#about">About Calundike</a></div>' +
      '<div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px"><span style="color: #FFFFFF; font-weight: 600">Talk to us</span>' +
      '<span>{{ C.address }}<br>{{ C.where }}</span><span>{{ C.phones }}</span><a :href="\'mailto:\' + C.email">{{ C.email }}</a><span>WhatsApp: [number]</span></div>' +
      '</div>' +
      '<div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 14px" :style="{ borderTop: full ? \'1px solid #2A2A7A\' : \'0\', paddingTop: full ? \'22px\' : \'0\' }">' +
      '<span v-if="!full" class="foot-logo" style="padding: 8px 12px"><img :src="LOGO" :alt="LOGO_ALT" style="height: 36px"></span>' +
      '<span v-if="!full" style="display: flex; gap: 22px; flex-wrap: wrap"><a href="catalogue.html">Catalogue</a><a href="quote-list.html">Quote list</a><a href="account.html">My account</a><a :href="\'mailto:\' + C.email">{{ C.email }}</a><span>{{ C.phones }}</span></span>' +
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
    count: count, mount: mount, param: param, IMG: IMG, CONTACT: CONTACT };
})();
