import React from 'react';
import StockOverview from '@/components/StockOverview';
// import PurchaseOverview from '@/components/InvoiceTracker';
// import ProductSummary from '@/components/PendingRequests';
// import StockSummary from '@/components/StockSummary';
// import LowStock from '@/components/LowStock';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.05)] p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Stock Overview</h2>
        <StockOverview />
      </div>
      <div className="col-span-2 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.05)] p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Invoice Tracker</h2>
        {/* <PurchaseOverview /> */}
      </div>
      <div className="bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.05)] p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Pending Requests</h2>
        {/* <ProductSummary /> */}
      </div>
      <div className="col-span-2 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.05)] p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Stock Summary</h2>
        {/* <StockSummary /> */}
      </div>
      <div className="bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.05)] p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-600">Low Quantity Stock</h2>
          <a href="#" className="text-blue-600 text-sm hover:underline text-right">See All</a>
        </div>
        {/* <LowStock />  */}
      </div>
    </div>
  );
};

export default Dashboard;

