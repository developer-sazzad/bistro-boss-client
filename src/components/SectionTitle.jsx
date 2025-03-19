const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center py-10">
            <p className="text-orange-500 text-lg pb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase font-bold border-y-2 border-gray-300 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;