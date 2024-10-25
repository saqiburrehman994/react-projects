import React from "react";
import styled from "styled-components";
import { Button } from "../../src/App";
export const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map((value, i) => (
          <FoodCard key={i}>
            <div className="image_section">
              <img
                src={`http://localhost:9000${value.image}`}
                alt="Food item"
              />
            </div>
            <div className="text_section">
              <h4>{value.name}</h4>
              <p>{value.text}</p>
              <div className="btn">
                <Button>${value.price}</Button>
              </div>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};
const FoodContainer = styled.section`
  background-image: url("./background.png");
  height: calc(100vh - 210px);
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const FoodCard = styled.div`
  width: 340px;
  display: flex;
  border-width: 0.66px;
  border-style: solid;
  border-radius: 20px;
  justify-content: space-between;
  padding: 5px;
  backdrop-filter: blur(10px);
  .btn {
    display: flex;
    justify-content: end;
  }
  .text_section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
