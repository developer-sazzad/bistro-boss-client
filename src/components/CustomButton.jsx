const CustomButton = ({ buttonText }) => {
    return (
        <div className="text-center mt-16">
            <button className="btn btn-outline btn-lg btn-warning border-1 border-b-4">
                {buttonText}
            </button>
        </div>
    );
};

export default CustomButton;