

function validation(){
    var collageName = document.getElementById("collage_name").value;
    var collageCode = document.getElementById("code").value;
    var collageType = document.getElementById("collages_type").value;
    var collageCity = document.getElementById("city").value;

    if (collageName == ""){
        document.getElementById("collageName1").innerHTML = "Please Enter the Collage Name";
        
    return false; 
    }
    if(collageCode == ""){
        document.getElementById("collageCode1").innerHTML = "Please Enter the Collage Code";
        console.log("hello")
    return false; 
    }
    
    if (collageType == ""){
        document.getElementById("collageType1").innerHTML = "Please Enter the Collage Type";
    return false;
    }

    if (collageCity == ""){
        document.getElementById("collageCity1").innerHTML = "Please Enter the Collage City";
    return false;
    }

} 
