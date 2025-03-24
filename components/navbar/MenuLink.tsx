interface MenuLinkProps {
    label: string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="px-5 py-4 transition cursor-pointer hover:bg-gray-100 rounded-xl"
        >
            {label}
        </div>
    );
};

export default MenuLink;
