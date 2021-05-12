<?php
//تحويل الى الصفحة الحالية
function thisPage()
{
    echo $_SERVER['PHP_SELF'];
}//تحويل الى الصفحة  
function redirect($url = '')
{
    if ($url == '') {
        header("Location:" . $_SERVER['PHP_SELF']);
        exit();
    } else {
        header("Location:" . $url);
        exit();
    }
}
function alert($msg = '')
{
    if ($msg != '') {
        echo "<script type='text/javascript'> alert('" . $msg . "'); </script>";
    }
}
function getTitle()
{
    global $pgTitle;
    if (isset($pgTitle)) {
        echo $pgTitle;
    } else {
        echo "Default";
    }
}
 

function _print( string $text)
{
    echo $text;
}
