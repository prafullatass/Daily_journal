/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}