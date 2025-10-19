'use client';
import { Oxanium, Montserrat } from "next/font/google";
import { useState } from "react";


const oxanium = Oxanium({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

// --- DATA ---
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
  { id: 1, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara1/300' },
  { id: 2, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara2/300' },
  { id: 3, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara3/300' },
  { id: 4, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara4/300' },
  { id: 5, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara5/300' },
  { id: 6, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara6/300' },
  { id: 7, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara7/300' },
  { id: 8, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Intern @Google', imageUrl: 'https://picsum.photos/seed/lara8/300' },
];

// --- Reusable Image Card Component (for Achievements) ---
const AchievementCard = ({ imageUrl, gridClass }) => {
  return (
    <div className={`${gridClass} relative w-full h-full`}>
      <div className="absolute inset-0 bg-[#0C0C0C] rounded-[20px] transition-transform duration-300 ease z-[2]"></div>
      <div className="absolute top-[10px] left-[-10px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
        <img src={imageUrl} alt="Achievement" className="w-full h-full object-cover block" />
      </div>
    </div>
  );
};






 const LinkedinIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
  const InstagramIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
  );









// --- New Placement Card Component ---
const PlacementCard = ({ data }) => {
 
  

  return (
    <div
      className="rounded-[40px] overflow-hidden p-[15px] text-white border border-[rgba(255,255,255,0.1)]"
      style={{ background: 'linear-gradient(-135deg, #194242, #05100f, #0e0e0e 85%, #0b2727, #073535)' }}
    >
      <div className="w-full pt-[100%] relative overflow-hidden rounded-[15px]">
        <img src={data.imageUrl} alt={data.name} className="absolute top-0 left-0 w-full h-full object-cover block" />
      </div>

      <div className="pt-[15px]">
        <h3 className={`${oxanium.className} text-[1.5rem] m-0 font-bold`}>{data.name}</h3>
        <p className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px]`}>{data.role}</p>

        <div className="flex justify-between items-center border-t border-t-[#333] pt-[10px] text-[0.8rem]">
          <div className="flex items-center gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <img src="/mdi_github.svg" alt="GitHub" className="w-[30px] h-[30px] block flex-shrink-0" />
          </div>

          <span className="bg-[#33334f] px-[8px] py-[4px] rounded-[10px] font-semibold whitespace-nowrap">{data.company}</span>
        </div>
      </div>
    </div>
  );
};


const ExtendedCard = () => {
    return (
        <div className='w-120 h-50 rounded-[40px] overflow-hidden relative flex p-4' style={{ background: 'linear-gradient(-135deg, #194242, #05100f, #0e0e0e 85%, #0b2727, #073535)' }}>
            <div className="w-52 h-52 rounded-[20px] overflow-hidden relative"> <img src="https://picsum.photos/seed/lara8/300"
    className="w-full h-full object-cover rounded-[20px]"
    alt="Profile"/> </div>
            <div className='flex flex-col justify-right pl-4'>
                <h3 className={`${oxanium.className} text-[1.5rem] m-0 font-bold text-white`}>John Doe</h3>
                <ul type="disc" className="list-disc pl-5">
                    <li className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px] text-white`}>100x Engineers Buildathon: Qualified for Semi Finals</li>
                    <li className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px] text-white`}>Hack for BioHeritage: Winner</li>
                </ul>

                  <div className="flex justify-between items-center border-t border-t-[#333] pt-[10px] text-[0.8rem]">
          <div className="flex items-center gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <img src="/mdi_github.svg" alt="GitHub" className="w-[30px] h-[30px] block flex-shrink-0" />
          </div>

          <span className="bg-[#33334f] px-[8px] py-[4px] rounded-[10px] font-semibold whitespace-nowrap">Intern @Google</span>
        </div>
</div>
            </div>
    )
};









const HackathonCard = ({ data, onViewMore }) => {
  return (
    <div
      className=" h-[440px] rounded-[40px] overflow-hidden p-[15px] text-white border border-[rgba(255,255,255,0.1)]"
      style={{ background: 'linear-gradient(-135deg, #194242, #05100f, #0e0e0e 85%, #0b2727, #073535)' }}
    >
      <div className="  w-full pt-[100%] relative overflow-hidden rounded-[15px]">
        <img src={data.imageUrl} alt={data.name} className="absolute top-0 left-0 w-full h-full object-cover block" />
      </div>

      <div className="pt-[15px]">
        <h3 className={`${oxanium.className} text-[1.5rem] m-0 font-bold`}>{data.name}</h3>
        <br />
        <div className="flex justify-between items-center border-t border-t-[#333] pt-[10px] text-[0.8rem]">
          <div className="flex items-center gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <img src="/mdi_github.svg" alt="GitHub" className="w-[30px] h-[30px] block flex-shrink-0" />
          </div>

          <button
            onClick={() => onViewMore(data)}
            className="bg-[#33334f] px-[8px] py-[4px] rounded-[10px] font-semibold whitespace-nowrap border-2 border-[rgba(255,255,255,0.01)] hover:border-[rgba(255,255,255,0.1)]"
          >
            View More +
          </button>
        </div>
      </div>
    </div>
  );
};














// --- Main App Component ---
function AchievementsPage() {


const [selectedCard, setSelectedCard] = useState(null);

const handleViewMore = (data) => {
  setSelectedCard(data);
};

const handleClose = () => {
  setSelectedCard(null);
};




  return (
    <div className={`${montserrat.className} flex flex-col w-full bg-[#030505] antialiased`}>
      {/* SECTION 1: The Image Grid */}
      <section className="w-full block">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">
            {/* Top row "shadow-only" decorations */}
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>

            {/* Achievement cards */}
            <AchievementCard imageUrl={achievementsData[0].imageUrl} gridClass="col-start-1 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} gridClass="col-start-2 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} gridClass="col-start-3 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} gridClass="col-start-4 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} gridClass="col-start-5 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} gridClass="col-start-6 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} gridClass="col-start-7 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} gridClass="col-start-8 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} gridClass="col-start-9 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} gridClass="col-start-1 col-span-1 row-start-6 row-span-3" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} gridClass="col-start-2 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} gridClass="col-start-8 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} gridClass="col-start-9 col-span-1 row-start-6 row-span-3" />
            {/* <AchievementCard imageUrl={achievementsData[13].imageUrl} gridClass="col-start-5 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[14].imageUrl} gridClass="col-start-6 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[15].imageUrl} gridClass="col-start-7 col-span-1 row-start-5 row-span-3" /> */}

            {/* Central text block */}
            <div className="col-start-4 col-span-3 row-start-6 row-span-2 text-white text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
              <h1 className={`${oxanium.className} m-0 leading-[1.2] text-[3.2rem] font-bold whitespace-nowrap`}>Achievements & Success Stories</h1>
              <p className={`${montserrat.className} text-[1.2rem] opacity-80 max-w-[300px] mt-[15px] mr-[242px] whitespace-nowrap font-extrabold text-white`}>
                Celebrating the wins of TheCodeBreakers community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Placements & Offers */}
      <section className="w-full pt-[50px] pb-[100px] ">
        <div className="max-w-[1400px] mx-auto px-[20px] ">
          <h1 className={`${oxanium.className} text-white text-[3rem] mb-[50px] text-left font-bold`}>Placements & Offers</h1>

          {/* Grid that places 4 items on the first row, then centers 2 items on the second row */}
          <div className="grid grid-cols-4 gap-[48px] mx-auto max-w-[1500px]">
            {placementData.map((data, i) => {
              // For index 0..3: normal top-row positions (col 1..4)
              // For index 4,5: force them to start at col 2 and 3 on the second row so they appear centered beneath the four above
              

              // constrain each grid cell and center the card within it
              return (
                <div key={data.id} className={`w-full flex justify-center`}>
                  <div className="w-full max-w-[320px]">
                    <PlacementCard data={data} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hackathons & Internships (same layout) */}
      <section className="w-full pt-[50px] pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-[20px]">
          <h1 className={`${oxanium.className} text-white text-[3rem] mb-[50px] text-left font-bold`}>Hackathons & Internships</h1>

          <div className="grid grid-cols-4 gap-[48px] mx-auto max-w-[1500px]">
           {HackathonsData.map((data, i) => (
  <div key={data.id} className="w-full flex justify-left">
    <div className="w-full max-w-[320px]">
      <HackathonCard data={data} onViewMore={handleViewMore} />
    </div>
  </div>
))}

          </div>
        </div>
      </section>  






{selectedCard && (
  <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-black/60 bg-black/80">
  <div   className="relative w-[620px] h-[250px]  rounded-4xl overflow-hidden p-3 flex gap-4 text-white
  border border-white/22 bg-gradient-to-br from-white/10 to-white/10
 backdrop-blur-md shadow-xl 
  bg-[linear-gradient(18deg,rgba(14,14,14,0.6),rgba(5,16,15,0.6),rgba(25,66,66,0.6))]"
 > 
  
  {/* Left Image */}
  <div className="w-56 h-56 rounded-2xl overflow-hidden flex-shrink-0">
    <img
      src={selectedCard.imageUrl}
      alt={selectedCard.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="flex flex-col flex-1">
    <h3 className="text-xl font-semibold mb-2">{selectedCard.name}</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1 text-[1rem] text-white">
      <li>100x Engineers Buildathon: Qualified for Semi Finals</li>
      <li>Hack for BioHeritage: Winner</li>
    </ul>

    <div className="flex justify-between items-center mt-auto border-t border-white/10 pt-3">
      <div className="flex items-center gap-3">
        <img src="/mdi_github.svg" alt="GitHub" className="w-7 h-7" />
        <LinkedinIcon />
        <InstagramIcon />
      </div>
      <span className="bg-white/10 border-1 border-white/10 px-3 py-1 rounded-full text-sm whitespace-nowrap">
        {selectedCard.company}
      </span>
    </div>
  </div>

  {/* Close button */}
  <button
    onClick={() => setSelectedCard(null)}
    className="absolute top-4 right-4 text-white text-2xl hover:opacity-80"
  >
    ✕
  </button>
</div>

  </div>
)}






      <br />
            <br />

    </div>
  );
}

export default AchievementsPage;