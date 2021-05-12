<?php
$NonNavBar = false;//
$pgTitle = "Users";
include "ini.php";

if (isset($_SESSION['usName'])) {
  redirect('dashbord.html');
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
 
  $user = $_POST['usName'];
  $pw = $_POST['usPw'];
  $pwSh = sha1($pw);
/*  $data= getUser($con,$user,$pw);*/

  $stmt = $con->prepare("select usID,usName,usPw from users where  usName=? and usPw=? and usType=1");
  $stmt->execute(array($user, $pwSh));
  $count = $stmt->rowCount();
  $row = $stmt->fetch();
  if ($count == 1) {
    $_SESSION['usID'] = $row['usID'];
    $_SESSION['usName'] = $user;

    redirect('dashbord.html');
    exit();
  } else {
    redirect('index.php');
    exit();
  }
}



?>

<div class="container  my-5 " id="App_users">
  <div class="row px-2">
    <form id="frm" action="<?php thisPage() ?>" method="POST" class="col-lg-8  mx-auto pb-3 login">
      <h2 class=" text-center fs-4 "><i class="fa fa-user fa-lg  mt-5 mb-3" aria-hidden="true"></i> LOGIN ADMIN</h2>
  
      <div class="mb-1 row">
        <label for="usName" class="col-sm-2 col-md-3 col-form-label text-center fs-md-4 fs-sm-6">USER NAME </label>

        <div class="col-sm-10 col-md-9 ">
          <input type="text" class="form-control form-control-lg fs-md-4 " placeholder="Name" name="usName" autocomplete="off">
        </div>
      </div>


      <div class="mb-1 row">
        <label for="usPw" class="col-sm-2 col-md-3  col-form-label text-center fs-md-4 fs-sm-6">USER Pw </label>

        <div class="col-sm-10 col-md-9 ">
          <input type="password" class="form-control  form-control-lg fs-md-4 col-6" placeholder="password" name="usPw" autocomplete="new-password">
        </div>
      </div>


      <div class="d-grid gap-2 pt-4 mx-auto ">
        <button type="submit" class="btn btn-primary btn-lg " type="button">
          <i class="fa fa-user" aria-hidden="true"></i>
          LOGIN
        </button>

        <!--w-75 mx-auto -->
        <button type="submit" class="btn btn-danger btn-lg   " type="button">
          <i class="fa fa-registered m-2" aria-hidden="true"></i> SIGN UP
        </button>

      </div>




    </form>
  </div>
</div>



<img src="../" alt="" srcset="">

<?php
include $comp . "footer.php";

?>