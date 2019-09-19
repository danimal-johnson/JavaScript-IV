// CODE here for your Lambda Classes

// Person
class Person {
    constructor(attrib) {
        this.name = attrib.name;
        this.age = attrib.age;
        this.location = attrib.location;
    }
    speak() {
        console.log (`Hello. My name is ${this.name} and I am from ${this.location}`);
    }
}

// Student
class Student extends Person {
    constructor(studAttrib) {
        super(studAttrib);
        this.previousBackground = studAttrib.previousBackground;
        this.className = studAttrib.className;
        this.favSubjects = studAttrib.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.foreach(subject)
            console.log(subject);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

}

// Instructors
class Instructor extends Person {
    constructor(instAttrib) {
        super(instAttrib);
        this.specialty = instAttrib.specialty;
        this.favLanguage = instAttrib.favLanguage;
        this.catchPhrase = instAttrib.catchPhrase;
    }
    demo(subjectStr) {
        console.log (`Today we are learning about ${subjectStr}`);
    }
    grade(studentObj, subjectStr) {
        console.log (`${studentObj.name} receives a perfect score on ${subjectStr}`);
    }
}


// Project Managers
class ProjectManager extends Instructor {
    constructor(pmAttrib) {
        super(pmAttrib);
        this.gradClassName = pmAttrib.gradClassName;
        this.favInstructor = pmAttrib.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subjectStr) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subjectStr}`);
    }
}

// ******************** Creating the objects (people) *******************
// Cast of Characters:
// Instructors: Mr. Garrison, Mr. Mackay
// Project Managers: Chef, Stan
// Students: Cartman, Kenny, Kyle
// ***********************************************************************

const mr_garrison = new Instructor({
    name: "Mr. Garrison",
    age: 47,
    location: "South Park",
    specialty: "Math",
    favLanguage: "English",
    catchPhrase: "There are no stupid questions; only stupid people."
});
const mr_mackay   = new Instructor({
    name: "Mr. Mackay",
    age: 42,
    location: "South Park",
    specialty: "pharmaceuticals",
    favLanguage: "Java",
    catchPhrase: "Drugs are bad, mmmmkay?"

});
const chef = new ProjectManager({
    name: "Chef",
    age: 35,
    location: "Chicago",
    gradClassName: "Self-taught",
    favInstructor: "Barry White"

});
const stan = new ProjectManager({
    name: "Stan",
    age: 15,
    location: "South Park",
    gradClassName: "WEB12",
    favInstructor: "Mr. Garrison",
});
const Cartman = new Student({
    name: "Cartman",
    age: 11,
    location: "South Park",
    previousBackground: "4th Grade",
    className: "WEB30",
    favSubjects: ["Cooking", "Eating", "Sleeping"],
});
const Kenny = new Student({
    name: "Kenny",
    age: 13,
    location: "South Park",
    previousBackground: "Dressing Warm",
    className: "WEB23",
    favSubjects: ["Home Ec", "Speech and Debate"],
});
const Kyle = new Student({
    name: "Kyle",
    age: 12,
    location: "South Park",
    previousBackground: "Playground activities",
    className: "CS5",
    favSubjects: ["Math"],
});



// ****************** Testing ******************

alert("If you can read this, things are compiling.");