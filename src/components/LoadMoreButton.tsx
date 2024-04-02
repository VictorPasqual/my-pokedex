import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, isLoading, hasMore }) => {
  return (
    <div className="pagination">
       {hasMore && (
        <button className="load-more-button" onClick={onClick} disabled={isLoading}>
          {isLoading ? <FaSpinner className="loading-spinner" /> : 'Load More'}
        </button>
      )}    
    </div>
  );
};

export default LoadMoreButton;
