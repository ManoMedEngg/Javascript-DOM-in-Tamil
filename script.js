// Lessons Data
const lessons = [
    { no: '01', title: 'Introduction to Javascript DOM Course - Tamil', category: 'basics', code: '', video: 'https://youtu.be/0Q8eftj5OA0' },
    { no: '02', title: 'What is JS DOM', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/02-what-is-dom', video: 'https://youtu.be/D04yjfmgiD4' },
    { no: '03', title: 'Window Object in Javascript', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/03-Window-Object-in-Javascript', video: 'https://www.youtube.com/watch?v=O5q2ftAmZEE' },
    { no: '04', title: 'Window Object in Action', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/04-Window-Object-in-Action', video: 'https://www.youtube.com/watch?v=of16-QLL3LI' },
    { no: '05', title: 'What is BOM?', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/05-what-is-bom', video: 'https://www.youtube.com/watch?v=OjSummBnFdo' },
    { no: '06', title: 'Exploring DOM Document', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/06-Exploring-DOM-Document', video: 'https://www.youtube.com/watch?v=PwH3qYb1g1o' },
    { no: '07', title: 'DOM Properties & Methods', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/07-DOM-Methods-vs-Properties', video: 'https://youtu.be/NRl7nF4vIFw' },
    { no: '08', title: 'DOM Loaded Events', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/08-DOM-Loaded-Events', video: 'https://www.youtube.com/watch?v=DCvpLOaFkZU' },
    { no: '09', title: 'Javascript Scripts: async vs defer', category: 'advanced', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/09-Javascript-scripts-async-vs-defer', video: 'https://www.youtube.com/watch?v=9WHrYavh-hM' },
    { no: '10', title: 'Understanding DOM Nodes', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/10-Understanding-DOM-Nodes', video: 'https://www.youtube.com/watch?v=SlLTuWYa7UM' },
    { no: '11', title: 'How to Select DOM Elements & UI Building', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/11-How-to-Select-DOM-Elements', video: 'https://www.youtube.com/watch?v=j1UAeKE9rd4' },
    { no: '12', title: 'getElementById() - JS DOM Selector', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/12-getElementById-dom-selector', video: 'https://www.youtube.com/watch?v=khi85Y4ylCw' },
    { no: '13', title: 'getElementsByClassName()', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/13-getElementsByClassName-dom-selector', video: 'https://www.youtube.com/watch?v=k3O1OiGtMVE' },
    { no: '14', title: 'getElementsByTagName(), getElementsByName()', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/14-getElementsByTagName-dom-selector', video: 'https://www.youtube.com/watch?v=Hq-bDr0CSU0' },
    { no: '15', title: 'DOM Query Selector (querySelector(), querySelectorAll())', category: 'basics', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/15-querySelector-querySelectorAll-dom-selectors', video: 'https://youtu.be/NRl7nF4vIFw' },
    { no: '16', title: 'Creating DOM Elements', category: 'advanced', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/16-creating-DOM-elements', video: 'https://youtu.be/lT1S6yUacgQ' },
    { no: '17', title: 'Changing/Getting Content of DOM Elements', category: 'advanced', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/17-changing-contents-of-DOM-elements', video: 'https://youtu.be/clQO1vcCgHo' },
    { no: '18', title: 'innerHTML vs createElement', category: 'advanced', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/18-innerHTML-vs-createElement', video: 'https://youtu.be/bax6ny-NRA8' },
    { no: '34', title: 'Adding DOM Events & Event Object', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/34-adding-event-listeners', video: 'https://youtu.be/Mtkyq0jXRL8' },
    { no: '35', title: 'Removing DOM Events', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/35-removing-event-listeners', video: 'https://youtu.be/gC5UThrYn94' },
    { no: '36', title: 'Event Bubbling, Capturing & Propagation', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/36-event-bubbling-capturing-and-propagation', video: 'https://youtu.be/6pDidDhcEn0' },
    { no: '39', title: 'DOM Mouse Events', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/39-mouse-events', video: 'https://youtu.be/7foWfSwCpmY' },
    { no: '40', title: 'DOM Keyboard Events', category: 'events', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/40-keyboard-events', video: 'https://youtu.be/iZ9wWBbDV_I' },
    { no: '41', title: 'Accessing Forms and Elements', category: 'forms', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/41-accessing-forms-and-elements', video: 'https://youtu.be/8MibgZLbFRs' },
    { no: '42', title: 'Javascript Form Submit and FormData Event', category: 'forms', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/42-form-submit-event-and-FormData', video: 'https://youtu.be/RNvGJhNT2JM' },
    { no: '43', title: 'Transforming HTML FormData to Server', category: 'forms', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/43-transforming-formData-for-the-server', video: 'https://youtu.be/0nXyfglNKlw' },
    { no: '44', title: 'Posting FormData via Fetch API', category: 'forms', code: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil/tree/44-posting-formData-via-fetch-api', video: 'https://youtu.be/0jB50mugTmM' },
];

let displayedLessons = 12;
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLessons();
    initializeEventListeners();
    animateStats();
    observeElements();
});

// Load Lessons
function loadLessons() {
    const container = document.getElementById('lessonsContainer');
    const filtered = filterLessons();
    const toDisplay = filtered.slice(0, displayedLessons);
    
    container.innerHTML = toDisplay.map(lesson => `
        <div class="lesson-card fade-in" data-category="${lesson.category}">
            <span class="lesson-number">#${lesson.no}</span>
            <h3>${lesson.title}</h3>
            <div class="lesson-links">
                ${lesson.code ? `<a href="${lesson.code}" target="_blank" class="lesson-link link-code">
                    <i class="fas fa-code"></i> Code
                </a>` : ''}
                ${lesson.video ? `<a href="${lesson.video}" target="_blank" class="lesson-link link-video">
                    <i class="fab fa-youtube"></i> Video
                </a>` : ''}
            </div>
        </div>
    `).join('');
    
    // Update Load More button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedLessons >= filtered.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Filter Lessons
function filterLessons() {
    return lessons.filter(lesson => {
        const matchesCategory = currentFilter === 'all' || lesson.category === currentFilter;
        const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            displayedLessons = 12;
            loadLessons();
        });
    });
    
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        displayedLessons = 12;
        loadLessons();
    });
    
    // Load More
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        displayedLessons += 12;
        loadLessons();
    });
    
    // Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Mobile Menu
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Animate Stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Observe elements for fade-in animation
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.lesson-card, .stat-card, .community-card').forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
