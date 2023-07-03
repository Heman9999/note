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


 var TextBody = document.querySelector('.main_body')
function addTextBar(test){
    const notearea = document.createElement('div')
    notearea.classList.add('note_area')
    notearea.innerHTML = `<div class="note_header">
                                <i class="save fa-solid fa-floppy-disk"></i>
                                <i class="trash fa-solid fa-trash"></i>
                            </div>
                            <textarea>${test}</textarea>`

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

(()=>{
    const item = localStorage.getItem('notes')
    const itemA = JSON.parse(item)
    if(item !== null){
        itemA.forEach((va) =>{
            addTextBar(va)
        })
    }
})()