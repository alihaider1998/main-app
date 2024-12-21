// src/components/Dashboard.jsx
function Dashboard() {
  return (
    <div className="p-6 rounded-lg shadow bg-re">
      <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="font-bold">Statistics</h3>
          <p>Sample dashboard content</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="font-bold">Activities</h3>
          <p>Sample dashboard content</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg">
          <h3 className="font-bold">Summary</h3>
          <p>Sample dashboard content</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
