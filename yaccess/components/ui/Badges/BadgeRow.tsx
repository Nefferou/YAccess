import React from "react";
import Badge from "../../../models/Badge";
import BadgeIcon from "./BadgeIcon";

type BadgeRowProps = {
    badges: Badge[];
};

const BadgeRow: React.FC<BadgeRowProps> = ({ badges }) => {
    const badgeIcons = badges.map((badge) => (
        <BadgeIcon type={badge} />
    ));

    return (
        <div className="flex items-center gap-2">{badgeIcons}</div>
    );
};

export default BadgeRow;
