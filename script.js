var meals = [['Wieswurst','short','pork'],
['Spaghetti','medium','beef'],
['Pork Chops','short','pork'],
['Shake n Bake Chicken','medium','chicken'],
['Whole Chicken','long','chicken'],
['Chicken Burritos','short','chicken'],
['Beef Burritos','short','beef'],
['Tacos','short','beef'],
['Quesadillas','long','chicken'],
['Perogies','long','pork'],
['Perogie Children','medium','pork'],
['Indian Food','long','chicken'],
['Fish','short','seafood'],
['Fish and chips','short','seafood'],
['Shrimpy Noodles','medium','seafood'],
['Shrimp Skewers','long','seafood'],
['Chow Mein','medium','chicken'],
['Homemade Pizza','medium','pork'],
['Goulash','long','beef'],
['Stew','long','beef'],
['Stir Fry','medium','pork'],
['Fried Rice','medium','chicken'],
['Lasagna','long','beef'],
['Steak','medium','beef'],
['Roast Beef','long','beef'],
['Chicken Wraps','medium','chicken'],
['Butter Chicken Noodles','medium','chicken'],
['Mommy Surprise','medium','chicken'],
['Meatloaf','long','beef'],
['Hamburgers','short','beef'],
['Ribs','medium','pork'],
['Ham','long','pork']]

localStorage.clear();
var addedMeals = localStorage.getItem('added');
if(addedMeals != null){
    addedMeals = JSON.parse(addedMeals);
    for(var a = 0; a < addedMeals.length; a++){
        meals.push(addedMeals[a]);
    }
}else{
    addedMeals = [];
}
var deletedMeals = localStorage.getItem('deleted');
if(deletedMeals != null){
    deletedMeals = JSON.parse(deletedMeals);
    for(var a = 0; a < deletedMeals.length; a++){
        for(var b = 0; b < meals.length; b++){
            if(JSON.stringify(meals[b]) == JSON.stringify(deletedMeals[a])){
                meals.splice(b,1);
            }
        }
    }
}else{
    deletedMeals = [];
}

var searchCriteria = []
update_meals();


function toggleCriteria(critera){
    index = searchCriteria.indexOf(critera)
    if(index == -1){
        searchCriteria.push(critera);
    }else{
        searchCriteria.splice(index,1);
    }
}

function onoff(id){
    currentvalue = document.getElementById(id).style.backgroundColor;
    if(currentvalue == "rgb(255, 68, 68)" || currentvalue == ""){
        document.getElementById(id).style.backgroundColor = "#74d680";
    }else{
        document.getElementById(id).style.backgroundColor = "#ff4444";
    }
    toggleCriteria(id);
}

function search(){
    document.getElementById('table').innerHTML = '';
    for(var a = 0; a < meals.length; a++){
        if(searchCriteria.indexOf(meals[a][1]) != -1 && searchCriteria.indexOf(meals[a][2]) != -1){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(meals[a][0]);
            node.appendChild(textnode);
            document.getElementById("table").appendChild(node);
        }
    }
    document.getElementById('results').style.display = 'none';
    document.getElementById('results-table').style.display = 'block';
    var array = [[1, 2, 3],[4,5]];
    localStorage.setItem("array", JSON.stringify(array));
    JSON.parse(localStorage.getItem("array"))[1][1];
}

function direct(){
    location.href = "edit-page.html";
}

function choose(id){
    var currentclass = document.getElementById(id).className;
    var all_in_class = document.getElementsByClassName(currentclass);
    for(var a = 0; a < all_in_class.length; a++){
        all_in_class[a].style.backgroundColor = "#ff4444";
    }
    document.getElementById(id).style.backgroundColor = "#74d680";
}

function fill(id){
    meal = meals[parseInt(id.substring(4))];
    document.getElementById('name').value = meal[0];
    choose(meal[1]);
    choose(meal[2]);
    document.getElementById('add-button').style.display = 'none';
    document.getElementById('save-button').style.display = 'block';
    document.getElementById('delete-button').style.display = 'block';
}

function empty(){
    document.getElementById('name').value = '';
    document.getElementById('short').style.backgroundColor = "#ff4444";
    document.getElementById('medium').style.backgroundColor = "#ff4444";
    document.getElementById('long').style.backgroundColor = "#ff4444";
    document.getElementById('beef').style.backgroundColor = "#ff4444";
    document.getElementById('pork').style.backgroundColor = "#ff4444";
    document.getElementById('chicken').style.backgroundColor = "#ff4444";
    document.getElementById('seafood').style.backgroundColor = "#ff4444";
    document.getElementById('save-button').style.display = 'none';
    document.getElementById('delete-button').style.display = 'none';
    document.getElementById('add-button').style.display = 'block';
    all_in_class = document.getElementsByClassName('meal-button');
    for(var a = 0; a < all_in_class.length; a++){
        all_in_class[a].style.backgroundColor = "#ff4444";
    }

}

function add(){
    var name = document.getElementById('name').value;
    var time;
    var all_in_class = document.getElementsByClassName('time-button');
    for(var a = 0; a < all_in_class.length; a++){
        if(all_in_class[a].style.backgroundColor == 'rgb(116, 214, 128)'){
            time = all_in_class[a].id;
        }
    }
    var meat;
    all_in_class = document.getElementsByClassName('meat-button');
    for(var a = 0; a < all_in_class.length; a++){
        if(all_in_class[a].style.backgroundColor == 'rgb(116, 214, 128)'){
            meat = all_in_class[a].id;
        }
    }
    var newMeal = [name,time,meat];
    if(addedMeals != null){
        addedMeals.push(newMeal);
    }else{
        [].push([name,time,meat]);
    }
    localStorage.setItem('added',JSON.stringify(addedMeals));
    meals.push(newMeal);
    update_meals();
    empty();
}

function save(){
    var meal_list = document.getElementsByClassName('meal-button');
    for(var a = 0; a < meal_list.length; a++){
        if(meal_list[a].style.backgroundColor == 'rgb(116, 214, 128)'){
            index = addedMeals.indexOf(meals[a]);
            if(index != -1){
                addedMeals[index][0] = document.getElementById('name').value;
                var all_in_class = document.getElementsByClassName('time-button');
                for(var b = 0; b < all_in_class.length; b++){
                    if(all_in_class[b].style.backgroundColor == 'rgb(116, 214, 128)'){
                        addedMeals[index][1] = all_in_class[b].id;
                    }
                }
                all_in_class = document.getElementsByClassName('meat-button');
                for(var b = 0; b < all_in_class.length; b++){
                    if(all_in_class[b].style.backgroundColor == 'rgb(116, 214, 128)'){
                        addedMeals[index][2] = all_in_class[b].id;
                    }
                }
                localStorage.setItem('added',JSON.stringify(addedMeals));
                update_meals();
                meal_list[a].style.backgroundColor = "#74d680";
                return;
            }else{
                var name = document.getElementById('name').value;
                var time;
                var all_in_class = document.getElementsByClassName('time-button');
                for(var b = 0; b < all_in_class.length; b++){
                    if(all_in_class[b].style.backgroundColor == 'rgb(116, 214, 128)'){
                        time = all_in_class[b].id;
                    }
                }
                var meat;
                all_in_class = document.getElementsByClassName('meat-button');
                for(var b = 0; b < all_in_class.length; b++){
                    if(all_in_class[b].style.backgroundColor == 'rgb(116, 214, 128)'){
                        meat = all_in_class[b].id;
                    }
                }
                var newMeal = [name,time,meat];
                if(addedMeals != null){
                    addedMeals.push(newMeal);
                }else{
                    [].push([name,time,meat]);
                }
                deletedMeals.push(meals[a]);
                localStorage.setItem('deleted',JSON.stringify(deletedMeals));
                meals.splice(a,1,newMeal);
                localStorage.setItem('added',JSON.stringify(addedMeals));
                update_meals();
                meal_list[a].style.backgroundColor = "#74d680";
            }
        }
    }
}

function del(){
    var meal_list = document.getElementsByClassName('meal-button');
    for(var a = 0; a < meal_list.length; a++){
        if(meal_list[a].style.backgroundColor == 'rgb(116, 214, 128)'){
            index = addedMeals.indexOf(meals[a]);
            if(index != -1){
                addedMeals.splice(index,1);
                meals.splice(a,1);
                localStorage.setItem('added',JSON.stringify(addedMeals));
                update_meals();
                empty();
                return;
            }else{
                deletedMeals.push(meals[a]);
                localStorage.setItem('deleted',JSON.stringify(deletedMeals));
                meals.splice(a,1);
                update_meals();
                empty();
            }
        }
    }
}

function update_meals(){
    var elements = document.getElementsByClassName('meal-button');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    elements = document.getElementsByClassName('meals_on_list');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    for(var a = 0; a < meals.length; a++){
        var button = document.createElement("button");
        button.className = "meal-button";
        button.id = "meal" + a;
        button.onclick = function(){
            choose(this.id);
            fill(this.id);
        }
        document.getElementById("meal-list").appendChild(button);
        var meal = document.createElement("h3")
        meal.className = "meals_on_list";
        meal.innerHTML = meals[a][0];
        document.getElementById('meal-list').appendChild(meal);
    }
}