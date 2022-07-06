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

    document.querySelector('#button3').addEventListener('click', function() {

        let a3;
        let b3;

        a3 = parseFloat(document.querySelector('#a3').value) ;
        b3 = parseFloat(document.querySelector('#b3').value) ;



        for(let i=a3; i<=b3; i++ ) {
            if(i%5==0 && i!=0) {
                document.querySelector(".is5").innerHTML += i + " ";
            }
        
        }
    });

    document.querySelector('#button4').addEventListener('click', function() {

        let rastimax, valgomi;

        valgomi=1;

        rastimax = parseFloat(document.querySelector('#rastimax').value) ;
        
        for(let i=1; valgomi<=rastimax; i++) {
            
            valgomi+=i;

            document.getElementsByName('dienos')[0].placeholder = "Per " + i;
        
        }
    });
// tik kaip sudeti i viena masyva
    document.querySelector('#button5').addEventListener('click', function() {

        let masyvas =[];
        let info;

        info = document.querySelector('#info').value ;
 
        masyvas.push(info);

        document.querySelector(".masyvas").innerHTML = masyvas;
        console.log(masyvas);
    });

    document.querySelector('#button6').addEventListener('click', function() {

        let sk;
        let x;
        let y;
        let vienazenklis;
        let masyvas1=[];
        let paskutinisElementas;
        let laikinasKint;

        sk = parseFloat(document.querySelector('#sk').value) ;

        for(let k=0, i=0; k<i, i<sk.toString().length; k++, i++) {
            x=k;
            y=k+1;
            vienazenklis = String(sk).slice(x, y);
            // masyvas1.unshift(vienazenklis);
            masyvas1.push(vienazenklis);
        }

        masyvas1.reverse();

        document.querySelector(".masyvas1").innerHTML = masyvas1;
    });

    document.querySelector('#button7').addEventListener('click', function() {

        let a4;
        let b4;
        let masyvas10=[], masyvas20=[], masyvas30=[];

        a4 = parseFloat(document.querySelector('#a4').value) ;
        b4 = parseFloat(document.querySelector('#b4').value) ;

        for(let i=a4; i<=b4; i++ ) {
            if(i%2==0 && i!=0) {

                if(i%5==0) {
                    masyvas10.push(i);
                    masyvas30.push(i);
                } else {

                    masyvas10.push(i);
                }
    
                } else if(i%2==1 || i%2==-1 && i!=0) {

                if(i%5==0) {
                    masyvas20.push(i);
                    masyvas30.push(i);
                } else {

                    masyvas20.push(i);
                }
            }
        }
        document.querySelector(".masyvas10").innerHTML ="Lyginiai: " + masyvas10;
        document.querySelector(".masyvas20").innerHTML ="Nelyginiai: " + masyvas20;
        document.querySelector(".masyvas30").innerHTML ="Dalinasi iš 5: " + masyvas30;
        
    });

}