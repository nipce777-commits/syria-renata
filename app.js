// Simple React-like app without npm
const App = () => {
    const root = document.getElementById('root');
    
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = \`
        <nav class="nav">
            <a href="#" onclick="showPage('home')">Home</a>
            <a href="#" onclick="showPage('donate')">Donate</a>
        </nav>
    \`;
    
    const main = document.createElement('main');
    main.id = 'content';
    
    root.appendChild(header);
    root.appendChild(main);
    
    showPage('home');
};

const showPage = (page) => {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        content.innerHTML = \`
            <h1>Welcome to Oasis Capital Foundation</h1>
            <p>Building better futures through sustainable development.</p>
            <button onclick="showPage('donate')">Donate Now</button>
        \`;
    } else {
        content.innerHTML = \`
            <h1>Support Our Mission</h1>
            <p>Your donation makes a real difference.</p>
            <button onclick="showPage('home')">Back to Home</button>
        \`;
    }
};

// Start the app when page loads
document.addEventListener('DOMContentLoaded', App);
