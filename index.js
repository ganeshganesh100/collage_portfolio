const terminal = document.getElementById('terminal');
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');

// Menu toggle
menuBtn.addEventListener('click', () => {
  menuDropdown.classList.toggle('open');
});

function scrollToSection(id) {
  menuDropdown.classList.remove('open');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Terminal line data
const commands = [
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'whoami',
    output: 'Ganesh Devkota - Full Stack Developer & Designer',
    delay: 100
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'cat about.txt',
    output: `Hi! I'm a passionate developer with 5+ years of experience building beautiful,
functional digital experiences. I specialize in full-stack web development and
design-driven applications. Currently based in Kathmandu, working with clients worldwide.`,
    delay: 800,
    id: 'about'
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'ls -la skills/',
    output: 'Loading skills...',
    delay: 1600
  },
  {
    section: 'Frontend Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    id: 'skills'
  },
  {
    section: 'Backend Development',
    tags: ['Node.js', 'Express', 'MongoDB', 'APIs', 'REST']
  },
  {
    section: 'Tools & Frameworks',
    tags: ['Git', 'Docker', 'Figma', 'Webpack', 'Firebase']
  },
  {
    section: 'Soft Skills',
    tags: ['Problem Solving', 'Communication', 'Collaboration', 'Agile', 'Leadership']
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'ls projects/',
    output: 'Displaying recent projects...',
    delay: 2800,
    id: 'projects'
  },
  {
    type: 'project',
    title: '01_ecommerce_platform',
    desc: 'Full-stack e-commerce with React, Node.js, MongoDB, Stripe integration'
  },
  {
    type: 'project',
    title: '02_design_system',
    desc: 'Reusable component library with 50+ components documented in Storybook'
  },
  {
    type: 'project',
    title: '03_task_manager_app',
    desc: 'Collaborative task management with real-time sync and WebSocket support'
  },
  {
    type: 'project',
    title: '04_analytics_dashboard',
    desc: 'Data visualization platform with real-time updates and API integration'
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'cat experience.log',
    output: 'Work experience timeline:',
    delay: 3600,
    id: 'experience'
  },
  {
    type: 'exp',
    date: '2023 - Present',
    position: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    desc: 'Leading development of enterprise applications, mentoring junior developers'
  },
  {
    type: 'exp',
    date: '2021 - 2023',
    position: 'Full Stack Developer',
    company: 'Creative Digital Agency',
    desc: 'Developed responsive web apps for diverse clients, collaborated with designers'
  },
  {
    type: 'exp',
    date: '2019 - 2021',
    position: 'Junior Frontend Developer',
    company: 'StartUp Hub',
    desc: 'Started professional journey with front-end development using React and JavaScript'
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'contact --info',
    output: 'Getting in touch...',
    delay: 4400,
    id: 'contact'
  },
  {
    type: 'contact',
    email: 'ganesh@example.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com/in/ganesh',
    github: 'https://github.com/ganeshganesh100'
  },
  {
    prompt: 'ganesh@portfolio ~ % ',
    command: 'clear',
    output: '',
    delay: 5200
  }
];

let delay = 0;

function addTerminalLine(cmd) {
  delay += (cmd.delay || 300);

  setTimeout(() => {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    if (cmd.id) {
      line.id = cmd.id;
    }

    if (cmd.section) {
      line.innerHTML = `<div class="section-header">> ${cmd.section}</div>`;
      if (cmd.tags) {
        const tags = document.createElement('div');
        tags.className = 'skill-tags';
        tags.innerHTML = cmd.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
        line.appendChild(tags);
      }
    } else if (cmd.type === 'project') {
      line.innerHTML = `
        <div style="width: 100%;">
          <div class="project-card">
            <div class="project-title">${cmd.title}</div>
            <div class="project-desc">${cmd.desc}</div>
          </div>
        </div>
      `;
    } else if (cmd.type === 'exp') {
      line.innerHTML = `
        <div style="width: 100%;">
          <div class="exp-item">
            <div class="exp-date">[${cmd.date}]</div>
            <div class="exp-position">${cmd.position}</div>
            <div class="exp-company">@ ${cmd.company}</div>
            <div style="color: var(--white); font-size: 13px; margin-top: 4px;">${cmd.desc}</div>
          </div>
        </div>
      `;
    } else if (cmd.type === 'contact') {
      line.innerHTML = `
        <div style="width: 100%;">
          <div style="margin: 12px 0; line-height: 2;">
            <div>📧 Email: <a href="mailto:${cmd.email}" class="contact-link">${cmd.email}</a></div>
            <div>🐦 Twitter: <a href="${cmd.twitter}" target="_blank" class="contact-link">@ganesh</a></div>
            <div>💼 LinkedIn: <a href="${cmd.linkedin}" target="_blank" class="contact-link">ganesh-devkota</a></div>
            <div>💻 GitHub: <a href="${cmd.github}" target="_blank" class="contact-link">ganeshganesh100</a></div>
          </div>
        </div>
      `;
    } else if (cmd.command) {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'prompt';
      promptSpan.textContent = cmd.prompt;

      const commandSpan = document.createElement('span');
      commandSpan.className = 'command';
      commandSpan.textContent = cmd.command;

      line.appendChild(promptSpan);
      line.appendChild(commandSpan);

      if (cmd.output) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output success';
        outputDiv.style.marginTop = '8px';
        outputDiv.textContent = cmd.output;
        line.appendChild(outputDiv);
      }
    }

    terminal.appendChild(line);
    window.scrollTo(0, document.body.scrollHeight);
  }, delay);
}

// Generate all lines
commands.forEach(cmd => addTerminalLine(cmd));

// Add input prompt at the end
setTimeout(() => {
  const inputLine = document.createElement('div');
  inputLine.className = 'terminal-line';
  inputLine.innerHTML = `
    <span class="prompt">ganesh@portfolio ~ % </span>
    <input type="text" id="terminalInput" style="background: none; border: none; color: var(--fg); font-family: 'JetBrains Mono', monospace; font-size: 14px; outline: none; width: 300px;" placeholder="type 'help' for commands">
    <span class="typing-cursor"></span>
  `;
  terminal.appendChild(inputLine);
  
  const input = document.getElementById('terminalInput');
  if (input) {
    input.focus();
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        if (cmd === 'help') {
          const helpLine = document.createElement('div');
          helpLine.className = 'terminal-line';
          const helpContent = document.createElement('div');
          helpContent.className = 'output info';
          helpContent.style.whiteSpace = 'pre-wrap';
          helpContent.style.fontFamily = "'JetBrains Mono', monospace";
          helpContent.textContent = `Available commands:
  about           - Learn about Ganesh
  skills          - View technical skills
  projects        - See featured projects
  experience      - View work experience
  contact         - Get contact information
  clear           - Clear terminal`;
          helpLine.appendChild(helpContent);
          terminal.appendChild(helpLine);
          window.scrollTo(0, document.body.scrollHeight);
        }
        input.value = '';
      }
    });
  }
}, delay + 500);
