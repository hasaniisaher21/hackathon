function StaffQueue() {
    const orders = [
      { id: 1, item: 'Veg Pizza', group: 'NW Pizza', status: 'WIP' },
      { id: 2, item: 'Burger', group: 'Burger', status: 'WIP' },
    ];
  
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Staff Queue</h1>
        <ul>
          {orders.map(order => (
            <li key={order.id} className="mb-2 p-4 border rounded">
              {order.item} - {order.group} - {order.status}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default StaffQueue;
  