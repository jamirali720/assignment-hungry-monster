const search = document.getElementById('searchInput');
const submit = document.getElementById('searchBtn')
const result = document.getElementById('result');
const mealDetail = document.getElementById("mealDetail");
const searchContainer= document.getElementsByClassName('searchContainer')


function searchMeal(event) {
    event.preventDefault();
    result.innerHTML= "";
    const term = search.value;
   if (term.trim()) {
            
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
     
        result.innerHTML= ` <h1>Search result for  '${term}' :</h1>`;
        const meal =  data.meals;
        if(meal == null){
            result.innerHTML = '<span>No Result</span>'

        }
        result.innerHTML =(
            meal.map(mealName => (
                `
                <div class="searchContainer">
                    <div class="subContainer">                    
                        <img id="imageDiv" src="${mealName.strMealThumb}" alt="food"/></br>
                        <h2>${mealName.strMeal}</h2>
                        <div> category : ${mealName.strCategory}</div> 
                    </div>
                </div>
    
                
                `
            ))
           
        )
    })
   }    
  
}

submit.addEventListener('click', searchMeal);