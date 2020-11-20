export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry__date">${entry.date}</div>
            <div class="entry__concept">${entry.concept}</div>
            <div class="entry__entry">${entry.entry}</div>
            <div class="entry__mood">${entry.mood}</div>
        </section>
    `
}