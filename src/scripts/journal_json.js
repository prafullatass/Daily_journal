fetch("http://localhost:8088/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
        console.log(entries)
        entries.forEach(entry => {
            renderJournalEntries(entry)
        });
    })

    