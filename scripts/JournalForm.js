import { saveJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journalForm")
const eventHub = document.querySelector(".container")
export const journalForms = () => {
    contentTarget.innerHTML = `
    <article class="dates">
            <section class="date">
                <form action="">
                    <fieldset>
                        <label for="journalDate">Date:</label>
                        <input type="date" name="journalDate" id="date">
                    </fieldset>
                </form>
            </section>
        </article>
        <article class="concepts">
            <section class="concept">
                <form action="">
                    <fieldset>
                        <label for="conceptsCovered">Concepts Covered:</label>
                        <input type="text" name="conceptsCovered" id="conceptsCovered">
                    </fieldset>
                </form>
            </section>
        </article>
        <article class="journals">
            <section class="journal">
                <form action="">
                    <fieldset>

                        <label for="journalEntry">Journal Entry:</label>

                        <textarea id= "journalEntry" rows=""></textarea>
                    </fieldset>
                </form>
            </section>

        </article>
        <article class="moods">
            <section class="mood">
                <form>
                    <fieldset>
                        <label for="moodChart">Mood For The Day:</label>
                        <select name="feeling" id="mood">
                            <option value="Awesome!!! :)">Awesome!!! :)</option>
                                <option value="Meh :/">Meh :/</option>
                                    <option value="Not feelin' it today :(">Not feelin' it today :(</option>
                         </select>
                         
                    </fieldset>
                </form>
            </section>
        </article>
        <button id="saveJournalEntry">Record Journal Entry</button>
        
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        const concept = document.querySelector("#conceptsCovered").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value
        const date = document.querySelector("#date").value

        const newEntry = {
            concept: concept,
            entry: entry,
            mood: mood,
            date: date

        }
        saveJournalEntry(newEntry)
    }
})