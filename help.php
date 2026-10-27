<?php
$pageTitle = 'Help · Invoice Generator';
$page = 'help';
$scripts = [];
require __DIR__ . '/includes/header.php';
?>
<main class="page">
<h1>Help &amp; FAQ</h1>
<p class="lead">Answers to common questions.</p>
<h2>General</h2>
<details><summary>Is it really free?</summary><p>Yes. There are no accounts, limits or watermarks.</p></details>
<details><summary>Is my data sent to a server?</summary><p>No. Everything is processed in your browser. Your logo and invoice details are never uploaded.</p></details>
<details><summary>Which languages and currencies are supported?</summary><p>English, Spanish, French, German, Portuguese and Hindi, and 14 major currencies including USD, EUR, GBP, INR, JPY and AED.</p></details>
<h2>Downloads &amp; history</h2>
<details><summary>The PDF did not download. What should I do?</summary><p>Allow downloads or pop-ups for this site, then try again. Make sure the logo (if any) is a standard image file such as PNG or JPG.</p></details>
<details><summary>Where is my history stored?</summary><p>In your browser’s local storage, on this device only. Clearing browser data, using private mode or switching devices means the history will not be available.</p></details>
<details><summary>How do I change an old invoice?</summary><p>Open <a href="history.php">History</a>, click “Edit / Re-download”, change what you need and download again. The entry is updated, not duplicated.</p></details>
<details><summary>Can I translate an invoice after filling it in?</summary><p>Yes. Switch the language and the labels change; text you typed yourself stays as written.</p></details>
<h2>Still stuck?</h2>
<p>Contact the site owner using the details provided by whoever hosts this tool.</p>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
