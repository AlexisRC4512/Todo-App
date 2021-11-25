export default function todo(btn,all){
const d=document;
d.addEventListener('click',(e)=>{
   if(e.target.matches(btn)){
    console.log("hola");
    class List{
        constructor(details){
            this.details=details;
        }
    }    
    const name=document.getElementById('details').value;
    const list1=new List(name);
    
    class UI{
        addList(list1){
            const taskList=document.getElementById('list');
            const element=document.createElement('div');
            element.innerHTML=`
            <div class="card text-right mb-6" id="rest">
                <div class="card-body">
                    <strong> Tarea: </strong>:${list1.details} <a href="#" name="delete" class="ml-4 btn btn-danger">Delete<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg><i class="bi bi-trash"></i></a>
                      
                </div>
            </div>
            `;
            taskList.appendChild(element);
        }
         
        deleteList(element){
            if (element.name==='delete' ) {
                element.parentElement.parentElement.parentElement.remove();
            }
        }
    }
    
    const ui=new UI();
             ui.addList(list1);
      
       
  

    document.getElementById('list').addEventListener('click',(e)=>{
        const ui=new UI();
        ui.deleteList(e.target);
    })
e.preventDefault();
   }
})
}