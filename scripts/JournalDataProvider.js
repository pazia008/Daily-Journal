/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [{
        id: 1,
        date: "05/24/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Meh :/"
    },
    {
        id: 2,
        date: "05/26/2020",
        concept: "Basic Functions",
        entry: "We went over basic funtions on a powerpoint",
        mood: "Meh :/",
    },
    {
        id: 3,
        date: "06/03/2020",
        concept: "Flex",
        entry: "We used flex to move elements around",
        mood: "Not feelin' it today :(",
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}