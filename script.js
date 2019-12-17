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
    currentclass = document.getElementById(id).className;
    all_in_class = document.getElementsByClassName(currentclass);
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

function add(){
    
}

function update_meals(){
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