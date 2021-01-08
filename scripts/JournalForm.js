const contentTarget = document.querySelector(".journalForm")

export const journalForms = () => {
    contentTarget.innerHTML = `
    <article class="dates">
            <section class="date">
                <form action="">
                    <fieldset>
                        <label for="journalDate">Date:</label>
                        <input type="date" name="journalDate" id="journalDate">
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

                        <textarea rows=""></textarea>
                    </fieldset>
                </form>
            </section>

        </article>
        <article class="moods">
            <section class="mood">
                <form>
                    <fieldset>
                        <label for="moodChart">Mood For The Day:</label>
                        <select name="feeling" id="awesome">
                            <option value="awesome">Awesome!!! :)</option>
                                <option value="meh">Meh :/</option>
                                    <option value="no">Not feelin' it today :(</option>
                         </select>

                    </fieldset>
                </form>
            </section>
        </article>
        <button type="button">Record Journal Entry</button>
        
    `
}