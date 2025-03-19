const TabsDetails = ({ item }) => {
    // console.log('tab items', items)
    return (
        <div className="card shadow-md my-5 md:mb-12">
            <figure>
                <img className="w-full h-[200px]"
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body h-[210px] items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions mt-5 justify-end">
                    <button className="btn btn-outline btn-warning px-10 border-1 border-b-4">
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabsDetails;