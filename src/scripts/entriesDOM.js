/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const DOM_methods = {
    renderJournalEntries(entries) {
        let entryLogEl = document.querySelector(".entryLog")
        entryLogEl.innerHTML += component_method.makeJournalEntryComponent(entries)
    },

    allEntries(arrayOfEnvents) {
        arrayOfEnvents.forEach(entry => {
            DOM_methods.renderJournalEntries(entry)
        });
    }
}
