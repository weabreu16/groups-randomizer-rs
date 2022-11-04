use rand::Rng;
use regex::Regex;
use serde::Serialize;

#[derive(Serialize)]
pub struct Group {
    pub themes: Vec<String>,
    pub members: Vec<String>
}

impl Group {
    pub fn new() -> Self {
        Group {
            themes: Vec::new(),
            members: Vec::new()
        }
    }
}

fn string_to_vector(string: String) -> Vec<String> {

    lazy_static! {
        static ref WHITESPACE_REGEX: Regex = Regex::new(r"^\s*$").unwrap();
    }

    let split_result: Vec<&str> = string.split('\n')
                                        .collect();
    
    split_result
        .into_iter()
        .filter(|val| !(WHITESPACE_REGEX.is_match(val)))
        .map(String::from)
        .collect::<Vec<String>>()
}

fn generate_groups(mut members: Vec<String>, mut themes: Vec<String>) -> Vec<Group> {
    let mut rng = rand::thread_rng();

    let members_qty = members.len();
    let themes_qty = themes.len();

    let qty = if members_qty > themes_qty { themes_qty } else { members_qty };

    let members_per_group: usize = members_qty / qty;
    let themes_per_group: usize = themes_qty / qty;
    let mut members_remainers = members_qty % qty;
    let mut themes_remainers = themes_qty % qty;

    let mut groups: Vec<Group> = Vec::new();

    for _ in 0..qty {
        let mut group = Group::new();

        for _ in 0..members_per_group {
            let random_number = rng.gen_range(0..members.len());
            let member = members.remove(random_number);
            group.members.push(member);
        }

        for _ in 0..themes_per_group {
            let random_number = rng.gen_range(0..themes.len());
            let theme = themes.remove(random_number);
            group.themes.push(theme);
        }

        groups.push(group);
    }

    let groups_with_remainers: Vec<usize> = Vec::new();

    loop {
        if members_remainers == 0 {
            break;
        }

        let random_number = rng.gen_range(0..groups.len());

        if groups_with_remainers.contains(&random_number) {
            continue;
        }

        groups[random_number].members.push(members.pop().unwrap());
        members_remainers -= 1;
    }

    let groups_with_remainers: Vec<usize> = Vec::new();

    loop {
        if themes_remainers == 0 {
            break;
        }

        let random_number = rng.gen_range(0..groups.len());

        if groups_with_remainers.contains(&random_number) {
            continue;
        }

        groups[random_number].themes.push(themes.pop().unwrap());
        themes_remainers -= 1;
    }

    groups
}

#[tauri::command]
pub fn randomize_groups(people: String, themes: String) -> Vec<Group> {
    let people_arr = string_to_vector(people);
    let themes_arr = string_to_vector(themes);

    generate_groups(people_arr, themes_arr)
}
