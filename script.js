function validateForm() {
    let name = document.forms['name_age']['name'].value;
    let age = document.forms['name_age']['age'].value;
    
    if (name == '' || isNaN(age) || age <= 0 || age > 100) {

        alertText = 'Input not valid!';
        document.getElementById('alert').innerHTML = alertText;

        return false;
    }
}