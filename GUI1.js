document.body.insertAdjacentHTML('beforeend', `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cheat Menu</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
  font-family: Arial, sans-serif;
  background-color: #1a1a1a;
  color: #f0f0f0;
}

.cheat-menu {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;
  background-color: #2d2d2d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  user-select: none;
  overflow: hidden;
  z-index: 999999;
}

.kainvas {
    position: absolute;
}

.cheat-menu * {
    z-index: 1;
}

.tabs {
  display: flex;
  margin-bottom: 10px;
}

.tab-button {
  padding: 10px 20px;
  background-color: #2d2d2d;
  color: #f0f0f0;
  border: none;
  border-bottom: 2px solid transparent;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, border-bottom-color 0.2s;
}

.tab-button.active {
  background-color: #3d3d3d;
  border-bottom-color: #007bff;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.cheat-category {
  margin-bottom: 20px;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.cheat {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cheat label {
  flex: 1;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  border-radius: 34px;
  background-color: #333;
  transition: background-color 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  border-radius: 50%;
  background-color: #f0f0f0;
  transition: transform 0.2s;
}

input:checked + .slider {
  background-color: #007bff;
}

input:checked + .slider:before {
  transform: translateX(var(--widthInPixels));
}

.reset-button {
  text-align: center;
  margin-top: 20px;
}

.reset-button button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.reset-button button:hover {
  background-color: #0056b3;
}
    
    @keyframes float {
      100% {
        transform: translate(100%, 100%) rotate(360deg);
      }
    }

  </style>
</head>
<body>
  <div class="cheat-menu" style="display: block">
    <canvas class="kainvas"></canvas>
    <div class="tabs">
      <button class="tab-button active" onclick="openTab('tab1')">Main</button>
      <button class="tab-button" onclick="openTab('tab2')">Visuals</button>
      <button class="tab-button" onclick="openTab('tab3')">Misc</button>
    </div>
    <div id="tab1" class="tab-content">
      <h2>Main Content</h2>
      <div class="cheat-category">
        <h3>Tank Movement</h3>
        <div class="cheat">
          <label>Airbreak</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat1')" data-tooltip="Enable Cheat 1">
            <span class="slider"></span>
          </label>
        </div>
        <div class="cheat">
          <label>Anti-aim</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat2')" data-tooltip="Enable Cheat 2">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div class="cheat-category">
        <h3>Auto Tasks</h3>
        <div class="cheat">
          <label>Aimbot</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat3')" data-tooltip="Enable Cheat 3">
            <span class="slider"></span>
          </label>
        </div>
        <div class="cheat">
          <label>Supplies</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat4')" data-tooltip="Enable Cheat 4">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    <div id="tab2" class="tab-content" style="display:none;">
      <h2>Visuals Content</h2>
      <div class="cheat-category">
        <h3>ESP</h3>
        <div class="cheat">
          <label>ESP</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat5')" data-tooltip="Enable Cheat 5">
            <span class="slider"></span>
          </label>
        </div>
        <div class="cheat">
          <label>Tank Health</label>
          <label class="switch">
            <input type="checkbox" onchange="toggleCheat('cheat6')" data-tooltip="Enable Cheat 6">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    <div id="tab3" class="tab-content" style="display:none;">
        <h2>Misc</h2>
        <div class="cheat-category">
          <h3>Design</h3>
          <div class="cheat">
            <label>Show GUI Particles</label>
            <label class="switch">
              <input type="checkbox" checked onchange="toggleCheat('cheat7')" data-tooltip="Enable Cheat 7">
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
  </div>
  <script src="script.js"></script>
  <script>
  </script>
</body>
</html>




`);
let boundingBox;

    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 96) {
        document.querySelector('.cheat-menu').style.display = document.querySelector('.cheat-menu').style.display === 'none' ? 'block' : 'none';
      }
    })
    let bool = true;
    function a() {
  const element = document.querySelector('.slider');

  // Check if the element is visible and has content
  if (element && element.offsetWidth > 0 && element.offsetHeight > 0) {
    const boundingBox = element.getBoundingClientRect();
    const widthInPixels = boundingBox.width;
    console.log(`Width of the element: ${widthInPixels}px`);
    
    // Set CSS variable --widthInPixels for the element
    const adjustedWidth = widthInPixels - 34;
    document.querySelectorAll('.slider').forEach(e => {
      e.style.setProperty('--widthInPixels', `${adjustedWidth}px`);
    })
    console.log(adjustedWidth)
  } else {
    console.log('Element is not visible or has no content.');
  }
}
    function openTab(tabName) {
  const tabContents = document.getElementsByClassName('tab-content');
  for (const content of tabContents) {
    content.classList.remove('active');
  }
  const tabButtons = document.getElementsByClassName('tab-button');
  for (const button of tabButtons) {
    button.classList.remove('active');
  }
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

function toggleCheat(cheatName) {
  const cheatState = event.currentTarget.checked;
  // Implement your cheat logic here
  console.log(`${cheatName} is ${cheatState ? 'activated' : 'deactivated'}`);
}

// Previous JavaScript code remains the same. Add the following functions:

function resetCheats() {
  const cheatToggles = document.querySelectorAll('.switch input[type="checkbox"]');
  for (const toggle of cheatToggles) {
    toggle.checked = false;
    const cheatName = toggle.getAttribute('onchange').replace('toggleCheat(\'', '').replace('\')', '');
    // Implement your reset cheat logic here
    console.log(`${cheatName} is deactivated`);
  }
}

// Previous JavaScript code remains the same. Add the following functions:


function openTab(tabName) {
  const targetTab = document.getElementById(tabName);
  const isCurrentlyOpen = targetTab.style.display === 'block';

  // Check if the target tab is already open, if so, close it
  if (isCurrentlyOpen) {
    targetTab.style.display = 'none';
    event.currentTarget.classList.remove('active');
    document.querySelector('.kainvas').style.display = 'none';
    return; // Exit the function early to avoid opening the tab again
  }

  // If the tab is not open, follow the rest of the existing logic
  const tabContents = document.getElementsByClassName('tab-content');
  for (const content of tabContents) {
    content.style.display = 'none';
  }

  const tabButtons = document.getElementsByClassName('tab-button');
  for (const button of tabButtons) {
    button.classList.remove('active');
  }

  document.querySelector('.kainvas').style.display = 'block';
  targetTab.style.display = 'block';
  event.currentTarget.classList.add('active');
  if (bool) {
     a();
     bool = false;
     boundingBox = document.querySelector('.cheat-menu').getBoundingClientRect();
     document.querySelector('.kainvas').width = boundingBox.width;
     document.querySelector('.kainvas').height = boundingBox.height;console.log(boundingBox);
     document.querySelector('.kainvas').style.left = boundingBox.left;
     document.querySelector('.kainvas').style.top = boundingBox.top;
     let mouse = {
        x: undefined,
        y: undefined
    }

    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    })

    
        const canvas = document.querySelector('.kainvas');
        const ctx = canvas.getContext('2d');

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.ix = x;
                this.iy = y;
                this.directionX = 1;
                this.directionY = 1;
            }
            draw() {
                ctx.beginPath();
                ctx.fillStyle = 'transparent';
                ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            update() {
                /*const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    if (this.x < mouse.x) {
                        this.x++;
                    }
                    if (this.x > mouse.x) {
                        this.x--;
                    }
                    if (this.y < mouse.y) {
                        this.y++;
                    }
                    if (this.y > mouse.y) {
                        this.y--;
                    }
                } else {
                    if (this.x < this.ix) {
                        this.x++;
                    }
                    if (this.x > this.ix) {
                        this.x--;
                    }
                    if (this.y < this.iy) {
                        this.y++;
                    }
                    if (this.y > this.iy) {
                        this.y--;
                    }
                }*/
                this.x += this.directionX;
                this.y += this.directionY;
                if (this.x > canvas.width) {
                    this.directionX = -this.directionX;
                }
                if (this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height) {
                    this.directionY = -this.directionY;
                }
                if (this.y < 0) {
                    this.directionY = -this.directionY;
                }
            }
        }

        let particles = [];

        for (let i=0;i<100;i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            const particle = new Particle(x, y);
            particles.push(particle);
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            requestAnimationFrame(animate);
            particles.forEach(particle => {
                particle.draw();
                particle.update();
            });
            for (let i=0;i< particles.length;i++) {
                for (let j=i+1;j<particles.length;j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 50) {
                        ctx.beginPath();
                        ctx.strokeStyle = `hsl(${particles[i].y}, 100%, 50%)`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        animate();
   } else {
    boundingBox = document.querySelector('.cheat-menu').getBoundingClientRect();
     document.querySelector('.kainvas').width = boundingBox.width;
     document.querySelector('.kainvas').height = boundingBox.height;console.log(boundingBox);
     document.querySelector('.kainvas').style.left = boundingBox.left;
     document.querySelector('.kainvas').style.top = boundingBox.top;
     //return
   }
   
    /*particle('🤣', 100, 50);
    particle('👌', 50, 80);
    particle('🎉', 180, 130);
    particle('💕', 220, 100);
    particle('🎶', 350, 150);
    particle('🚀', 100, 200);
    particle('🌟', 250, 230);
    particle('🍔', 50, 250);
    particle('🌈', 400, 300);
    particle('🌸', 500, 320);
    particle('🐢', 150, 350);
    particle('🍕', 320, 400);
    particle('🐬', 450, 450);
    particle('🌊', 600, 500);
    particle('🔥', 700, 520);
    particle('🎸', 500, 550);
    particle('🚲', 380, 580);
    particle('🌌', 800, 600);
    particle('🦄', 750, 650);
    particle('🍦', 630, 680);*/
}

function toggleCheat(cheatName) {
  const cheatState = event.currentTarget.checked;
  // Implement your cheat logic here
  console.log(`${cheatName} is ${cheatState ? 'activated' : 'deactivated'}`);
  if (cheatName === 'cheat7') {
    if (!cheatState) {
      document.querySelector('.kainvas').style.display = 'none';
    } else {
        document.querySelector('.kainvas').style.display = 'block';
    }
  }
}

function resetCheats() {
  const cheatToggles = document.querySelectorAll('.switch input[type="checkbox"]');
  for (const toggle of cheatToggles) {
    toggle.checked = false;
    const cheatName = toggle.getAttribute('onchange').replace('toggleCheat(\'', '').replace('\')', '');
    // Implement your reset cheat logic here
    console.log(`${cheatName} is deactivated`);
  }
} 

let particleNum = 0;
    
    function particle(particle, left, top) {
      const boundBox = document.querySelector('.cheat-menu').getBoundingClientRect();
      const width = boundBox.width;
      particleNum++;
      const pa = document.createElement('div');
      document.querySelector('.cheat-menu').appendChild(pa);
      const Left = Math.random() * (boundBox.right - boundBox.left) + boundBox.left;
      const Top = Math.random() * (boundBox.height - boundBox.bottom) + boundBox.bottom;
      const Angle = Math.random() * 360;
      document.head.insertAdjacentHTML('beforeend', `
      <style>
        @keyframes float${particleNum} {
            50% {
                left: ${Left}px;
                top: ${Top}px;
                transform: rotate(${Angle}deg);
            }
            100% {
                left: ${left}px;
                top: ${top}px;
            }
        }
      </style>
      `);
      pa.style.cssText = `
      position: absolute;
      font-size: 20px;
      background: transparent;
      animation: float${particleNum} 5s linear infinite;
      top: 0;
      left: ${boundBox.left+left}px;
      top: ${boundBox.top+top}px;
      z-index: .5;
      `;
      pa.textContent = particle;
    }

let io = 0;
const intervalo = setInterval(function() {
    io-=10;
    document.querySelector('.cheat-menu').style.transform = `translateY(${io}px)`;
    const box = document.querySelector('.cheat-menu').getBoundingClientRect();
    if (box.top < 16) {
        clearInterval(intervalo);
        document.querySelector('.cheat-menu').style.transform = `translateY(${io}px`;
    }
}, 100);

let ia = 0;
const intervala = setInterval(function() {
    ia-=10;
    document.querySelector('.cheat-menu').style.transform = `translateX(${ia}px)`;
    const box = document.querySelector('.cheat-menu').getBoundingClientRect();
    if (box.left < 16) {
        clearInterval(intervala);
        document.querySelector('.cheat-menu').style.transform = `translateX(${ia}px`;
    }
}, 100);
