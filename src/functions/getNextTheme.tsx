import { ThemeType } from "../contexts/ThemeAppContext";

function getNextTheme(currentState: ThemeType): ThemeType {
  switch (currentState) {
    case "first":
      return "second";
    case "second":
      return "third";
    case "third":
      return "first";
    default:
      return "first";
  }
}

export default getNextTheme;
