import { Answers } from "./Answers";
import { Software, SoftwareType } from "./Software";

const s1: Software = {
  name: "Microsoft Bob", version: "2.1.1", type: SoftwareType.Firewall
};
const s2: Software = {
  name: "Microsoft Henry", version: "2.1.2", type: SoftwareType.Firewall
};
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
  "A2.1": true,
  "A2.2": "Whatever",
  "A2.5": "Cardiff",
  "A2.8": [
    { name: "TNCAP", location: "Cardiff", purpose: "General use" },
    { name: "BT02", location: "Cardiff", purpose: "General use" }
  ],
  "A4.12": [s1, s2]
};