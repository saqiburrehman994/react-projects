import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchResult } from "../components/SearchResult/SearchResult";
const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All"); // State for filter type
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (category) => {
    setFilterType(category);
  };

  const filteredData = data?.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilterType = filterType === "All" || item.type === filterType;
    return matchesSearchTerm && matchesFilterType;
  });
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  // Log `data` whenever it changes
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className="search">
          <input
            placeholder="Search Food"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={() => handleFilterChange("All")}>All</Button>
        <Button onClick={() => handleFilterChange("breakfast")}>
          Breakfast
        </Button>
        <Button onClick={() => handleFilterChange("lunch")}>Lunch</Button>
        <Button onClick={() => handleFilterChange("dinner")}>Dinner</Button>
      </FilterContainer>
      <SearchResult data={filteredData} />
    </Container>
  );
};

export default App;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      height: 40px;
      border: 1px solid red;
      border-radius: 5px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
`;
