function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}

function toggleRoleFields() {
    const role = document.getElementById("role").value;
    
    document.getElementById("startupFields").classList.add("hidden");
    document.getElementById("investorFields").classList.add("hidden");
    document.getElementById("incubatorFields").classList.add("hidden");

    if (role === "entrepreneur") {
        document.getElementById("startupFields").classList.remove("hidden");
    } else if (role === "investor") {
        document.getElementById("investorFields").classList.remove("hidden");
    } else if (role === "incubator") {
        document.getElementById("incubatorFields").classList.remove("hidden");
    }
}

function handleAuth() {
    const role = document.getElementById("role").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert(`${role} account created successfully!`);
        showSection('home');
    } else {
        alert("Please fill in all required fields.");
    }
}

document.getElementById("pitch-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const pitchTitle = document.getElementById("pitch-title").value;
    const pitchDescription = document.getElementById("pitch-description").value;
    const expectedInvestment = document.getElementById("expected-investment").value;
    const pitchFile = document.getElementById("pitch-file").files;

    if (pitchTitle && pitchDescription && expectedInvestment && pitchFile.length > 0) {
        alert("Pitch submitted successfully!");

        showSection('home'); h
    } else {
        alert("Please fill in all required fields and upload your pitch file.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    showSection('login-signup'); 

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function() {
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    const submitPitchBtn = document.querySelector(".primary-btn");
    const browseStartupsBtn = document.querySelector(".secondary-btn");

    if (submitPitchBtn) {
        submitPitchBtn.addEventListener("click", function() {
            showSection("submit-pitch");
        });
    }

    if (browseStartupsBtn) {
        browseStartupsBtn.addEventListener("click", function() {
            showSection("startups");
        });
    }
});

function startLivePitch() {
    window.open("https://meet.google.com/", "_blank"); 
}

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}

// Investor Data
const investorsData = {
    "john-doe": {
        name: "John Doe",
        bio: "An experienced angel investor specializing in AI and blockchain startups.",
        investedStartups: "10+ Startups",
        sectors: "AI, Blockchain, SaaS",
        portfolio: "https://johnportfolio.com"
    },
    "jane-smith": {
        name: "Jane Smith",
        bio: "Venture Capitalist with a strong focus on SaaS and Fintech businesses.",
        investedStartups: "15+ Startups",
        sectors: "Fintech, SaaS, Marketplaces",
        portfolio: "https://janesmithvc.com"
    },
    "mark-johnson": {
        name: "Mark Johnson",
        bio: "Mentor and investor focusing on HealthTech and AI-driven solutions.",
        investedStartups: "5+ Startups",
        sectors: "HealthTech, AI",
        portfolio: "https://markjohnsonvc.com"
    }
};

function showInvestorDetails(investorId) {
    const investor = investorsData[investorId];

    if (!investor) {
        console.error("Investor not found: ", investorId);
        return;
    }

    document.getElementById("investor-name").textContent = investor.name;
    document.getElementById("investor-bio").textContent = investor.bio;
    document.getElementById("invested-startups").textContent = investor.investedStartups;
    document.getElementById("investment-sectors").textContent = investor.sectors;
    document.getElementById("investor-portfolio").href = investor.portfolio;

    showSection('investor-details'); 
}
function filterInvestors() {
    const searchQuery = document.getElementById('investor-search').value.toLowerCase();
    const investorCards = document.querySelectorAll('.card');
    
    console.log('Search Query:', searchQuery);
    
    investorCards.forEach(card => {
        const investorName = card.querySelector('strong').textContent.toLowerCase();
        const investorType = card.textContent.toLowerCase();
        
        console.log('Investor Name:', investorName, 'Investor Type:', investorType);
        
        if (investorName.includes(searchQuery) || investorType.includes(searchQuery)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

document.getElementById('investor-search').addEventListener('keyup', filterInvestors);


function submitPitch(event) {
    event.preventDefault(); 

    const title = document.getElementById('pitch-title').value;
    const description = document.getElementById('pitch-description').value;
    const expectedInvestment = document.getElementById('expected-investment').value;
    const pitchFiles = document.getElementById('pitch-file').files;

    const uploadedFilesDiv = document.getElementById('uploaded-files');
    uploadedFilesDiv.innerHTML = '';  
    if (pitchFiles.length > 0) {
        Array.from(pitchFiles).forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.classList.add('file-item');
            fileDiv.innerHTML = `<strong>${file.name}</strong> (${file.size} bytes)`;
            uploadedFilesDiv.appendChild(fileDiv);
        });
    } else {
        uploadedFilesDiv.innerHTML = '<p>No files uploaded.</p>';
    }

    document.getElementById('pitch-form').classList.add('hidden');

    document.getElementById('success-message').classList.remove('hidden');
}

function startLivePitch() {
    alert("Joining live pitching session...");
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
}
function submitStartup(event) {
    event.preventDefault(); 
    const startupName = document.getElementById('startup-name').value;
    const industry = document.getElementById('industry').value;
    const description = document.getElementById('startup-description').value;

    const startupCard = document.createElement('div');
    startupCard.classList.add('card');
    startupCard.innerHTML = `
        🚀 <strong>${startupName}</strong> - ${industry}
        <p>${description}</p>
    `;

    const startupsList = document.getElementById('startups-list');
    startupsList.appendChild(startupCard);

    document.getElementById('startup-form').classList.add('hidden');

    document.getElementById('success-message').classList.remove('hidden');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
}
