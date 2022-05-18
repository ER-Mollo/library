

    
    const form = document.getElementById("form");
    const myForm = document.getElementById("myForm"); 
    const fname = document.getElementById("fname");
    const last = document.getElementById("last");
    const cell = document.getElementById("cell");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const conf = document.getElementById("conf");
    const img = document.getElementById("img");

    //check errors for registration
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorCheck();
    });

    
    /////////////////////////////////////////registration section ///////////////////////////////////////////////////////////////////////

    function errorCheck(){
        
        //validating values
        const fnameV = fname.value.trim();
        const lastV = last.value.trim();
        const cellV = cell.value.trim();
        const emailV = email.value.trim();
        const passV = pass.value.trim();
        const confV = conf.value.trim();
        const imgV = img.value.trim();

        
         if (fnameV == ""){
            setError(fname,"please enter your firstname");
         }else if(lastV == ""){
            setError(last,"please enter your last name");
         }else if(cellV == ""){
            setError(cell,"please enter your cell number");
         }else if(!cellV.match(/^\d+/)){
            setError(cell,"please enter valid nummber");
         }else if(emailV == ""){
            setError(email,"please enter your firstname");
        }else if(passV == ""){
            setError(pass,"please enter your firstname");
        }else if(confV == ""){
            setError(conf,"please enter your firstname");
        }else if(imgV == ""){
            setError(img,"please enter your firstname")
         }else{
             successFunction(fname,last,cell,email,pass,conf,img);
         }
        }

    function setError(element, message){
        let control = element.parentElement;
        if(control.classList.contains('success')){
            control.classList.remove('success');
        }
        control.classList.add('error');
        const small = control.querySelector('small');
        small.textContent = message;
        //control.classList.remove('error');
    
    
    }
    function successFunction(e1,e2,e3,e4,e5,e6,e7){
        const c1 = e1.parentElement;
        const c2 = e2.parentElement;
        const c3 = e3.parentElement;
        const c4 = e4.parentElement;
        const c5 = e5.parentElement;
        const c6 = e6.parentElement;
        const c7 = e7.parentElement;

        //check if the class list of elements contain errors
        if(c1.classList.contains('error')){
            //control.classList.remove('error');
            c1.classList.remove('error');
        }else if(c2.classList.contains('error')){
            c2.classList.remove('error');
        }else if(c3.classList.contains('error')){
            c3.classList.remove('error');
        }else if(c4.classList.contains('error')){
            c4.classList.remove('error');
        }else if(c5.classList.contains('error')){
            c5.classList.remove('error');
        }else if(c6.classList.contains('error')){
            c6.classList.remove('error');
        }else if(c7.classList.contains('error')){
            c7.classList.remove('error');
            

        }else{
            //after validating move to save functio
            save();
            
    }}


function save(){

    class users {
        constructor(_name, last, cell, email, pass, conf, img) {
            this.name = _name;
            this.last = last;
            this.cell = cell;
            this.email = email;
            this.pass = pass;
            this.conf = conf;
            this.img = img;
        }

      
    }
    const fname = document.getElementById("fname").value;
    const last = document.getElementById("last").value;
    const cell = document.getElementById("cell").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const conf = document.getElementById("conf").value;
    const img = document.getElementById("img").value;

    let user = new users(
        fname,
        last,
        cell,
        email,
        pass,
        conf,
        img,
    );

    let people = [];

    people.push(user);

    localStorage.setItem("users", JSON.stringify(people));
    alert("successfully registered");
    window.location.href ="index.html";



    

    // const fname = form['fname'];
    // const last = form['last'];
    // const cell = form['cell'];
    // const email = form['email'];
    // const pass = form['pass'];
    // const conf = form['conf'];
    // const img = form['img'];
    

    // //create the key for the item
    // const items = JSON.parse(localStorage.getItem('items')) || [];
    
    // //function to push arras into the local storage
    // const add = (fname, last, cell, email, pass, conf, img) => {
    //     items.push({
    //       fname,
    //       last,
    //       cell,
    //       email,
    //       pass,
    //       conf,
    //       img,
    //     });
        
    //     localStorage.setItem("items", JSON.stringify(items));
      
    //     //return { fname, last, cell, email, pass, conf, img};
    //   };
     
    //   //input values
    // //   form.onsubmit = e => {
    // //     e.preventDefault();

    //     add (fname.value, last.value, cell.value ,email.value, pass.value, conf.value, img.value);
           
    // // }
     

}
  


