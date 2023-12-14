import Image from "next/image";
import React from "react";
import Badge from "../../../models/Badge";

type BadgeProps = {
  type: Badge;
};

const BadgeIcon: React.FC<BadgeProps> = ({ type }) => {
  const SHIELD = "/Badge/SHIELD.svg";
  const TCHAT_BUBBLE = "/Badge/TCHAT_BUBBLE.svg";
  const COMPASS = "/Badge/COMPASS.svg";
  const MEDAL = "/Badge/MEDAL.svg";
  const SUN = "/Badge/SUN.svg";
  const MUSIC_NOTE = "/Badge/MUSIC_NOTE.svg";
  const CROWN = "/Badge/CROWN.svg";
  const TROPHY = "/Badge/TROPHY.svg";
  
switch (type) {
    case Badge.SHIELD:
        return (
            <Image
            src={SHIELD}
            alt="SHIELD"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.TCHAT_BUBBLE:
        return (
            <Image
            src={TCHAT_BUBBLE}
            alt="TCHAT_BUBBLE"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.COMPASS:
        return (
            <Image
            src={COMPASS}
            alt="COMPASS"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.MEDAL:
        return (
            <Image
            src={MEDAL}
            alt="MEDAL"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.SUN:
        return (
            <Image
            src={SUN}
            alt="SUN"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.MUSIC_NOTE:
        return (
            <Image
            src={MUSIC_NOTE}
            alt="MUSIC_NOTE"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.CROWN:
        return (
            <Image
            src={CROWN}
            alt="CROWN"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    case Badge.TROPHY:
        return (
            <Image
            src={TROPHY}
            alt="TROPHY"
            width="20"
            height="20"
            unoptimized={true}
            />
        );
    }
};

export default BadgeIcon;
