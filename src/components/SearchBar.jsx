import { useState } from "react";
import { Input } from "antd";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Input
      placeholder="Search food..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;