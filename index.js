$(document).ready(()=>{
    $('form').submit((e)=>{

        e.preventDefault()

        const tarefa = $('input')
        $(`<li>${tarefa.val()}</li>`).appendTo('.tarefas ul')
        tarefa.val('')
        $('li').click(function(){
            $(this).css("text-decoration","line-through")
        })
        
    })
})