#Image Hover

###AIM: To create an effect on a section of the webpage that whenever mouse hovers over it, an image is seen following the mouse.

###HTML and CSS:
- The most basic part is creating mulitple div sections one below the other **(all of them should have the same class)**.
- Next to each div add an image, set whatever size for it and give `position: absolute;` `opacity: 0;` to make the images appear and disappear.
- Also be sure to add `position: relative;` to the all the div sections, its a good practise which generally doesn't allow images to go out of a div section when given `position: absolute;`.

###JavaScript:
- This is a slightly tricky part.
- First we select all div sections and create an array using `document.querySelectorAll(".class_name")`.
- Let this array be `elems`.

```
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
```

- Here we have run a `forEach()` on our array.
- Then we make sure to get the dimensions in which any image is allowed to be.
- `let yVal = dets.y - yAxis >= 0? dets.y - yAxis <= height? dets.y - yAxis : height : 0;` This line is very necessary as without it images will go out of their div sections into another images div section.
- `val.childNodes[3]` is just a way to select an image inside a `val` which is basically a `div.elem`.

I hope you like it and employ it.
I learnt this from Sheriyans Coding School, they were not able to show how to make the image work on y-axis and only showed a code for x-axis.
I developed the y-axis myself because I'm stubborn.
