import { ThemeType } from "../contexts/ThemeAppContext";

function getToggleButtonPosition(currentState: ThemeType) {
  switch (currentState) {
    case "first": {
      return "6px";
    }
    case "second": {
      return "calc(50% - 9.5px)";
    }
    case "third": {
      return "calc(100% - 25px)";
    }
  }
}

export default getToggleButtonPosition;
