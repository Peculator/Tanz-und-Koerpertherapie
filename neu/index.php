<!DOCTYPE html>
<html lang="de">
  <head>

  	<?php require("meta.html"); ?>
  	<title>Tanz und Körpertherapie</title>
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">

  </head>
  <body>
    
    <div>
<?php require("banner.html"); ?>
     
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="false">
  <!-- Indicators -->
  <ol class="carousel-indicators right greyorange">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="img/Start2.jpg" alt="Sylt">  
    </div>

        <div class="item">
      <img src="img/Start4.jpg" alt="Tanz">  
    </div>

            <div class="item">
      <img src="img/Start3.jpg" alt="Wollblume">  
    </div>
        <!--div class="item">
      <img src="img/Start5.jpg" alt="...">  
    </div-->

  </div>

</div>
<div class="naviLeiste">
<a href="AKTUELL.php">AKTUELLES</a>
<a href="PHILOSOPHIE.php">PHILOSOPHIE</a>
<a href="TANZTHERAPIE.php">TANZ</a>
<a href="KOERPERTHERAPIE.php">KÖRPERTHERAPIE</a>
<a href="WASSERTHERAPIE.php">KÖRPERTHERAPIE IM WASSER</a>
<a href="HEIDE.php">SEMINARE</a>
<a href="VITA.php">KONTAKT</a>

</div>
</br>


<?php require("footer.html"); ?> 

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>