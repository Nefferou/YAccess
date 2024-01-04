"use client";
import React from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import BadgeRow from "../Badges/BadgeRow";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import Badge from "../../../models/Badge";
import Subtitle from "../Subtitle/Subtitle";

type DriverProps = {
  driverPP: string;
  driverName: string;
  driverBadges: Badge[];
  driverRating: number;
  driverOnClick?: () => void;
};

const Driver: React.FC<DriverProps> = ({
  driverPP,
  driverName,
  driverBadges,
  driverRating,
  driverOnClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-center">
        <ProfilePicture src={driverPP} size="small" />
        <div className="ml-4">
          <div className="flex row">
            <Subtitle text={driverName}/>
            <BadgeRow badges={driverBadges} />
          </div>
          <Rating rating={driverRating} />
        </div>
      </div>
      <Button text="Let's go !" size="medium" handleOnClick={driverOnClick} />
    </div>
  );
};

export default Driver;
