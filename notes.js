const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes ....'
}

const addNotes = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)  
        console.log(chalk.green.inverse('New Note Added!!'))
    }
    else{
        console.log(chalk.red.inverse('Note Already Existed!!'))
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const filterNotes = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length == filterNotes.length){
        console.log(chalk.bgRed('No note found!!'))
    }
    else{
        saveNotes(filterNotes)
        console.log(chalk.bgGreen('Note Removed!!'))
    }
    
}

const loadNotes = function(){
    try{
    const databuffer = fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}
