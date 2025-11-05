const ItemList = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <div key={item.id} resData={item} className="m-4 p-4 border border-gray-300 rounded-lg w-60">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">₹{item.price / 100}</p>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
