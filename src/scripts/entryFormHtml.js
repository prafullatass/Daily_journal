const entryFormHtml = () => {
    return `
    <fieldset>
    <label for="journalDate">Date of Entry</label>
    <input type="date" name="journalDate" id="JournalDate">
</fieldset>
<fieldset>
    <label for="concepts">Concepts Covered </label>
    <input type="text" name="concepts" id="concepts">
</fieldset>
<fieldset>
    <label for="journalEntry">Journal Entry</label>
    <textarea name="journalEntry" id="journalEntry" cols="30" rows="3"></textarea>
</fieldset>
<fieldset>
    <label for="mood">Mood of the Day</label>
    <select id = "opt_mood">
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
    </select>
</fieldset>
<button id = "entry_button" type="submit">RECORD JOURNAL ENTRY</button>
`
}
