import { Answers } from "./Answers";
import { HardwareType } from "./Hardware";

export const answers: Answers = {
  "A1.1": "Safe Space One",
  "A1.2": "12345678",
  "A1.3": "Tec Marina\nPenarth\nCF64 1SA",
  "A1.4": "Software",
  "A1.5": "https://www.safespaceone.com",
  "A1.6": 16253,
  "A1.7": 1623,
  "A1.8": true,
  "A1.9": "Because...",
  "A1.10": false,
  "A2.6": [
    {
      name: "saleman",
      make: "hp",
      model: "omen",
      os: "windows",
      featureVersion: "0.1.1",
      location: "cafetteria",
      quantity: 3,
      purpose: "coffemaking",
      type: HardwareType.TabletAndMobile,
    },

    {
      name: "duddad",
      make: "hp",
      model: "omen",
      os: "windows",
      featureVersion: "0.1.1",
      location: "cafetteria",
      quantity: 1,
      purpose: "coffemaking",
      type: HardwareType.TabletAndMobile,
    },
  ],

  "A2.1": true,
  "A2.2": "Whatever",
  "A2.5": "Cardiff",
  "A2.8": [
    { name: "TNCAP", location: "Cardiff", purpose: "General use" },
    { name: "BT02", location: "Cardiff", purpose: "General use" },
  ],
};
