var meals = [['Wieswurst','short','pork'],
['Spagetti','medium','beef'],
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
['Lasagne','long','beef'],
['Steak','medium','beef'],
['Roast Beef','long','beef'],
['Chicken Wraps','medium','chicken'],
['Butter Chicken Noodles','medium','chicken'],
['Mummy Surprise','medium','chicken'],
['Meatloaf','long','beef'],
['Hamburgers','short','beef'],
['Ribs','medium','pork']]

var searchCriteria = []
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
    if(currentvalue == "rgb(5, 74, 41)" || currentvalue == ""){
        document.getElementById(id).style.backgroundColor = "#33A1FD";
    }else{
        document.getElementById(id).style.backgroundColor = "#054A29";
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
}
