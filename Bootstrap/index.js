function checkId(){
    let id = Math.random();
    let randomId = alert(`please copy out number ${id}`);
    
    userName = prompt("Enter username");
    password = prompt("Enter password");
    
    if(password.length === 8){
        randomId2 = +prompt("Enter random Id");
     if (id === randomId2){
         alert("Successful")
     }
     else{
         alert('start again');
         checkId()
     }
    }
    // else if(password.length < 8 || password.length > 8){
    //     alert("Start again");
    //     checkId()
    // }
    
    
     else{
         alert('start again');
         checkId()
     }
    }
     checkId();
    