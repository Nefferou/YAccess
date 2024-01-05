import Image from "next/image";
import React from "react";
import Badge from "../../../models/Badge";

type BadgeProps = {
    type: Badge;
    height?: 'small' | 'medium'
};

const BadgeIcon: React.FC<BadgeProps> = ({ type, height='medium' }) => {
    const SHIELD = "/Badge/SHIELD.svg";
    const TCHAT_BUBBLE = "/Badge/TCHAT_BUBBLE.svg";
    const COMPASS = "/Badge/COMPASS.svg";
    const MEDAL = "/Badge/MEDAL.svg";
    const SUN = "/Badge/SUN.svg";
    const MUSIC_NOTE = "/Badge/MUSIC_NOTE.svg";
    const CROWN = "/Badge/CROWN.svg";
    const TROPHY = "/Badge/TROPHY.svg";

    const [width, badgeHeight] = height === 'medium' ? [20, 20] : [10, 10];

    switch (type) {
        case Badge.SHIELD:
            return (
                <Image
                    src={SHIELD}
                    alt="SHIELD"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.TCHAT_BUBBLE:
            return (
                <Image
                    src={TCHAT_BUBBLE}
                    alt="TCHAT_BUBBLE"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.COMPASS:
            return (
                <Image
                    src={COMPASS}
                    alt="COMPASS"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.MEDAL:
            return (
                <Image
                    src={MEDAL}
                    alt="MEDAL"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.SUN:
            return (
                <Image
                    src={SUN}
                    alt="SUN"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.MUSIC_NOTE:
            return (
                <Image
                    src={MUSIC_NOTE}
                    alt="MUSIC_NOTE"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.CROWN:
            return (
                <Image
                    src={CROWN}
                    alt="CROWN"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
        case Badge.TROPHY:
            return (
                <Image
                    src={TROPHY}
                    alt="TROPHY"
                    width={width}
                    height={badgeHeight}
                    unoptimized={true}
                />
            );
    }
};

export default BadgeIcon;
