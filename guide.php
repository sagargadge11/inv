<?php
$pageTitle = 'Guide · Invoice Generator';
$page = 'guide';
$scripts = [];
require __DIR__ . '/includes/header.php';
?>
<main class="page">
<h1>How to create an invoice</h1>
<p class="lead">Make a professional invoice in a few minutes. No sign-up needed.</p>
<ol class="steps">
<li><b>Choose language and currency</b><span>Use the panel on the right. All labels and amounts switch instantly.</span></li>
<li><b>Add your logo</b><span>Click “Add logo” above the title and pick an image (up to 3 MB).</span></li>
<li><b>Fill in the parties</b><span>Enter your details under “From” and your customer’s under “Bill To”.</span></li>
<li><b>Set number and dates</b><span>Give the invoice a number, a date and a due date.</span></li>
<li><b>Add line items</b><span>Describe each item or service with a quantity and rate. Use “Add item” for more rows.</span></li>
<li><b>Apply discount, tax and shipping</b><span>Enter percentages for discount and tax, plus any shipping or amount already paid. Totals update live.</span></li>
<li><b>Add notes and terms</b><span>Payment instructions, late fees or a thank-you message.</span></li>
<li><b>Download the PDF</b><span>Click “Download PDF”. The invoice is also saved to your <a href="history.php">History</a>.</span></li>
</ol>
<h2>Tips</h2>
<p>Use clear, consecutive invoice numbers, state the payment method in the terms, and double-check the currency before downloading.</p>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
