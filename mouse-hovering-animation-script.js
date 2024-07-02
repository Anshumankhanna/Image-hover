let elems = document.querySelectorAll(".elem");

elems
    .forEach((val) => {
        let yAxis = val.offsetTop;
        let height = val.offsetHeight;
        
        console.log(yAxis, height);

        val.addEventListener("mouseenter", function () {
            val.childNodes[3].style.opacity = "1";
        });
        val.addEventListener("mousemove", function (dets) {
            let yVal = dets.y - yAxis >= 0? dets.y - yAxis <= height? dets.y - yAxis : height : 0;

            val.childNodes[3].style.top = `${yVal}px`;
            val.childNodes[3].style.left = `${dets.x}px`;
        });
        val.addEventListener("mouseleave", function () {
            val.childNodes[3].style.opacity = "0";
        });
    });
