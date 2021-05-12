<?php
 

    function _lang($phrase)
    {
        static $lang = array(
            'lang' => 'english',
            'user' => 'amor',
             'HOME' => 'HOME',
             'userM' => 'HOME',
        );
        return $lang[$phrase];
    }



 