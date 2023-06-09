const rootStyles = getComputedStyle(document.documentElement);
const rootBefore1 = rootStyles.getPropertyValue('--bg-color-1');
const rootBefore2 = rootStyles.getPropertyValue('--bg-color-2');
const rootBefore3 = rootStyles.getPropertyValue('--bg-color-3');
const audio = document.getElementById("myAudio");
const container = document.querySelector('.container');
var lightMode = "yellow";
var secrets = document.getElementsByClassName("secret")
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

document.addEventListener('mousemove', function(event) {
  var follower = document.getElementById('dot');
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  follower.style.left = mouseX + 'px';
  follower.style.top = mouseY + 'px';
});


document.addEventListener("keydown", function(event) {
  if (event.key == 'u' || event.key == 'U') {
    if (lightMode === "yellow") {
      audio.play();
      document.documentElement.style.setProperty('--bg-color-1', 'rgba(	70, 0, 70, 1)');
      document.documentElement.style.setProperty('--bg-color-2', 'rgba(100, 0, 100, 1)');
      document.documentElement.style.setProperty('--bg-color-3', 'rgba(0, 0, 0, 0.95)');
      for (var i = 0; i < secrets.length; i++) {
        secrets[i].style.color = "rgba(44, 0, 255, 1)";
      }
      
      lightMode = "UV";
    } else if (lightMode === "UV") {
      audio.play();
      document.documentElement.style.setProperty('--bg-color-1', 'rgba(250, 222, 129, 0.7)');
      document.documentElement.style.setProperty('--bg-color-2', 'rgba(250, 222, 129, 0.5)');
      document.documentElement.style.setProperty('--bg-color-3', 'rgba(0, 0, 0, 0.9)');
      for (var i = 0; i < secrets.length; i++) {
        secrets[i].style.color = 'transparent';
      }
      lightMode = "yellow"; // Added this line to change the lightMode back to "yellow"
    }
  }
});
/*___________________________________________________________-*/

// Make the DIV element draggable:
dragElement(document.getElementById("post-it"));
dragElement(document.getElementById("polaroid"));
dragElement(document.getElementById("post-it-hire"));
dragElement(document.getElementById("info-paper"));
dragElement(document.getElementById("resume-paper"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
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

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
var icons = document.querySelectorAll('.icon-container i');

icons.forEach(function(icon) {
  var defaultColor = getComputedStyle(icon).color;

  icon.addEventListener("mouseover", handleMouseOver);
  icon.addEventListener("mouseout", handleMouseOut);

  function handleMouseOver() {
    var hoverColor = icon.getAttribute("data-color");
    icon.style.color = hoverColor;
  }

  function handleMouseOut() {
    icon.style.color = defaultColor;
  }
});

function redirectToLink() {
  window.location.href = 'webscape/webscape.html';
}

/* BOBBING_--__-_____--___--__--_-___---_---___--__-_-_-_--_--___--__-_-(not morse code)*/
const letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  letter.addEventListener('mouseover', animateLetters);
});

function animateLetters(event) {
  const targetIndex = Array.from(letters).indexOf(event.target);

  letters.forEach((letter, index) => {
    if (index <= targetIndex) {
      letter.classList.add('animate');
    } else {
      letter.classList.remove('animate');
    }
  });
}
