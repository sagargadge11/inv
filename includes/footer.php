<footer class="site-footer">
<div class="in">
<span>&copy; <?= date('Y') ?> InvoiceGen. Free to use.</span>
<span id="f-priv">Your data never leaves your browser.</span>
</div>
</footer>
<?php foreach (($scripts ?? []) as $src): ?>
<script src="<?= htmlspecialchars($src, ENT_QUOTES, 'UTF-8') ?>"></script>
<?php endforeach; ?>
</body>
</html>
