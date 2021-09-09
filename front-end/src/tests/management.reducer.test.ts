import { AddUserToGroup } from "../actions/AddUserToGroupAction";
import { ChangeUnusedAddUser } from "../actions/ChangeUnsavedAddUser";
import { CreateGroup } from "../actions/CreateGroupAction";
import { DeleteUserFromGroup } from "../actions/DeleteUserFromGroupAction";
import { SelectGroup } from "../actions/SelectGroupAction";
import { SetGroups } from "../actions/SetGroupsAction";
import { UpdateCurrentPassword } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPassword } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPassword } from "../actions/UpdateNewRepeatPasswordAction";
import { Model, Management } from "../models/Model";
import Reducers from "../reducers/Reducers";
import { RecursivePartial } from "./RecursivePartial";
import { createInitialModel } from "./TestHelpers";

describe("management reducer tests", () => {
  it("should update the password to Password2319", () => {
    expect(Reducers(createInitialModel(), UpdateCurrentPassword("Password2319"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ currentPassword: "Password2319" }) }));
  });

  it("should update the new password to Password1234", () => {
    expect(Reducers(createInitialModel(), UpdateNewPassword("Password1234"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ newPassword: "Password1234" }) }));
  });

  it("should update the new repeat password to Password1234", () => {
    expect(Reducers(createInitialModel(), UpdateNewRepeatPassword("Password1234"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ newRepeatPassword: "Password1234" }) }));
  });

  it("should add a group called Bob", () => {
    expect(Reducers(createInitialModel(), CreateGroup("tom", "Bob"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ groups: [{ name: "Bob", users: ["tom"], isOwner: true }] }) }));
  });

  it("should update the selected group to Bob", () => {
    expect(Reducers(createInitialModel(), SelectGroup("Bob"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ selectedGroup: "Bob" }) }));
  });

  it("should update the unsaved add user to Bob", () => {
    expect(Reducers(createInitialModel(), ChangeUnusedAddUser("Bob"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ unsavedAddUser: "Bob" }) }));
  });

  it("should add user Bob to group 123", () => {
    const model = createInitialModel();
    model.management.groups.push({ name: "123", isOwner: true, users: [] });
    expect(Reducers(model, AddUserToGroup("123", "Bob"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ groups: [{ name: "123", isOwner: true, users: ["Bob"] }] }) }));
  });

  it("should remove user Bob from group 123", () => {
    const model = createInitialModel();
    model.management.groups.push({ name: "123", isOwner: true, users: ["Bob"] });
    expect(Reducers(model, DeleteUserFromGroup("123", "Bob"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ groups: [{ name: "123", isOwner: true, users: [] }] }) }));
  });

  it("should remove user Jane from group 123", () => {
    const model = createInitialModel();
    model.management.groups.push({ name: "123", isOwner: true, users: ["Bob", "Jane", "Freddy"] });
    expect(Reducers(model, DeleteUserFromGroup("123", "Jane"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ groups: [{ name: "123", isOwner: true, users: ["Bob", "Freddy"] }] }) }));
  });

  it("should replace existing groups", () => {
    const model = createInitialModel();
    model.management.groups.push({ name: "123", isOwner: true, users: ["Bob", "Jane", "Freddy"] });
    expect(Reducers(model, SetGroups([{ name: "xyz", isOwner: true, users: ["Jane"] }]))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ management: expect.objectContaining<Partial<Management>>({ groups: [{ name: "xyz", isOwner: true, users: ["Jane"] }] }) }));
  });
});
