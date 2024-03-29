const SidePanel = () => {
  return (
    <div className="shadow-2xl p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold">
          100 GBP
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-black">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          <li className="flex flex-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-black font-semibold">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-black font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex flex-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-black font-semibold">
              Friday
            </p>
            <p className="text-[15px] leading-6 text-black font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex flex-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-black font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-black font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
