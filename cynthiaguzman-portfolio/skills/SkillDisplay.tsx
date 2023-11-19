import { Suspense, lazy } from "react";
import { skillData } from "../data/data";
import { CadIcon } from "../public/components/CadIcon";
import { FabIcon } from "../public/components/FabIcon";
import { HardwareIcon } from "../public/components/HardwareIcon";
import { ProLangIcon } from "../public/components/ProLangIcon";

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
        <div>
          <div className="float-right">
            <span className="p-3 inline-block rounded-full bg-primary drop-shadow-xl">
                {renderIcon(icon)}
            </span>
          </div>
          <div className="float-right">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-md">{skill}</div>
          </div>
        </div>
    );
};