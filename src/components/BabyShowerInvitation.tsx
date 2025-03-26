import React from 'react';

const BabyShowerInvitation: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg flex flex-col items-center">
      <div className="relative w-full text-center px-4 sm:px-6 md:px-8 py-4 flex flex-col items-center">
        {/* Name above the ultrasound */}
        <div className="mt-10 sm:mt-12 md:mt-44">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-dancing font-bold text-gray-700">
            Barbara Elizabeth Watford
          </h2>
        </div>

        {/* Content centered where text used to be */}
        <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-16 sm:mt-28 md:mt-32">
          {/* Ultrasound Image replacing the text */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-light shadow-lg">
              <img
                src="/images/ultrasound.png"
                alt="Baby Ultrasound"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Registry Button */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <a
              href="https://my.babylist.com/brooke-watford"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-light text-gray-700 text-lg sm:text-xl md:text-2xl font-dancing font-bold rounded-full hover:bg-pink-hover transition duration-300 shadow-md"
            >
              Registry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyShowerInvitation;


