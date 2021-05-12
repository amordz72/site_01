<?php
/*Apache/2.4.46 (Win64) OpenSSL/1.1.1j PHP/8.0.3 Server at localhost Port 80*/
// WydCqSTChB2BbW7
//use this to hide all errore
// error_reporting(1);
session_start();
$root = "../";



$_css = $root . "layout/css/";
$_js = $root . "layout/js/";
$_vueApp = $root . "layout/js/vueApp/";

/*s-iclude*/
$comp = $root . "include/comp/";
$func = $root . "include/func/";
$lang = $root . "include/lang/";
/*e-incluse*/


/*s-image*/
$images = $root . "images/";

$about = $images . "about/";
$background = $images . "background/";
$blog = $images . "blog/";
$team = $images . "team/";
$Testimonial = $images . "Testimonial/";
$work = $images . "work/";
/*e-image*/


$fontGoogleCdn = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap';


 include $func . "conn.php";
include $func . "method.php";
include $comp . "header.php";
 

if (isset($lng)) {

  if ($lng == "ar") {
    include  $lang . "ar.php";
    
  } else {
    include  $lang . "eng.php";
  }
} else {
  include  $lang . "eng.php";
}

if (!isset($NonNavBar)) {
  include $comp . "navbar.php";
} else {
}
 