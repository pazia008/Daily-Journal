let journal = []
const eventHub = document.querySelector(".container")

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())
        .then(entries => {
            journal = entries
        })
}


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const dispatchStateChangeEvent = () => {
    const journalStateChanged = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalStateChanged)
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(getEntries) // <-- Get all journal entries
        .then(dispatchStateChangeEvent)
}