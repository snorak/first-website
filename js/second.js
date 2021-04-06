    window.onload = function () { 
	document.getElementById("fName").focus();
}   

	fName.addEventListener("blur", function () {
		if(fName.value=="") {
			fName.value = "Morate uneti ime!";
			fName.classList.add("greskaIzlaz"); 
		}
	})
	
	lName.addEventListener("blur", function () {
		if(lName.value=="") {
			lName.value = "Morate uneti prezime!";
			lName.classList.add("greskaIzlaz");
		}
	})
	
	phone.addEventListener("blur", function () {
		if(phone.value=="") {
			phone.value = "Morate uneti telefon!";
			phone.classList.add("greskaIzlaz");
		}
	})
	
	jmbg.addEventListener("blur", function () {
		if(jmbg.value=="") {
			jmbg.value = "Morate uneti jmbg!";
			jmbg.classList.add("greskaIzlaz");
		}
	})

	addr.addEventListener("blur", function () {
		if(addr.value=="") {
			addr.value = "Morate uneti adresu!";
			addr.classList.add("greskaIzlaz");
		}
	})
	
	fName.addEventListener("change", function () {
		var regexFN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}$/;
		var fName = document.getElementById("fName");
		
		if (regexFN.test(fName.value)) {
			document.getElementById("fName").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("fName").classList.add("greskaIzlaz");
		}
	});
	
	lName.addEventListener("blur", function () {
		var regexLN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,12})*$/;
		var lName = document.getElementById("lName");
		
		if (regexLN.test(lName.value)) {
			document.getElementById("lName").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("lName").classList.add("greskaIzlaz");
		}
	});
	
	phone.addEventListener("keydown", function () {
		var regexNr = /^(0|\+381)6[\d]{7,8}$/;
		var phone = document.getElementById("phone");
		if (regexNr.test(phone.value)) {
			document.getElementById("phone").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("phone").classList.add("greskaIzlaz");
		}
	});
	
	jmbg.addEventListener("change", function () {
		var regexjmbg = /^[\d]{13}$/;
		var jmbg = document.getElementById("jmbg");
		
		if (regexjmbg.test(jmbg.value)) {
			document.getElementById("jmbg").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("jmbg").classList.add("greskaIzlaz");
		}
	});
	
	addr.addEventListener("keydown", function () {
		var regexAdd = /^[\d\w]+(\s[\d\w]+)*$/;
		var addr = document.getElementById("addr");
		
		if (regexAdd.test(addr.value)) {
			document.getElementById("addr").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("addr").classList.add("greskaIzlaz");
		}
	});