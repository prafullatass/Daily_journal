fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
        console.log(entries)
        entries.forEach(entry => {
            renderJournalEntries(entry)
        });
        
        // What should happen when we finally have the array?
    })