import { Oxanium, Montserrat } from "next/font/google";

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
  { id: 1, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara1/300' },
  { id: 2, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara2/300' },
  { id: 3, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara3/300' },
  { id: 4, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara4/300' },
  { id: 5, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara5/300' },
  { id: 6, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara6/300' },
  { id: 7, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara7/300' },
  { id: 8, name: 'Lara Jean', role: 'Product designer who focuses on simplicity and usability', company: 'Accenture - 12 LPA', imageUrl: 'https://picsum.photos/seed/lara8/300' },
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

// --- New Placement Card Component ---
const PlacementCard = ({ data }) => {
  const LinkedinIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
  const InstagramIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
  );
  

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
            <div className="w-40 h-40 rounded-[20px] overflow-hidden relative"> <img src= "https://picsum.photos/seed/lara8/300"/> </div>
            <div className='flex flex-col justify-center pl-4'>
                <h3 className={`${oxanium.className} text-[1.5rem] m-0 font-bold text-white`}>John Doe</h3>
                <p className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px] text-white`}>Software Engineer at Google</p>
                <p className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px] text-white`}>"TheCodeBreakers transformed my coding skills and helped me land my dream job!"</p>

</div>
            </div>
    )
};









const HackathonCard = ({ data }) => {
  const LinkedinIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
  const InstagramIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
  );
  

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
        {/* <p className={`${montserrat.className} text-[0.9rem] opacity-70 mt-[5px] mb-[15px]`}>{data.role}</p> */}

        <div className="flex justify-between items-center border-t border-t-[#333] pt-[10px] text-[0.8rem]">
          <div className="flex items-center gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <img src="/mdi_github.svg" alt="GitHub" className="w-[30px] h-[30px] block flex-shrink-0" />
          </div>

          <button className="bg-[#33334f] px-[8px] py-[4px] rounded-[10px] font-semibold whitespace-nowrap">View More +</button>
        </div>
      </div>
    </div>
  );
};














// --- Main App Component ---
function AchievementsPage() {
  return (
    <div className={`${montserrat.className} flex flex-col w-full bg-[#030505] antialiased`}>
      {/* SECTION 1: The Image Grid */}
      <section className="w-full block">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-cols-7 auto-rows-[95.188px] auto-cols-[100.102px] gap-[20px] mx-auto max-w-[1500px] w-full relative">
            {/* Top row "shadow-only" decorations */}
            <div className="col-start-1 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>

            {/* Achievement cards */}
            <AchievementCard imageUrl={achievementsData[0].imageUrl} gridClass="col-start-1 col-span-1 row-start-2 row-span-2" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} gridClass="col-start-2 col-span-1 row-start-3 row-span-2" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} gridClass="col-start-3 col-span-1 row-start-2 row-span-2" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} gridClass="col-start-4 col-span-1 row-start-3 row-span-2" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} gridClass="col-start-5 col-span-1 row-start-2 row-span-2" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} gridClass="col-start-6 col-span-1 row-start-3 row-span-2" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} gridClass="col-start-6 col-span-1 row-start-2 row-span-2" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} gridClass="col-start-1 col-span-1 row-start-4 row-span-1" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} gridClass="col-start-2 col-span-1 row-start-5 row-span-1" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} gridClass="col-start-7 col-span-1 row-start-2 row-span-2" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} gridClass="col-start-7 col-span-1 row-start-4 row-span-2" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} gridClass="col-start-3 col-span-1 row-start-5 row-span-1" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} gridClass="col-start-4 col-span-1 row-start-5 row-span-1" />
            <AchievementCard imageUrl={achievementsData[13].imageUrl} gridClass="col-start-5 col-span-1 row-start-5 row-span-1" />
            <AchievementCard imageUrl={achievementsData[14].imageUrl} gridClass="col-start-6 col-span-1 row-start-5 row-span-1" />
            <AchievementCard imageUrl={achievementsData[15].imageUrl} gridClass="col-start-7 col-span-1 row-start-5 row-span-1" />

            {/* Central text block */}
            <div className="col-start-3 col-span-3 row-start-3 row-span-2 text-white text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
              <h1 className={`${oxanium.className} m-0 leading-[1.2] text-[2.8rem] font-bold whitespace-nowrap`}>Achievements & Success Stories</h1>
              <p className={`${montserrat.className} text-[1.1rem] opacity-80 max-w-[300px] mt-[15px] mr-[150px] whitespace-nowrap font-extrabold text-white`}>
                Celebrating the wins of TheCodeBreakers community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Placements & Offers */}
      <section className="w-full pt-[50px] pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-[20px]">
          <h1 className={`${oxanium.className} text-white text-[3rem] mb-[50px] text-left font-bold`}>Placements & Offers</h1>

          {/* Grid that places 4 items on the first row, then centers 2 items on the second row */}
          <div className="grid grid-cols-4 gap-[48px] mx-auto max-w-[1250px]">
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

          <div className="grid grid-cols-4 gap-[48px] mx-auto max-w-[1250px]">
            {HackathonsData.map((data, i) => {
            //   let placementColClasses = "col-span-1";

              return (
                <div key={data.id} className={` w-full flex justify-left`}>
                  <div className="w-full max-w-[320px]">
                    <HackathonCard data={data} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>   

      <ExtendedCard />
    </div>
  );
}

export default AchievementsPage;