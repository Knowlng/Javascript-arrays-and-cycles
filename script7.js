"use strict";

window.onload=function(){
    
    document.querySelector('#button1').addEventListener('click', function() {

        let a;
        let b;

        a = parseFloat(document.querySelector('#a').value) ;
        b = parseFloat(document.querySelector('#b').value) ;

        for(let i=a; i<=b; i++ ) {
            if(i%2==0 && i!=0) {
                document.querySelector(".lyginiai").innerHTML += i + " ";
            }
        
        }
    });

    document.querySelector('#button2').addEventListener('click', function() {

        let a2;
        let b2;

        a2 = parseFloat(document.querySelector('#a2').value) ;
        b2 = parseFloat(document.querySelector('#b2').value) ;
        for(let i=a2; i<=b2; i++ ) {
            if(i%2==1 || i%2==-1 && i!=0) {
                document.querySelector(".nelyginiai").innerHTML += i + " ";
            }
        
        }
    });

}