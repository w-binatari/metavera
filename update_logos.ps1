$files = @("index.html", "about.html", "projects.html", "project-detail.html", "contact.html")
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText("$pwd\$file", [System.Text.Encoding]::UTF8)
    
    # Add favicon
    if ($content -notmatch '<link rel="icon"') {
        $content = $content -replace '<link rel="stylesheet"', '<link rel="icon" type="image/png" href="assets/Metavera_logo.png" />' + "`n" + '  <link rel="stylesheet"'
    }
    
    # Replace Nav Logo
    $content = [regex]::Replace($content, '(?s)<a href="index\.html" class="nav__logo"[^>]*>\s*<div class="nav__logo-mark">M</div>\s*Metavera\s*</a>', '<a href="index.html" class="nav__logo"><img src="assets/Metavera_logo.png" alt="Metavera Logo" style="height: 44px; width: auto;" /></a>')
    
    # Replace Footer Logo
    $content = [regex]::Replace($content, '(?s)<div class="footer__brand-logo">\s*<div class="nav__logo-mark">M</div>\s*Metavera(?: Ltd)?\s*</div>', '<div class="footer__brand-logo"><img src="assets/Metavera_logo.png" alt="Metavera Logo" style="height: 44px; width: auto;" /></div>')
    
    [System.IO.File]::WriteAllText("$pwd\$file", $content, [System.Text.Encoding]::UTF8)
}
Write-Output "Done"
