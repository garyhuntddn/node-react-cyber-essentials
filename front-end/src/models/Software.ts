export enum SoftwareType {
  Server = "server",
  Tablet = "tablet",
  Mobile = "mobile",
  Router = "router",
  Firewall = "firewall",
}

export type Software = {
  OS: string;
  Editions: string;
  Versions: string;
  Firmware: string;
  Browsers: string;
  ProtectionMethod: string;
  EmailApps: string;
  OfficeApps: string;
  IsSupplierSupported: string;
  SoftwareLicensed: string;
  type: SoftwareType;
};

