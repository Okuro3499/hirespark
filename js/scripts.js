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
    });

});
