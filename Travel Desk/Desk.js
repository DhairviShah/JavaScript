console.log(" In this 'Travel Desk' validation is done using Regular expression");

//geting elements to be validated by id

const Name = document.getElementById("Name");

const Phone = document.getElementById("phone");

let validPhone = false;//It will trigger according to further functions
let validUser = false;//It will trigger according to further functions
$('#failure').hide();//It will trigger according to further functions
$('#success').hide();//It will trigger according to further functions


//console.log(username,phone);

//adding eventListner
Name.addEventListener('blur', ()=>{
    // console.log("triggered");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    // console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        Name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        Name.classList.add('is-invalid');
        validUser = false;
        
    }

});
Phone.addEventListener('blur', ()=>{
    // console.log("tTiggered");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        Phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        Phone.classList.add('is-invalid');
        validPhone = false;
        
    }

});

let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
      // Submit your form here
      if(validUser && validPhone){
       

        // console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
       
        $('#failed').hide();
        $('#success').show();
        
    }
    else{
        let failed = document.getElementById('failed');
        failed.classList.add('show');
        $('#success').hide();
        $('#failed').show();
        }


})
