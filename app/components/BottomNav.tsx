import { NotebookPen, Pencil, Plus, Weight, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const BottomNav = ({ user }: { user: boolean }) => {
  const [isFabExpanded, setIsFabExpanded] = useState(false);

  function handleFabClick() {
    setIsFabExpanded(!isFabExpanded);
  }
  return (
    <>
      {user && (
        <div className="fixed bottom-10 right-8 z-50">
          {/* Expanded buttons */}
          <div
            className={`absolute bottom-16 right-2 flex flex-col gap-4 transition-all duration-300 ${
              isFabExpanded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <Link to={`/sticky-notes`}>
              <button className="cursor-pointer w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
                <NotebookPen className="w-6 h-6 text-white" />
              </button>
            </Link>
            <Link to={`/weight-dashboard`}>
              <button className="cursor-pointer w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
                <Weight className="w-6 h-6 text-white" />
              </button>
            </Link>
            <Link to={`/upload`}>
              <button className="cursor-pointer w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
                <Pencil className="w-6 h-6 text-white" />
              </button>
            </Link>
          </div>

          {/* Main FAB */}
          <button
            onClick={handleFabClick}
            className={`cursor-pointer w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 
            
          `}
          >
            {isFabExpanded ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Plus className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default BottomNav;
