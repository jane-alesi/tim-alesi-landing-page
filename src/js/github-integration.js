/**
 * Tim Alesi Landing Page
 * GitHub Integration Module
 */

class GitHubIntegration {
    constructor(config = {}) {
        this.config = {
            repoName: config.repoName || 'github-mcp-demo',
            owner: config.owner || 'tim-alesi',
            branch: config.branch || 'main',
            ...config
        };
        
        this.elements = {
            createRepoBtn: document.querySelector('[data-action="create-repo"]'),
            pushCodeBtn: document.querySelector('[data-action="push-code"]'),
            deployBtn: document.querySelector('[data-action="deploy"]'),
            statusDisplay: document.querySelector('[data-display="status"]')
        };
        
        this.init();
    }
    
    init() {
        // Initialize the GitHub integration demo
        this.setupGitHubDemo();
        this.bindEvents();
        this.checkConnectionStatus();
    }
    
    setupGitHubDemo() {
        // Set up the GitHub integration demo in the appropriate tab
        const githubDemoTab = document.getElementById('github-integration');
        if (!githubDemoTab) return;
        
        githubDemoTab.innerHTML = `
            <div class="github-demo-container">
                <div class="github-demo-header">
                    <h3>GitHub Integration Preview</h3>
                    <p>Experience seamless GitHub integration with Tim Alesi's automated workflows.</p>
                </div>
                
                <div class="github-demo-content">
                    <div class="github-demo-steps">
                        <div class="github-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>Create Repository</h4>
                                <p>Instantly create a new GitHub repository with proper structure and configuration.</p>
                                <button class="button primary" data-action="create-repo">Create Repository</button>
                            </div>
                        </div>
                        
                        <div class="github-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Push Code</h4>
                                <p>Automatically push generated code to the repository with proper commit messages.</p>
                                <button class="button primary" data-action="push-code" disabled>Push Code</button>
                            </div>
                        </div>
                        
                        <div class="github-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>Deploy Website</h4>
                                <p>Deploy your website to GitHub Pages with a single click for instant publishing.</p>
                                <button class="button primary" data-action="deploy" disabled>Deploy</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="github-demo-status">
                        <h4>Status</h4>
                        <div class="status-display" data-display="status">Ready to start GitHub integration...</div>
                    </div>
                </div>
            </div>
        `;
        
        // Update element references after creating the demo
        this.elements = {
            createRepoBtn: document.querySelector('[data-action="create-repo"]'),
            pushCodeBtn: document.querySelector('[data-action="push-code"]'),
            deployBtn: document.querySelector('[data-action="deploy"]'),
            statusDisplay: document.querySelector('[data-display="status"]')
        };
    }
    
    bindEvents() {
        // Bind event listeners to demo buttons
        const { createRepoBtn, pushCodeBtn, deployBtn } = this.elements;
        
        if (createRepoBtn) {
            createRepoBtn.addEventListener('click', () => this.handleCreateRepo());
        }
        
        if (pushCodeBtn) {
            pushCodeBtn.addEventListener('click', () => this.handlePushCode());
        }
        
        if (deployBtn) {
            deployBtn.addEventListener('click', () => this.handleDeploy());
        }
    }
    
    // MCP interaction methods would be triggered through the chat interface
    // These methods demonstrate the client-side UI interactions
    
    updateStatus(message, type = 'info') {
        const { statusDisplay } = this.elements;
        
        if (statusDisplay) {
            statusDisplay.textContent = message;
            statusDisplay.className = `status-display status--${type}`;
        }
        
        console.log(`[GitHub MCP] ${message}`);
    }
    
    checkConnectionStatus() {
        // Simulate checking GitHub MCP connection
        this.updateStatus('Checking GitHub MCP connection...');
        
        // Simulate connection check (would be handled by MCP in reality)
        setTimeout(() => {
            this.updateStatus('GitHub MCP connected successfully', 'success');
        }, 1500);
    }
    
    handleCreateRepo() {
        this.updateStatus('Creating repository...');
        
        // Simulate repository creation (would be handled by MCP in reality)
        setTimeout(() => {
            this.updateStatus('Repository created successfully: ' + this.config.repoName, 'success');
            
            // Enable the next step
            if (this.elements.pushCodeBtn) {
                this.elements.pushCodeBtn.disabled = false;
            }
        }, 2000);
    }
    
    handlePushCode() {
        this.updateStatus('Pushing code to repository...');
        
        // Simulate code pushing (would be handled by MCP in reality)
        setTimeout(() => {
            this.updateStatus('Code pushed successfully to ' + this.config.branch + ' branch', 'success');
            
            // Enable the next step
            if (this.elements.deployBtn) {
                this.elements.deployBtn.disabled = false;
            }
        }, 2500);
    }
    
    handleDeploy() {
        this.updateStatus('Deploying website to GitHub Pages...');
        
        // Simulate deployment (would be handled by MCP in reality)
        setTimeout(() => {
            const deployUrl = `https://${this.config.owner}.github.io/${this.config.repoName}`;
            this.updateStatus(
                `Website deployed successfully! View at: ${deployUrl}`,
                'success'
            );
        }, 3000);
    }
}

// Initialize GitHub integration when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const githubIntegration = new GitHubIntegration({
        repoName: 'tim-alesi-demo',
        owner: 'tim-alesi'
    });
    
    // Make integration available globally for debugging
    window.githubIntegration = githubIntegration;
});