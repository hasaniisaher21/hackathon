import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10 p-6">
      {/* Dashboard Heading and Buttons */}
      <h1 className="text-2xl mb-6 font-bold">Dashboard</h1>
      <button onClick={() => navigate('/orders')} className="p-4 bg-blue-500 rounded mb-4 text-white">
        Create Orders
      </button>
      <button onClick={() => navigate('/staff')} className="p-4 bg-green-500 rounded mb-4 text-white">
        Staff Queue
      </button>
      <button onClick={() => navigate('/consolidation')} className="p-4 bg-purple-500 rounded text-white">
        Consolidation
      </button>

      {/* Divider */}
      <div className="w-full border-t my-10"></div>

      {/* Green Grillers Co. Recipe Website */}
      <div className="bg-[#f9f2e7] w-full p-8 rounded-lg flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center">
          The Green Grillers Co. Recipe
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First card */}
          <div className="flex flex-col items-center">
            <img
              src="/lettuce.png" // Make sure you place lettuce.png in your /public folder
              alt="Healthier"
              className="w-64 h-64 object-cover rounded-3xl"
            />
            <div className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold text-center">
              Healthier
            </div>
          </div>

          {/* Second card */}
          <div className="flex flex-col items-center">
            <img
              src="/pizza.png" // Place pizza.png in /public
              alt="Sustainable"
              className="w-64 h-64 object-cover rounded-3xl"
            />
            <div className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full font-semibold text-center">
              Sustainable
            </div>
          </div>

          {/* Third card */}
          <div className="flex flex-col items-center">
            <img
              src="/fries.png" // Place fries.png in /public
              alt="Just as Delicious"
              className="w-64 h-64 object-cover rounded-3xl"
            />
            <div className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-semibold text-center">
              Just as Delicious
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
