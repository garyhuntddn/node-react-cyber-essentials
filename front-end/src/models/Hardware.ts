export enum HardwareType {
  Server = "server",
  Tablet = "tablet",
  Laptop = "laptop",
  Printer = "printer",
  Mobile = "mobile",
  Router = "router",
  Firewall = "firewall",
}

export type Hardware = {
  name: string;
  make: string;
  model: string;
  os: string;
  featureVersion: string;
  noOfVirtuals: number;
  location: string;
  quantity: number;
  purpose: string;
  type: HardwareType;
};

