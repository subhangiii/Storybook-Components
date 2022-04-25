import { create } from "@storybook/theming";
import logoLight from "../public/glazeUILight.svg";
import logoDark from "../public/glazeUIDark.svg";

export const glazeThemeLight = create({
  base: "light",
  brandTitle: "Glaze UI",
  colorPrimary: "#FF0057",
  colorSecondary: "#FF5891",
  brandImage: logoLight,
});

export const glazeThemeDark = create({
  base: "dark",
  brandTitle: "Glaze UI",
  colorPrimary: "#FF0057",
  colorSecondary: "#FF5891",
  brandImage: logoDark,
});
