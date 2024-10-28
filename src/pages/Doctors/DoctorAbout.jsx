import { formatDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">
          About
          <span className="text-blue-400 font-bold text-[24px] leading-9">
            Dr. James Stray
          </span>
        </h3>
        <p className="text__para"></p>
        Dr. James Stray, MD, is a highly skilled and compassionate surgeon with
        expertise, dedicated to providing patient-centered care, advancing
        surgical knowledge through research, and actively contributing to the
        well-being of the community.
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-blue-400 text-[15px] leading-6 font-semibold">
                {formatDate("06-23-2008")} - {formatDate("09-13-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-black">
                PHD
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-black">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-blue-400 text-[15px] leading-6 font-semibold">
                {formatDate("05-03-2012")} - {formatDate("04-21-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-black">
                Masters degree
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-black">
              Johns Hopkins Hospital, Baltimore
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-blue-400 text-[15px] leading-6 font-semibold">
                {formatDate("05-03-2016")} - {formatDate("10-24-2019")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-black">
                Medical Research
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-black">
              University of California, San Francisco
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
              {formatDate("05-03-2016")} - {formatDate("10-24-2019")}
            </span>
            <p className="text-[16px] leading-5 font-medium text-black">
              Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-black">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
              {formatDate("06-23-2008")} - {formatDate("09-13-2010")}
            </span>
            <p className="text-[16px] leading-5 font-medium text-black">
              Senior Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-black">
              Johns Hopkins Hospital, Baltimore
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
              {formatDate("06-23-2008")} - {formatDate("09-13-2010")}
            </span>
            <p className="text-[16px] leading-5 font-medium text-black">
              Lead Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-black">
              University of California, San Francisco
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
