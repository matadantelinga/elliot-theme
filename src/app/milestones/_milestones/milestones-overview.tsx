export const MilestonesOverview = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 py-4">
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg p-6 text-center bg-[#080A08]/65">
            <div className="font-extrabold text-white text-xl">$10,000</div>
            <div className="text-gray-400 text-xs">Current Wagger</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg p-6 text-center bg-[#080A08]/65">
            <div className="font-extrabold text-white text-xl">4</div>
            <div className="text-gray-400 text-xs">Rewards Claimed</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg p-6 text-center bg-[#080A08]/65">
            <div className="font-extrabold text-white text-xl">25.00%</div>
            <div className="text-gray-400 text-xs">To Next Reward</div>
          </div>
        </div>
      </div>
    </>
  );
};
