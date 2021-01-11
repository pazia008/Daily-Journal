import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", () => {
    EntryListComponent()
})


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            debugger
            let entryHTML = "" //starting at zero
            let useEntry = useJournalEntries()
            for (const entry of useEntry) {
                entryHTML += JournalEntryComponent(entry) //adds on to let entryHtml
            }
            entryLog.innerHTML = entryHTML // never put in a for loop
        })

}