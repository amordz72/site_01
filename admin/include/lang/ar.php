<?php

  

    function _lang($phrase)
    {
        static $lang = array(
            'lang' => 'العربية',
            'user' => 'عمر',
            'HOME' => 'الرئيسة',
        );
        return $lang[$phrase];
    }



 