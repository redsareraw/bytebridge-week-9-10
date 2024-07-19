function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = document.getElementById('phoneNumber').value;

    document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
    document.getElementById('ageID').innerHTML = "Age: " + age;
    document.getElementById('phoneNumberID').innerHTML = "Phone Number: " + phoneNumber;
    document.getElementById('addressID').innerHTML = "Address: " + address;
};


