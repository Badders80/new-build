'use client';

import { useState } from 'react';

export default function MyStablePage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showListModal, setShowListModal] = useState(false);

  const portfolioData = [
    {
      name: 'Zeddiani',
      ownership: '7.5%',
      lastRace: '2nd, 23 Jul',
      roi: '+12.3%',
      roiPositive: true
    },
    {
      name: 'Rapid Accord',
      ownership: '3%',
      lastRace: '1st, 9 Jul',
      roi: '+28.1%',
      roiPositive: true
    },
    {
      name: 'Summer Breeze',
      ownership: '2%',
      lastRace: '4th, 17 Jul',
      roi: '-2.6%',
      roiPositive: false
    }
  ];

  const marketplaceData = [
    {
      name: 'Lightning Strike',
      sharesAvailable: '15% Available',
      listingPrice: '$2,400',
      minLot: '1%',
      nextRace: '5 Aug'
    },
    {
      name: 'Golden Dawn',
      sharesAvailable: '8% Available',
      listingPrice: '$3,200',
      minLot: '2%',
      nextRace: '12 Aug'
    },
    {
      name: 'Storm Chaser',
      sharesAvailable: '20% Available',
      listingPrice: '$1,800',
      minLot: '1%',
      nextRace: '18 Aug'
    }
  ];

  const recentlyListed = [
    { name: 'Solar Flare', price: '$2,150', available: '2%', nextRace: '7 Aug' },
    { name: 'Midnight Runner', price: '$3,800', available: '5%', nextRace: '10 Aug' },
    { name: 'Crimson Thunder', price: '$1,950', available: '3%', nextRace: '14 Aug' },
    { name: 'Ocean Breeze', price: '$2,750', available: '4%', nextRace: '16 Aug' }
  ];

  const biggestGainers = [
    { name: 'Rapid Accord', roi: '+28.1%', change: '+5.2%' },
    { name: 'Desert Storm', roi: '+19.7%', change: '+3.8%' },
    { name: 'Silver Bullet', roi: '+15.4%', change: '+2.9%' }
  ];

  const activityFeed = [
    { action: 'You bought 2% of Zeddiani', time: '2 hours ago', type: 'purchase' },
    { action: "Golden Dawn's next race: 12 Aug", time: '4 hours ago', type: 'race' },
    { action: 'Rapid Accord won 1st place', time: '1 day ago', type: 'win' },
    { action: 'You sold 1% of Summer Breeze', time: '2 days ago', type: 'sale' }
  ];

  const marketInsights = {
    volume24h: '$47,200',
    mostTraded: 'Lightning Strike',
    totalOwners: '1,247',
    avgROI: '+8.3%'
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  if (!isWalletConnected) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Connect Wallet Screen */}
        <section className="flex flex-col items-center justify-center min-h-screen px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight" style={{
              fontWeight: 500,
              letterSpacing: '0.03em',
              fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif'
            }}>
              MY
              <span className="text-[#d4a964] ml-1" style={{
                fontWeight: 400,
                fontStyle: 'italic'
              }}>STABLE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#B0B0B0] mb-16 leading-relaxed font-light">
              Your private portal to digital racehorse ownership
            </p>
            
            <button 
              onClick={handleConnectWallet}
              className="bg-black border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-white px-12 py-4 text-sm font-medium uppercase transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/30 flex items-center gap-3 mx-auto group"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Connect Wallet
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-8 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight" style={{
            fontWeight: 500,
            letterSpacing: '0.03em',
            fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif'
          }}>
            MY
            <span className="text-[#d4a964] ml-1" style={{
              fontWeight: 400,
              fontStyle: 'italic'
            }}>STABLE</span>
          </h1>
          <p className="text-lg md:text-xl text-[#B0B0B0] leading-relaxed font-light">
            Your private portal to digital racehorse ownership
          </p>
        </div>
      </section>

      {/* Quick Actions & Market Insights */}
      <section className="py-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-transparent border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-black px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Buy Shares
                </button>
                <button className="bg-transparent border border-[#747474] text-[#B0B0B0] hover:border-[#d4a964] hover:text-[#d4a964] px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                  Sell Shares
                </button>
                <button className="bg-transparent border border-[#747474] text-[#B0B0B0] hover:border-[#d4a964] hover:text-[#d4a964] px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Withdraw Winnings
                </button>
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-4">Market Insights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d4a964] mb-1">{marketInsights.volume24h}</div>
                  <div className="text-xs text-[#B0B0B0] uppercase tracking-wider">24h Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white mb-1">{marketInsights.mostTraded}</div>
                  <div className="text-xs text-[#B0B0B0] uppercase tracking-wider">Most Traded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{marketInsights.totalOwners}</div>
                  <div className="text-xs text-[#B0B0B0] uppercase tracking-wider">Total Owners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d4a964] mb-1 flex items-center justify-center gap-1">
                    {marketInsights.avgROI}
                    <svg className="w-4 h-4 text-[#d4a964]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div className="text-xs text-[#B0B0B0] uppercase tracking-wider">Avg ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Listed & Biggest Gainers */}
      <section className="py-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recently Listed */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-white">Recently Listed</h2>
                <div className="w-12 h-0.5 bg-[#d4a964]"></div>
              </div>
              <div className="space-y-4">
                {recentlyListed.map((horse, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:shadow-lg hover:shadow-[#d4a964]/10 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-white group-hover:text-[#d4a964] transition-colors duration-300">{horse.name}</h3>
                        <p className="text-sm text-[#B0B0B0]">{horse.available} available · Next Race: {horse.nextRace}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-medium text-[#d4a964]">{horse.price}</div>
                        <button className="text-xs text-[#B0B0B0] hover:text-[#d4a964] transition-colors duration-300">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Biggest Gainers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-white">Biggest Gainers</h2>
                <div className="w-12 h-0.5 bg-[#d4a964]"></div>
              </div>
              <div className="space-y-4">
                {biggestGainers.map((horse, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:shadow-lg hover:shadow-[#d4a964]/10 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-white group-hover:text-[#d4a964] transition-colors duration-300">{horse.name}</h3>
                        <p className="text-sm text-[#B0B0B0]">Year to Date Performance</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#d4a964] flex items-center gap-2">
                          {horse.roi}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                        </div>
                        <div className="text-sm text-[#d4a964]">{horse.change} today</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Your Horses
            </h2>
            <div className="w-16 h-0.5 bg-[#d4a964]"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
            <div className="border-t-2 border-[#d4a964]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-6 font-medium text-[#B0B0B0] uppercase tracking-wider text-sm">Horse</th>
                      <th className="text-left py-4 px-6 font-medium text-[#B0B0B0] uppercase tracking-wider text-sm">Ownership %</th>
                      <th className="text-left py-4 px-6 font-medium text-[#B0B0B0] uppercase tracking-wider text-sm">Last Race</th>
                      <th className="text-left py-4 px-6 font-medium text-[#B0B0B0] uppercase tracking-wider text-sm">ROI (YTD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioData.map((horse, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 hover:shadow-lg hover:shadow-[#d4a964]/10 transition-all duration-300 group">
                        <td className="py-4 px-6 font-medium text-white group-hover:text-[#d4a964] transition-colors duration-300">{horse.name}</td>
                        <td className="py-4 px-6 text-[#B0B0B0]">{horse.ownership}</td>
                        <td className="py-4 px-6 text-[#B0B0B0]">{horse.lastRace}</td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            horse.roiPositive 
                              ? 'bg-[#d4a964] text-black' 
                              : 'bg-[#747474] text-white'
                          }`}>
                            {horse.roi}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Marketplace — Available Horses
              </h2>
              <div className="w-16 h-0.5 bg-[#d4a964]"></div>
            </div>
            <button 
              onClick={() => setShowListModal(true)}
              className="bg-transparent border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-black px-6 py-3 text-sm font-medium uppercase transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/30 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              List a Horse
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceData.map((horse, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:shadow-lg hover:shadow-[#d4a964]/20 transition-all duration-300 group">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4a964] transition-colors duration-300">{horse.name}</h3>
                  <div className="flex justify-between items-center text-sm text-[#B0B0B0] mb-1">
                    <span>Shares Available</span>
                    <span className="text-white">{horse.sharesAvailable}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B0B0B0] mb-1">
                    <span>Listing Price</span>
                    <span className="text-white font-medium">{horse.listingPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B0B0B0] mb-1">
                    <span>Min. Lot</span>
                    <span className="text-white">{horse.minLot}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B0B0B0]">
                    <span>Next Race</span>
                    <span className="text-white">{horse.nextRace}</span>
                  </div>
                </div>
                
                <button className="w-full bg-transparent border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-black py-2 px-4 text-sm font-medium uppercase transition-all duration-300 ease-in-out transform hover:scale-105">
                  Buy Shares
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Your Activity
              </h2>
              <div className="w-16 h-0.5 bg-[#d4a964]"></div>
            </div>
            
            <div className="space-y-4">
              {activityFeed.map((activity, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === 'purchase' ? 'bg-[#d4a964]' : 
                      activity.type === 'win' ? 'bg-green-500' : 
                      activity.type === 'sale' ? 'bg-blue-500' : 'bg-[#747474]'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white group-hover:text-[#d4a964] transition-colors duration-300">{activity.action}</p>
                      <p className="text-sm text-[#B0B0B0] mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* List Horse Modal */}
      {showListModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 backdrop-blur-xl border border-[#d4a964]/30 rounded-lg p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">List a Horse</h3>
              <button 
                onClick={() => setShowListModal(false)}
                className="text-[#747474] hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Horse Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-[#747474] focus:border-[#d4a964] focus:outline-none transition-colors duration-300"
                  placeholder="Enter horse name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Percentage to List</label>
                <input 
                  type="number" 
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-[#747474] focus:border-[#d4a964] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 5"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Price per %</label>
                <input 
                  type="number" 
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-[#747474] focus:border-[#d4a964] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Minimum Lot Size</label>
                <input 
                  type="number" 
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-[#747474] focus:border-[#d4a964] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 1"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowListModal(false)}
                  className="flex-1 bg-transparent border border-[#747474] text-[#B0B0B0] hover:border-white hover:text-white py-3 px-4 text-sm font-medium transition-all duration-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-[#d4a964] text-black hover:bg-[#d4a964]/90 py-3 px-4 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  List Horse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </div>
  );
}
