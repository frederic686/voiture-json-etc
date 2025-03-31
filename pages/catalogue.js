fetch("../luxdrive_site_data_full.json")

    .then(function (response) {

        if(!response.ok){
            console.log("erreur le json pas chargee recommence");
        }
        return response.json();
    })
   
    .then(function (data) {

        /*for (let i = 0; i < data.cars.length; i++) {
            let model = data.cars[i];
        let car = document.getElementById ("car");
                 let nom = document.createElement("p");
            nom.textContent = model.name;
                     car.appendChild(noms);*/
            
            
        for (let i = 0; i <data.cars.length; i++) {
            let model = data.cars[i];

            if (i === 0){
            let nom = document.getElementById("titleh5");
            nom.textContent = model.name;
            let img0 = document.getElementById('img0');
            img0.src = model.image;
            let price0 = document.getElementById('price0');
            price0.textContent = model.price +" euros";
            let click0 =document.getElementById("click0");
            click0.textContent = "cliquer-ici";
            let detail0 =document.getElementById("detail0");
            click0.addEventListener("click", function() {
                if (detail0.textContent === model.description) {
                  detail0.textContent = "";
                } else {
                  detail0.textContent = model.description;
                }
              });

            }
            if (i === 1){
            let nom = document.getElementById("titleh51");
            nom.textContent = model.name;
            let img1 = document.getElementById('img1');
            img1.src = model.image;
            let price1 = document.getElementById('price1');
            price1.textContent = model.price +" euros";

            let click1 =document.getElementById("click1");
            let detail1 =document.getElementById("detail1");
            click1.textContent = "cliquer-ici";
            click1.addEventListener("click", function() {
                if (detail1.textContent === model.description) {
                  detail1.textContent = "";
                } else {
                  detail1.textContent = model.description;
                }
              });

            }

            if (i === 2){
            let nom = document.getElementById("titleh52");
            nom.textContent = model.name
            let img2 = document.getElementById('img2')
            img2.src = model.image
            let price2 = document.getElementById('price2');
            price2.textContent = model.price +" euros";

            let click2 =document.getElementById("click2")
            let detail2 =document.getElementById("detail2");
            click2.textContent = "cliquer-ici";
            click2.addEventListener("click", function() {
                if (detail2.textContent === model.description) {
                  detail2.textContent = "";
                } else {
                  detail2.textContent = model.description;
                }
              });



            }

            if (i === 3){
                let nom = document.getElementById("titleh53");
                nom.textContent = model.name
                let img3 = document.getElementById('img3')
                img3.src = model.image
                let price3 = document.getElementById('price3');
                price3.textContent = model.price +" euros";

                let click3 =document.getElementById("click3")
                let detail3 =document.getElementById("detail3")
                click3.textContent = "cliquer-ici";
                click3.addEventListener("click", function() {
                    if (detail3.textContent === model.description) {
                      detail3.textContent = "";
                    } else {
                      detail3.textContent = model.description;
                    }
                  });


            }

            if (i === 4){
                let nom = document.getElementById("titleh54");
                nom.textContent = model.name
                let img4 = document.getElementById('img4')
                img4.src = model.image
                let price4 = document.getElementById('price4');
                price4.textContent = model.price +" euros";


                let click4 =document.getElementById("click4")
                let detail4 =document.getElementById("detail4")
                click4.textContent = "cliquer-ici";
                click4.addEventListener("click", function() {
                    if (detail4.textContent === model.description) {
                      detail4.textContent = "";
                    } else {
                      detail4.textContent = model.description;
                    }
                  });


            }
    
    
            if (i === 5){
                let nom = document.getElementById("titleh55");
                nom.textContent = model.name
                let img5 = document.getElementById('img5')
                img5.src = model.image
                let price5 = document.getElementById('price5');
                price5.textContent = model.price +" euros";

                let click5 =document.getElementById("click5")
                let detail5 =document.getElementById("detail5")
                click5.textContent = "cliquer-ici";
                click5.addEventListener("click", function() {
                    if (detail5.textContent === model.description) {
                      detail5.textContent = "";
                    } else {
                      detail5.textContent = model.description;
                    }
                  });


            }

            if (i === 6){
                let nom = document.getElementById("titleh56");
                nom.textContent = model.name
                let img6 = document.getElementById('img6')
                img6.src = model.image
                let price6 = document.getElementById('price6');
                price6.textContent = model.price +" euros";


                let click6 =document.getElementById("click6")
                let detail6 =document.getElementById("detail6")
                click6.textContent = "cliquer-ici";
                click6.addEventListener("click", function() {
                    if (detail6.textContent === model.description) {
                      detail6.textContent = "";
                    } else {
                      detail6.textContent = model.description;
                    }
                  });
                
            }

            if (i === 7){
                let nom = document.getElementById("titleh57");
                nom.textContent = model.name
                let img7 = document.getElementById('img7')
                img7.src = model.image
                let price7 = document.getElementById('price7');
                price7.textContent = model.price +" euros";


                let click7 =document.getElementById("click7")
                let detail7 =document.getElementById("detail7")
                click7.textContent = "cliquer-ici";
                click7.addEventListener("click", function() {
                    if (detail7.textContent === model.description) {
                      detail7.textContent = "";
                    } else {
                      detail7.textContent = model.description;
                    }
                  });

    
            }



            
   
    }


    }

        );
