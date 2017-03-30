var LOCAL = [
    
    {
        name: "Bar do João",
        street: "Avenida Assis Brasil, 2408 - Cristo Redentor",
        category: "Boteco"
        
    },
    
    {
        name: "Bar do Zé",
        street: "Avenida Baltazar de Oliveira Garcia, 6000 - Leopoldina",
        category: "Bar e Lancheria"
        
    },
    
    {
        name: "Xis do Bruxo",
        street: "Avenida do Forte, 1200 - Vila Jardim",
        category: "Lancheria"
        
    },
    
];

var CONTAINER;

var searchLocal = function (input){
    
    var lenghtInput = input.length;
    
    var input = removeAccents(input.value);
    
    var i;
    
    var nameRestaurant = document.getElementsByClassName("container-restaurant");
    
    for (i = 0; i < LOCAL.length; i++){
        
        var valueName = removeAccents(nameRestaurant[i].childNodes[0].textContent);
   
        if (valueName.indexOf(input) == -1){
            
            nameRestaurant[i].style.display = "none";
            
        } else {
            
            nameRestaurant[i].style.display = "flex";
            
        }
        
    }
    
};

var createList = function (){
    
    CONTAINER = document.getElementById("container");
    
    var i;
    
    for (i = 0; i < LOCAL.length; i++){
        
        var containerRestaurant = document.createElement("div");
        containerRestaurant.className = "container-restaurant";
        container.appendChild(containerRestaurant);
    
        var nameRestaurant = document.createElement("div");
        nameRestaurant.className = "name-restaurant";
        nameRestaurant.textContent = LOCAL[i].name;
        nameRestaurant.setAttribute("value", removeAccents(LOCAL[i].name));
        containerRestaurant.appendChild(nameRestaurant);
        
        var streetRestaurant = document.createElement("div");
        streetRestaurant.className = "street-restaurant";
        streetRestaurant.textContent = "Endereço: " + LOCAL[i].street;
        containerRestaurant.appendChild(streetRestaurant);
        
        var categoryRestaurant = document.createElement("div");
        categoryRestaurant.className = "category-restaurant";
        categoryRestaurant.textContent = LOCAL[i].category;
        containerRestaurant.appendChild(categoryRestaurant);

    }

}; 

createList();