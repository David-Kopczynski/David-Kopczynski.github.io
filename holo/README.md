from codepen https://codepen.io/johnlouie04/pen/NeJBwO

HTML

<!-- outside -->
<div class="card"></div>
<div class="holo"></div>

CSS
html {
background-color: #000;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}

$holo-color: #00FCFC;
$width: 150px;
$height: 5px;

.card {
// when holo effect is inside of you parent class
position: relative;
//
width: 200px;
height: 170px;
margin-top: 70px;
background-image: url(http://pngimg.com/uploads/gun/gun_PNG1367.png);
background-size: contain;
background-repeat: no-repeat;
animation: float 1s infinite alternate;

// apply this style if you want to put your holo inside
.holo {
position: absolute;
bottom: 0;
}
}

.holo {
position: relative;
z-index: 2;
// apply this style if you want to put your holo inside
// position: absolute;
// bottom: 0;
//
width: $width;
 height: $height;
 margin: -5px auto 0;
 background-color: rgba($holo-color, .35);
border-radius: 100%;
filter: blur(2.5px);
transform: perspective(100px) rotateX(-30deg);
transform-style: preserve-3d;
animation: holographic 1.5s infinite alternate;
backface-visibility: hidden;

&:after {
position: absolute;
left: -10px;
right: -10px;
content: "";
height: 10px;
background-color: rgba($holo-color, .5);
border-radius: 100%;
filter: blur(2.5px);
}

- .holo {
  animation-duration: .75s;
  opacity: .5;
  }
  }

@keyframes float {
from {
will-change: unset;
transform: translateY(-10px)
} to {
will-change: transform;
transform: translateY(-30px)
}
}

@keyframes holographic {
from {
will-change: box-shadow;
box-shadow:
0 -75px 5px rgba($holo-color, .15),
  0 -1px 2px rgba($holo-color, .5),
0 -45px 5px rgba($holo-color, .15),
  0 -2px 3px rgba($holo-color, .5),
0 -3px 4px rgba($holo-color, .5),
  0 -4px 6px rgba($holo-color, .5),
0 -5px 10px rgba($holo-color, .75),
  0 -7px 20px rgba($holo-color, .75),
0 -10px 30px rgba($holo-color, .75),
  0 -15px 40px rgba($holo-color, .75),
0 -25px 50px rgba($holo-color, .75),
  0 -35px 60px rgba($holo-color, .85),
0 -45px 70px rgba($holo-color, .95),
  0 -65px 80px rgba($holo-color, 1),
0 -75px 90px rgba($holo-color, 1),
  ;
 } to {
  will-change: unset;
  box-shadow:
  0 -1px 5px rgba($holo-color, .15),
0 -1px 2px rgba($holo-color, .5),
  0 -1px 5px rgba($holo-color, .15),
0 -2px 3px rgba($holo-color, .5),
  0 -3px 4px rgba($holo-color, .5),
0 -4px 6px rgba($holo-color, .5),
  0 -5px 7px rgba($holo-color, .75),
0 -7px 10px rgba($holo-color, .75),
  0 -10px 15px rgba($holo-color, .75),
0 -15px 20px rgba($holo-color, .75),
  0 -25px 25px rgba($holo-color, .75),
0 -35px 30px rgba($holo-color, .85),
  0 -45px 35px rgba($holo-color, .95),
0 -65px 40px rgba($holo-color, 1),
  0 -75px 50px rgba($holo-color, 1),
;
}
}
