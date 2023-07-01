
//gets values from fname, lname, and zip. It concatenates fname + lname
    function validate() {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var zip = document.getElementById("zip").value;
        var concat = fname +""+ lname;
    //checks if zip is 5 digits, if not it alerts that it is not valid
    if (zip.length !== 5) {
        alert("Zip code must be 5 digits");
    //if ip is 5 digits, it alerts that it is valid    
    } else {
        alert("Zip code is valid");
    }
//checks whether or not the first and last name are less than 20 characters, alerts user on either condition
    if (concat.length > 20) {
        alert("First and last name must be at least 20 characters");
    } else {
        alert("First and last name are valid");
        if (concat.length <= 20 && zip.length === 5) {
            document.getElementById("result").innerHTML = "Golf Oscar Oscar Delta Tango Oscar Golf Oscar";
           
        }
    }
}