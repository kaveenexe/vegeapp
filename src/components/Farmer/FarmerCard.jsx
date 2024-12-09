import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import feather from 'feather-icons';

const chevronIcon = feather.icons['chevron-down'].toSvg({
  width: 24,
  height: 24,
  class: 'w-6 h-6'
});

export function FarmerCard({ farmer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-3">
      <div className="flex gap-5 justify-between px-3.5 py-6 rounded-xl border border-gray-200 border-solid bg-stone-50 shadow-[0px_1px_1px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <div>
          <h3 className="text-base font-medium">{farmer.name}</h3>
          <span className="text-xs text-zinc-500">{farmer.nic}</span>
          {farmer.phone && (
            <>
              <br />
              <span className="text-xs text-zinc-500">{farmer.phone}</span>
            </>
          )}
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="focus:outline-none" aria-expanded={isExpanded} aria-label="Toggle details">
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <div dangerouslySetInnerHTML={{ __html: chevronIcon }} />
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-3 mt-1 rounded-b-xl border border-gray-200"
          >
            <div className="h-32" aria-label="Expanded farmer details"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

FarmerCard.propTypes = {
  farmer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nic: PropTypes.string.isRequired,
    phone: PropTypes.string
  }).isRequired
};
