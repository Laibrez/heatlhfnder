// Health topics database
const healthTopics = {
    'nutrition': {
        title: 'Nutrition & Diet',
        articles: [
            {
                title: 'Balanced Diet Basics',
                description: 'Learn about the essential nutrients your body needs and how to create balanced meals. A healthy diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats in appropriate portions.',
                tags: ['nutrition', 'healthy eating', 'diet']
            },
            {
                title: 'Understanding Food Labels',
                description: 'Make informed food choices by understanding nutrition facts labels. Learn to identify serving sizes, calories, nutrients, and daily value percentages.',
                tags: ['nutrition', 'food labels', 'education']
            },
            {
                title: 'Hydration and Health',
                description: 'Discover the importance of staying hydrated and how much water you need daily. Proper hydration supports digestion, circulation, and temperature regulation.',
                tags: ['hydration', 'wellness', 'water']
            }
        ]
    },
    'exercise': {
        title: 'Exercise & Fitness',
        articles: [
            {
                title: 'Getting Started with Exercise',
                description: 'Begin your fitness journey safely with beginner-friendly exercises and routines. Start slowly and gradually increase intensity to build strength and endurance.',
                tags: ['exercise', 'fitness', 'beginners']
            },
            {
                title: 'Benefits of Regular Physical Activity',
                description: 'Regular exercise improves cardiovascular health, strengthens muscles and bones, boosts mood, and helps maintain a healthy weight.',
                tags: ['exercise', 'health benefits', 'wellness']
            },
            {
                title: 'Stretching and Flexibility',
                description: 'Improve your flexibility and reduce injury risk with proper stretching techniques. Learn the difference between static and dynamic stretching.',
                tags: ['stretching', 'flexibility', 'injury prevention']
            }
        ]
    },
    'mental-health': {
        title: 'Mental Health',
        articles: [
            {
                title: 'Managing Stress and Anxiety',
                description: 'Discover effective techniques to manage stress including deep breathing, meditation, and mindfulness practices. Learn to recognize stress triggers and develop coping strategies.',
                tags: ['mental health', 'stress', 'anxiety']
            },
            {
                title: 'Importance of Sleep',
                description: 'Quality sleep is essential for mental health and cognitive function. Learn about sleep hygiene practices and how to establish a healthy sleep routine.',
                tags: ['sleep', 'mental health', 'wellness']
            },
            {
                title: 'Building Resilience',
                description: 'Develop mental resilience through positive thinking, social connections, and healthy lifestyle habits. Learn how to bounce back from challenges.',
                tags: ['mental health', 'resilience', 'wellbeing']
            }
        ]
    },
    'preventive-care': {
        title: 'Preventive Care',
        articles: [
            {
                title: 'Essential Health Screenings',
                description: 'Stay healthy with regular check-ups and screenings. Learn which tests you need based on age, gender, and risk factors.',
                tags: ['preventive care', 'screenings', 'check-ups']
            },
            {
                title: 'Vaccination Guidelines',
                description: 'Protect yourself and others through immunization. Understand recommended vaccines for different age groups and life stages.',
                tags: ['vaccines', 'preventive care', 'immunization']
            },
            {
                title: 'Early Detection Saves Lives',
                description: 'Learn about the importance of early detection in preventing serious health conditions. Know the warning signs and when to seek medical attention.',
                tags: ['preventive care', 'early detection', 'health']
            }
        ]
    },
    'chronic-conditions': {
        title: 'Chronic Conditions',
        articles: [
            {
                title: 'Living with Diabetes',
                description: 'Manage diabetes effectively through diet, exercise, and medication. Learn about blood sugar monitoring and preventing complications.',
                tags: ['diabetes', 'chronic conditions', 'management']
            },
            {
                title: 'Heart Health',
                description: 'Reduce your risk of heart disease through lifestyle modifications. Understand cholesterol, blood pressure, and cardiovascular health.',
                tags: ['heart health', 'cardiovascular', 'chronic conditions']
            },
            {
                title: 'Arthritis Management',
                description: 'Find relief from arthritis symptoms through exercise, medication, and lifestyle adjustments. Learn about different types of arthritis.',
                tags: ['arthritis', 'chronic conditions', 'pain management']
            }
        ]
    },
    'wellness': {
        title: 'General Wellness',
        articles: [
            {
                title: 'Healthy Lifestyle Habits',
                description: 'Build sustainable healthy habits including regular exercise, balanced nutrition, adequate sleep, and stress management.',
                tags: ['wellness', 'lifestyle', 'healthy habits']
            },
            {
                title: 'Work-Life Balance',
                description: 'Achieve harmony between professional and personal life. Learn strategies to reduce burnout and increase overall life satisfaction.',
                tags: ['wellness', 'work-life balance', 'mental health']
            },
            {
                title: 'Preventive Self-Care',
                description: 'Practice self-care to maintain physical and mental wellbeing. Discover simple daily practices that promote overall health.',
                tags: ['self-care', 'wellness', 'prevention']
            }
        ]
    }
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const resultsContainer = document.getElementById('resultsContainer');
const topicCards = document.querySelectorAll('.topic-card');

// Search functionality
function performSearch(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    // Search through all topics and articles
    Object.keys(healthTopics).forEach(topicKey => {
        const topic = healthTopics[topicKey];
        topic.articles.forEach(article => {
            // Search in title, description, and tags
            if (
                article.title.toLowerCase().includes(lowerQuery) ||
                article.description.toLowerCase().includes(lowerQuery) ||
                article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
                topic.title.toLowerCase().includes(lowerQuery)
            ) {
                results.push(article);
            }
        });
    });

    return results;
}

function displayResults(results, query) {
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="result-card">
                <h3 class="result-title">No results found</h3>
                <p class="result-description">Try searching with different keywords or browse our health topics above.</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = results.map(article => `
            <div class="result-card">
                <h3 class="result-title">${article.title}</h3>
                <p class="result-description">${article.description}</p>
                <div class="result-tags">
                    ${article.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Show results section
    searchResults.classList.remove('hidden');
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleSearch() {
    const query = searchInput.value.trim();
    
    if (query.length < 2) {
        alert('Please enter at least 2 characters to search');
        return;
    }

    // Show loading state
    resultsContainer.innerHTML = '<div class="loading">Searching health topics</div>';
    searchResults.classList.remove('hidden');

    // Simulate search delay for better UX
    setTimeout(() => {
        const results = performSearch(query);
        displayResults(results, query);
    }, 300);
}

// Event listeners
searchButton.addEventListener('click', handleSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Topic card clicks
topicCards.forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.dataset.topic;
        if (healthTopics[topic]) {
            const articles = healthTopics[topic].articles;
            resultsContainer.innerHTML = articles.map(article => `
                <div class="result-card">
                    <h3 class="result-title">${article.title}</h3>
                    <p class="result-description">${article.description}</p>
                    <div class="result-tags">
                        ${article.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
            
            searchResults.classList.remove('hidden');
            searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get the target section
        const target = link.getAttribute('href');
        
        if (target === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (target === '#topics') {
            document.querySelector('.featured-topics').scrollIntoView({ behavior: 'smooth' });
        } else if (target === '#resources') {
            document.querySelector('.resources').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home' && href !== '#topics' && href !== '#resources' && href !== '#about') {
            e.preventDefault();
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.topic-card, .resource-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Clear search results when clicking search input
searchInput.addEventListener('focus', () => {
    searchInput.select();
});

console.log('Health Finder initialized successfully!');
