
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return `<section class = "single_entry">
//     <div class = "concept"> ${journalEntry.concept} </div>
//     <div>${journalEntry.entry}</div>
//     <div>${journalEntry.entryDate}  </div>
// </section>
//     `
// }

const component_method = {
    makeJournalEntryComponent (journalEntry) {
        // Create your own HTML structure for a journal entry
        return `<section class = "single_entry">
        <div class = "concept"> ${journalEntry.concept} </div>
        <div>${journalEntry.entry}</div>
        <div>${journalEntry.entryDate}  </div>
    </section>
        `
    }
    
}
