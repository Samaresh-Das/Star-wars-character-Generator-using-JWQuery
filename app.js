$(document).ready(function(){
    $("button").on("click", function(){
        const random = Math.ceil(Math.random() * 88);
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${random}.json`, function(data){
            console.log(data);
            $("h1.name").text(`Name: ${data.name}`);
            $(".photo").attr("src", data.image)
            $(".height").text(`Height: ${data.height}`);
            $(".gender").text(`Gender: ${data.gender}`);
            $(".homeworld").text(`Home: ${data.homeworld}`);
            $(".species").text(`Species: ${data.species}`);
            $(".mass").text(`Weight: ${data.mass}`);
            $(".death").text(`Died: ${data.died}`);
        })
    })
})