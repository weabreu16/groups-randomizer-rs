import { invoke } from "@tauri-apps/api";
import { Group } from "../models";
import { RANDOMIZE_GROUPS } from "./commands";

export const randomizeGroups = async (people: string, themes: string): Promise<Group[]> => {
    return await invoke<Array<Group>>(RANDOMIZE_GROUPS, { people, themes });
}
