
function cardFilter() {
  const filterBox= document.querySelector(".filter-box ") // box where filtlers appear


  const allListingCards = document.querySelectorAll(".listing-card")
  const inactiveFilters = document.querySelectorAll(".filter")
  let activeFilters=[]
  const checker = (arr,target)=>target.every(v=>arr.includes(v)); //thiis function checks if array has element of target
  inactiveFilters.forEach(element => {
    //clicking any of the filters
    element.addEventListener('click',()=> {
      filterBox.style.display="block";
      //On click checks if filter isn't active and  adding filter into active filter arr and generating  text for filters box in HTML
      if(!activeFilters.includes(element.innerHTML)) {
        activeFilters.push(element.innerHTML)
        filterBox.innerHTML+=`<div class="filter">${element.innerHTML} <div class="close-filter">X</div></div> ` 
      }
      // Checking which listings contain active filters, and setting display=none for cards that doesnt have active filter text inside
      allListingCards.forEach(element => {
        checker (element.innerHTML,activeFilters) ? element.style.display="flex": element.style.display="none";
    });
    //reseting all active filters
    if (activeFilters.length>0) {
      const resetFilters = document.querySelector(".reset-container span")
      resetFilters.addEventListener('click',()=> {
        filterBox.style.display="none";
        filterBox.innerHTML=`<div class="reset-container">
        <span>Clear</span>
    </div>`
        activeFilters=[];
        allListingCards.forEach(element => {
            element.style.display="flex";
        });
    })
       
    }
      })
  });









}
//   let arrOfFilters = [];
//   const filterContainer = document.querySelector(".filter-container");
//   const filters = document.querySelectorAll(".filter");
//   const filtersInsideListing = document.querySelectorAll(".listing-card");
  
//   //looping torugh all the filters inside listing-cards
//   filters.forEach((element) => {
//     element.addEventListener("click", () => {
//       //on click openning filter-box, on reset click closing box
//       const closeFilterBox = document.querySelector(".reset-container");
//       const filterBox = document.querySelector(".filter-box");
//       filterBox.style.display = "flex";
       
      
// //_________________________________________________________________________________________________
    
//       //checking if list of filters already contains pressed filter if not  - applying filter
//       if (!arrOfFilters.includes(element.innerHTML)) {
//         arrOfFilters.push(element.innerHTML);
//         filterContainer.innerHTML +=    `<div class="filter">${element.innerHTML} <div class="close-filter">X</div>  </div> `;
//       //If there is any active filters, adding clicks, and removing clicked filte from arr of filters
//    const activeFilters = document.querySelectorAll("header .filter");
  
//        activeFilters.forEach(element => {
//           element.addEventListener('click',()=> {
//               element.parentNode.removeChild(element)
//               arrOfFilters=arrOfFilters.filter(activeFilters =>activeFilters == element)
          
//           })
//       });
//         for (let i = 0; i < filtersInsideListing.length; i++) {
//           if (!filtersInsideListing[i].innerHTML.includes(arrOfFilters[i])) {
//             filtersInsideListing[i].style.display = "none";
//           }
//           else {
//               filtersInsideListing[i].style.display="flex";
//           }
        
        
//           //closing filter box, and clearing active filters
//           closeFilterBox.addEventListener("click", () => {
//             filterBox.style.display = "none";
//             arrOfFilters = [];
//             filterContainer.innerHTML = "";
//             filtersInsideListing[i].style.display = "flex";
//           }); 
        
//         }

   
  
 
     
      
       
//     }
//     return arrOfFilters
  

//       //end of click area for ALL filters inside listing-cards
//     });

//     //end of loop for tags inside listing-cards
//   });

//   //end of function
// }





export { cardFilter }
