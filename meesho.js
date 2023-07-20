import womenethnic from "./data/womenethnic.js"
import WomenWestern from "../data/WomenWestern.js"
import Men from "./data/Men.js"
import kids from "./data/kids.js"
import JewelleryandAccessories from "./data/Jwelleries.js"
import HomeAndKitchen from "./data/Homekitchen.js"
import BeautyAndHealth from "./data/beautyHealth.js"
import Electronics from "./data/electronics.js"
import BagsAndFootwear from "./data/bagsfootwears.js"

 
 let searchbox1=document.querySelector(".searchinput")
 let recentlistsicon1=document.querySelector(".recentlistsicon")
 let listsofrecents1=document.querySelector(".listsofrecents")
 let recentinputs1=[]

 searchbox1.addEventListener("keydown",()=>{
    if(searchbox1.value){
        document.getElementById("crossmarkid").style.display="block";
    }
    else{
        document.getElementById("crossmarkid").style.display="none";
    }
 })

document.getElementById("recentinputs").addEventListener("submit",(e)=>{
    e.preventDefault();
    recentinputs1.unshift(searchbox1.value);
    let recentinputs1HTML="";
    if(recentinputs1.length) {
        for(let i=0;i<recentinputs1.length;i++){
            recentinputs1HTML+= `
            <div class="iconsearchlist">
               <div class="recentlistsicon">
                  <img src="images/878014.png" alt="">
               </div>
                   <p>${recentinputs1[i]}</p>
            </div>`
        }
        listsofrecents1.innerHTML=recentinputs1HTML;
    }
})

function renderSubMenu(id,data){
    let temp = document.getElementById(id)
    function TempFunc(){
        return data.map(el => {
            let list = "";
            list = el.datawithincontainer.map(element => `<p>${element}</p>`).join("")
            return `<div class="column">
                <h4>${el.container}</h4>
                ${list}
             </div>
             `
        }).join(" ")
    }
    temp.innerHTML = TempFunc()
}


renderSubMenu("womenethnic1", womenethnic);

renderSubMenu("WomenWestern1", WomenWestern);

renderSubMenu("Men1", Men);

renderSubMenu("kids1", kids);

renderSubMenu("Home&kitchen1", HomeAndKitchen);

renderSubMenu("Beauty&Health1", BeautyAndHealth);

renderSubMenu("Jewellery&Accessories1", JewelleryandAccessories);

renderSubMenu("Bags&Footwear1", BagsAndFootwear);

renderSubMenu("Electronics1", Electronics);


import productdata from "./productdata.js"

const itemslist=[...new Set(productdata.map(el => el.category))]

let filteritems=[]

document.addEventListener("click",(e)=>{
let analogwatch = document.getElementById("Analogwatch1").checked
let Bedsheet = document.getElementById("Bedsheet1").checked
let Mobileacc = document.getElementById("mobileaccessories1").checked
let motorcyclecover = document.getElementById("Motorcyclecover1").checked
let sunglasses = document.getElementById("Sunglasses1").checked
let Wallpapers = document.getElementById("Wallpapers1").checked
let Slippers = document.getElementById("Slippers1").checked
let KitchenStorage = document.getElementById("KitchenStorage1").checked

filteritems = productdata.filter( el =>(
    analogwatch && el.category == "Analog watch" ||
    Bedsheet && el.category =="bedsheet"  ||
    Mobileacc && el.category =="mobileaccessories"  ||
    motorcyclecover && el.category =="motorcyclecover"  ||
    Wallpapers && el.category =="Wallpaper" ||
    sunglasses && el.category =="sunglasses" ||
    Slippers && el.category =="Slippers" ||
    KitchenStorage && el.category =="KitchenStorage"
))

  temp()

})

function temp(){
    let tempHTML=""
    if(filteritems[0]){
       filteritems.forEach(el => {
        tempHTML+=`<div class="image1">
           <img src="Product Images/${el.img}" alt="">
        </div>
        `
    })
    }
    else{
        productdata.forEach(el => {
            tempHTML+=`
            <div class="image1">
               <img src="Product Images/${el.img}" alt="">
            </div>
            `
         })
   }
   document.getElementById("itemsdisplay").innerHTML=tempHTML;
}

temp()