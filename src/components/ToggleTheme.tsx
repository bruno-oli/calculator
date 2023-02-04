import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeAppContext } from "../contexts/ThemeAppContext";
import getNextTheme from "../functions/getNextTheme";
import getToggleButtonPosition from "../functions/getToggleButtonPosition";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.colors.secondaryTextColor};
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
  & > div {
    width: 80px;
    height: 30px;
    border-radius: 40px;
    background-color: ${(props) => props.theme.colors.toggleKeypadBackground};
    padding: 6px;
    position: relative;
    .toggle {
      border-radius: 100%;
      width: 19px;
      height: 19px;
      background-color: ${(props) => props.theme.colors.getResultKey};
      position: absolute;
      transition: all 0.3s;
    }
  }
`;

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeAppContext);
  return (
    <Wrapper onClick={() => setTheme(getNextTheme(theme))}>
      <span>THEME</span>
      <div>
        <div
          style={{ left: getToggleButtonPosition(theme) }}
          className="toggle"
        />
      </div>
    </Wrapper>
  );
};

export default ToggleTheme;
