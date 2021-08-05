export enum HardwareType {
  Server = "server",
  DesktopAndLaptop = "desktopOrLaptop",
  TabletAndMobile = "tabletOrMobile",
  FilewallAndRouter = "firewallOrRouter"
}

export type Hardware = {
  name: string;
  make: string;
  model: string;
  os: string;
  featureVersion: string;
  numberOfVirtuals?: number;
  location: string;
  quantity: number;
  purpose: string;
  type: HardwareType;
};
