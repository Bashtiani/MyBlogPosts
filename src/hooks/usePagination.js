import { useState, useEffect } from "react";
export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed.
    
  */
  const getFormat = (currentPage, totalPages) => {
    switch (true) {
      case currentPage === 1 && totalPages === 1:
        return [currentPage];
      case totalPages > 1 && currentPage === 2:
        return [1, currentPage, currentPage + 1, DOTS, totalPages];
      case currentPage > 2 && currentPage < totalPages - 1:
        return [
          1,
          DOTS,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          DOTS,
          totalPages,
        ];
      case currentPage > 1 && currentPage !== totalPages:
        return [1, DOTS, totalPages - 2, totalPages - 1, totalPages];
      case currentPage === totalPages:
        return [1, DOTS, currentPage - 2, currentPage - 1, totalPages];
      default:
        return [1, 2, 3, DOTS, totalPages];
    }
  };

  const [paginationToDisplay, setPaginationToDisplay] = useState(
    getFormat(currentPage, Math.ceil(totalCount / pageSize))
  );

  useEffect(() => {
    setPaginationToDisplay(
      getFormat(currentPage, Math.ceil(totalCount / pageSize))
    );
  }, [currentPage, pageSize, totalCount]);

  return paginationToDisplay;
}

export default usePagination;
