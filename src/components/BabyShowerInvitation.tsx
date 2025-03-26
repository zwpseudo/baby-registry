import React from 'react';

const BabyShowerInvitation: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg flex flex-col items-center">
      <div className="relative w-full text-center px-4 sm:px-6 md:px-8 py-4 flex flex-col items-center">
        {/* Floral background image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/floral.jpeg"
            alt="Floral border"
            className="h-auto max-w-full object-contain"
          />
        </div>

        {/* Name inside the border, above ribbon */}
        <div className="relative z-10 mt-10 sm:mt-12 md:mt-44">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-dancing font-bold text-gray-700">
            Barbara Elizabeth Watford
          </h2>
        </div>

        {/* Content centered within the floral border */}
        <div className="relative z-10 max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-16 sm:mt-28 md:mt-32">
          <div className="text-center space-y-1 xs:space-y-0.5 sm:space-y-2 text-gray-400 mb-6 sm:mb-8">
            <p className="font-mrs text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
              welcome to our baby registry! we're so excited to
            </p>
            <p className="font-mrs text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight">
              be welcoming our little one into the world, and we
            </p>
            <p className="font-mrs text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight">
              truly appreciate your love and support during this
            </p>
            <p className="font-mrs text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight">
              special time. thank you for helping us get ready
            </p>
            <p className="font-mrs text-[10px] xs:text-xs sm:txt-sm md:text-base leading-tight">
              for our newest addition – we can't wait to share
            </p>
            <p className="font-mrs text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight">
              all the joy and sweet moments with you!
            </p>
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

          {/* Ultrasound Image */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-light shadow-lg">
              <img
                src="/images/ultrasound.png"
                alt="Baby Ultrasound"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyShowerInvitation;


