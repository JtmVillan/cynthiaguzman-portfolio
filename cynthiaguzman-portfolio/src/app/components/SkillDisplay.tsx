import { CadIcon } from "../../../public/components/CadIcon";
import { FabIcon } from "../../../public/components/FabIcon";
import { HardwareIcon } from "../../../public/components/HardwareIcon";
import { ProLangIcon } from "../../../public/components/ProLangIcon";

type SkillDisplayProps = {
    data: {
        title: string;
        skill: string;
        icon: string;
    };
};

export const SkillDisplay = ({ data } : SkillDisplayProps) => {
    const {title, skill, icon} = data;
    
    function renderIcon (icon: string) {
        if (icon == "HardwareIcon") {
            return <HardwareIcon/>;
        } else if (icon=="CadIcon") {
            return <CadIcon/>;
        } else if (icon=="FabIcon") {
            return <FabIcon/>;
        } else if (icon=="ProLangIcon") {
            return <ProLangIcon/>;
        }
    };

    return (
        <div className="flex flew-col gap-8 my-8 place-items-center">
          <div className="">
            <span className="p-3 inline-block rounded-full bg-neutral text-neutral-content drop-shadow-xl">
                {renderIcon(icon)}
            </span>
          </div>
          <div className="text-base">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="text-lg">{skill}</div>
          </div>
        </div>
    );
};