        var items = document.getElementsByClassName('item');
        var goPretBtn = document.getElementById('goPre');
        var goNextBtn = document.getElementById('goNext');
        var points = document.getElementsByClassName("point");

        var index = 0;
        var time = 0;

        var clearActive = function () {
            for (var i = 0; i < items.length; i++) {
                items[i].className = "item";
            }
            for (var i = 0; i < points.length; i++)
                points[i].className = "point";
        }
        var goindex = function () {
            clearActive();
            items[index].className = "item active";
            points[index].className = "point active";
        }
        var goNext = function () {
            if (index<4) {
                index++;
            } else {
                index = 0;
            }
            goindex();
        }
        var goPre = function () {
            if (index == 0) {
                index = 4;
            } else {
                index--;
            }
            goindex();
        }
        goNextBtn.addEventListener('click', function () {
            goNext();
        })
        goPretBtn.addEventListener('click', function () {
            goPre();
        })
        for (var i = 0; i < points.length; i++) {
            points[i].addEventListener("click", function () {
                var pointindex = this.getAttribute('data-index');
                index = pointindex;
                goindex();
                time = 0;
            })
        }
        
        setInterval(function () {
        time++;
        if (time==30){
            goNext();
            time=0;
        } 
    },100)