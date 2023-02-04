import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.toggleKeypadBackground};
  border-radius: 7px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  grid-template-areas:
    "seven eigth nine del"
    "four five six plus"
    "one two three under"
    "point zero divide multipli"
    "reset reset equal equal";
  button {
    width: 100%;
    height: 65px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primaryKeyColor};
    box-shadow: 0px 4px 0px 0px ${({ theme }) => theme.colors.primaryKeyShadow};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 2em;
    &.reset {
      grid-area: reset;
      font-size: 1.5em;
      background-color: ${({ theme }) => theme.colors.secondaryKeyColor};
      box-shadow: 0px 4px 0px 0px
        ${({ theme }) => theme.colors.secondaryKeyShadow};
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
    &.equal {
      grid-area: equal;
      font-size: 1.5em;
      background-color: ${({ theme }) => theme.colors.getResultKey};
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      box-shadow: 0px 4px 0px 0px
        ${({ theme }) => theme.colors.getResultKeyShadow};
    }
    &.del {
      grid-area: del;
      font-size: 1.5em;
      background-color: ${({ theme }) => theme.colors.secondaryKeyColor};
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      box-shadow: 0px 4px 0px 0px
        ${({ theme }) => theme.colors.secondaryKeyShadow};
    }
    &.plus {
      grid-area: plus;
    }
    &.under {
      grid-area: under;
    }
    &.divide {
      grid-area: divide;
    }
    &.multipli {
      grid-area: multipli;
    }
    &.seven {
      grid-area: seven;
    }
    &.eigth {
      grid-area: eigth;
    }
    &.nine {
      grid-area: nine;
    }
    &.four {
      grid-area: four;
    }
    &.five {
      grid-area: five;
    }
    &.six {
      grid-area: six;
    }
    &.one {
      grid-area: one;
    }
    &.two {
      grid-area: two;
    }
    &.three {
      grid-area: three;
    }
    &.point {
      grid-area: point;
    }
    &.zero {
      grid-area: zero;
    }
  }
`;

const KeysBox = () => {
  return (
    <Wrapper>
      <button className="seven">7</button>
      <button className="eigth">8</button>
      <button className="nine">9</button>
      <button className="del">DEL</button>
      <button className="four">4</button>
      <button className="five">5</button>
      <button className="six">6</button>
      <button className="plus">+</button>
      <button className="one">1</button>
      <button className="two">2</button>
      <button className="three">3</button>
      <button className="under">-</button>
      <button className="point">.</button>
      <button className="zero">0</button>
      <button className="divide">/</button>
      <button className="multipli">x</button>
      <button className="reset">RESET</button>
      <button className="equal">=</button>
    </Wrapper>
  );
};

export default KeysBox;
