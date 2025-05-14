/**
 * Tim Alesi Landing Page
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeCodeDemo();
    initializeCapabilities();
    initializeBenefits();
    initializeIntegration();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle responsive menu toggle
    const mobileBreakpoint = 768;
    const toggleMenu = () => {
        if (window.innerWidth <= mobileBreakpoint) {
            // Add mobile menu logic here
        }
    };

    // Initialize on load and window resize
    toggleMenu();
    window.addEventListener('resize', toggleMenu);
}

/**
 * Code demonstration component
 */
function initializeCodeDemo() {
    // Sample code for the demo
    const sampleComponentCode = `<div class="card">
  <div class="card-image">
    <img src="example.jpg" alt="Card image">
  </div>
  <div class="card-content">
    <h3 class="card-title">Feature Component</h3>
    <p class="card-description">This responsive card component showcases content with a clean, modern design that adapts beautifully to any screen size.</p>
    <a href="#" class="card-button">Learn More</a>
  </div>
</div>

<style>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  background: white;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  margin: 0 0 0.75rem 0;
  color: #1a365d;
  font-weight: 600;
}

.card-description {
  color: #4a5568;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}

.card-button {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #2b6cb0;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.card-button:hover {
  background: #1a365d;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
    max-width: 700px;
  }
  
  .card-image {
    width: 40%;
    height: auto;
  }
  
  .card-content {
    width: 60%;
  }
}
</style>`;

    // Create the demo section
    const demoSection = document.querySelector('#demos .demo-tabs');
    if (!demoSection) return;

    // Create the interactive code demo
    demoSection.innerHTML = `
        <div class="demo-tab-headers">
            <button class="demo-tab-button active" data-tab="code-generation">Code Generation</button>
            <button class="demo-tab-button" data-tab="design-system">Design System</button>
            <button class="demo-tab-button" data-tab="problem-solving">Problem Solving</button>
            <button class="demo-tab-button" data-tab="github-integration">GitHub Integration</button>
        </div>
        <div class="demo-tab-content">
            <div class="demo-tab active" id="code-generation">
                <div class="code-demo">
                    <div class="code-input">
                        <input type="text" class="input-prompt" placeholder="Describe a component you'd like me to create..." value="Create a responsive card component with image, title, description, and action button">
                        <button class="generate-btn" id="generateBtn">Generate</button>
                    </div>
                    
                    <div class="code-editor">
                        <div class="line-numbers" id="lineNumbers"></div>
                        <div class="code-content" id="codeContent"></div>
                    </div>
                    
                    <div class="actions">
                        <button class="button primary" id="previewBtn">Preview Component</button>
                        <button class="button secondary">Copy Code</button>
                        <button class="button secondary">Save Component</button>
                    </div>
                    
                    <div class="result-preview" id="resultPreview">
                        <div class="preview-header">
                            <div class="preview-title">Component Preview</div>
                            <div class="preview-actions">
                                <button class="button secondary small">Responsive View</button>
                            </div>
                        </div>
                        <div class="preview-content" id="previewContent">
                            <div>Enter a component description and click "Generate" to see Tim Alesi's code generation in action.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="demo-tab" id="design-system">
                <h3>Design System Generation</h3>
                <p>Content for design system demo will be added here.</p>
            </div>
            <div class="demo-tab" id="problem-solving">
                <h3>Problem Solving Walkthrough</h3>
                <p>Content for problem solving demo will be added here.</p>
            </div>
            <div class="demo-tab" id="github-integration">
                <h3>GitHub Integration Preview</h3>
                <p>Content for GitHub integration demo will be added here.</p>
            </div>
        </div>
    `;

    // Set up tab switching
    const tabButtons = document.querySelectorAll('.demo-tab-button');
    const tabContents = document.querySelectorAll('.demo-tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Set up code generation demo functionality
    const lineNumbersDiv = document.getElementById('lineNumbers');
    const codeContentDiv = document.getElementById('codeContent');
    const previewContent = document.getElementById('previewContent');
    const generateBtn = document.getElementById('generateBtn');
    const previewBtn = document.getElementById('previewBtn');
    
    // Function to populate line numbers
    function populateLineNumbers(codeLines) {
        if (!lineNumbersDiv) return;
        lineNumbersDiv.innerHTML = '';
        for (let i = 1; i <= codeLines; i++) {
            lineNumbersDiv.innerHTML += i + '<br>';
        }
    }
    
    // Code typing animation effect
    function typeCode(code) {
        if (!codeContentDiv) return;
        codeContentDiv.innerHTML = '';
        populateLineNumbers(code.split('\n').length);
        
        let i = 0;
        const codeArray = code.split('');
        const typeInterval = setInterval(() => {
            if (i < codeArray.length) {
                // Add syntax highlighting by replacing HTML tags and properties
                let char = codeArray[i];
                codeContentDiv.innerHTML += char;
                
                // Apply syntax highlighting
                codeContentDiv.innerHTML = codeContentDiv.innerHTML
                    .replace(/&lt;(\/?)(div|h3|p|a|img|style)&gt;/g, '&lt;<span class="keyword">$1$2</span>&gt;')
                    .replace(/class="([^"]*)"/g, 'class="<span class="string">$1</span>"')
                    .replace(/([0-9]+)(px|rem|em|%)/g, '<span class="number">$1</span>$2')
                    .replace(/(@media|:hover|:focus)/g, '<span class="keyword">$1</span>')
                    .replace(/(\/\*.*?\*\/)/g, '<span class="comment">$1</span>');
                
                i++;
            } else {
                clearInterval(typeInterval);
                codeContentDiv.innerHTML = codeContentDiv.innerHTML
                    .replace(/&lt;(\/?)(div|h3|p|a|img|style)&gt;/g, '&lt;<span class="keyword">$1$2</span>&gt;')
                    .replace(/class="([^"]*)"/g, 'class="<span class="string">$1</span>"')
                    .replace(/([0-9]+)(px|rem|em|%)/g, '<span class="number">$1</span>$2')
                    .replace(/(@media|:hover|:focus)/g, '<span class="keyword">$1</span>')
                    .replace(/(\/\*.*?\*\/)/g, '<span class="comment">$1</span>');
            }
        }, 15);
    }
    
    // Initialize event listeners
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            typeCode(sampleComponentCode);
        });
    }
    
    if (previewBtn && previewContent) {
        previewBtn.addEventListener('click', function() {
            // Extract HTML part
            const htmlPart = sampleComponentCode.split('<style>')[0].trim();
            // Extract CSS part
            const cssPart = sampleComponentCode.includes('<style>') ? 
                sampleComponentCode.split('<style>')[1].split('</style>')[0] : '';
            
            // Apply HTML
            previewContent.innerHTML = htmlPart;
            
            // Add the CSS
            if (cssPart) {
                const styleElement = document.createElement('style');
                styleElement.textContent = cssPart;
                previewContent.appendChild(styleElement);
            }
        });
    }
    
    // Initialize with empty line numbers
    populateLineNumbers(20);
}

/**
 * Capabilities section
 */
function initializeCapabilities() {
    const capabilitiesSection = document.querySelector('#capabilities .capabilities-grid');
    if (!capabilitiesSection) return;

    // Define capabilities data
    const capabilities = [
        {
            title: 'Web Development Expertise',
            description: 'Modern semantic HTML, advanced CSS techniques, interactive JavaScript, and performance optimization.',
            icon: 'code'
        },
        {
            title: 'AI-Powered Design',
            description: 'Intelligent layout generation, design system creation, visual hierarchy optimization, and accessibility compliance.',
            icon: 'palette'
        },
        {
            title: 'Technical Problem Solving',
            description: 'Code debugging, performance optimization, cross-browser compatibility solutions, and responsive design challenges.',
            icon: 'bug_report'
        },
        {
            title: 'Real-time Collaboration',
            description: 'Live code generation and preview, interactive feedback implementation, and seamless deployment workflows.',
            icon: 'groups'
        }
    ];

    // Generate capability cards
    capabilitiesSection.innerHTML = capabilities.map(capability => `
        <div class="capability-card">
            <div class="capability-icon">${capability.icon}</div>
            <h3>${capability.title}</h3>
            <p>${capability.description}</p>
        </div>
    `).join('');
}

/**
 * Benefits section
 */
function initializeBenefits() {
    const benefitsSection = document.querySelector('#benefits .benefits-grid');
    if (!benefitsSection) return;

    // Define benefits data
    const benefits = [
        {
            title: 'Development Speed',
            description: 'Rapid prototyping capabilities, streamlined production workflows, and automated code generation.',
            icon: 'speed'
        },
        {
            title: 'Technical Excellence',
            description: 'Code quality assurance, performance optimization, accessibility compliance, and modern best practices.',
            icon: 'verified'
        },
        {
            title: 'Problem Resolution',
            description: 'Bug identification and fixes, technical debt reduction, legacy code modernization, and complex challenge solutions.',
            icon: 'build'
        },
        {
            title: 'Return on Investment',
            description: 'Development cost reduction, maintenance efficiency improvements, user experience enhancements, and business impact.',
            icon: 'trending_up'
        }
    ];

    // Generate benefit cards
    benefitsSection.innerHTML = benefits.map(benefit => `
        <div class="benefit-card">
            <div class="benefit-icon">${benefit.icon}</div>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        </div>
    `).join('');
}

/**
 * Integration section
 */
function initializeIntegration() {
    const integrationSection = document.querySelector('#integration .integration-content');
    if (!integrationSection) return;

    // Define integration content
    integrationSection.innerHTML = `
        <div class="integration-grid">
            <div class="integration-info">
                <h3>Seamless chat.satware.ai Connection</h3>
                <p>Tim Alesi integrates directly with chat.satware.ai, providing a unified experience for web development and AI assistance.</p>
                <ul class="integration-features">
                    <li>Direct API communication</li>
                    <li>Shared context between platforms</li>
                    <li>Consistent user experience</li>
                    <li>Synchronized data and preferences</li>
                </ul>
                <a href="#" class="button primary">Learn About Integration</a>
            </div>
            <div class="integration-demo-visual">
                <!-- Placeholder for integration visualization -->
                <div class="integration-visual-placeholder"></div>
            </div>
        </div>
    `;
}