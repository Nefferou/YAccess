import React from "react";
import Badge from "../../../models/Badge";
import BadgeIcon from "./BadgeIcon";

type BadgeRowProps = {
    badges: Badge[];
    badgesHeight?: 'small' | 'medium'
};

const BadgeRow: React.FC<BadgeRowProps> = ({ badges, badgesHeight ='medium' }) => {
    const badgeIcons = badges.map((badge) => (
        <BadgeIcon type={badge} height={badgesHeight} />
    ));

    if(badgesHeight == "small"){
        return (
            <div className="flex items-center ">{badgeIcons}</div>
        );
    }else{
        <div className="flex items-center gap-2">{badgeIcons}</div>
    }
    
};

export default BadgeRow;
