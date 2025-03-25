import { Link } from "wouter";
import FlowerBorder from "./FlowerBorder";

interface EventDetails {
  motherName: string;
  date: string;
  time: string;
  address: string;
  location: string;
  rsvpContact: string;
  registryUrl: string;
}

interface Props {
  eventDetails: EventDetails;
}

const BabyShowerInvitation = ({ eventDetails }: Props) => {
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg">
      <div className="p-4 md:p-12 text-center relative" style={{ minHeight: "750px" }}>
        <FlowerBorder />

        {/* Mother's Name */}
        <div className="relative z-10 mt-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Dancing_Script'] font-bold text-gray-700">
            {eventDetails.motherName}
          </h2>
        </div>

        {/* Invitation Content */}
        <div className="relative z-10 py-4 flex flex-col items-center justify-center h-full mt-20">
          <div className="w-full max-w-2xl mx-auto mb-12 text-gray-500 text-center px-4">
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              welcome to our baby registry! we're so excited to
            </p>
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              be welcoming our little one into the world, and we
            </p>
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              truly appreciate your love and support during this
            </p>
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              special time. thank you for helping us get ready
            </p>
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              for our newest addition – we can't wait to share
            </p>
            <p className="font-mrs text-base sm:text-lg md:text-xl leading-relaxed">
              all the joy and sweet moments with you!
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center mb-12">
            <a
              href={eventDetails.registryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#f8d7da] text-gray-700 text-2xl font-['Dancing_Script'] font-bold rounded-full hover:bg-[#ffb6c1] transition duration-300 shadow-md"
            >
              Registry
            </a>
          </div>

          {/* Ultrasound Image */}
          <div className="flex justify-center mb-24">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#f8d7da] shadow-lg">
              <img
                src="/static/images/ultrasound.png"
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
