<?php
// Shared header: <head> setup and the site header bar.
$pageTitle = $pageTitle ?? 'Free Invoice Generator';
$page = $page ?? 'home';
$nav = ['home' => ['./', 'Home'], 'history' => ['history.php', 'History'], 'guide' => ['guide.php', 'Guide'], 'help' => ['help.php', 'Help']];
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
</head>
<body>
<header class="site-header">
<div class="in">
<a class="brand" href="./">🧾 Invoice<b>Gen</b></a>
<nav class="nav" aria-label="Main">
<?php foreach ($nav as $key => [$href, $label]): ?>
<a href="<?= $href ?>"<?= $page === $key ? ' class="active" aria-current="page"' : '' ?>><?= $label ?></a>
<?php endforeach; ?>
</nav>
</div>
</header>
