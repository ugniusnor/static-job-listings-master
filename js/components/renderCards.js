import SingleCard from "../components/SingleCard.js"
import data from "../data/data.js"
import cardFilter from "../components/cardFilter.js" 


function renderAllListings () {
    let allFilters=[];
    let HTML=``;
    const DOM = document.querySelector(".menu-section")
    if ( data.length<=0) { return }
for (let i=0;i<data.length;i++) {
   
      HTML+= new SingleCard(data[i]).generateListingCard();
      allFilters.push(new SingleCard(data[i]).filterArr)
     
 }
 DOM.innerHTML=HTML;






 cardFilter ();
}

export default renderAllListings; 
