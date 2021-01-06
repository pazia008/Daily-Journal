import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            let useEntry = useJournalEntries()
            for (const entry of useEntry) {
                const entryHTML = JournalEntryComponent(entry)
                entryLog.innerHTML += entryHTML
            }
        })
}