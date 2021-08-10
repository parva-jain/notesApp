
const chalk = require('chalk')
const { string } = require('yargs')
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
    handler : function(argv){
        notes.addNotes(argv.title, argv.body)
        
    }
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
    handler : function(argv){
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command : 'list',
    describe : 'list of notes',
    handler : function(){
        console.log('Listing all the note')
    }
})

// read command
yargs.command({
    command : 'read',
    describe : 'read a note',
    handler : function(argv){
        console.log('Reading note')
    }
})

yargs.parse()