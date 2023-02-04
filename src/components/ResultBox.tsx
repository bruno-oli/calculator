import { useContext } from "react";
import styled from "styled-components";
import { NumbersContext } from "../contexts/NumbersContext";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.screenBackground};
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: flex-end;
  div {
    span {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 2rem;
      letter-spacing: 3px;
    }
  }
`;

const ResultBox = () => {
  const { numbers } = useContext(NumbersContext);
  return (
    <Wrapper>
      <div>
        <span>{numbers}</span>
      </div>
    </Wrapper>
  );
};

export default ResultBox;
