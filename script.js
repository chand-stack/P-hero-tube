const allTabs = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    const tabName = data.data;
    const tabContainer = document.getElementById('tab-container')

    tabName.forEach(element => {
        
        const newTab = document.createElement('a')
        newTab.innerHTML = `
        <a onclick="cardList(${element.category_id})" class="tab bg-gray-300">${element.category}</a>
        `;
        tabContainer.appendChild(newTab)
    }); 
}

const cardList = async (id) => {
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id || '1000'}`)
    const data = await response.json();
    
    const cardDetails = data.data;
    // console.log(cardDetails)

    const noContent = document.getElementById('no-content');
    if (cardDetails.length === 0){
        noContent.classList.remove('hidden');
    }else{
        noContent.classList.add('hidden')
    }

    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent='';


    cardDetails.forEach(element=>{
        // console.log(parseFloat(element.others.views))
     

        

        


        const secondToHour = (second) =>{
            
            const totalMinutes = Math. floor(second / 60)
            const hours = Math. floor(totalMinutes / 60)
            const minutes = totalMinutes % 60
            // console.log('hours',hours, 'minute',minutes)
            if(second === 0 || second === ''){
                return ""
            }else if(second !== 0 ){
                return `${hours}hrs ${minutes} min ago`
            }
        }
        // secondToHour(element.others.posted_date)
        // console.log(secondToHour(element.others.posted_date))
        
        const newCard = document.createElement('div');

        

        newCard.innerHTML = `
        <div class="card card-compact w-80 md:w-auto mx-auto md:mx-0 bg-base-100 shadow-xl">
                    <figure class=""><img class=" h-52" src="${element.thumbnail}" alt="PH Tube" />
                    <p class=" absolute left-36 top-44 md:left-40 lg:top-40 lg:left-44  top rounded-lg p-1 bg-black text-white ">${secondToHour(element.others.posted_date)}</p>
                    </figure>
                    <div class="card-body flex flex-row">
                        <div><img class="w-16 h-16 rounded-full" src="${element.authors[0].profile_picture}" alt="">
                        </div>
                        
                      <div>
                      
                        <h2 class="card-title font-bold">${element.title}</h2>
                      <p class=" font-medium">${element.authors[0].profile_name} <span>${element.authors[0].verified ? `<i class="fa-solid fa-certificate text-blue-600"></i>` :''}</span></p>
                      <p>${element.others.views} views</p>
                      </div>
                      
                    </div>
                  </div>
        `;        
        
       
        // console.log(newCard)
                
       
     cardContainer.appendChild(newCard)

     
        
    
        
    
    });

// console.log(sortBtn(id))
};
cardList()

allTabs()


    
const sortBtn =() =>{

}