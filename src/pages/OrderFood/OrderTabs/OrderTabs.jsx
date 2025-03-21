
import OrderCard from './../OrderCard/OrderCard';

const OrderTabs = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 md:mb-24">
            {
                items.map(item => <OrderCard
                    key={item._id}
                    item={item}></OrderCard>)
            }
        </div>
    );
};

export default OrderTabs;