import { useState } from 'react';

function Orders() {
  const [order, setOrder] = useState({ item: '', quantity: 1 });

  const handleOrderSubmit = () => {
    console.log('Order placed:', order);
    // here you will call backend or local storage
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-6 font-bold">Create Order</h1>
      <input 
        type="text" 
        placeholder="Enter Item (Pizza, Burger)" 
        className="border p-2 mb-4" 
        onChange={(e) => setOrder({...order, item: e.target.value})}
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        className="border p-2 mb-4" 
        onChange={(e) => setOrder({...order, quantity: e.target.value})}
      />
      <button onClick={handleOrderSubmit} className="p-4 bg-blue-600 rounded text-white">Place Order</button>
    </div>
  );
}

export default Orders;
