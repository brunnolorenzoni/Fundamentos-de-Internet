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
    
    var input = input;
    
    var i;
    
    var containerRestaurant = $(".container-restaurant");

    for (i = 0; i < LOCAL.length; i++){
        
        var valueName = removeAccents(containerRestaurant.eq(i).children().eq(0).text());
   
        if (valueName.indexOf(input) == -1){
            
            containerRestaurant.eq(i).addClass("remove");
            
        } else {
            
            containerRestaurant.eq(i).removeClass("remove");
            
        }
        
    }
    
};

var createList = function (){

    
    CONTAINER = $("#container");
    
    var i;
    
    for (i = 0; i < LOCAL.length; i++){
        
        var containerRestaurant = $("<div>", {
            'class': "container-restaurant"
        }).appendTo(CONTAINER);
    
        var nameRestaurant = $("<div>", {
            'class': "name-restaurant"
        }).val(removeAccents(LOCAL[i].name))
        .text(LOCAL[i].name)
        .appendTo(containerRestaurant);
        
        var streetRestaurant = $("<div>", {
            'class': "street-restaurant"
        }).text("Endereço: " + LOCAL[i].street)
        .appendTo(containerRestaurant);
        
        var categoryRestaurant = $("<div>", {
            'class':"category-restaurant"
        }).text(LOCAL[i].category)
        .appendTo(containerRestaurant);

    }
    
    var input = $(".input-search");
    input.on('keyup', function(){
        searchLocal(input.val());
    });

}; 

$(document).ready(function (){
    
createList();

});
