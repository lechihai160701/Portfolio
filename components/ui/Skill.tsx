import SvgIcon from "@/components/ui/SvgIcon";

const Skill = () => {
  
  return (
    <div className="min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
          <h2 className="mb-[50px] lg:mb-[78px] text-center text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
            Skills <span className="text-primary-color">Me</span>
          </h2>
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <SvgIcon />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skill;
