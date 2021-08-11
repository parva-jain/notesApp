
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version ('1.1.0')

// add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Title of note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body of note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){notes.addNotes(argv.title, argv.body)}
})

// remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Title of note to be removed',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){notes.removeNote(argv.title)}
})

// list command
yargs.command({
    command : 'list',
    describe : 'list of notes',
    handler(){notes.listNotes()}
})

// read command
yargs.command({
    command : 'read',
    describe : 'read a note',
    builder : {
        title: {
            describe: "Title of note to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()