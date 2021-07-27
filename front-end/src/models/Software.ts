export enum SoftwareType {
  Firewall = "firewall",
  Browser = "browser",
  MalwareProtection = "malwareProtection",
  Email = "email",
  Office = "office",
}

export type Software = {
  name: string;
  version: string;
  type: SoftwareType;
};
