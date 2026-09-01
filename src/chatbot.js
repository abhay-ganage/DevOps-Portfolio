/**
 * Abhay Ganage Portfolio - Floating Chatbot Assistant
 * Pure Vanilla JavaScript implementation with predefined intelligent intent responses,
 * quick action buttons, typing simulation, and full light/dark theme adaptation.
 */

// Intent responses mapping
const BOT_KNOWLEDGE = {
  about: {
    patterns: [
      'about',
      'who is Abhay',
      'who is he',
      'tell me about Abhay',
      'bio',
      'background',
      'profile',
      'who are you',
      'what do you do'
    ],
    text: "Abhay Ganage is a DevOps Engineer focused on cloud infrastructure, CI/CD automation, containerization, and infrastructure as code. He works with AWS, Docker, Kubernetes, Terraform, Jenkins, GitLab CI/CD, Python, and Shell Scripting to build reliable and scalable deployment solutions.",
    actions: [
      { label: "View About Page", url: "/about.html" },
      { label: "View Expertise", text: "Expertise" }
    ]
  },

  skills: {
    patterns: [
      'skill',
      'skills',
      'technologies',
      'tech stack',
      'tech',
      'tools',
      'devops skills',
      'cloud skills',
      'aws',
      'devops tools'
    ],
    text: "Abhay's DevOps skill set includes AWS, Terraform, Docker, Kubernetes, Jenkins, GitLab CI/CD, GitHub, Python, Shell Scripting, Docker Compose, Kind, kubectl, and Infrastructure as Code.",
    actions: [
      { label: "View Skills Arsenal", url: "/skills.html" },
      { label: "View Expertise", text: "Expertise" }
    ]
  },

  services: {
    patterns: [
      'service',
      'services',
      'what can you do',
      'expertise',
      'offer',
      'work',
      'what services'
    ],
    text: "Abhay focuses on 4 core DevOps areas:\n• ☁️ Cloud Infrastructure\n• 🔄 CI/CD Automation\n• 📦 Containerization\n• 🏗️ Infrastructure as Code",
    actions: [
      { label: "Explore Expertise", url: "/services.html" },
      { label: "Contact Abhay", text: "Contact" }
    ]
  },

  cloud: {
    patterns: [
      'cloud',
      'cloud infrastructure',
      'aws',
      'amazon web services',
      'ec2',
      's3',
      'rds',
      'iam',
      'auto scaling'
    ],
    text: "Abhay works with AWS cloud infrastructure and core services including EC2, S3, RDS, IAM, and Auto Scaling. He has hands-on experience designing secure, scalable, and highly available cloud environments.",
    actions: [
      { label: "View Projects", text: "Projects" },
      { label: "View Skills", text: "Skills" }
    ]
  },

  cicd: {
    patterns: [
      'ci/cd',
      'cicd',
      'pipeline',
      'pipelines',
      'continuous integration',
      'continuous deployment',
      'jenkins',
      'gitlab',
      'automation'
    ],
    text: "Abhay has hands-on experience building CI/CD workflows using Jenkins and GitLab CI/CD. His projects include automated validation, planning, deployment, testing, and containerized application delivery.",
    actions: [
      { label: "View Projects", text: "Projects" },
      { label: "View Skills", text: "Skills" }
    ]
  },

  containers: {
    patterns: [
      'docker',
      'container',
      'containers',
      'containerization',
      'docker compose',
      'kubernetes',
      'kind',
      'kubectl'
    ],
    text: "Abhay works with Docker and Kubernetes for containerization and orchestration. He has experience deploying applications with Docker Compose and setting up Kubernetes clusters using Kind, Docker, and kubectl.",
    actions: [
      { label: "View Projects", text: "Projects" },
      { label: "View Skills", text: "Skills" }
    ]
  },

  kubernetes: {
    patterns: [
      'kubernetes',
      'k8s',
      'kind',
      'kubernetes dashboard',
      'kubectl',
      'argo cd',
      'gitops'
    ],
    text: "Abhay has worked with Kubernetes using Kind on AWS EC2 and has explored Kubernetes Dashboard and Argo CD for application management and GitOps-driven continuous delivery.",
    actions: [
      { label: "View Kubernetes Project", text: "Kubernetes Project" },
      { label: "View Projects", text: "Projects" }
    ]
  },

  terraform: {
    patterns: [
      'terraform',
      'infrastructure as code',
      'iac',
      'terraform project',
      'infrastructure automation'
    ],
    text: "Abhay uses Terraform for Infrastructure as Code and AWS infrastructure provisioning. His work includes provisioning EC2 instances, Security Groups, and TLS key pairs while integrating Terraform with GitLab CI/CD.",
    actions: [
      { label: "View Terraform Project", text: "Terraform Project" },
      { label: "View Skills", text: "Skills" }
    ]
  },

  projects: {
    patterns: [
      'project',
      'projects',
      'portfolio',
      'work samples',
      'showcase',
      'devops projects'
    ],
    text: "Abhay's featured projects include a secure and scalable AWS three-tier architecture, a Jenkins-based web application deployment on AWS, a fully automated Terraform and GitLab CI/CD deployment, and a Kubernetes Kind Voting App with Argo CD.",
    actions: [
      { label: "View Projects Section", url: "/#projects" },
      { label: "Check GitHub", url: "https://github.com/abhay-ganage", external: true }
    ]
  },

  threeTier: {
    patterns: [
      'three tier',
      'three-tier',
      '3 tier',
      'aws architecture',
      'scalable architecture',
      'fault tolerant',
      'rds multi az'
    ],
    text: "Abhay designed and implemented a secure and scalable three-tier architecture on AWS using EC2 Auto Scaling for the compute layer, Amazon RDS Multi-AZ for the data layer, and Amazon S3 for secure and durable storage and backups.",
    actions: [
      { label: "View Projects", url: "/#projects" }
    ]
  },

  jenkins: {
    patterns: [
      'jenkins project',
      'jenkins deployment',
      'jenkins aws',
      'flask deployment',
      'python flask'
    ],
    text: "Abhay containerized a Python Flask application using Docker and deployed it to an AWS EC2 instance through SSH. Jenkins was used to support the deployment workflow, with AWS security groups configured to make the application accessible.",
    actions: [
      { label: "View Projects", url: "/#projects" }
    ]
  },

  terraformProject: {
    patterns: [
      'terraform project',
      'gitlab terraform',
      'fully automated deployment',
      'directus',
      'docker compose deployment'
    ],
    text: "Abhay built an end-to-end DevOps workflow using Terraform and GitLab CI/CD to automate infrastructure provisioning, Docker deployment, and application testing on AWS. The project also included secure artifact handling, health checks, and manual infrastructure controls for apply and destroy.",
    actions: [
      { label: "View Projects", url: "/#projects" }
    ]
  },

  kubernetesProject: {
    patterns: [
      'kubernetes project',
      'kind voting app',
      'voting app',
      'argo cd project',
      'gitops project'
    ],
    text: "Abhay deployed a Kubernetes Kind Voting App on an AWS EC2 instance and integrated Argo CD for GitOps-driven continuous delivery. The environment used Docker, Kind, kubectl, and Kubernetes Dashboard for containerized application management.",
    actions: [
      { label: "View Projects", url: "/#projects" }
    ]
  },

  education: {
    patterns: [
      'education',
      'degree',
      'college',
      'engineering',
      'information technology',
      'academic'
    ],
    text: "Abhay completed his Engineering degree in Information Technology from Parvatibai Genba Moze College of Engineering in 2025.",
    actions: [
      { label: "View Education", url: "/#education" }
    ]
  },

  certifications: {
    patterns: [
      'certification',
      'certifications',
      'certificate',
      'certificates',
      'cloud foundations',
      'great learning'
    ],
    text: "Abhay's certifications include Cloud Foundations from Great Learning Academy, along with other technical learning experiences in cloud and DevOps technologies.",
    actions: [
      { label: "View Certifications", url: "/#education" }
    ]
  },

  contact: {
    patterns: [
      'contact',
      'reach',
      'message',
      'get in touch',
      'talk',
      'connect'
    ],
    text: "Would you like to contact Abhay? You can reach him directly via email at abhayganage01@gmail.com or use the contact form.",
    actions: [
      { label: "Open Contact Form", url: "/contact.html" },
      { label: "Email Abhay", url: "mailto:abhayganage01@gmail.com" }
    ]
  },

  email: {
    patterns: [
      'email',
      'mail',
      'gmail',
      'email address',
      'mail address'
    ],
    text: "Abhay's direct email is <strong>abhayganage01@gmail.com</strong>. Feel free to reach out!",
    actions: [
      { label: "Send Email", url: "mailto:abhayganage01@gmail.com" },
      { label: "Contact Form", url: "/contact.html" }
    ]
  },

  github: {
    patterns: [
      'github',
      'git',
      'repo',
      'repositories',
      'code',
      'source code'
    ],
    text: "You can explore Abhay's DevOps projects, infrastructure code, and other repositories on GitHub.",
    actions: [
      {
        label: "Visit GitHub",
        url: "https://github.com/abhay-ganage",
        external: true
      }
    ]
  },

  linkedin: {
    patterns: [
      'linkedin',
      'professional profile',
      'social',
      'network',
      'connect'
    ],
    text: "Connect with Abhay on LinkedIn to follow his DevOps journey and professional updates.",
    actions: [
      {
        label: "Connect on LinkedIn",
        url: "https://www.linkedin.com/in/abhay-ganage/",
        external: true
      }
    ]
  },

  hire: {
    patterns: [
      'hire',
      'freelance',
      'job',
      'opportunity',
      'work together',
      'collaborate',
      'contract',
      'hiring'
    ],
    text: "Interested in working with Abhay? He is open to DevOps opportunities, collaborations, and projects involving cloud infrastructure, CI/CD, automation, and containerization.",
    actions: [
      { label: "Contact Abhay", url: "/contact.html" },
      { label: "Email Directly", url: "mailto:abhayganage01@gmail.com" }
    ]
  },

  greeting: {
    patterns: [
      'hi',
      'hello',
      'hey',
      'greetings',
      'good morning',
      'good afternoon',
      'good evening',
      'yo',
      'sup'
    ],
    text: "Hello! 👋 I'm Abhay's virtual assistant. How can I help you? You can ask me about his DevOps skills, AWS experience, projects, certifications, or how to get in touch.",
    actions: [
      { label: "About Abhay", text: "About Abhay" },
      { label: "DevOps Skills", text: "Skills" },
      { label: "Projects", text: "Projects" }
    ]
  },

  thanks: {
    patterns: [
      'thank',
      'thanks',
      'thank you',
      'appreciate',
      'awesome',
      'great',
      'cool'
    ],
    text: "You're very welcome! 😊 Let me know if you need anything else about Abhay's DevOps journey or want to get in touch.",
    actions: [
      { label: "Contact Abhay", text: "Contact" },
      { label: "View Projects", text: "Projects" }
    ]
  }
};

/**
 * Fallback response when intent is not matched
 */
const DEFAULT_RESPONSE = {
  text: "I'm not sure about that yet. Try asking me about Abhay's skills, services, projects, GitHub, LinkedIn, or contact information.",
  actions: [
    { label: "💻 Skills", text: "Skills" },
    { label: "🚀 Services", text: "Services" },
    { label: "📁 Projects", text: "Projects" },
    { label: "📧 Contact", text: "Contact" }
  ]
};

/**
 * Initialize Chatbot on the page
 */
export function initChatbot() {
  // Check if chatbot elements already exist or need injection
  let chatbotWrapper = document.getElementById('portfolio-chatbot-root');
  if (!chatbotWrapper) {
    chatbotWrapper = document.createElement('div');
    chatbotWrapper.id = 'portfolio-chatbot-root';
    document.body.appendChild(chatbotWrapper);
  }

  // Remove existing obsolete static chat-btn if present
  const oldChatBtn = document.getElementById('chat-btn');
  if (oldChatBtn && !oldChatBtn.closest('#portfolio-chatbot-root')) {
    oldChatBtn.remove();
  }

  renderChatbotDOM(chatbotWrapper);
  setupChatbotEvents();
}

/**
 * Inject Chatbot UI HTML Markup
 */
function renderChatbotDOM(root) {
  root.innerHTML = `
    <!-- Floating Chatbot Launcher Button -->
    <div class="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-auto">
      
      <!-- Tooltip on Hover -->
      <div id="chatbot-tooltip" class="hidden sm:block opacity-0 translate-y-2 pointer-events-none transition-all duration-300 mb-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-xl border border-purple-500/30 whitespace-nowrap backdrop-blur-md">
        💬 Chat with Abhay's Assistant
      </div>

      <!-- Trigger Button -->
      <button 
        id="chatbot-toggle-btn"
        type="button"
        class="chatbot-launcher w-[60px] h-[60px] rounded-full bg-purple-gradient text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50 group cursor-pointer"
        aria-label="Open chat assistant"
        aria-expanded="false"
        aria-controls="chatbot-window"
      >
        <!-- Chat Icon (Normal state) -->
        <svg id="chat-open-icon" class="w-7 h-7 transform group-hover:rotate-6 transition-transform duration-300 filter drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <!-- Close Icon (When open) -->
        <svg id="chat-close-icon" class="w-6 h-6 hidden transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Chatbot Window Panel -->
    <div 
      id="chatbot-window" 
      class="chatbot-panel fixed z-[9998] hidden opacity-0 scale-95 translate-y-4 transition-all duration-300 ease-out"
      role="dialog"
      aria-labelledby="chatbot-header-title"
      aria-hidden="true"
    >
      <!-- Chatbot Header -->
      <div class="chatbot-header px-5 py-4 border-b border-theme/80 flex items-center justify-between bg-purple-500/10 backdrop-blur-xl shrink-0">
        <div class="flex items-center gap-3">
          <!-- Bot Avatar -->
          <div class="w-10 h-10 rounded-2xl bg-purple-gradient text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
            🤖
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 id="chatbot-header-title" class="text-sm sm:text-base font-bold text-primary-theme leading-none">
                Abhay's Assistant
              </h3>
              <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Online
              </span>
            </div>
            <p class="text-xs text-muted-theme mt-1">
              Ask me anything about Abhay
            </p>
          </div>
        </div>

        <!-- Close Button -->
        <button 
          id="chatbot-close-btn"
          type="button" 
          class="p-2 rounded-xl text-muted-theme hover:text-primary-theme hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close chat assistant"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages Scrollable Body -->
      <div id="chatbot-messages" class="chatbot-messages-body p-4 sm:p-5 space-y-4 text-sm">
        <!-- Messages dynamically rendered here -->
      </div>

      <!-- Quick Action Pills Toolbar -->
      <div class="chatbot-quick-actions-bar px-4 py-2 border-t border-theme/40 bg-black/10 shrink-0">
        <button type="button" class="quick-chip-btn shrink-0 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 text-primary-theme transition-all cursor-pointer" data-quick="Skills">
          💻 Skills
        </button>
        <button type="button" class="quick-chip-btn shrink-0 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 text-primary-theme transition-all cursor-pointer" data-quick="Services">
          🚀 Services
        </button>
        <button type="button" class="quick-chip-btn shrink-0 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 text-primary-theme transition-all cursor-pointer" data-quick="Projects">
          📁 Projects
        </button>
        <button type="button" class="quick-chip-btn shrink-0 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 text-primary-theme transition-all cursor-pointer" data-quick="Contact">
          📧 Contact
        </button>
        <button type="button" class="quick-chip-btn shrink-0 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 text-primary-theme transition-all cursor-pointer" data-quick="Hire Abhay">
          💼 Hire Abhay
        </button>
      </div>

      <!-- Chat Input Footer -->
      <form id="chatbot-form" class="p-3 sm:p-4 border-t border-theme bg-surface/50 backdrop-blur-md flex items-center gap-2 shrink-0">
        <label for="chatbot-input" class="sr-only">Ask something about Abhay</label>
        <input 
          type="text" 
          id="chatbot-input" 
          placeholder="Ask something about Abhay..." 
          autocomplete="off"
          class="flex-grow px-4 py-2.5 rounded-xl border border-theme bg-main/50 text-primary-theme placeholder-muted-theme text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
        />
        <button 
          type="submit" 
          id="chatbot-send-btn" 
          class="w-10 h-10 rounded-xl bg-purple-gradient hover:bg-purple-gradient-hover text-white flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Send message"
        >
          <svg class="w-5 h-5 transform translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>

    </div>
  `;
}

/**
 * Setup Event Listeners & Interactive Logic
 */
function setupChatbotEvents() {
  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const chatWindow = document.getElementById('chatbot-window');
  const openIcon = document.getElementById('chat-open-icon');
  const closeIcon = document.getElementById('chat-close-icon');
  const tooltip = document.getElementById('chatbot-tooltip');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');
  const messagesContainer = document.getElementById('chatbot-messages');

  if (!toggleBtn || !chatWindow || !form || !input || !messagesContainer) return;

  let isOpen = false;
  let hasWelcomed = false;

  // Tooltip hover handlers
  toggleBtn.addEventListener('mouseenter', () => {
    if (!isOpen && tooltip) {
      tooltip.classList.remove('hidden', 'opacity-0', 'translate-y-2');
      tooltip.classList.add('opacity-100', 'translate-y-0');
    }
  });

  toggleBtn.addEventListener('mouseleave', () => {
    if (tooltip) {
      tooltip.classList.remove('opacity-100', 'translate-y-0');
      tooltip.classList.add('opacity-0', 'translate-y-2');
    }
  });

  // Toggle open/close chatbot
  function setChatbotState(open) {
    isOpen = open;
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    chatWindow.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    if (isOpen) {
      if (tooltip) {
        tooltip.classList.remove('opacity-100', 'translate-y-0');
        tooltip.classList.add('opacity-0', 'translate-y-2');
      }
      // Use style.display so the CSS flex layout from .chatbot-panel takes effect
      // (removing .hidden would only restore display:block, not display:flex)
      chatWindow.style.display = 'flex';
      chatWindow.classList.remove('hidden');
      // Trigger animation on next frame
      requestAnimationFrame(() => {
        chatWindow.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
        chatWindow.classList.add('opacity-100', 'scale-100', 'translate-y-0');
      });

      if (openIcon) openIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');

      if (!hasWelcomed) {
        renderWelcomeMessage(messagesContainer);
        hasWelcomed = true;
      }

      setTimeout(() => input.focus(), 250);
    } else {
      chatWindow.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
      chatWindow.classList.add('opacity-0', 'scale-95', 'translate-y-4');

      setTimeout(() => {
        if (!isOpen) {
          chatWindow.style.display = 'none';
          chatWindow.classList.add('hidden');
        }
      }, 300);

      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  }

  toggleBtn.addEventListener('click', () => setChatbotState(!isOpen));
  closeBtn.addEventListener('click', () => setChatbotState(false));

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      setChatbotState(false);
    }
  });

  // Quick Action Buttons Listener (Header pills and in-message buttons)
  document.addEventListener('click', (e) => {
    const quickBtn = e.target.closest('[data-quick]');
    if (quickBtn) {
      e.preventDefault();
      const promptText = quickBtn.getAttribute('data-quick');
      if (promptText) {
        handleUserMessage(promptText, messagesContainer);
      }
    }
  });

  // Handle Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    input.value = '';
    handleUserMessage(query, messagesContainer);
  });
}

/**
 * Render initial welcome message and suggestion buttons
 */
function renderWelcomeMessage(container) {
  const welcomeHtml = `
    <div class="chat-message-bot flex items-start gap-3 animate-message-in">
      <div class="w-8 h-8 rounded-xl bg-purple-gradient text-white flex items-center justify-center text-sm shadow shrink-0 mt-0.5">
        🤖
      </div>
      <div class="flex flex-col gap-2 max-w-[85%]">
        <div class="theme-surface rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-theme/60 text-primary-theme leading-relaxed">
          Hi 👋 I'm <strong>Abhay's virtual assistant</strong>.<br/>
          I can tell you about Abhay, his skills, services, projects, and how to contact him.
        </div>
        <!-- Quick Suggestions -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="About Abhay">
            About Abhay
          </button>
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="Skills">
            Skills
          </button>
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="Services">
            Services
          </button>
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="Projects">
            Projects
          </button>
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="Contact">
            Contact
          </button>
          <button type="button" class="text-xs px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors font-medium cursor-pointer" data-quick="Hire Abhay">
            Hire Abhay
          </button>
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', welcomeHtml);
  scrollToBottom(container);
}

/**
 * Handle incoming user query
 */
function handleUserMessage(query, container) {
  // Render user message bubble
  const userMessageHtml = `
    <div class="chat-message-user flex justify-end animate-message-in">
      <div class="bg-purple-gradient text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-md leading-relaxed">
        ${escapeHtml(query)}
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', userMessageHtml);
  scrollToBottom(container);

  // Render typing indicator
  const typingId = `typing-${Date.now()}`;
  const typingHtml = `
    <div id="${typingId}" class="chat-typing flex items-start gap-3 animate-message-in">
      <div class="w-8 h-8 rounded-xl bg-purple-gradient text-white flex items-center justify-center text-sm shadow shrink-0 mt-0.5">
        🤖
      </div>
      <div class="theme-surface rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-theme/60 flex items-center gap-1.5">
        <span class="typing-dot w-2 h-2 rounded-full bg-purple-400"></span>
        <span class="typing-dot w-2 h-2 rounded-full bg-purple-400"></span>
        <span class="typing-dot w-2 h-2 rounded-full bg-purple-400"></span>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', typingHtml);
  scrollToBottom(container);

  // Match response intent
  const botResponse = matchIntent(query);

  // Simulate realistic typing delay (500 - 800ms)
  const delay = Math.floor(Math.random() * 300) + 500;

  setTimeout(() => {
    const typingElem = document.getElementById(typingId);
    if (typingElem) typingElem.remove();

    renderBotResponse(botResponse, container);
  }, delay);
}

/**
 * Match query against predefined intents
 */
function matchIntent(query) {
  const cleanQuery = query.toLowerCase().trim();

  for (const [key, data] of Object.entries(BOT_KNOWLEDGE)) {
    const matched = data.patterns.some(pattern => cleanQuery.includes(pattern));
    if (matched) {
      return data;
    }
  }

  return DEFAULT_RESPONSE;
}

/**
 * Render Bot message with action buttons/links
 */
function renderBotResponse(response, container) {
  let actionsHtml = '';
  if (response.actions && response.actions.length > 0) {
    const buttons = response.actions.map(action => {
      if (action.url) {
        const targetAttr = action.external ? 'target="_blank" rel="noopener noreferrer"' : '';
        return `
          <a 
            href="${action.url}" 
            ${targetAttr}
            class="text-xs px-3 py-1.5 rounded-xl border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/25 text-purple-300 font-medium transition-all inline-flex items-center gap-1.5"
          >
            <span>${action.label}</span>
            ${action.external ? '↗' : '→'}
          </a>
        `;
      } else if (action.text) {
        return `
          <button 
            type="button" 
            class="text-xs px-3 py-1.5 rounded-xl border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/25 text-purple-300 font-medium transition-all inline-flex items-center gap-1 cursor-pointer"
            data-quick="${action.text}"
          >
            ${action.label}
          </button>
        `;
      }
      return '';
    }).join('');

    actionsHtml = `
      <div class="flex flex-wrap gap-2 pt-1.5">
        ${buttons}
      </div>
    `;
  }

  const formattedText = response.text.replace(/\n/g, '<br/>');

  const botHtml = `
    <div class="chat-message-bot flex items-start gap-3 animate-message-in">
      <div class="w-8 h-8 rounded-xl bg-purple-gradient text-white flex items-center justify-center text-sm shadow shrink-0 mt-0.5">
        🤖
      </div>
      <div class="flex flex-col gap-2 max-w-[85%]">
        <div class="theme-surface rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-theme/60 text-primary-theme leading-relaxed">
          ${formattedText}
        </div>
        ${actionsHtml}
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', botHtml);
  scrollToBottom(container);
}

/**
 * Scroll to bottom helper
 */
function scrollToBottom(container) {
  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
}

/**
 * Escape HTML special characters for safety
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
