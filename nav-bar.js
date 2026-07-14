// OSAA Dashboard nav bar — injected automatically on load
(function () {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  const factsheetHref = params.get('factsheet');
  if (!country) return;

  // Page map for factsheet deep links
  const pageMap = {
    'Algeria': 2, 'Burkina Faso': 3, 'Burundi': 4, 'Cabo Verde': 5,
    'Cameroon': 6, 'Egypt': 7, 'Gabon': 8, 'Guinea': 9, 'Guinea-Bissau': 10,
    'Liberia': 11, 'Malawi': 12, 'Mozambique': 13, 'DR Congo': 14,
    'Rwanda': 15, 'Senegal': 16, 'Somalia': 17, 'Tanzania': 18,
    'Togo': 19, 'Tunisia': 20
  };

  const dashMap = {
    'Algeria': 'Algeria Dashboard.dc.html',
    'Burkina Faso': 'Burkina Faso Dashboard.dc.html',
    'Burundi': 'Burundi Dashboard v4.dc.html',
    'Cabo Verde': 'Cabo Verde Dashboard.dc.html',
    'Cameroon': 'Cameroon Dashboard.dc.html',
    'Egypt': 'Egypt Dashboard.dc.html',
    'Gabon': 'Gabon Dashboard.dc.html',
    'Guinea': 'Guinea Dashboard.dc.html',
    'Guinea-Bissau': 'Guinea-Bissau Dashboard.dc.html',
    'Liberia': 'Liberia Dashboard.html',
    'Malawi': 'Malawi Dashboard.html',
    'Mozambique': 'Mozambique Dashboard.html',
    'DR Congo': 'DRC Dashboard.dc.html',
    'Rwanda': 'Rwanda Dashboard.html',
    'Senegal': 'Senegal Dashboard.dc.html',
    'Somalia': 'Somalia Dashboard.html',
    'Tanzania': 'Tanzania Dashboard.dc.html',
    'Togo': 'Togo Dashboard.dc.html',
    'Tunisia': 'Tunisia Dashboard.dc.html',
  };

  const page = pageMap[country] || 1;
  const dash = dashMap[country] || '';
  const fsHref = factsheetHref || ('factsheet.html?country=' + encodeURIComponent(country)
    + '&page=' + page
    + '&dashboard=' + encodeURIComponent(dash));

  // Build bar
  const bar = document.createElement('div');
  bar.id = 'osaa-nav-bar';
  bar.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'right:0', 'z-index:99999',
    'background:#fff', 'border-bottom:1px solid #E3E7EC',
    'display:flex', 'align-items:center', 'gap:10px', 'padding:0 24px',
    'height:46px', 'font-family:"IBM Plex Sans",system-ui,sans-serif',
    'box-shadow:0 2px 8px rgba(0,0,0,0.06)'
  ].join(';');

  const btnStyle = (primary) => [
    'display:inline-flex', 'align-items:center', 'gap:6px',
    'font-size:12.5px', 'font-weight:600', 'padding:6px 14px',
    'border-radius:8px', 'border:1px solid', 'cursor:pointer',
    'text-decoration:none', 'white-space:nowrap', 'transition:all .15s',
    primary
      ? 'background:#1F6FB2;color:#fff;border-color:#1F6FB2'
      : 'background:#fff;color:#45525F;border-color:#E3E7EC'
  ].join(';');

  bar.innerHTML = `
    <a href="index.html" style="${btnStyle(false)}">← All countries</a>
    <a href="${fsHref}" style="${btnStyle(false)}">← Fact sheet</a>
    <div style="flex:1;text-align:center;font-size:13px;font-weight:700;color:#1B2A3A;letter-spacing:-0.01em;">${country}</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:#7A8A9A;letter-spacing:0.08em;text-transform:uppercase;">VNR 2026 Dashboard</div>
  `;

  // Push page content down
  function applyOffset() {
    document.body.style.paddingTop = '46px';
  }

  if (document.body) {
    document.body.prepend(bar);
    applyOffset();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.prepend(bar);
      applyOffset();
    });
  }
})();
