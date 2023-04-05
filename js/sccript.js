let images=[

    "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpg",


]


let imageIndex=0

let get1=document.getElementById("slider")

setInterval(()=>{

    if(imageIndex===images.length){
        imageIndex=0
    }

    

    if(imageIndex===images.length){
        imageIndex=0
    }


    get1.setAttribute('src',setUrl)

    


imageIndex++

},1000)