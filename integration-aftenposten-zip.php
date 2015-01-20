<?php
// Prepare File
$file = tempnam("tmp", "zip");
$zip = new ZipArchive();
$zip->open($file, ZipArchive::OVERWRITE);

// Stuff with content
$zip->addFile('index.html');
$zip->addFile('disqus.html');
$zip->addEmptyDir('gfx');
$zip->addFile('gfx/issue-logo.png');
$zip->addFile('gfx/issue-logo@2x.png');
$zip->addEmptyDir('js');
$zip->addFile('js/main.js');
$zip->addEmptyDir('js/widget');
$zip->addFile('js/widget/banner.js');
$zip->addFile('js/widget/disqus.js');
$zip->addEmptyDir('vendor');
$zip->addEmptyDir('vendor/aptoma');
$zip->addEmptyDir('vendor/aptoma/alf');
$zip->addFile('vendor/aptoma/alf/alf.css');
$zip->addFile('vendor/aptoma/alf/alf.min.js');

// Close and send to users
$zip->close();
header('Content-Type: application/zip');
header('Content-Length: ' . filesize($file));
header('Content-Disposition: attachment; filename="integration-aftenposten.zip"');
readfile($file);
unlink($file);

?>