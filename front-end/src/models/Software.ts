export enum SoftwareType {
  Server = "server",
  Tablet = "tablet",
  Mobile = "mobile",
  Router = "router",
  Firewall = "firewall",
}

export type Software = {
  name: string;
  version: string;
  type: SoftwareType;
};

