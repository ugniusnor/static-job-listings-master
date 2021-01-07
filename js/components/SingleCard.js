class SingleCard  {
    constructor (params) {
       this.logo=params.logo,
       this.companyName = params.company,
       this.new = params.new,
       this.featured = params.featured,
       this.position = params.position,
       this.role = params.role,
       this.level=params.level,
       this.posted=params.postedAt,
       this.contract=params.contract,
       this.location = params.location,
       this.languages = params.languages,
       this.tools= params.tools 
       this.init=this.generateListingCard;
      this.filterArr=this.generateFilterArray();

    }
    
generateListingCard () {
         const HTML=`
                <div class="listing-card ${this.featured ? 'card-featured' : ''}">
           <div class="avatar">
             <img src="${this.logo}" alt="bot found"/>
         </div>
         <div class="card-container">
         <div class="title">
             <span>${this.companyName}</span>
          ${this.generateBadges()}
         </div>
         <div class="position-name">
             <h3>${this.position}</h3>
         </div>
         <div class="tags">
             <div class="date">
                 <span>${this.posted} </span>
                 <div class="tag-dot"></div>
                 <div class="working-hours">
                     <span>${this.contract}</span>
                     <div class="tag-dot"></div>
                 </div>
                 <div class="remote">
                     <span>${this.location}</span>
                 </div>
             </div>
         </div>
        </div>
        <div class="filters">
                    ${this.generateFilters()}
                    
                    
                 </div>
             </div>
         ` 
         return HTML;
}

generateBadges () {
let badges = '';
if ( this.new || this.featured) {
    badges=' <div class="badges">'
    this.new ? badges+=' <div class="badge-new">NEW</div>' : "";
    this.featured ? badges+=' <div class="badge-featured">Featured</div>' :"";
    badges+="</div\>"
    return badges;
}
else {
    return "";
    
}

}

generateFilters () {

let filters = '';
for (let i=0;i<this.generateFilterArray().length;i++) {
      filters +=  
            `<div class="filter"> ${this.generateFilterArray()[i]}</div>`
 }

        
            return filters
}
generateFilterArray () {
    let filterArr=[];
    filterArr.push(this.role, this.level)
    this.languages.forEach(element => {
        filterArr.push(element)
    });
    this.tools.forEach(element =>{
        filterArr.push(element)
    } )
    return filterArr;
}



}



export default SingleCard;
