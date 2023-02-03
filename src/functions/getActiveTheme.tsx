import firstTheme from "../themes/firstTheme";
import secondaryTheme from "../themes/secondaryTheme";
import thirdTheme from "../themes/thirdTheme";

import { ThemeType } from "../contexts/ThemeAppContext";

function getActiveTheme(currentState: ThemeType) {
  switch (currentState) {
    case "first":
      return firstTheme;
    case "second":
      return secondaryTheme;
    case "third":
      return thirdTheme;
    default:
      return firstTheme;
  }
}

export default getActiveTheme;
