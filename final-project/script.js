function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = document.getElementById('phoneNumber').value;
    var postFullName = document.getElementById('postFullName').innerHTML;
    var postAddress = document.getElementById('address').innerHTML;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;

    const numberArray = [];
    numberArray.push('age');
    numberArray.push('phoneNumber');

    for (const i of numberArray) {
        if (i <= 100) {
            document.getElementById('age').innerHTML = "Age: " + age;
        } else {
            document.getElementById('address').innerHTML = "Phone Nubmer: " + phoneNumber;
        }
    }
};


