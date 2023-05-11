//union type of TypeScript.
// union means choosing any one type from two different type.

type noobDeveloper = {
    name: string;
}

type juniorDeveloper = {
    name: string,
    expertise: string,
    experience: number,
}

const newDeveloper: noobDeveloper | juniorDeveloper = {
    name: "mojnu mia",
    expertise: 'javaScript',
    experience: 6,
}


//intersection of TypeScript.
//intersection means combine two different type together

type noviceDeveloper = {
    name: string;
}

type JuniorDeveloper = noviceDeveloper & {
    expertise: string,
    experience: number,
}

enum level {
    junior = "junior",
    mid = "mid",
    senior = "senior"
}

type NextLevelDeveloper = juniorDeveloper & {
    leadershipExperience: number,
    level: level,
}


const NewDeveloper: noviceDeveloper | JuniorDeveloper = {
    name: "mojnu mia",
    expertise: 'javaScript',
    experience: 6,
}


const developer: NextLevelDeveloper = {
    name: 'Jhankar',
    expertise: 'typeScript',
    experience: 2,
    leadershipExperience: 1,
    level: level.junior
}
