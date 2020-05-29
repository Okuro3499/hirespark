//Global arrays for customers and equipment
var customers = [];
var equipment = [];

// order object
function customer(firstName, lastName, email, password, postalAddress, county, city, optEmail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.postalAddress = postalAddress;
    this.county = county;
    this.city = city;
    this.optEmail = optEmail;
}

//equipment object

$(document).ready(function (e) {

    //Retrieve values from UI
    $("#registerUser").click(function (event) {
        event.preventDefault();
        var firstName = $("#inputFirstName").val();
        var lastName = $("#inputLastName").val();
        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();
        var postalAddress = $("#inputPostalAddress").val();
        var county = $("#inputCounty").val();
        var city = $("#inputCity").val();
        var optEmail = $("#inputOptEmail").val();

        console.log(city);
    
        //Create user
        var userCustomer = new customer(firstName, lastName, email, password, postalAddress, county, city, optEmail);
        
        //Create customer string for rental only
        customerString = "Name: " + firstName + ", " + lastName;
        console.log(customerString);

        //Push customer to customers array
        customers.push(customerString);
        //Debug - print customers array
        console.log(customers);
        //push customers into select drop down in Hire form
        var sel = $("#customerName");
        console.log(sel)
        for(var i = 0; i < customers.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = customers[i];
        opt.value = customers[i];
        sel.appendChild(opt);
}
    });

    $("#showHire").click(function (event) {
        event.preventDefault();
        //show the pop up form
        document.getElementById("myForm").style.display = "block";
    });

});
