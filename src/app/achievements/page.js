import { Oxanium, Montserrat } from "next/font/google";

import './achievement.css';
const oxanium = Oxanium({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

// --- DATA ---
// In a real app, this would come from an API.
// Using placeholder images from picsum.photos
const achievementsData = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/person1/200' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/person2/200' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/person3/200' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/person4/200' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/person5/200' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/person6/200' },
  { id: 7, imageUrl: 'https://picsum.photos/seed/person7/200' },
  { id: 8, imageUrl: 'https://picsum.photos/seed/person8/200' },
  { id: 9, imageUrl: 'https://picsum.photos/seed/person9/200' },
  { id: 10, imageUrl: 'https://picsum.photos/seed/person10/200' },
  { id: 11, imageUrl: 'https://picsum.photos/seed/person11/200' },
  { id: 12, imageUrl: 'https://picsum.photos/seed/person12/200' },
  { id: 13, imageUrl: 'https://picsum.photos/seed/person13/200' },
  { id: 14, imageUrl: 'https://picsum.photos/seed/person14/200' },
  { id: 15, imageUrl: 'https://picsum.photos/seed/person15/200' },
  { id: 16, imageUrl: 'https://picsum.photos/seed/person16/200' },
];

// --- Reusable Card Component ---
// --- Reusable Card Component ---
const AchievementCard = ({ imageUrl, customClass }) => {
  return (
    // <div className={`grid-item-wrapper ${customClass}`}> {/* Add this wrapper */}
      <div className={`card-wrapper ${customClass}`}>
        {/* <div className="shadow-bg"></div> */}
        <div className="image-container">
          <img src={imageUrl} alt="Achievement" />
        </div>
      </div>
  );
};

// --- Main App Component ---
function AchievementsPage() {
  return (
    <div>
    <div className="app-container">
      <section className="achievements-section">
        {/* We use CSS Grid to place each item specifically */}
        <div className="achievements-grid">

          {/* Top row of "shadow-only" divs for decoration
          <div className="shadow-only" style={{ gridColumn: '1 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '2 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '3 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '4 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '5 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '6 / span 1' }}></div>
          <div className="shadow-only" style={{ gridColumn: '7 / span 1' }}></div> */}

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
            <p>Celebrating the wins of TheCodeBreakers community.</p>
          </div>
        </div>
      </section>
      </div>
      
      <section className="placements-section">
      <h1 className={`${oxanium.className} placements-section`}>Placements & Offers</h1>
      
        {/* Content for the placements section */}
      </section>
    </div>
  );
}

export default AchievementsPage;