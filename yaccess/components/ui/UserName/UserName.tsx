type UserNameProps = {
    username: string;
    color?: 'white-primary' | 'blue-primary';
}

const UserName = ({username, color= 'white-primary'}:UserNameProps) => {
    const colorClass = {
        'white-primary': 'text-white-primary',
        'blue-primary': 'text-blue-primary',
    }[color];

    return (
        <h3 className={`text-sm ${colorClass}`}>{username}</h3>
    );
};

export default UserName;
