/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const objectsJournalEntry1 = {
    entryDate: "01/18/19",
    concept: "Objects",
    entry: "Today we learned to create an object",
    mood: "Ok"
}


const objectsJournalEntry2 = {
    entryDate: "01/15/2019",
    concept: "Arrays",
    entry: "We learned about 4 different array methods",
    mood: "good"
}
const journalEntry = []

journalEntry.push(objectsJournalEntry1)
journalEntry.push(objectsJournalEntry2)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<div>
    ${journalEntry.entryDate} ${journalEntry.concept} ${journalEntry.entry}
</div>
    `
}
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    let entryLogEl = document.querySelector(".entryLog")
    entryLogEl.innerHTML += makeJournalEntryComponent(entries)
}

// Invoke the render function
journalEntry.forEach(entry => {
    renderJournalEntries(entry)
});


