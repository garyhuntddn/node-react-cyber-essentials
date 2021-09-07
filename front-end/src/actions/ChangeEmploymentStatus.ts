import { EmploymentStatusConstants } from "../models/Model";

export const ChangeEmploymentStatusMessage = "ChangeEmploymentStatusAction";

export const ChangeEmploymentStatus = ( employmentStatus: EmploymentStatusConstants ) => ( {
  type: ChangeEmploymentStatusMessage,
  employmentStatus,
} );

export type ChangeEmploymentStatusAction = ReturnType<typeof ChangeEmploymentStatus>;