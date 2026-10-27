<?php
$pageTitle = 'Free Invoice Generator';
$page = 'home';
$scripts = ['assets/js/app.js'];
require __DIR__ . '/includes/header.php';
?>
<header class="hero">
<h1 id="h1">Free Invoice Generator</h1>
<p class="sub" id="sub">Fill in the details, pick a language and currency, then download your invoice as a PDF.</p>
</header>
<div class="wrap">
<main class="sheet" id="sheet">
<div class="top">
<div class="left"><label class="logo" for="logo" id="logoLbl"><img id="logoImg" alt="" hidden><span id="logoTxt">+ Add logo</span></label><input type="file" id="logo" accept="image/*" hidden><button class="rm" id="logoX" hidden aria-label="Remove logo">✕</button>
<input class="title" id="title" value="Invoice" aria-label="Title"></div>
<div class="meta">
<label id="l-num" for="num">#</label><input id="num" value="1">
<label id="l-date" for="date">Date</label><input id="date" type="date">
<label id="l-due" for="due">Due Date</label><input id="due" type="date">
</div>
</div>
<div class="parties">
<div><span class="lbl" id="l-from">From</span><textarea id="from" data-ph="whoFrom"></textarea></div>
<div><span class="lbl" id="l-to">Bill To</span><textarea id="to" data-ph="whoTo"></textarea></div>
</div>
<div class="row head"><span id="h-desc">Item</span><span id="h-qty">Qty</span><span id="h-rate">Rate</span><span id="h-amt">Amount</span><span></span></div>
<div id="items"></div>
<button class="btn addbtn" id="add">+ Add item</button>
<div class="bottom">
<div>
<span class="lbl" id="l-notes">Notes</span><textarea id="notes" data-ph="notesPh"></textarea>
<span class="lbl" id="l-terms" style="margin-top:16px">Terms</span><textarea id="terms" data-ph="termsPh"></textarea>
</div>
<div class="tot">
<span class="k" id="k-sub">Subtotal</span><span class="v" id="v-sub"></span>
<span class="k"><span id="k-disc">Discount</span> %</span><input type="number" id="disc" min="0" step="any" value="0">
<span class="k"><span id="k-tax">Tax</span> %</span><input type="number" id="tax" min="0" step="any" value="0">
<span class="k" id="k-ship">Shipping</span><input type="number" id="ship" min="0" step="any" value="0">
<span class="k grand" id="k-total">Total</span><span class="v grand" id="v-total"></span>
<span class="k" id="k-paid">Amount Paid</span><input type="number" id="paid" min="0" step="any" value="0">
<span class="k grand" id="k-bal">Balance Due</span><span class="v grand" id="v-bal"></span>
</div>
</div>
</main>
<aside class="side">
<button class="btn primary" id="dl">⬇ <span id="t-dl">Download PDF</span></button>
<div class="card">
<label class="lbl" for="lang" id="t-lang">Language</label>
<select id="lang"></select>
<label class="lbl" for="cur" id="t-cur" style="margin-top:8px">Currency</label>
<select id="cur"></select>
</div>
</aside>
<div id="pdfHost"></div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
