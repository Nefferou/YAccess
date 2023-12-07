type TitleProps = {
    text: string;
    subtitle?: string;
    placement?: 'left' | 'center' | 'right';
}

const Title = ({ text, subtitle, placement = 'left' }: TitleProps) => {
    const placementClass = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right',
    }[placement];

    return (
        <>
            <h1 className={`text-3xl font-semibold ${placementClass} tracking-wider`}>{text}</h1>
            {subtitle && <h2 className={`text-xs ${placementClass}`}>{subtitle}</h2>}
        </>
    );
};


export default Title;
