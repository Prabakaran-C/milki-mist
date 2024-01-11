const myslider = document.querySelectorAll('.myslider'),
    dot =document.querySelectorAll('.dot');

    let counter =1;
    slidefun(counter);

    let timer =setInterval(autoslide, 8500);
    function autoslide (){
        counter +=1;
        slidefun(counter);
    }
    function plusSlider(n){
        counter +=n;
        slidefun(counter);
        resetTimer();
    }

    function currentslider(n){
        counter =n;
        slidefun(counter);
        resetTimer();
    }

    function resetTimer ()
    {
        clearInterval(timer);
        timer =setInterval(autoslide, 8500);
    }
    function slidefun(n){
        let i;
        for(i=0;i<myslider.length;i++){
            myslider[i].style.display="none";
        }
        for(i=0;i<dot.length;i++){
            dot[i].classList.remove('active');
        }
        if(n > myslider.length)
        {
            counter=1;
        }
        if(n<1)
        {
            counter=myslider.length;
        }
        myslider[counter-1].style.display="block";
        dot[counter -1 ].classList.add('active');
    }


    