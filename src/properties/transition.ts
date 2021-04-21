import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const transition: TailwindPropertyType[] = [
  ["transition", "transition", [isKeyInThemeProperty("transitionProperty")]],
  [
    ["transitionDuration", "duration"],
    "duration",
    [isKeyInThemeProperty("transitionDuration")],
  ],
  [
    ["transitionTiming", "timing"],
    "ease",
    [isKeyInThemeProperty("transitionTimingFunction")],
  ],
  [
    ["transitionDelay", "delay"],
    "delay",
    [isKeyInThemeProperty("transitionDelay")],
  ],
  [["animation", "animate"], "animate", [isKeyInThemeProperty("animation")]],
];

export default transition;
