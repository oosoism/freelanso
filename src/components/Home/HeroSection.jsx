import React from 'react'

function HeroSection() {
  return (
    <div>
              <section className="relative bg-[#040404] p-8 flex flex-col lg:flex-row justify-between">
            <div className="flex-1 space-y-8">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-gray-900">Best Creative Agency</h1>
                </div>
                
                <div className="flex space-x-4">
                    <button className="bg-gray-300 w-full h-16 rounded-lg"></button>
                    <button className="bg-gray-300 w-full h-16 rounded-lg"></button>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-gray-300 w-1/2 h-32 rounded-lg"></div>
                    <div className="bg-gray-300 w-1/2 h-32 rounded-lg"></div>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center relative">
            </div>

            <div className="flex-1 space-y-8">
                <div className="bg-gray-300 w-full h-48 rounded-lg shadow-md"></div>
                <div className="bg-gray-300 w-full h-48 rounded-lg shadow-md"></div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection
