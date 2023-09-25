document.addEventListener("DOMContentLoaded", function(){
    
    //A J A X

    const endpoint = "https://api.github.com/users/FelipeSilM"
    const avatar = document.getElementById("avatar")
    const nome = document.getElementById("profile-name")
    const username = document.getElementById("profile-username")
    const repositorios = document.getElementById("repos").childNodes[2]
    const seguidores = document.getElementById("followers").childNodes[2]
    const seguindo = document.getElementById("following").childNodes[2]
    const link = document.querySelector(".profile-link")
    

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        console.log(json)
        avatar.src = json.avatar_url
        nome.innerHTML = json.name
        username.innerHTML = `@${json.login}`
        repositorios.nodeValue = json.public_repos
        seguidores.nodeValue = json.followers
        seguindo.nodeValue = json.following
        link.href = json.html_url
    })

    
})

