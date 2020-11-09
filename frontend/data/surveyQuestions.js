export const surveyQuestions = {
    // segue : the type/displayMode (resource or question) that follows a choice
    // leadsTo : the state that follows a choice
    "INTRO": {
        id: 99,
        question: "",
        choices: []
    },
    "1A": {
        id: 1,
        question: "What would you like to do?",
        choices: [
            {
                content: "I want to learn more about entrepreneurship.",
                segue: "question",
                leadsTo: "2A"
            },
            {
                content: "I'm a current founder or have a validated idea.",
                segue: "question",
                leadsTo: "2B"
            }
        ],
        explanations: [
            {
                title: "What is a VC?",
                body: "Lorem ipsum dolor sit anem...",
                link: "https://google.com"
            }
        ]
    },
    "2A": {
        id: 2,
        question: "Do you have an idea?",
        derivesFrom: "1A",
        choices: [
            {
                content: "Sort of, still working on it",
                segue: "question",
                leadsTo: "3A"
            },
            {
                content: "For sure",
                segue: "question",
                leadsTo: "3B"
            }
        ]
    },
    "2B": {
        id: 3,
        question: "Are you looking to raise a round?",
        derivesFrom: "1A",
        choices: [
            {
                content: "No",
                segue: "resource",
                leadsTo: ["earlyStageAcceleratorsAndSupport"]
            },
            {
                content: "Yes",
                segue: "resource",
                leadsTo: ["studentVcs", "vcs", "largeGrants", "smallGrants"]
            }
        ]
    },
    "3A": {
        id: 4,
        question: "Do you want to join a club?",
        derivesFrom: "2A",
        choices: [
            {
                content: "Yes",
                segue: "question",
                leadsTo: "4A"
            },
            {
                content: "No",
                segue: "resource",
                leadsTo: ["academics", "startupInternships"]
            }
        ]
    },
    "3B": {
        id: 5,
        question: "Interested in networking?",
        derivesFrom: "2A",
        choices: [
            {
                content: "Yes",
                segue: "resource",
                leadsTo: ["conferencesAndTrips", "startupInternships"]
            },
            {
                content: "No",
                segue: "resource",
                leadsTo: ["earlyIdeaCompetitions"]
            }
        ]
    },
    "4A": {
        id: 6,
        question: "Do you want to join a VC?",
        derivesFrom: "3A",
        choices: [
            {
                content: "Yes",
                segue: "resource",
                leadsTo: ["studentVcFellowship"]
            },
            {
                content: "No",
                segue: "resource",
                leadsTo: ["studentGroups"]
            }
        ]
    }
}