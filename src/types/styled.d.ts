import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      // * Backgrounds
      mainBackground: string;
      toggleKeypadBackground: string;
      screenBackground: string;

      // * Keys
      primaryKeyColor: string;
      primaryKeyShadow: string;
      secondaryKeyColor: string;
      secondaryKeyShadow: string;
      getResultKey: string;
      getResultKeyShadow: string;

      // * Text
      primaryTextColor: string;
      secondaryTextColor: string;
      tertiaryTextColor: string;
    };
  }
}
