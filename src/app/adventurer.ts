export interface StatBlock {
    str: {
        value: number,
        bonus: number,
    },
    dex: {
        value: number,
        bonus: number,
    },
    con: {
        value: number,
        bonus: number,
    },
    int: {
        value: number,
        bonus: number,
    },
    wis: {
        value: number,
        bonus: number,
    },
    cha: {
        value: number,
        bonus: number,
    },
};


export interface Adventurer {
    name: string;
    race: string;
    class: string;
    background: string;
    stats: StatBlock;

};
