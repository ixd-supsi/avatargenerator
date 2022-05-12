function load_menu(){
    const container = document.getElementById("menu");

    const pages = [
        {
            "name": "Antologia Interattiva",
            "link": "antologiainterattiva"
        },
        {
            "name": "Atlante Tecnologico",
            "link": "atlantetecnologico"
        },
        {
            "name": "Conoscenza Libera",
            "link": "conoscenzalibera"
        },
        {
            "name": "Inter-faccia",
            "link": "inter-faccia"
        },
        {
            "name": "Parole in Codice",
            "link": "paroleincodice"
        },
        {
            "name": "Quantified Me",
            "link": "quantifiedme"
        },
        {
            "name": "Specchio delle mie Brame",
            "link": "specchiodellemiebrame"
        }
    ]

    for (let x = 0; x < pages.length; x++){
        container.innerHTML += "<li><a class='link' href=https://ixd-supsi.github.io/" + pages[x].link + ">" + pages[x].name +" </a></li>"
    }                

}

document.addEventListener("DOMContentLoaded", function(){
    load_menu()
});
