import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-8 w-[266px] h-[818px]">
      {/* Header Controls */}
      <div className="flex items-center gap-6">
        {/* Toggle Switch */}
        <div className="relative w-11 h-6">
          <div className="w-11 h-6 bg-[rgba(155,247,25,0.63)] rounded-[82px]" />
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-[#DACCCC] rounded-full shadow-[0px_3px_5px_rgba(0,0,0,0.41)]" />
        </div>

        {/* Notification */}
        <div className="relative w-10 h-10 border border-[#4B65A2] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C9.23858 2 7 4.23858 7 7V12L5 16H19L17 12V7C17 4.23858 14.7614 2 12 2Z"
              stroke="#6C7894"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FC0A0A] rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#DACCCC]">6</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-10">
        {/* Members Section */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="font-['Chivo'] text-[20px] leading-[24px] text-black">
              Members
            </span>
            <span className="font-['Chivo'] text-[20px] leading-[24px] text-white">
              View all
            </span>
          </div>

          <div className="bg-[#DACCCC] rounded-[24px] shadow-[0px_2px_8px_rgba(0,0,0,0.25)] p-8">
            <div className="flex flex-col gap-8">
              {/* Member List */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    name: "Jaquiline",
                    access: "Full Access",
                    image: "/members/member1.png",
                  },
                  {
                    name: "Sennorita",
                    access: "Limited Access",
                    image: "/members/member2.png",
                  },
                  {
                    name: "Firoz",
                    access: "Full Access",
                    image: "/members/member3.png",
                  },
                ].map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-['Chivo'] text-[20px] leading-[24px] text-[#1D1D1D]">
                        {member.name}
                      </span>
                      <span className="font-['Chivo'] text-[16px] leading-[19px] text-[#1D1D1D]/50">
                        {member.access}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Member Button */}
              <button className="w-[220px] h-[56px] bg-[#EAF0FE] rounded-[55px] flex items-center justify-center">
                <span className="font-['Chivo'] text-[20px] leading-[24px] text-[#3F7DF8]">
                  Add Member
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="font-['Chivo'] text-[20px] leading-[24px] text-black">
              History
            </span>
            <span className="font-['Chivo'] text-[20px] leading-[24px] text-white">
              View all
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                device: "Air Conditioner",
                status: "Turned on •",
                time: "03:20",
                color: "#6FA95D",
              },
              {
                device: "Refrigerator",
                status: "Turned on •",
                time: "01:48",
                color: "#6FA95D",
              },
              {
                device: "Air Conditioner",
                status: "Turned off •",
                time: "11:36",
                color: "#FBFB8D",
              },
              {
                device: "Coffee Machine",
                status: "Turned off •",
                time: "09:15",
                color: "#6FA95D",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-6">
                <div
                  className="absolute left-0 top-[4px] w-[11px] h-[11px] rounded-full"
                  style={{ background: item.color }}
                />
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="font-['Chivo'] text-[16px] leading-[19px] text-black">
                      {item.device}
                    </span>
                    <span className="font-['Chivo'] text-[16px] leading-[19px] text-black">
                      {item.time}
                    </span>
                  </div>
                  <span className="font-['Chivo'] text-[15px] leading-[18px] text-black/75">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
