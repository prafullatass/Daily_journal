/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    let entryLogEl = document.querySelector(".entryLog")
    entryLogEl.innerHTML += makeJournalEntryComponent(entries)
}

// Invoke the render function
const allEntries =  (arrayOfEnvents) => {
arrayOfEnvents.forEach(entry => {
    renderJournalEntries(entry)
});
}


