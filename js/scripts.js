//business Logic
function Setthings(name, initdepo){
    this.name = name;
    this.initdepo = initdepo;
}
Setthings.prototype.computedepo = function(newdepo){
    if(newdepo > 1000000){
        alert("Too much money to deposit");
    }else{
    return this.initdepo += newdepo;}
}
Setthings.prototype.computewithd = function(newdepowith){
    if(newdepowith <500){
        alert("Thats too little to withdraw");
    }else if(newdepowith > this.initdepo){
       alert("Man be serious hakuna pesa. Your account balance is " +this.initdepo+ " and you want to withdraw "+newdepowith);
    }else{
        return this.initdepo -=  newdepowith;
    }
    
}

//User Interface setup
$(document).ready(function(){
    $('form#setup').submit(function(event){
        event.preventDefault();
        var inputtedName = $('input#name').val();
        var innputtedinitDepo = parseInt($('input#initDeposit').val());
        
        var newuser = new Setthings(inputtedName, innputtedinitDepo);
        
       $('#curname').text(newuser.name);
       $('#curBalance').text(newuser.initdepo);
       
        $('form#money').submit(function(event){
               event.preventDefault(); 
            var newdepo = parseInt($('input#deposit').val());
            newuser.computedepo(newdepo);
            $('#curBalance').text(newuser.initdepo);
        });
        $('form#withdraw').submit(function(event){
            event.preventDefault();
            var newdepowith = parseInt($('input#withdraw').val());
            newuser.computewithd(newdepowith);
            $('#curBalance').text(newuser.initdepo);
            
            });
        
        });
    
    });


   