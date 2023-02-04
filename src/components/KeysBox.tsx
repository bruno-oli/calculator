import React, { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { NumbersContext } from "../contexts/NumbersContext";

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
  .error {
    touch-action: none;
  }
`;

const KeysBox = () => {
  const { setNumbers, numbers } = useContext(NumbersContext);

  // * Add numbers in equation
  function addInEquation(e: React.MouseEvent<HTMLButtonElement>) {
    if (numbers === "0") {
      setNumbers(e.currentTarget.innerText);
    } else {
      setNumbers(numbers + e.currentTarget.innerText);
    }
  }

  // * Clear last number in equation
  function clearLastNumberInEquation() {
    if (numbers.length > 1 && numbers !== "0") {
      setNumbers(numbers.slice(0, -1));
    } else {
      setNumbers("0");
    }
  }

  // * Reset equation
  function resetEquation() {
    setNumbers("0");
  }

  // * Get result
  function getResult(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      setNumbers(eval(numbers.replace("x", "*")));
    } catch {
      toast.error("Invalid equation", {
        className: "errorMessage",
      });
    }
  }
  return (
    <Wrapper>
      <button className="seven" onClick={addInEquation}>
        7
      </button>
      <button className="eigth" onClick={addInEquation}>
        8
      </button>
      <button className="nine" onClick={addInEquation}>
        9
      </button>
      <button className="del" onClick={clearLastNumberInEquation}>
        DEL
      </button>
      <button className="four" onClick={addInEquation}>
        4
      </button>
      <button className="five" onClick={addInEquation}>
        5
      </button>
      <button className="six" onClick={addInEquation}>
        6
      </button>
      <button className="plus" onClick={addInEquation}>
        +
      </button>
      <button className="one" onClick={addInEquation}>
        1
      </button>
      <button className="two" onClick={addInEquation}>
        2
      </button>
      <button className="three" onClick={addInEquation}>
        3
      </button>
      <button className="under" onClick={addInEquation}>
        -
      </button>
      <button className="point" onClick={addInEquation}>
        .
      </button>
      <button className="zero" onClick={addInEquation}>
        0
      </button>
      <button className="divide" onClick={addInEquation}>
        /
      </button>
      <button className="multipli" onClick={addInEquation}>
        x
      </button>
      <button className="reset" onClick={resetEquation}>
        RESET
      </button>
      <button className="equal" onClick={getResult}>
        =
      </button>
    </Wrapper>
  );
};

export default KeysBox;
