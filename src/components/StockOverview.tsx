import React from 'react';
//import styles from '../styles/Dashboard.module.css';
import { FaBoxOpen } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { MdMoveToInbox } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

const StockOverview: React.FC = () => (
  <div className="col-span-3 bg-white rounded-lg p-2">
    
    <div className={` flex justify-between items-center gap-4`}>
      <div className="flex flex-col items-center">
        <FaBoxOpen size={30} className="mb-2 text-blue-400" /> {/* Apply blue color */}
        <p className="text-sm">Used Components</p>
        <strong className="text-lg">₹ 832</strong>
      </div>

      <div className="flex flex-col items-center">
        <FaBox size={30} className="mb-2 text-orange-400" /> {/* Apply orange color */}
        <p className="text-sm">Remaining Quantity</p>
        <strong className="text-lg">868</strong>
      </div>

      <div className="flex flex-col items-center">
        <MdMoveToInbox size={30} className="mb-2 text-purple-400" /> {/* Apply purple color */}
        <p className="text-sm">To Be Received</p>
        <strong className="text-lg">200</strong>
      </div>

      <div className="flex flex-col items-center">
        <GrMoney size={30} className="mb-2 text-green-400" /> {/* Apply green color */}
        <p className="text-sm">Total Cost</p>
        <strong className="text-lg">₹ 17,432</strong>
      </div>
    </div>
  </div>
);

export default StockOverview;
