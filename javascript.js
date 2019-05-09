//Variable//
var mauvaisesLettres = [ ];
var lettresAttendues = [ "s","u","p","e","r"];
var lettresTrouves = [" _ "," _ "," _ "," _ "," _ "];
var indexLettres;
var Tentatives = 0;

//Phrase de debut du pendu//
alert("JEU DU PENDU\r\nTrouve le mot en 10 tentative : " +lettresTrouves);


//////Boucle des 10 tentatives////
for (var index = 0; index < 10; index++) 
{
    Tentatives++;
///////Proposition du joueurs///////
var lettresJoueur = prompt("Tentative N°" +Tentatives+ "\r\nProposer une lettre : ");

/////////Les bonnes lettres/////////
if (lettresJoueur == "s"){
   indexLettres = lettresAttendues.indexOf("s");
   lettresAttendues.splice(indexLettres,1);
    lettresTrouves.splice(0,1,"s");
    alert("BONNE LETTRE ! \r\nMots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);

    
    
}
else if (lettresJoueur == "u"){
    indexLettres = lettresAttendues.indexOf("u");
    lettresAttendues.splice(indexLettres,1);
    lettresTrouves.splice(1,1,"u");
    alert("BONNE LETTRE ! \r\nMots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);
    
    

}
else if (lettresJoueur == "p"){
    indexLettres = lettresAttendues.indexOf("p");
    lettresAttendues.splice(indexLettres,1);
    lettresTrouves.splice(2,1,"p");
    alert("BONNE LETTRE ! \r\nMots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);
   
    
}
else if (lettresJoueur == "e"){
    indexLettres = lettresAttendues.indexOf("e");
    lettresAttendues.splice(indexLettres,1);
    lettresTrouves.splice(3,1,"e");
    alert("BONNE LETTRE ! \r\nMots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);
   
    
}
else if (lettresJoueur == "r"){
    indexLettres = lettresAttendues.indexOf("r");
    lettresAttendues.splice(indexLettres,1);
    lettresTrouves.splice(4,1,"r");
    alert("Mots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);
    
    
}
/////////Mauvaise lettres/////////
else {
    mauvaisesLettres.push(lettresJoueur);
    alert("RATE ! \r\nMots : " +lettresTrouves+ "\r\nMauvaises lettres : " +mauvaisesLettres);
}
//////Conditions de défaite et de victoire////
if (Tentatives == 10) {
    alert("PERDU !");
}
else if (lettresAttendues ==0)
{
    alert("BRAVO !");
    break;
}

}