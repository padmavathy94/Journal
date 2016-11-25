var journal = [];

function addJournal(t, a, c, f) {
	var entry = {};
	entry.title = t;
	entry.author = a;
	entry.content = c;
	entry.files = f;
	journal.push(entry);
}

function getJournal() {
	return journal;
}