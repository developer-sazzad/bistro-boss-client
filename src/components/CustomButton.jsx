const CustomButton = ({ buttonText }) => {
    return (
        <div className="text-center mt-16">
            <button className="btn btn-outline text-orange-400 hover:text-white hover:bg-orange-400 border-1 border-b-4 border-orange-400">
                {buttonText}
            </button>
        </div>
    );
};

export default CustomButton;