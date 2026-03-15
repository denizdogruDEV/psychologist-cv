// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
});

// Initialize website content
function initializeWebsite() {
    populateHeroSection();
    populateBioSection();
    populateEducationSection();
    populateCertificationsSection();
    populateWorkshopsSection();
    populateExperienceSection();
    populateMediaSection();
    populateBlogSection();
}

// Populate Hero Section
function populateHeroSection() {
    const profileImage = document.getElementById('profileImage');
    const name = document.getElementById('name');
    const title = document.getElementById('title');
    const contactInfo = document.getElementById('contactInfo');
    
    profileImage.src = cvData.personalInfo.profileImage;
    profileImage.alt = cvData.personalInfo.name;
    name.textContent = cvData.personalInfo.name;
    title.textContent = cvData.personalInfo.title;
    
    // Contact information
    const contactItems = [
        {
            text: cvData.personalInfo.contact.email,
            href: `mailto:${cvData.personalInfo.contact.email}`
        },
        {
            text: cvData.personalInfo.contact.phone,
            href: `tel:${cvData.personalInfo.contact.phone}`
        },
        {
            text: cvData.personalInfo.contact.website.replace('https://', ''),
            href: cvData.personalInfo.contact.website
        }
    ];
    
    contactItems.forEach(item => {
        const a = document.createElement('a');
        a.className = 'contact-item';
        a.href = item.href;
        if (item.href.startsWith('http')) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        a.textContent = item.text;
        contactInfo.appendChild(a);
    });
}

// Populate Bio Section
function populateBioSection() {
    const bioText = document.getElementById('bioText');
    bioText.textContent = cvData.personalInfo.bio;
}

// Populate Education Section
function populateEducationSection() {
    const educationList = document.getElementById('educationList');
    
    cvData.education.forEach(edu => {
        const item = createListItem(edu.degree, edu.school, edu.year);
        educationList.appendChild(item);
    });
}

// Populate Certifications Section
function populateCertificationsSection() {
    const certificationList = document.getElementById('certificationList');
    
    cvData.certifications.forEach(cert => {
        const item = createListItem(cert.title, cert.issuer, cert.year);
        certificationList.appendChild(item);
    });
}

// Populate Workshops Section
function populateWorkshopsSection() {
    const workshopList = document.getElementById('workshopList');
    
    cvData.workshops.forEach(workshop => {
        const item = createListItem(workshop.title, workshop.organizer, workshop.year);
        workshopList.appendChild(item);
    });
}

// Populate Experience Section
function populateExperienceSection() {
    const experienceList = document.getElementById('experienceList');
    
    cvData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        
        const title = document.createElement('div');
        title.className = 'experience-title';
        title.textContent = exp.title;
        item.appendChild(title);
        
        if (exp.organization) {
            const org = document.createElement('div');
            org.className = 'experience-org';
            org.textContent = exp.organization;
            item.appendChild(org);
        }
        
        const year = document.createElement('div');
        year.className = 'experience-year';
        year.textContent = exp.year;
        item.appendChild(year);
        
        experienceList.appendChild(item);
    });
}

// Populate Media Section
function populateMediaSection() {
    const mediaInterviews = document.getElementById('mediaInterviews');
    
    cvData.mediaInterviews.forEach(interview => {
        const card = document.createElement('a');
        card.className = 'media-card';
        card.href = interview.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.innerHTML = `
            <div class="media-card-source">${interview.source} · ${interview.date}</div>
            <div class="media-card-title">${interview.title}</div>
            <div class="media-card-cta">Haberi Oku →</div>
        `;
        mediaInterviews.appendChild(card);
    });
}

// Create List Item Helper Function
function createListItem(title, subtitle, year) {
    const item = document.createElement('div');
    item.className = 'list-item';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'item-title';
    titleEl.textContent = title;
    item.appendChild(titleEl);
    
    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'item-subtitle';
    subtitleEl.textContent = subtitle;
    item.appendChild(subtitleEl);
    
    const yearEl = document.createElement('div');
    yearEl.className = 'item-year';
    yearEl.textContent = year;
    item.appendChild(yearEl);
    
    return item;
}

function populateBlogSection() {
    const blogGrid = document.getElementById('blogGrid');

    cvData.blogPosts.forEach(post => {
        const card = document.createElement('a');
        card.className = 'blog-card';
        card.href = `blog-post.html?id=${post.id}`;
        card.innerHTML = `
            <div class="blog-card-body">
                <div class="blog-card-date">${post.date}</div>
                <div class="blog-card-title">${post.title}</div>
                <div class="blog-card-excerpt">${post.excerpt}</div>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Smooth scroll for navigation links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
}
