type LabelProps = {
    text: string;
}

const Label = ({text}: LabelProps) => {
    return (
        <h5 className="text-base text-white-primary">{text}</h5>
    );
};

export default Label;
