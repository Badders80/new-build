import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white -mt-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Horse-Double-Black.png"
            alt="Horses"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/Copy of Evolution Brand Kit (11 x 4 in).png"
              alt="Evolution Stables"
              width={440}
              height={160}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="our-mission" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <p className="text-sm uppercase tracking-widest text-[#747474] mb-8">OUR MISSION</p>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              OWNERSHIP<br />
              RE-IMAGINED
            </h2>
            
            <div className="max-w-4xl mb-12">
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Traditional racehorse ownership — expensive, restrictive, and 
                opaque — has historically excluded those who dream of 
                experiencing the thrill firsthand.
              </p>
              
              <p className="text-lg md:text-xl text-white leading-relaxed">
                <span className="text-[#d4a964] font-semibold">Evolution Stables</span> removes these barriers, delivering ownership 
                that&apos;s <span className="text-[#d4a964] font-semibold">genuinely accessible</span>, <span className="text-[#d4a964] font-semibold">fully transparent</span>, and <span className="text-[#d4a964] font-semibold">uniquely liquid</span>.
              </p>
            </div>
            
            <button className="bg-black border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-white px-8 py-3 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/20 flex items-center gap-2">
              JOIN THE REVOLUTION
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Hooves Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hooves-on-grass.png"
            alt="Hooves on grass"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 15%' }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <p className="text-sm uppercase tracking-widest text-[#747474] mb-8">ABOUT</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              OWNERSHIP, THE<br />
              EVOLUTION WAY
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">○</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Accessible Ownership</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Racehorse ownership used to be complex and out of reach. We&apos;ve removed the traditional barriers and simplified the journey, giving you a straightforward path to experience the thrill of the winner&apos;s circle.
              </p>
            </div>
            
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">◊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparency in Our DNA</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Our model is built to minimise hassle and maximise excitement. Every detail, from costs to potential returns, is clear before you commit—no guesswork, no hidden surprises, just the pure exhilaration of ownership.
              </p>
            </div>
            
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">☐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Your Racing World, Centralised</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Manage your entire experience from one simple, secure digital hub. Track your horse&apos;s training, communicate with your syndicate, and monitor financials—everything at your fingertips.
              </p>
            </div>
            
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">→</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">From International Fan to Local Owner</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                We&apos;re closing the distance between the world&apos;s racing fans and New Zealand&apos;s elite stables. Our platform lets you become a local owner, unlocking the potential of world-class bloodstock and the liquidity of a modern, borderless offering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horse and Foal Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Horse-and-foal.jpg"
            alt="Horse and foal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <p className="text-sm uppercase tracking-widest text-[#747474] mb-8">INNOVATION</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              DIGITAL<br />
              <span className="text-[#d4a964]">SYNDICATION</span>
            </h2>
            <p className="text-lg md:text-xl text-[#B0B0B0] mb-16">
              The modern way to experience ownership — for investors and everyday owners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              By tokenising ownership into accessible shares, we&apos;ve created a 
              modern evolution of racing&apos;s age-old tradition — syndication. Each 
              digital share represents a stake in a real-world racehorse, 
              connecting your investment directly to its performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">○</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Fractional Ownership</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Own a percentage of a racehorse without the traditional barriers. Start with as little as you&apos;re comfortable with.
              </p>
            </div>
            
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">◊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Performance Linked</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Your returns are directly tied to your horse&apos;s success on the track. Win, place, or show — you share in the glory.
              </p>
            </div>
            
            <div>
              <div className="w-8 h-8 bg-[#d4a964] rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold text-sm">→</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Community Driven</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Join a community of passionate owners, share the excitement, celebrate victories, and build lasting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Landscape-digitaloverlay.jpg"
            alt="Digital landscape overlay"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      </section>

      {/* MyStable Section */}
      <section id="mystable" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <p className="text-sm uppercase tracking-widest text-[#747474] mb-8">MYSTABLE</p>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              Everything you need, in one<br />
              <span className="text-[#d4a964]">stable</span> place.
            </h2>
            
            <div className="max-w-4xl mb-12">
              <p className="text-lg md:text-xl text-[#B0B0B0] leading-relaxed">
                Manage your ownership, monitor your assets, and stay connected — simply, securely, and all in one spot.
              </p>
            </div>
            
            <button className="bg-black border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-white px-8 py-3 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/20 flex items-center gap-2">
              Enter MyStable Central
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Race Track Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/race-track-curve.jpg"
            alt="Race track curve"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      </section>
    </div>
  );
}
