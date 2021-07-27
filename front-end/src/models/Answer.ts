import { Hardware } from "./Hardware";
import { Network } from "./Network";
import { Software } from "./Software";

export type Answer = string | number | Array<Hardware> | Array<Software> | Array<Network>;