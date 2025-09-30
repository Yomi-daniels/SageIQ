const BackgroundCard = ({ children, className }) => {
  return (
    <div className={`relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 ${className}`}>
      <div className="relative bg-n-8 rounded-[1rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BackgroundCard;
