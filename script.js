function onoff(id){
    currentvalue = document.getElementById(id).style.backgroundColor;
    if(currentvalue == "rgb(5, 74, 41)" || currentvalue == ""){
        document.getElementById(id).style.backgroundColor = "#33A1FD";
    }else{
        document.getElementById(id).style.backgroundColor = "#054A29";
    }
}