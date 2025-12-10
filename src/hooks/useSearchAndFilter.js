import { useState, useMemo } from "react";

/**
 * Custom hook for search and filter functionality
 * @param {Array} items - Array of items to search/filter
 * @param {Object} options - Configuration options
 * @param {string|Function} options.searchField - Field name to search in, or function to extract searchable text
 * @param {string} options.filterField - Field name to filter by (optional)
 * @param {string} options.filterValue - Initial filter value (optional)
 * @returns {Object} - { searchQuery, setSearchQuery, filterValue, setFilterValue, filteredItems, availableFilterOptions }
 */
export const useSearchAndFilter = (items = [], options = {}) => {
  const {
    searchField = "name", // default field to search
    filterField, // field to filter by (e.g., "department")
    filterValue: initialFilterValue = "All", // initial filter value
  } = options;

  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState(initialFilterValue);

  // Get available filter options (unique values from filterField)
  const availableFilterOptions = useMemo(() => {
    if (!filterField) return [];
    const uniqueValues = new Set(items.map((item) => item[filterField]));
    return ["All", ...Array.from(uniqueValues)];
  }, [items, filterField]);

  // Filter items based on search and filter
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search filter
      let matchesSearch = true;
      if (searchQuery.trim()) {
        if (typeof searchField === "function") {
          // Custom search function
          const searchableText = searchField(item);
          matchesSearch = searchableText
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        } else {
          // Search in specific field
          const fieldValue = item[searchField] || "";
          matchesSearch = fieldValue
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        }
      }

      // Filter by field
      let matchesFilter = true;
      if (filterField && filterValue !== "All") {
        matchesFilter = item[filterField] === filterValue;
      }

      return matchesSearch && matchesFilter;
    });
  }, [items, searchQuery, filterValue, searchField, filterField]);

  return {
    searchQuery,
    setSearchQuery,
    filterValue,
    setFilterValue,
    filteredItems,
    availableFilterOptions,
  };
};
