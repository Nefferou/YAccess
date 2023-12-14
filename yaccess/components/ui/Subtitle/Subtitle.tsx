type SubTitleProps = {
    text: string;
}

const Subtitle = ({text}:SubTitleProps) => {
    return (
        <h4 className="text-base">{text}</h4>
    );
};

export default Subtitle;
