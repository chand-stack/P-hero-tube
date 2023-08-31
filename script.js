const allTabs = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    const tabName = data.data;
    const tabContainer = document.getElementById('tab-container')

    tabName.forEach(element => {
        // console.log(element)
        const newTab = document.createElement('a')
        newTab.innerHTML = `
        <a onclick="cardList(${element.category_id})" class="tab bg-gray-300">${element.category}</a>
        `;
        tabContainer.appendChild(newTab)
    }); 
}

const cardList = async (id) => {
    // console.log(id)
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id || '1000'}`)
    const data = await response.json();
    
    const cardDetails = data.data;
    // console.log(cardDetails)
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent='';

    // if(element?.authors[0]?.verified == true){
    //     document?.getElementById('badge')?.classList.remove('hidden');
    // }else if(element?.authors[0]?.verified == false){
    //     document?.getElementById('badge')?.classList.add('hidden')
    // }
    

    cardDetails.forEach(element=>{
        console.log(element.authors[0])
        
        const newCard = document.createElement('div');

        

        newCard.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="${element.thumbnail}" alt="PH Tube" /></figure>
                    <div class="card-body flex flex-row">
                        <div><img class="w-20 h-20 rounded-full" src="${element.authors[0].profile_picture}" alt=""></div>
                      <div>
                        <h2 class="card-title font-bold">${element.title}</h2>
                      <p>${element.authors[0].profile_name} <span id="badge" class=""><i class="fa-solid fa-certificate text-blue-500"></i></span></p>
                      <p>${element.others.views} views</p>
                      </div>
                      
                    </div>
                  </div>
        `;        
       
        
        cardContainer.appendChild(newCard)
    })

}
cardList()

allTabs()