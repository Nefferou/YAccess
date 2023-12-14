type SubTitleProps = {
    text: string;
    color?: 'white-primary' | 'blue-primary';
}

const Subtitle = ({text, color = 'white-primary'}: SubTitleProps) => {
    const colorClass = {
        'white-primary': 'text-white-primary',
        'blue-primary': 'text-blue-primary',
    }[color];

    return (
        <h4 className={`text-2xl ${colorClass} font-bold tracking-wide`}>{text}</h4>
    );
};

export default Subtitle;
