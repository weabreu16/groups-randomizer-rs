import { Group } from "../models";

export const groupsArrayToString = (groups: Array<Group>): string => {

    let result = "";

    for (let i = 0; i < groups.length; i++) {
        result += groupToString(groups[i], i + 1);
    }

    return result;
}

export const groupToString = (group: Group, num: number): string => {
    
    return `=========== Group ${num} ===========
Themes: ${group.themes.join(', ')}
Members:
    ${group.members.join("\n    ")}
`;
}
