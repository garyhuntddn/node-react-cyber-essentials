import { Answers } from "./Answers";

export enum PanelConstants {
  Login,
  FailedLogin,
  Questionnaire,
  CreateGroup,
  ManagementPanel,
  OptionsPanel
}

export enum ViewConstants {
  Editable,
  ReadOnly,
}

export enum ColorConstants {
  Empty = "",
  Red = "Red",
  Black = "Black",
  Blue = "Blue",
  Green = "Green"
}

export enum EmploymentStatusConstants {
  Empty = "",
  FullTime = "Full-time",
  PartTime = "Part-time",
  TemporaryEmployment = "Temporary employment",
  Unemployed = "Unemployed"
}


export enum CityOfOriginConstants {
  Empty = "",
  London = "London",
  NewYork = "New York",
  Shanghi = "Shanghi",
  Tokyo = "Tokyo",
  LosAngeles = "Los Angeles"
}

export enum PaymentMethodConstants {
  Visa = "visa",
  Mastercard = "Mastercard",
  Paypal = "Paypal"
}

export enum VehicleConstants {
  vehicle1 = "vehicle1",
  vehicle2 = "vehicle2",
  vehicle3 = "vehicle3"
}

export type Options = {
  address1: string;
  address2: string;
  automobiles: Array<VehicleConstants>;
  backupNumber: string;
  birthday: string;
  color: ColorConstants;
  cityOfOrigin: CityOfOriginConstants;
  email: string;
  employmentStatus: EmploymentStatusConstants;
  enable2FA: boolean;
  favouriteColor: string;
  favouriteMonth: string;
  mobileNumber: string;
  paymentMethods: Array<PaymentMethodConstants>;
  postcode: string;
  siteReview: string;
  submitDate: string;
  townOrVillage: string;
  week: string;
  workingHours: number;
}

export type Management = {
  groups: Array<string>;
  currentPassword: string;
  newPassword: string;
  newRepeatPassword: string;
}

export type Model = {
  answers: Answers;
  panel: PanelConstants;
  view: ViewConstants;
  group: string;
  userName: string;
  password: string;
  name: string;
  isAuthenticated: boolean;
  options: Options;
  unsavedOptions: Options;
  management: Management;
};
