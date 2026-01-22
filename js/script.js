
// woledis will serve as the variable that takes, store and process the inputs
var woledis = document.getElementById('showme');

// i used the value parameter to replace the values in the html buttons append()
function append(value){
 woledis.value +=value;
}

// This function here will reduce and delete input showing in the text from the back

function deletedisplay(){
    woledis.value = woledis.value.slice(0, -1);
}


// This function here will clear the input in the text at once
function cleardisplay(){
    woledis.value = "";
}


// This function will compute and process the input values using eval() to evaluate and executes the codes.

function calculate(){
    try {
        woledis.value = eval(woledis.value);
    }
    
    // why i used catch is to check if there are Error like string in the value, if there is an error it will return Error in the text output.
    catch {
woledis.value = " Error";
    }
}
    
    



// this eventlistener code will work and interact with the keyboard of devices , while using (e) as the keyboard event

document.addEventListener ("keydown", function (e)
{
    // This is to check if the numbers and operators exist while using (e.key) to return the value of the key pressed
    if ("1234567890-+*/.$%".includes(e.key)){
        // if it is true and any of the numbers and operators exist when clicked , it will append it to the keyboardevent (e.key)
        append(e.key);
    }

    // if the keyboard event that the users clicked on the device is (Enter) it will calculate and compute the inputed values using the calculate().

    else if (e.key === "Enter"){
        calculate();
 
    }
    // if the keyboard event that the users clicked on the device is (Backspace) it will reduce and delete the inputed values with help of the deletedisplay().

    else if (e.key === "Backspace"){
        deletedisplay();
    }
    // if the keyboard event that the users clicked on the device is (Esc) it will clear the inputed values using the cleardisplay().

    else if (e.key === "Escape"){
        cleardisplay();
    }


    
    
})