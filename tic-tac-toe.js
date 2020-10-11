window.addEventListener('load',function(){
    var xOro=false;
    var xcount=0;
    var ocount=0;
    var showboard= document.querySelectorAll('body #board div');
    for(let i=0;i<showboard.length;i++){
        showboard[i].classList.add('square');
        //showboard[i].classList.add('');
        //showboard[i].classList.add('square.O');
    }

    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('click', marksqr);
    }
    
    function marksqr(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if(xOro==false && arrayofsquares[indexes].innerHTML==""){
            arrayofsquares[indexes].innerHTML="O";
            arrayofsquares[indexes].classList.toggle("hover");
                //alert(xOro);
            xOro=true
                /*ocount++;
                if (ocount>=3){
                    if (
                }*/
        }
        else if(xOro==true && arrayofsquares[indexes].innerHTML=="" ){
                arrayofsquares[indexes].innerHTML="X";
                arrayofsquares[indexes].classList.toggle("hover");
                //alert(xOro);
                xOro=false;
                xcount++;
        }

    }

    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('mouseover', hovering);
    }

    function hovering(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if (arrayofsquares[indexes].innerHTML==""){
            arrayofsquares[indexes].classList.toggle("hover",true);
        }
    }
    
    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('mouseout', msout);
    }

    function msout(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if (arrayofsquares[indexes].innerHTML==""){
            arrayofsquares[indexes].classList.toggle("hover");
        }
    }

    
        
    function checkwin(){
        var combo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
        var win=false;
        var arrayofsquares=Array.from(showboard);
        for(i=0;i<combo.length;i++){
            var xwin=0;
            var owin=0;
            for(x=0;x<i.length;x++){
                if (arrayofsquares[i].innerHTML=="X"){
                    xwin++;
                }
                else if(arrayofsquares[i].innerHTML=="O"){
                    owin++;
                }
            }
            if (xwin==3){
                win=true;
                return "xwin";
            }
            else if(owin==3){
                win=true;
                return "owin";
            }
        }
        return "none";
    }




});
