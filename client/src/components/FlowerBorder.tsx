const FlowerBorder = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        {/* Full border image */}
        <img 
          src="/images/floral.jpg" 
          alt="Floral border" 
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FlowerBorder;
