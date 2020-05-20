import styled from 'styled-components';

export const ProductWrapper = styled.div`
  background-color: #fff;
  margin: 6px;
  padding: 6px;
  height: 250px;
  display: grid;
  grid-template-rows: 45px auto 25px 35px;
`;

export const ProductName = styled.p`
  text-align: center;
  margin: 4px;
  font-size: 20px;
  padding: 4px;
  background-color: #8f6675;
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
  background-color: #a097ae;
  margin: 4px 2px;
`;

export const ProductCostWrapper = styled.span`
  background: #dcf9f4;
  width: 100%;
  display: block;
  text-align: right;
`;

export const ProductFormWrapper = styled.div`
  margin-top: 6px;
  background: red;
`;