interface CustomButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick = () => {},
    className,
}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${
                className || ""
            }`}
        >
            {label}
        </button>
    );
};

export default CustomButton;
