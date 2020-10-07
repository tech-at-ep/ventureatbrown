export const surveyQuestions = {
    "1A": {
        question: "Pick a starting point 👇",
        choices: [
            {
                content: "Interested in learning more about entrepreneurship",
                segue: "question",
                leadsTo: "2A"
            },
            {
                content: "Current founder or validated idea",
                segue: "question",
                leadsTo: "2B"
            }
        ]
    },
    "2A": {
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
        question: "Interested in networking?",
        derivesFrom: "2A",
        choices: [
            {
                content: "Yes",
                segue: "resource",
                leadsTo: ["conferencesAndTrips"]
            },
            {
                content: "No",
                segue: "resource",
                leadsTo: ["earlyIdeaCompetitions"]
            }
        ]
    },
    "4A": {
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