let btn = document.getElementById("dugmeVrh");

		function topFunction(){
			document.documentElement.scrollTop = 0;
		}

		window.onscroll = function (){
			if(document.documentElement.scrollTop > 150){
				btn.style.display = "block";
			}else{
				btn.style.display = "none";
			}
		}

		let dot = document.getElementsByClassName("dot");
		let img = document.getElementsByClassName("myDiv");

		let indeks = 1;

		function slajdTacka(n){
			slajder(indeks = n);
		}

		function levoDesno(n){
			slajder(indeks += n);
		}
		slajder(indeks);

		function slajder(n){

			if(n<1){
				indeks = img.length;
			}
			if(n>img.length){
				indeks = 1;
			}

			for(let i=0; i<img.length; i++){
				img[i].style.display = "none";
			}

			for(let i=0; i<dot.length; i++){
				dot[i].className = dot[i].className.replace(" active", "");
			}

			img[indeks-1].style.display = "block";
			dot[indeks-1].className += " active";
		}

		
		let lista = document.getElementsByClassName("motorLista");
		let reg = document.getElementsByClassName("reg");

		function myFunction(){
			let input = document.getElementsByClassName("imeAutomobila")[0];
			let filter = input.value.toUpperCase();

			for(let i=0; i<lista.length; i++){
				let ime = lista[i].getAttribute("data-ime");
				
				if (ime.toUpperCase().indexOf(filter) > -1) {
			      lista[i].style.display = "";
			    } else {
			      lista[i].style.display = "none";
			    }
			}
		}

		function filterReg(x){
			for(let i=0; i<lista.length; i++){
				if(lista[i].getAttribute("data-reg") == x){
					lista[i].style.display = "inline-block";					
				}else{
					lista[i].style.display = "none";
				}
			}
		}

		let godOd = document.querySelector("#godOd");
		let godDo = document.querySelector("#godDo");

		function filterGod(){
			for(let i=0; i<lista.length; i++){
				if(godOd.value < lista[i].getAttribute("data-god") && godDo.value > lista[i].getAttribute("data-god")){
					lista[i].style.display = "inline-block";					
				}else{
					lista[i].style.display = "none";
				}
			}
		}

		let vestiPrikaz = document.getElementsByClassName("prikaz");
		let vestiArt = document.getElementsByClassName("article");

		for(let i=0; i<vestiArt.length; i++){
			vestiArt[i].onclick = function(){
				for(let j=0; j<vestiPrikaz.length; j++){
					vestiPrikaz[j].style.display = "block";
				}
			}
		}

		function prikaziVest(n){
			for(let i=0; i<vestiPrikaz.length; i++){
				vestiPrikaz[i].style.display = "none";
			}

			vestiPrikaz[n-1].style.display = "block";
		}

        prikaziVest(1);
        
        let poruka = document.getElementById("poruka");
        let porukaDiv = document.querySelectorAll(".chat")[0];
        let zatvori = document.querySelectorAll(".chatZatvori")[0];

        poruka.onclick = function(){
            porukaDiv.classList.toggle("chatPrikaz");           
        }

        zatvori.onclick = function(){
            porukaDiv.classList.toggle("chatPrikaz");
        }