function checkAge() {
    const img = document.querySelector('.img');
    const le = document.querySelector('.me');
    let inputAge = document.getElementById("ageInput").value;
    let correctAge = 61;
    let Age = 1;
     message = "";

    if (inputAge == correctAge) {
    } else if (inputAge < correctAge) {
        message = "Katta roq son kiriting";
        img.src = 'tom-cruise-kid.jpeg';
        le.classList.add('mes')
        le.classList.remove('mess')
        le.classList.remove('messi')

    } else {
        message = "Kichik roq son kiriting";
        img.src = 'tom-cruise-old.jpeg'
        le.classList.add('mess')
        le.classList.remove('mes')
        le.classList.remove('messi')
    }
    if(inputAge==correctAge){
        message = 'topdingiz';
        img.src = 'good.jpeg'
        le.classList.add('messi')
        le.classList.remove('mes')
        le.classList.remove('mess')
    } else if(Age>inputAge){
        img.src = 'wag-finger-baby.gif'
        message = 'aldamang'
    }
     document.getElementById("message").textContent = message;

}