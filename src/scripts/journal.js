/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(
    DOM_methods.allEntries)

const $ = document.querySelector.bind(document)

const createObject = () => {
    const entry = {
        "entryDate": $("#JournalDate").value,
        "concept": $("#concepts").value,
        "entry": $("#journalEntry").value,
        "mood": $("#opt_mood").value
    }
    return entry
}

document.querySelector("#entry_button").addEventListener("click", () => {
    const entryToSave = {
        entryDate: $("#JournalDate").value,
        concept: $("#concepts").value,
        entry: $("#journalEntry").value,
        mood: $("#opt_mood").value
    }
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryToSave),
    })
    .then(r => r.json())
    .then (res => {
        console.log("hi")
    })
    .catch(error => console.error('Error:', error));
})
