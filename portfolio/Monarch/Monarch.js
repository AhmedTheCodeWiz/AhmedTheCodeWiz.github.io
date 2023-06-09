const frame = document.getElementById("mainFrame");
const noir = document.getElementById("noir");
const whiteOut = document.getElementById("whiteOut");
const terminal = document.getElementById("terminal");
const lifeBlood = document.getElementById("lifeBlood");

const monarchTopLeft = document.getElementById("topLeftWing");
const monarchTopRight = document.getElementById("topRightWing");
const monarchBottomLeft = document.getElementById("bottomLeftWing");
const monarchBottomRight = document.getElementById("bottomRightWing");

const myName = document.getElementById("myName");
const myTitle = document.getElementById("myTitle");
const myList = document.getElementById("myList");
const myPage = document.getElementById("here");

var theme;

// noir = black background and white accent
// whiteOut = white background and black accent
// terminal = black background dark green accent (outlines)
// lifeBlood = black background light blue accent
// 5 = vhs?

//checks theme colors
window.onload = function(){
  setTheme();
};

lifeBlood.addEventListener("click", function(){
  localStorage.setItem("theme", "lifeBlood");

  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "#538eac";
  myTitle.style.color = "#538eac";
  myTitle.textContent = "Devolper, Designer, Editor & Author";
  myList.style.color = "#0d0d0d";
  myPage.style.color = "#0d0d0d";
  frame.style.borderColor = "#538eac";

  monarchTopLeft.style.backgroundColor = "#538eac";
  monarchTopRight.style.backgroundColor = "#538eac";
  monarchBottomLeft.style.backgroundColor = "#538eac";
  monarchBottomRight.style.backgroundColor = "#538eac";

  monarchTopLeft.style.borderColor = "#538eac";
  monarchTopRight.style.borderColor = "#538eac";
  monarchBottomLeft.style.borderColor = "#538eac";
  monarchBottomRight.style.borderColor = "#538eac";
  });
  
terminal.addEventListener("click", function(){
  localStorage.setItem("theme", "terminal");

  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "Gideon";
  myName.style.color = "#20C20E";
  myTitle.style.color = "#20C20E";
  myTitle.textContent = "Devolper, Designer, Editor & Author";
  myList.style.color = "#20C20E";
  myPage.style.color = "#20C20E";
  frame.style.borderColor = "#20C20E";

  monarchTopLeft.style.backgroundColor = "#0d0d0d";
  monarchTopRight.style.backgroundColor = "#0d0d0d";
  monarchBottomLeft.style.backgroundColor = "#0d0d0d";
  monarchBottomRight.style.backgroundColor = "#0d0d0d";

  monarchTopLeft.style.borderColor = "#20C20E";
  monarchTopRight.style.borderColor = "#20C20E";
  monarchBottomLeft.style.borderColor = "#20C20E";
  monarchBottomRight.style.borderColor = "#20C20E";
  });

whiteOut.addEventListener("click", function(){
  localStorage.setItem("theme", "whiteOut");

  document.body.style.backgroundColor = 'white';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "#0d0d0d";
  myTitle.style.color = "#0d0d0d";
  myList.style.color = "#0d0d0d";
  myPage.style.color = "#0d0d0d";
  frame.style.borderColor = "#0d0d0d";

  monarchTopLeft.style.backgroundColor = "white";
  monarchTopRight.style.backgroundColor = "white";
  monarchBottomLeft.style.backgroundColor = "white";
  monarchBottomRight.style.backgroundColor = "white";

  monarchTopLeft.style.borderColor = "#0d0d0d";
  monarchTopRight.style.borderColor = "#0d0d0d";
  monarchBottomLeft.style.borderColor = "#0d0d0d";
  monarchBottomRight.style.borderColor = "#0d0d0d";
  });

noir.addEventListener("click", function(){
  localStorage.setItem("theme", "noir");

  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "white";
  myTitle.style.color = "white";
  myList.style.color = "white";
  myPage.style.color = "white";
  frame.style.borderColor = "white";

  monarchTopLeft.style.backgroundColor = "#0d0d0d";
  monarchTopRight.style.backgroundColor = "#0d0d0d";
  monarchBottomLeft.style.backgroundColor = "#0d0d0d";
  monarchBottomRight.style.backgroundColor = "#0d0d0d";

  monarchTopLeft.style.borderColor = "white";
  monarchTopRight.style.borderColor = "white";
  monarchBottomLeft.style.borderColor = "white";
  monarchBottomRight.style.borderColor = "white";
  });


function setTheme(){
  if (localStorage.getItem("theme") == "whiteOut"){
  
  document.body.style.backgroundColor = 'white';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "#0d0d0d";
  myTitle.style.color = "#0d0d0d";
  myList.style.color = "#0d0d0d";
  frame.style.borderColor = "#0d0d0d";

  monarchTopLeft.style.backgroundColor = "white";
  monarchTopRight.style.backgroundColor = "white";

  monarchTopLeft.style.borderColor = "#0d0d0d";
  monarchTopRight.style.borderColor = "#0d0d0d";
  monarchBottomLeft.style.borderColor = "#0d0d0d";
  monarchBottomRight.style.borderColor = "#0d0d0d";
    
  } else if(localStorage.getItem("theme") == "noir"){
  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "white";
  myTitle.style.color = "white";
  myList.style.color = "white";
  frame.style.borderColor = "white";

  monarchTopLeft.style.backgroundColor = "#0d0d0d";
  monarchTopRight.style.backgroundColor = "#0d0d0d";

  monarchTopLeft.style.borderColor = "white";
  monarchTopRight.style.borderColor = "white";
  monarchBottomLeft.style.borderColor = "white";
  monarchBottomRight.style.borderColor = "white";
  } else if(localStorage.getItem("theme") == "terminal"){
  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "Gideon";
  myName.style.color = "#20C20E";
  myTitle.style.color = "#20C20E";
  myList.style.color = "#20C20E";
  frame.style.borderColor = "#20C20E";

  monarchTopLeft.style.backgroundColor = "#0d0d0d";
  monarchTopRight.style.backgroundColor = "#0d0d0d";

  monarchTopLeft.style.borderColor = "#20C20E";
  monarchTopRight.style.borderColor = "#20C20E";
  monarchBottomLeft.style.borderColor = "#20C20E";
  monarchBottomRight.style.borderColor = "#20C20E";
  } else if(localStorage.getItem("theme") == "lifeBlood"){
  document.body.style.backgroundColor = '#0d0d0d';
  document.body.style.fontFamily = "kayonest";
  myName.style.color = "#538eac";
  myTitle.style.color = "#538eac";
  myTitle.textContent = "Devolper, Designer, Editor & Author";
  myList.style.color = "#0d0d0d";
  myPage.style.color = "#0d0d0d";
  frame.style.borderColor = "#538eac";

  monarchTopLeft.style.backgroundColor = "#538eac";
  monarchTopRight.style.backgroundColor = "#538eac";
  monarchBottomLeft.style.backgroundColor = "#538eac";
  monarchBottomRight.style.backgroundColor = "#538eac";

  monarchTopLeft.style.borderColor = "#538eac";
  monarchTopRight.style.borderColor = "#538eac";
  monarchBottomLeft.style.borderColor = "#538eac";
  monarchBottomRight.style.borderColor = "#538eac";
  };

}

addEventListener("mousemove", (event) => {
});

document.getElementById('about').addEventListener('click', function() {
  location.href = 'about.html';
}, false);
//__________________________FOG______________________________________________________________________________

(function () {
  'use strict';
  window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return false;
    }

    /********************
      Random Number
    ********************/

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /********************
      Var
    ********************/

    // canvas 
    var ctx = canvas.getContext('2d');
    var X = canvas.width = 273;
    var Y = canvas.height = 250;

    /********************
      Animation
    ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };
    
    /********************
      Cloud
    ********************/
    
    var cloudNum = 200;
    var clouds = [];
    var radiusMin = 150;
    var radiusMax = 300;

    if (X < 768) {
      cloudNum = 100;
      radiusMin = 100;
      radiusMax = 150;
    }

    function Cloud(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }

    Cloud.prototype.init = function(x, y) {
      this.x = x;
      this.y = y;
      this.r = rand(radiusMin, radiusMax);
      this.l = rand(50, 100);
      this.v = {
        x: rand(-2, 2) * Math.random(),
        y: rand(-2, 2) * Math.random()
      };
      this.c = {
        r: rand(0, 255),
        g: rand(0, 255),
        b: rand(0, 255),
        a: 1
      };
    };
    
    Cloud.prototype.wrapPosition = function() {
      if (this.x + this.r < 0) {
        this.x = X + this.r;
      }
      if (this.x - this.r > X) {
        this.x = 0 - this.r;
      }
      if (this.y + this.r < 0) {
        this.y = Y + this.r;
      }
      if (this.y - this.r > Y) {
        this.y = 0 - this.r;
      }
    };
     
    Cloud.prototype.updatePosition = function() {
      this.x += this.v.x;
      this.y += this.v.y;
    };
    
    Cloud.prototype.updateParams = function() {
      this.l -= 0.1;
      if (this.l < 0) {
        this.v.x = rand(-2, 2) * Math.random();
        this.v.y = rand(-2, 2) * Math.random();
        this.l = rand(50, 100);
      }
    };
    
    Cloud.prototype.resize = function() {
      this.x = rand(0 - 100, X + 100);
      this.y = rand(0 - 100, Y + 100);
    };

    Cloud.prototype.render = function() {
      this.updatePosition();
      this.updateParams();
      this.wrapPosition();
      this.draw();
    };
   
    Cloud.prototype.gradient = function () {
      var col = this.c.r + "," + this.c.g + "," + this.c.b;
      var g = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, "rgba(" + col + ", " + (this.c.a * 1) + ")");
      g.addColorStop(0.5, "rgba(" + col + ", " + (this.c.a * 0.5) + ")");
      g.addColorStop(1, "rgba(" + col + ", " + (this.c.a * 0) + ")");
      return g;
    };
    
    Cloud.prototype.draw = function() {
      ctx.save();
      ctx.beginPath();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = this.gradient();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    for (var i = 0; i < cloudNum; i++) {
      var cloud = new Cloud(ctx, rand(0 -100, X + 100), rand(0 - 100, Y + 100));
      clouds.push(cloud);
    }

    /********************
      Render
    ********************/
    
    function changeColor() {
      var time = rand(1000, 5000);
      var r = rand(0, 255);
      var g = rand(0, 255);
      var b = rand(0, 255);
      if(theme)
      for (var i = 0; i < clouds.length; i++) {
        clouds[i].c  = {
          r: 255,
          g: 255,
          b: 255,
          a: 0.3
        };
      }
      setTimeout(changeColor, time);
    }

    changeColor();
    
    /********************
      Render
    ********************/
    
    function render(){
      ctx.clearRect(0, 0, X, Y);
      for (var i = 0; i < clouds.length; i++) {
        clouds[i].render();
      }
      requestAnimationFrame(render);
    }

    render();

    /********************
      Event
    ********************/
    
    // resize
    function onResize() {
      X = canvas.width = 10;
      Y = canvas.height = 10;
      cloudNum = 1;
      for (var i = 0; i < clouds.length; i++) {
        clouds[i].resize();
      }
    }

    window.addEventListener('resize', function() {
      onResize();
    });
    
  });
})();

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}