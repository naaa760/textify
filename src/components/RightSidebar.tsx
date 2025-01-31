import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="w-[220px] flex flex-col gap-6">
      {/* Members Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="font-['Chivo'] text-[16px] text-black">Members</span>
          <span className="font-['Chivo'] text-[14px] text-white hover:opacity-80 cursor-pointer transition-opacity">
            View all
          </span>
        </div>

        <div className="bg-[#DACCCC]/80 backdrop-blur-sm rounded-2xl p-4 shadow-md">
          <div className="flex flex-col gap-4">
            {/* Member List */}
            <div className="flex flex-col gap-3">
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
                <div
                  key={member.name}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-all"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={32}
                      height={32}
                      className="object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Chivo'] text-[14px] text-[#1D1D1D]">
                      {member.name}
                    </span>
                    <span className="font-['Chivo'] text-[12px] text-[#1D1D1D]/50">
                      {member.access}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Member Button */}
            <button
              className="w-full h-[40px] bg-[#EAF0FE] rounded-[20px] flex items-center justify-center 
              shadow-sm hover:shadow-md hover:bg-[#EAF0FE]/90 transition-all active:scale-[0.98]"
            >
              <span className="font-['Chivo'] text-[14px] text-[#3F7DF8]">
                Add Member
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="font-['Chivo'] text-[16px] text-black">History</span>
          <span className="font-['Chivo'] text-[14px] text-white hover:opacity-80 cursor-pointer transition-opacity">
            View all
          </span>
        </div>

        <div className="flex flex-col gap-4">
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
            <div
              key={index}
              className="relative pl-4 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-all"
            >
              <div
                className="absolute left-0 top-[6px] w-[8px] h-[8px] rounded-full shadow-sm"
                style={{ background: item.color }}
              />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span className="font-['Chivo'] text-[14px] text-black">
                    {item.device}
                  </span>
                  <span className="font-['Chivo'] text-[14px] text-black">
                    {item.time}
                  </span>
                </div>
                <span className="font-['Chivo'] text-[12px] text-black/75">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
