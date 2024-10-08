let addbtn = document.querySelector('.add-btn')
let input = document.querySelector('.input')
let taskList = document.querySelector('.task-here')
let resetBtn = document.querySelector('.reset-btn');

// console.log(addbtn);
// console.log(input);

addbtn.addEventListener('click',()=>{
    if(input.value==''){
        alert('Enter Something')
    }else
    {
        let listItem = document.createElement('li')
        // left side
        let tasks = document.createElement('div');
        tasks.className ="tasks";
        let image = document.createElement('img')
        image.className = "uncheck-img";
        image.src='./images/unchecked.png';
        let flag =0;
        image.addEventListener('click',()=>{
            if(flag==0){
                image.src='./images/checked.png';
                flag =1;
            }else
            {
                image.src='./images/unchecked.png';
                flag =0;
            }
        })


        let inp = document.createElement('input')
        inp.className = "value-here";
        inp.value = input.value;
        inp.setAttribute('readonly','')

        // right side
        let buttons = document.createElement('div')
        buttons.className = 'buttons';
        let editBtn = document.createElement('button')
        editBtn.className = 'edit-btn';
        editBtn.innerText ='Edit';
        let check = 0;
        editBtn.addEventListener("click",()=>{
            if(check==0){
                editBtn.innerText = "save";
                inp.removeAttribute('readonly');
                check = 1;
            }else
            {
                editBtn.innerText = "Edit";
                inp.setAttribute('readonly','');
                check=0;
            }
        })
        
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText ='Delete'; 
        deleteBtn.addEventListener("click",()=>{
            listItem.remove();
        })
    


resetBtn.addEventListener('click', () => {
    // taskList.innerHTML = ''; 
    taskList.remove();
});



        taskList.append(listItem)
        listItem.append(tasks)
        tasks.append(image)
        tasks.append(inp)
        listItem.append(buttons)
        buttons.append(editBtn)
        buttons.append(deleteBtn)
        input.value='';
    }
})