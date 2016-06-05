var barEntries = [],
    newEntry;

function Guy(options) {
    this.entryFee = 200;
    this.name = options.name || '';
}

function Girl(options) {
    this.entryFee = 0;
    this.name = options.name || '';
}

function BarEntry() {}
BarEntry.prototype.createEntry = function(options) {
    var entryClass = null;
    switch (options.sex) {
        case "male":
            entryClass = Guy;
            break;
        case "female":
            entryClass = Girl;
            break;
        default:
            entryClass = Guy;
            break;
    }
    return new entryClass(options);
}

var barEntryFactory = new BarEntry();
newEntry = barEntryFactory.createEntry({
    sex: 'male',
    name: 'Sam'
});
barEntries.push(newEntry);
