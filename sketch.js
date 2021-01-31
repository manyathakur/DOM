var DIO
var Ezz
var lol
var ok
var Google
var New
var nom
var noml
var adres
var ad
var sob
function setup(){
  DIO=createElement("h1")
  DIO.html("Manya's Shoe World")
  DIO.position(200,100)
  Ezz=createElement("h2")
  Ezz.html("Nike Overdrive")
  Ezz.position(100,200)
  ok=createElement("h2")
  ok.html("Puma M1")
  ok.position(100,250)
  Google=createCheckbox()
  Google.position(50,275)
  lol=createCheckbox()
  lol.position(50,225)

}

function draw() {
  background("White"); 
  lol.mousePressed(Newpage)
  Google.mousePressed(Newpage)
  drawSprites();
}
function Newpage(){
  Ezz.hide()
  DIO.hide()
  ok.hide()
  Google.hide()
  lol.hide()
  New=createElement("h1")
  New.html("Delivery")
  New.position(200,100)
  noml=createElement("h2")
  noml.html("Name:")
  noml.position(10,175)
  nom=createInput()
  nom.position(100,200)
  ad=createElement("h2")
  ad.html("Adress:")
  ad.position(10,200)
  adr=createInput()
  adr.position(100,225)
  sob=createButton("Submit")
  sob.position(200,300)
  sob.mousePressed(lolok)
  

}
function lolok() {
  alert("Your Shoes Will Be Delivered At Your Doorstep As Soon As Possible!")
}