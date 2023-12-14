import React from "react";
import Image from "next/image";

type ProfilePictureProps = {
    src: string;
    size: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, size }) => {
    if(size === "small"){
        return (
            <div className="y-profile-picture items-center">
                <Image
                    src={src}
                    alt="profile picture"
                    width="50"
                    height="50"
                    className="rounded-full"
                />
            </div>
        );
    }else if(size === "medium"){
        return (
            <div className="y-profile-picture items-center">
                <Image
                    src={src}
                    alt="profile picture"
                    width="100"
                    height="100"
                    className="rounded-full"
                />
            </div>
        )
    }
}

export default ProfilePicture;