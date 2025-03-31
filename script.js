 // autre methode
   /* fetch("luxdrive_site_data_full.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var banner = data.pagesContent.Accueil.heroBanner;
  
      var section = document.getElementById("banner");
  
      // On crée le HTML dynamiquement
      var html = "<h1>" + banner.title + "</h1>";
      html += "<p>" + banner.subtitle + "</p>";
      html += "<a href='/catalogue'>" + banner.cta + "</a>";
      html += "<img src='/voiture.jpg'" + banner.image + "' alt='Bannière LuxDrive'>";
  
  
      section.innerHTML = html;
    })
    .catch(function(error) {
      console.error("Erreur lors du chargement du JSON :", error);
    });
*/
// protection
fetch("luxdrive_site_data_full.json")

    .then(function (response) {

        if(!response.ok){
            console.log("erreur le json pas chargee recommence");
        }
        return response.json();
    })
    .then(function(data) {
        var banner = data.pagesContent.Accueil.heroBanner;
    
        var section = document.getElementById("banner");
    
        // On crée le HTML dynamiquement
        var html = "<h1>" + banner.title + "</h1>";
        html += "<p>" + banner.subtitle + "</p>";
        html += "<a href='/catalogue'>" + banner.cta + "</a>";
        html += "<img src='/assets/images/cars/voiture.jpg'" + banner.image + "' alt='Bannière LuxDrive'>";
    
    
        section.innerHTML = html;
      })
      .catch(function(error) {
        console.error("Erreur lors du chargement du JSON :", error);
      });
