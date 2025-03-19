
const RecommendsChefCards = ({ chef }) => {
    const { image, name, recipe } = chef;
    return (
        <div className="card shadow-md mb-12">
            <figure>
                <img className="w-full h-[200px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body h-[210px] items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mt-5 justify-end">
                    <button className="btn btn-outline btn-warning border-1 border-b-4">
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendsChefCards;