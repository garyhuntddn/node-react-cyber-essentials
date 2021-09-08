export const ToggleGroupMessage = "ToggleGroupAction";

export const ToggleGroup = (group: string) => ({
  type: ToggleGroupMessage,
  group,
});

export type ToggleGroupAction = ReturnType<typeof ToggleGroup>;
