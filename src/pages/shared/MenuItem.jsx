
const MenuItem = ({item}) => {
    const {image, name, price, recipe } = item;
    return (
        <div className="flex gap-5">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] h-[100px]" src={image} alt="" />
            <div>
                <h3 className="text-2xl font-medium uppercase">{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-orange-400 text-2xl">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;