alert("hello from js");
var pics =[
    "image/cali.JPG",
    "image/f1.JPG",
    "image/f2.JPG",
    "image/f3.JPG",
    "image/f4.JPG",
    "image/f5.JPG",
    "image/f6.JPG",
    "image/f7.JPG",
    "image/f8.JPG",
    "image/f9.JPG",
    "image/f10.JPG",
    "image/f11.JPG",
    "image/f12.JPG",
    "image/f14.JPG",
    "image/f15.JPG"
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;
btn.addEventListener("click",function(){
    if(i===pics.length-1){
        i =0;
    }
    img.src = pics[i];
    i++;
});

