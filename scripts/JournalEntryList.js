import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("main")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component

    const entries = useJournalEntries()

    for (const entry of entries) {
        const entryHTML = JournalEntryComponent(entry)
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
        entryLog.innerHTML += entryHTML
    }
}