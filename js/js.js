window.onload = function () {
	document.getElementById("fName").focus();
	vozackaDozvola();
	posao();
	document.getElementById("button").addEventListener("click", provera);
};

function vozackaDozvola() {
	let niz = ["A kategorija", "B kategorija", "C kategorija", "D kategorija", "Nemam vozačku dozvolu"];
	let ispis = "<select id='vozacka'>";
	ispis += "<option value='0'>Izaberite...</option>";
	for (let i = 0; i < niz.length; i++) {
		ispis += "<option value='"+ niz[i] +"'>"+ niz[i] +"</option>";
	}
	ispis += "</select>";
	document.getElementById("ddl1").innerHTML = ispis;
}

function posao() {
	let niz = ["Pekar", "Prodavac", "Vozač"];
	let ispis = "<select id='posao'>";
	ispis += "<option value='0'>Izaberite...</option>";
	for (let i = 0; i < niz.length; i++) {
		ispis += "<option value='"+ niz[i] +"'>"+ niz[i] +"</option>";
	}
	ispis += "</select>";
	document.getElementById("ddl2").innerHTML = ispis;
};

	fName.addEventListener("blur", function () {
		if(fName.value=="") {
			fName.value = "Morate uneti ime!";
			fName.classList.add("greskaIzlaz"); 
		}
	});
	
	lName.addEventListener("blur", function () {
		if(lName.value=="") {
			lName.value = "Morate uneti prezime!";
			lName.classList.add("greskaIzlaz");
		}
	});
	
	phone.addEventListener("blur", function () {
		if(phone.value=="") {
			phone.value = "Morate uneti telefon!";
			phone.classList.add("greskaIzlaz");
		}
	});
	
	jmbg.addEventListener("blur", function () {
		if(jmbg.value=="") {
			jmbg.value = "Morate uneti jmbg!";
			jmbg.classList.add("greskaIzlaz");
		}
	});
	
	addr.addEventListener("blur", function () {
		if(addr.value=="") {
			addr.value = "Morate uneti adresu!";
			addr.classList.add("greskaIzlaz");
		}
	});
	
	fName.addEventListener("keyup", function () {
		var regexFN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}$/;
		var fName = document.getElementById("fName");
		
		if (regexFN.test(fName.value)) {
			document.getElementById("fName").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("fName").classList.add("greskaIzlaz");
		}
	});
	
	lName.addEventListener("keyup", function () {
		var regexLN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,12})*$/;
		var lName = document.getElementById("lName");
		
		if (regexLN.test(lName.value)) {
			document.getElementById("lName").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("lName").classList.add("greskaIzlaz");
		}
	});
	
	phone.addEventListener("keyup", function () {
		var regexNr = /^(0|\+381)6[\d]{7,8}$/;
		var phone = document.getElementById("phone");
		if (regexNr.test(phone.value)) {
			document.getElementById("phone").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("phone").classList.add("greskaIzlaz");
		}
	});
	
	jmbg.addEventListener("keyup", function () {
		var regexjmbg = /^[\d]{13}$/;
		var jmbg = document.getElementById("jmbg");
		
		if (regexjmbg.test(jmbg.value)) {
			document.getElementById("jmbg").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("jmbg").classList.add("greskaIzlaz");
		}
	});
	
	addr.addEventListener("keyup", function () {
		var regexAdd = /^[\d\w]+(\s[\d\w]+)*$/;
		var addr = document.getElementById("addr");
		
		if (regexAdd.test(addr.value)) {
			document.getElementById("addr").classList.remove("greskaIzlaz");
		}
		else {
			document.getElementById("addr").classList.add("greskaIzlaz");
		}
	});
	
	
	
function provera() {
		
		var greske = [];
		var marker = true;
		
		var regexFN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}$/;
		if (fName.value == "") {
			marker = false;
			greske.push("Ime ne sme biti prazno!");
		}
		else if (!regexFN.test(fName.value)) {
		marker = false;
		greske.push("Ime nije u dobrom formatu!");
		}
		else {
			marker = true;
		}
		
		var regexLN = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,12}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,12})*$/;
		if (lName.value == "") {
			marker = false;
			greske.push("Prezime ne sme biti prazno!");
		}
		else if (!regexLN.test(lName.value)) {
		marker = false;
		greske.push("Prezime nije u dobrom formatu!");
		}
		else {
			marker = true;
		}
		
		var regexNr = /^(0|\+381)6[\d]{7,8}$/;
		if (phone.value == "") {
			marker = false;
			greske.push("Telefon ne sme biti prazan!");
		}
		else if (!regexNr.test(phone.value)) {
		marker = false;
		greske.push("Telefon nije u dobrom formatu!");
		}
		else {
			marker = true;
		}
		
		var regexjmbg = /^[\d]{13}$/;
		if (addr.value == "") {
			marker = false;
			greske.push("JMBG ne sme biti prazan!");
		}
		else if (!regexjmbg.test(jmbg.value)) {
		marker = false;
		greske.push("JMBG nije u dobrom formatu!");
		}
		else {
			marker = true;
		}
		
		var regexAdd = /^[\d\w]+(\s[\d\w]+)*$/;
			if (addr.value == "") {
			marker = false;
			greske.push("Adresa ne sme biti prazna!");
		}
		
		else if (!regexAdd.test(addr.value)) {
			marker = false;
			greske.push("Adresa nije u dobrom formatu!");
		}
	
		else {
			marker = true;
		}
	
		var lista = "<ul>";
		for (let i = 0; i < greske.length; i++) {
			lista += "<li>"+ greske[i] +"</li>";
		}
		lista += "</ul>";
		
		if (marker) {
			document.getElementById("greske").innerHTML = "Podaci uspesno uneti!";
		}
		else {
			document.getElementById("greske").innerHTML = lista;
		}

};

