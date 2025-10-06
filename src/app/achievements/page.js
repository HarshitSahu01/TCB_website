import { Oxanium, Montserrat } from "next/font/google";

import './achievement.css';
const oxanium = Oxanium({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

// --- DATA ---
// Using placeholder images for 4 placement cards
const achievementsData = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/person1/300' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/person2/300' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/person3/300' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/person4/300' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/person5/300' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/person6/300' },
  { id: 7, imageUrl: 'https://picsum.photos/seed/person7/300' },
  { id: 8, imageUrl: 'https://picsum.photos/seed/person8/300' },
  { id: 9, imageUrl: 'https://picsum.photos/seed/person9/300' },
  { id: 10, imageUrl: 'https://picsum.photos/seed/person10/300' },
  { id: 11, imageUrl: 'https://picsum.photos/seed/person11/300' },
  { id: 12, imageUrl: 'https://picsum.photos/seed/person12/300' },
  { id: 13, imageUrl: 'https://picsum.photos/seed/person13/300' },
  { id: 14, imageUrl: 'https://picsum.photos/seed/person14/300' },
  { id: 15, imageUrl: 'https://picsum.photos/seed/person15/300' },
  { id: 16, imageUrl: 'https://picsum.photos/seed/person16/300' },
];

const placementData = [
    { id: 1, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara1/300' },
    { id: 2, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara2/300' },
    { id: 3, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara3/300' },
    { id: 4, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara4/300' },

    { id: 5, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara5/300' },

    { id: 6, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara6/300' },



];



const HackathonsData = [
    { id: 1, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara1/300' },
    { id: 2, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara2/300' },
    { id: 3, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara3/300' },
    { id: 4, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara4/300' },

    { id: 5, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara5/300' },

    { id: 6, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara6/300' },



];

// --- Reusable Image Card Component (for Achievements) ---
const AchievementCard = ({ imageUrl, customClass }) => {
  return (
    // We add the shadow-bg here and ensure it's positioned absolutely in CSS
    <div className={`card-wrapper ${customClass}`}>
      <div className="shadow-bg"></div> 
      <div className="image-container">
        <img src={imageUrl} alt="Achievement" />
      </div>
    </div>
  );
};

// --- New Placement Card Component ---
const PlacementCard = ({ data }) => {
    // Icons using inline SVG for style consistency
    const LinkedinIcon = () => (
        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    );
    const InstagramIcon = () => (
        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
    );
    const GithubIcon = () => (
        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.67c4 0 8-1.5 8-7.75a4.04 4.04 0 0 0-1.25-3.5 4.47 4.47 0 0 0-1.27-1.12c-.22-.22-.49-.37-.77-.47L12 3z"/></svg>
    );
    
    return (
        <div className="placement-card">
            <div className="placement-image-container">
                <img src={data.imageUrl} alt={data.name} />
            </div>
            <div className="placement-info">
                <h3 className={oxanium.className}>{data.name}</h3>
                <p className={montserrat.className}>{data.role}</p>
                <div className="placement-footer">
                    <div className="social-icons">
                        <LinkedinIcon />
                        <InstagramIcon />
                        <GithubIcon />
                    </div>
                    <span className="company-tag">{data.company}</span>
                </div>
            </div>
        </div>
    );
}


// --- Main App Component ---
function AchievementsPage() {
  return (
    // CRITICAL FIX: The wrapper must manage vertical stacking
    <div className="main-page-wrapper"> 
      
      {/* SECTION 1: The Image Grid */}
      <section className="achievements-section">
        {/* The app-container provides centering for the grid block */}
        <div className="app-container"> 
          <div className="achievements-grid">
            
            {/* Top row of "shadow-only" divs for decoration */}
            <div className="shadow-only" style={{ gridColumn: '1 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '2 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '3 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '4 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '5 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '6 / span 1', gridRow: 1 }}></div>
            <div className="shadow-only" style={{ gridColumn: '7 / span 1', gridRow: 1 }}></div>

            {/* The actual achievement cards, placed manually on the grid */}
            <AchievementCard imageUrl={achievementsData[0].imageUrl} customClass="card-1" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} customClass="card-2" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} customClass="card-3" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} customClass="card-4" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} customClass="card-5" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} customClass="card-6" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} customClass="card-7" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} customClass="card-8" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} customClass="card-9" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} customClass="card-10" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} customClass="card-11" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} customClass="card-12" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} customClass="card-13" />
            <AchievementCard imageUrl={achievementsData[13].imageUrl} customClass="card-14" />
            <AchievementCard imageUrl={achievementsData[14].imageUrl} customClass="card-15" />
            <AchievementCard imageUrl={achievementsData[15].imageUrl} customClass="card-16" />

            {/* The central text block */}
            <div className={`${oxanium.className} center-text-container`}>
              <h1>Achievements & Success Stories</h1>
              <p className={montserrat.className}>Celebrating the wins of TheCodeBreakers community.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: Placements & Offers */}
      <section className="placements-section">
        <div className="placements-content-wrapper">
            <h1 className={`${oxanium.className} placements-title`}>Placements & Offers</h1>
            
            {/* The garbage h1 tags have been removed/replaced */}
            
            <div className="placement-cards-grid">
                {placementData.map(data => (
                    <PlacementCard key={data.id} data={data} />
                ))}
            </div>
        </div>
      </section>

{/* Hachathons */}

      <section className="placements-section">
        <div className="placements-content-wrapper">
            <h1 className={`${oxanium.className} placements-title`}>Hackathons & Internships</h1>
            
            {/* The garbage h1 tags have been removed/replaced */}
            
            <div className="placement-cards-grid">
                {HackathonsData.map(data => (
                    <PlacementCard key={data.id} data={data} />
                ))}
            </div>
        </div>
      </section>





      
    </div>
  );
}

export default AchievementsPage;
