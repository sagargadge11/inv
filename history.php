<?php
$pageTitle = 'History · Invoice Generator';
$page = 'history';
$scripts = ['assets/js/history.js'];
require __DIR__ . '/includes/header.php';
?>
<main class="page">
<h1>History</h1>
<p class="lead">Invoices you have downloaded. They are stored only in this browser, so clearing your browser data removes them.</p>
<div id="hroot"></div>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
