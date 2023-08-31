const allTabs = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    const tabName = data.data;
    const tabContainer = document.getElementById('tab-container')

    tabName.forEach(element => {
        console.log(element)
        const newTab = document.createElement('a')
        newTab.innerHTML = `
        <a class="tab bg-gray-300">${element.category}</a>
        `;
        tabContainer.appendChild(newTab)
    });
    
}

allTabs()