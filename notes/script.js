//1. Element auswählen (von dem die Aktion ausgeht)
//API die es erlaubt mit JS zu interagieren: querySelector /querySelectoAll
//const btn = document.body.querySelector("#btn-1");
//ATTRIBUT:
//Attribut auslesen: Variablenname.type/ Variablenname.value
//exkurs: prüfen, ob ein Element Attribute hat:
//btn.hasAttribute("hidden")); //
//Attribut neu setzen oder aktualisieren: setAttribut (name,value)
//const img = document.querySelector("img");
//img.setAttribute("alt", "A cat");
//bei boolean attributes leeren String als vlaue: ("disabled","")
//deleting attribute: removeAttribute(name)

//Custom attributes: prefix: data-*

//Element=das erste das gefunden wird,also am besten mit IDs arbeiten!
//2.Event erstellen mittels addEventListener (API für jedes Element)
//Aufbau: addEventlistener(string, functionalsParameter(callbackFN), boolean)
//btn.addEventListener(click", buttonclick); //Wenn auf diesem Element irgendwann ein Click passiert führe bitte diese Funktion aus (Callback Funktion)
//häufig mit anonymer Funktion direk mit rein:
//btn.addEventListener("click", function(){
// console.log("dies und das");
//})

//beliebig viele EventListener eines typs auf einen Element es sei denn onclick handler!
