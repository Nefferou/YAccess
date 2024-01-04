type UserNameProps = {
    username: string;
}

const UserName = ({username}:UserNameProps) => {
    return (
        <h3 className="text-lg text-white-primary">{username}</h3>
    );
};

export default UserName;
