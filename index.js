const terminal = document.getElementById("terminal");

terminal.innerHTML = `
<div class="section" id="about">
  <p class="command">$ whoami</p>
  <div class="output">
    <h2>Ganesh Devkota</h2>
    <p>Full Stack Developer | JavaScript | React | Node.js</p>
  </div>
</div>

<div class="section" id="skills">
  <p class="command">$ skills</p>
  <div class="output">
    HTML, CSS, JavaScript, React, Node.js, MongoDB
  </div>
</div>

<div class="section" id="projects">
  <p class="command">$ projects</p>
  <div class="project-card">
    <h3>SmartBasai</h3>
    <p>Rental Housing Management Platform for Nepal.</p>
  </div>
</div>

<div class="section" id="contact">
  <p class="command">$ contact</p>
  <div class="output">
    Email: ganesh@example.com
  </div>
</div>
`;

const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("show");
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
  menuDropdown.classList.remove("show");
}
