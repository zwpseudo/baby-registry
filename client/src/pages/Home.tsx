import BabyShowerInvitation from "@/components/BabyShowerInvitation";

const Home = () => {
  const eventDetails = {
    motherName: "Barbara Elizabeth Watford",
    date: "",
    time: "",
    address: "",
    location: "",
    rsvpContact: "",
    registryUrl: "https://www.babylist.com/barbara-watford" // Example URL, replace with actual registry URL
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-white">
      <BabyShowerInvitation eventDetails={eventDetails} />
    </div>
  );
};

export default Home;
