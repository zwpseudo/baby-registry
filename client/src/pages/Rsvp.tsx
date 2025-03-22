import RSVPForm from "@/components/RSVPForm";
import { Link } from "wouter";

const Rsvp = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-8">
        <h1 className="text-2xl md:text-3xl font-serif uppercase tracking-widest mb-6 text-center text-gray-700">RSVP</h1>
        <p className="text-center mb-8 text-gray-600">Please let us know if you'll be joining us for Brooke Watford's baby shower.</p>
        
        <RSVPForm />
        
        <div className="mt-8 text-center">
          <Link href="/">
            <a className="text-sm text-gray-500 hover:underline">← Back to invitation</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;