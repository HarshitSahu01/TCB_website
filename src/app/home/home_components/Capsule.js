export default function Capsule({activeTab, setActiveTab}) {

  return(
    <div className="flex justify-center mb-8 mt-8">
                    <div className="relative flex backdrop-blur-lg bg-white/10 rounded-full p-0 border border-white/20 shadow-lg overflow-hidden">
                        <button
                            onClick={() => setActiveTab("tech")}
                            className={`px-7 py-1.5 rounded-full transition-all ${activeTab === "tech"
                                ? "bg-white/10 text-white font-semibold"
                                : "text-white hover:text-gray-300 "
                                }`}
                        >
                            Tech
                        </button>
                        <button
                            onClick={() => setActiveTab("nontech")}
                            className={`px-7 py-1.5 rounded-full transition-all ${activeTab === "nontech"
                                ? "bg-white/10 text-white font-semibold"
                                : "text-white hover:text-gray-300"
                                }`}
                        >
                            Non Tech
                        </button>
                    </div>
                </div>

  )
}