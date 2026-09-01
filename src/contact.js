import emailjs from '@emailjs/browser';

/**
 * EMAILJS CONFIGURATION PLACEHOLDERS
 * 
 * Instructions to enable real email sending to abhayganage01@gmail.com:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Add an Email Service (e.g., Gmail) -> Copy your Service ID
 * 3. Create an Email Template -> Copy your Template ID
 * 4. Go to Account -> API Keys -> Copy your Public Key
 * 
 * Replace the string placeholders below or define environment variables in a .env file:
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 */
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID";

/**
 * Initialize Contact Form handlers & EmailJS SDK
 */
export function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Initialize EmailJS with Public Key if configured
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (err) {
      console.warn("EmailJS init warning:", err);
    }
  }

  form.addEventListener('submit', handleFormSubmit);
}

/**
 * Handle Contact Form submission
 */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById('contact-submit-btn');
  const statusMsg = document.getElementById('form-status-message');

  // Input values
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const subject = subjectInput ? subjectInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  // Validation
  if (!name || !email || !subject || !message) {
    showStatusMessage(statusMsg, 'Please fill in all required fields.', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showStatusMessage(statusMsg, 'Please enter a valid email address.', 'error');
    return;
  }

  // Clear previous status
  hideStatusMessage(statusMsg);

  // Set loading state
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Sending...</span>
  `;

  try {
    // Guard: reject submission if credentials are still placeholders
    const isPlaceholderConfig =
      !EMAILJS_PUBLIC_KEY ||
      EMAILJS_PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY" ||
      !EMAILJS_SERVICE_ID ||
      EMAILJS_SERVICE_ID === "YOUR_EMAILJS_SERVICE_ID" ||
      !EMAILJS_TEMPLATE_ID ||
      EMAILJS_TEMPLATE_ID === "YOUR_EMAILJS_TEMPLATE_ID";

    if (isPlaceholderConfig) {
      // Developer hint in console — not shown to visitors
      console.warn(
        "%c[EmailJS Not Configured]",
        "color: #F59E0B; font-weight: bold; font-size: 14px;",
        "\nAdd your EmailJS credentials to a .env file:\n",
        "  VITE_EMAILJS_SERVICE_ID=...\n",
        "  VITE_EMAILJS_TEMPLATE_ID=...\n",
        "  VITE_EMAILJS_PUBLIC_KEY=...\n",
        "\nSee .env.example for instructions."
      );
      throw new Error("EmailJS credentials are not configured.");
    }

    // Send real email via EmailJS browser SDK
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      reply_to: email,
      to_email: 'abhayganage01@gmail.com'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    showStatusMessage(statusMsg, "Message sent successfully! I'll get back to you soon.", "success");
    form.reset();
  } catch (error) {
    console.error("EmailJS submission error:", error);
    showStatusMessage(
      statusMsg,
      "Unable to send your message right now. Please try again or contact me directly at <a href=\"mailto:abhayganage01@gmail.com\" class=\"underline\">abhayganage01@gmail.com</a>.",
      "error"
    );
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
    submitBtn.innerHTML = originalBtnText;
  }
}

/**
 * Helper to display accessible success or error status message
 */
function showStatusMessage(container, text, type) {
  if (!container) return;

  container.classList.remove('hidden', 'text-emerald-400', 'bg-emerald-500/10', 'border-emerald-500/30', 'text-red-400', 'bg-red-500/10', 'border-red-500/30');

  if (type === 'success') {
    container.classList.add('text-emerald-400', 'bg-emerald-500/10', 'border', 'border-emerald-500/30');
  } else {
    container.classList.add('text-red-400', 'bg-red-500/10', 'border', 'border-red-500/30');
  }

  container.innerHTML = text;
  container.setAttribute('role', 'status');
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Helper to hide status message
 */
function hideStatusMessage(container) {
  if (!container) return;
  container.classList.add('hidden');
  container.innerHTML = '';
}
