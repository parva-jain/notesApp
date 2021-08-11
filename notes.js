const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
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

const removeNote = (title)=>{
    const notes = loadNotes()
    const filterNotes = notes.filter((note)=>note.title !== title)
    if(notes.length == filterNotes.length){
        console.log(chalk.bgRed('No note found!!'))
    }
    else{
        saveNotes(filterNotes)
        console.log(chalk.bgGreen('Note Removed!!'))
    }
    
}

const loadNotes = ()=>{
    try{
    const databuffer = fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    console.log(chalk.blue('Your Notes...'))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(chalk.blueBright(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note)=>note.title === title)
    if(noteToRead){
        console.log(chalk.bold.yellow('Title of the note is '+ noteToRead.title))
        console.log(chalk.italic.blue('Body of note is ' + noteToRead.body))
    }
    else{
        console.log(chalk.red('No note found :('))
    }
}
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
