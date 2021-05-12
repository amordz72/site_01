<!doctype html>
<?php echo (isset($ar)) ? '<html lang="ar" dir="rtl">' : '<html lang="en" dir="ltr">'; ?>

<!-- <html lang="en" dir="ltr"> -->

<head>
  <!-- Required meta tags -->
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="Amor Lembarki">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- normalize.css v8.0.1 -->
  <link rel="stylesheet" href="<?php echo $_css ?>normalize.css v8.0.1.css">
  <!-- GoogleCdn CSS -->
  <link rel="stylesheet" href="<?php echo $fontGoogleCdn ?>">
  <!-- FONT AWSOME CSS -->
  <link rel="stylesheet" href="<?php echo $_css ?>all.min.css">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="<?php echo (isset($ar)) ? $_css . "bootstrap.rtl.min.css"   : $_css . 'bootstrap.min.css'  ?>">

  <!-- USER CSS -->
  <link rel="stylesheet" href="<?php echo $_css ?>style.css">

  <title><?php getTitle(); ?></title>
</head>

<body>