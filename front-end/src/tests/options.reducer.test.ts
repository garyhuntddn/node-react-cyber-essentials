import { ChangeAdress1 } from "../actions/ChangeAddress1";
import { ChangeAdress2 } from "../actions/ChangeAddress2";
import { ChangeBackupNumber } from "../actions/ChangeBackupNumber";
import { ChangeBirthday } from "../actions/ChangeBirthdayAction";
import { ChangeCityOfOrigin } from "../actions/ChangeCityOfOriginAction";
import { ChangeColor } from "../actions/ChangeColorAction";
import { ChangeEmail } from "../actions/ChangeEmailAction";
import { ChangeEmploymentStatus } from "../actions/ChangeEmploymentStatus";
import { ChangeEnable2FA } from "../actions/ChangeEnable2FAAction";
import { ChangeFavouriteColor } from "../actions/ChangeFavouriteColor";
import { ChangeFavouriteMonth } from "../actions/ChangeFavouriteMonthAction";
import { ChangeMobileNumber } from "../actions/ChangeMobileNumber";
import { ChangePostcode } from "../actions/ChangePostcode";
import { ChangeSiteReview } from "../actions/ChangeSiteReview";
import { ChangeSubmitDate } from "../actions/ChangeSubmitDateAction";
import { ChangeTownOrVillage } from "../actions/ChangeTownOrVillageAction";
import { ChangeWeek } from "../actions/ChangeWeekAction";
import { ChangeWorkingHours } from "../actions/ChangeWorkingHours";
import { ToggleAutomobile } from "../actions/ToggleAutomobile";
import { TogglePaymentMethod } from "../actions/TogglePaymentMethod";
import { Model, CityOfOriginConstants, ColorConstants, Options, EmploymentStatusConstants, PaymentMethodConstants, VehicleConstants } from "../models/Model";
import Reducers from "../reducers/Reducers";
import { RecursivePartial } from "./RecursivePartial";
import { createInitialModel } from "./TestHelpers";
import { SaveOptions } from "../actions/SaveOptions";

describe("options reducer tests", () => {
  it("should update the enable 2FA to true", () => {
    expect(Reducers(createInitialModel(), ChangeEnable2FA(true))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ enable2FA: true }) }));
  });

  it("should update the enable 2FA to false", () => {
    expect(Reducers(createInitialModel(), ChangeEnable2FA(false))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ enable2FA: false }) }));
  });

  it("should set the email to johnsmith@outlook.com", () => {
    expect(Reducers(createInitialModel(), ChangeEmail("johnsmith@outlook.com"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ email: "johnsmith@outlook.com" }) }));
  });

  it("should update the city of origin to Shanghi", () => {
    expect(Reducers(createInitialModel(), ChangeCityOfOrigin(CityOfOriginConstants.Shanghi))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ cityOfOrigin: CityOfOriginConstants.Shanghi }) }));
  });

  it("should update the color to Black", () => {
    expect(Reducers(createInitialModel(), ChangeColor(ColorConstants.Black))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ color: ColorConstants.Black }) }));
  });

  it("should set the number to 123456789", () => {
    expect(Reducers(createInitialModel(), ChangeMobileNumber("123456789"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ mobileNumber: "123456789" }) }));
  });

  it("should update the employment status to Full-time", () => {
    expect(Reducers(createInitialModel(), ChangeEmploymentStatus(EmploymentStatusConstants.FullTime))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ employmentStatus: EmploymentStatusConstants.FullTime }) }));
  });

  it("should set the address1 to 17 wallaberoad", () => {
    expect(Reducers(createInitialModel(), ChangeAdress1("17 wallaberoad"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ address1: "17 wallaberoad" }) }));
  });

  it("should set the address1 to 27 wallaberoad", () => {
    expect(Reducers(createInitialModel(), ChangeAdress2("27 wallaberoad"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ address2: "27 wallaberoad" }) }));
  });

  it("should set the postcode to CF64CRF", () => {
    expect(Reducers(createInitialModel(), ChangePostcode("CF64CRF"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ postcode: "CF64CRF" }) }));
  });

  it("should set the backup number to 345678910", () => {
    expect(Reducers(createInitialModel(), ChangeBackupNumber("345678910"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ backupNumber: "345678910" }) }));
  });

  it("should update the town or village to Penarth", () => {
    expect(Reducers(createInitialModel(), ChangeTownOrVillage("Penarth"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ townOrVillage: "Penarth" }) }));
  });

  it("should update the automobile to I have a car", () => {
    expect(Reducers(createInitialModel(), ToggleAutomobile(VehicleConstants.vehicle1))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ automobiles: [VehicleConstants.vehicle1] }) }));
  });

  it("should update the payment method to Visa", () => {
    expect(Reducers(createInitialModel(), TogglePaymentMethod(PaymentMethodConstants.Visa))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ paymentMethods: [PaymentMethodConstants.Visa] }) }));
  });

  it("should update the site review to Good", () => {
    expect(Reducers(createInitialModel(), ChangeSiteReview("Good"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ siteReview: "Good" }) }));
  });

  it("should update the birthday to 17/04/2017", () => {
    expect(Reducers(createInitialModel(), ChangeBirthday("17/04/2017"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ birthday: "17/04/2017" }) }));
  });

  it("should update the submit date to 17/04/2017 17:30", () => {
    expect(Reducers(createInitialModel(), ChangeSubmitDate("17/04/2017 17:30"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ submitDate: "17/04/2017 17:30" }) }));
  });

  it("should update the favourite color to Blue", () => {
    expect(Reducers(createInitialModel(), ChangeFavouriteColor("Blue"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ favouriteColor: "Blue" }) }));
  });

  it("should update the favourite month to January 2017", () => {
    expect(Reducers(createInitialModel(), ChangeFavouriteMonth("January 2017"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ favouriteMonth: "January 2017" }) }));
  });

  it("should update the week to 2", () => {
    expect(Reducers(createInitialModel(), ChangeWeek("2"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ week: "2" }) }));
  });

  it("should update the working hours to 15", () => {
    expect(Reducers(createInitialModel(), ChangeWorkingHours(15))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedOptions: expect.objectContaining<Partial<Options>>({ workingHours: 15 }) }));
  });

  it("should update the options", () => {
    expect(Reducers(createInitialModel(), SaveOptions({ workingHours: 15, paymentMethods: [PaymentMethodConstants.Visa], email: "jax@jax.com", favouriteColor: "ff0000", favouriteMonth: "Jan", address1: "123", address2: "456", cityOfOrigin: CityOfOriginConstants.London, week: "1", color: ColorConstants.Red, automobiles: [VehicleConstants.vehicle2], backupNumber: "789", birthday: "abc", employmentStatus: EmploymentStatusConstants.FullTime, postcode: "zxc", enable2FA: true, mobileNumber: "0770", siteReview: "acfdsafdas", submitDate: "fdsfasd", townOrVillage: "43242" }))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ options: expect.objectContaining<Partial<Options>>({ workingHours: 15 }) }));
  });
});
