  
  
  var meni = ["Početna", "Proizvodi", "O nama", "Autor", "Dokumentacija"];
  var linkovi = ["index.html", "proizvodi.html", "oNama.html", "autor.html", "dokumentacija.pdf"];
  
  var ispisMenija = "<ul>";
  for (i = 0; i < meni.length; i++) {
	  ispisMenija += "<li><a href='"+ linkovi[i] +"'>"+ meni[i] +"</a></li>";
  }
  ispisMenija += "</ul>";
  document.getElementById("meni").innerHTML = ispisMenija;
  
  

	$(document).ready(function () { galerija(); });
		function galerija () {
		var trenutna = $("#slajder .aktivna");
		var sledeca = trenutna.next().length ? trenutna.next() : trenutna.parent().children(":first");
		trenutna.removeClass("aktivna");
		sledeca.addClass("aktivna");
		setTimeout(galerija,3000);
		}
		
	$(document).ready(function () { proba(); });
		function proba () {
			$(".prikaz").hide();
			$("#hover11").hide();
			$("#hover12").hide();
			$("#hover13").hide();
		}
		
	$(document).ready(function () { skrivanje(); })
	function skrivanje () {
		$("#dugme1").click(function() {
			$("#prikaz1").toggle('slow');
			
})}
	
	$(document).ready(function () { skrivanje2(); })
	function skrivanje2 () {
		$("#dugme2").click(function() {
			$("#prikaz2").toggle('slow');
			
			if($('#prikaz2').is(':visible')) {
      $(this).val('Prikaži manje');
    } else {
      $(this).val('Prikaži više');
	}})}
	
	$(document).ready(function () { skrivanje3(); })
	function skrivanje3 () {
		$("#dugme3").click(function() {
			$("#prikaz3").toggle('slow');
			
			if($('#prikaz3').is(':visible')) {
      $(this).val('Prikaži manje');
    } else {
      $(this).val('Prikaži više');
	}})}
	
  $("#sadrzaj2").hover(
  function () {
    $("#hover12").show();
  }, 
  function () {
    $("#hover12").hide();
  }
  );
  
  $("#sadrzaj1").hover(
  function () {
    $("#hover11").show();
  }, 
  function () {
    $("#hover11").hide();
  }
  );
  
  $("#sadrzaj3").hover(
  function () {
    $("#hover13").show();
  }, 
  function () {
    $("#hover13").hide();
  }
  );	

  
  
  
  
  
  
  
  
  
  
  
  