import styled, { keyframes } from 'styled-components';
import shipImage from 'assets/ship.png';

export const ProductWrapper = styled.div`
  background-color: #e9e3ce;
  box-shadow: 0px 0px 15px 1px rgba(0,100,255,0.8);
  border-radius: 4px;
  margin: 14px;
  padding: 6px;
  height: 300px;
  display: grid;
  grid-template-rows: auto 1fr 25px 35px;
`;

export const ProductName = styled.p`
  font-family: 'Star Jedi', arial;
  text-align: center;
  margin: 4px;
  font-size: 20px;
  padding: 4px;
  background-color: #656565;
  color: #fff;
`;

export const ProductManufacturersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ManufacturersTitleWrapper = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductManufacturerName = styled.span`
  background-color: #B0B0B0;
  margin: 4px 2px;
`;

export const ProductCostWrapper = styled.span`
  background: #a5c2bd;
  width: 100%;
  display: block;
  text-align: right;
`;

export const ProductFormWrapper = styled.div`
  .product-form {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const DataLoader = styled.div`
  width: 150px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;
  background: url(${shipImage});
  background-repeat: no-repeat;
  padding: 70px;
`;

export const SubmitButton = styled.button`
  background: darkgreen;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: .2s ease;
  
  &:hover {
    background: lightgreen;
    color: #000;
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
`;
