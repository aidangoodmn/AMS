let toggleMENUstatus = false;

function toggleMENU() {

if (toggleMENUstatus === false) {
    document.getElementById("MENU_CONTENT").style.width = "33.3333%";
    document.getElementById("MENU_CONTENT").style.borderRightStyle = "solid";
    
    toggleMENUstatus = true;
}

else if (toggleMENUstatus === true){
    document.getElementById("MENU_CONTENT").style.width = "0px";
    document.getElementById("MENU_CONTENT").style.borderRightStyle = "none";
    toggleMENUstatus = false;
}
 
}

