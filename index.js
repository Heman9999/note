btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addTextBar();
})

function saveText(){
    const textarea = document.querySelectorAll('.note_area textarea')
    const data = []
    textarea.forEach((va)=>{
        data.push(va.value)
    })
    localStorage.setItem('notes',JSON.stringify(data))
}

(()=>{
    const item = localStorage.getItem('notes')
    if(item === null){
        console.log('no item')
    }else{
        console.log('item')
    }
})()
 var TextBody = document.querySelector('.main_body')
function addTextBar(){
    const notearea = document.createElement('div')
    notearea.classList.add('note_area')
    notearea.innerHTML = `<div class="note_header">
                                <i class="save fa-solid fa-floppy-disk"></i>
                                <i class="trash fa-solid fa-trash"></i>
                            </div>
                            <textarea></textarea>`

    notearea.querySelector('.trash').addEventListener('click',()=>{
        notearea.remove()
        saveText()
    })
    notearea.querySelector('.save').addEventListener('click',function(){
        saveText()
    })
    TextBody.append(notearea)
    saveText()
}