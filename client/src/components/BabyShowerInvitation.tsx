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
    <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 md:p-12 text-center relative" style={{ aspectRatio: '0.75', minHeight: '750px' }}>
        <FlowerBorder />
        
        {/* Invitation content */}
        <div className="relative z-10 py-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-5xl font-['Dancing_Script'] font-bold mb-12 text-gray-700">{eventDetails.motherName}</h2>
          
          <div className="max-w-md mx-auto mb-12 text-gray-600">
            <p className="welcome-text text-lg md:text-xl mb-2">Welcome to our Baby Registry! We're so excited to</p>
            <p className="welcome-text text-lg md:text-xl mb-2">be welcoming our little one into the world, and we</p>
            <p className="welcome-text text-lg md:text-xl mb-2">truly appreciate your love and support during this</p>
            <p className="welcome-text text-lg md:text-xl mb-2">special time. Thank you for helping us get ready</p>
            <p className="welcome-text text-lg md:text-xl mb-2">for our newest addition - we can't wait to share</p>
            <p className="welcome-text text-lg md:text-xl">all the joy and sweet moments with you!</p>
          </div>
          
          {/* Button */}
          <div className="flex justify-center mb-12">
            <a 
              href={eventDetails.registryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#f8d7da] text-gray-700 text-lg font-serif font-normal rounded-lg hover:bg-[#ffb6c1] transition duration-300 shadow-md"
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
