export const SelectGroupMessage = "SelectGroupAction";

export const SelectGroup = (selectedGroup: string) => ({
  type: SelectGroupMessage,
  selectedGroup,
});

export type SelectGroupAction = ReturnType<typeof SelectGroup>;
