interface UserData{
    src:string,
    alt:string,
    height:number,
    width:number
}

function Image(){

    let image:UserData = {

        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.prod.website-files.com%2F5ec7dad2e6f6295a9e2a23dd%2F6582f25642a96b818502c50d_Design.ai.jpg&f=1&nofb=1&ipt=0a098ca6938d2f2b029149df3d640c546d07fa2593a0ab3abfcd514d1c86c2b0",
        alt: "Imagen",
        height: 200,
        width: 325
    }
    //JSX
    return <img src={image.src} alt={image.alt} height={image.height} width={image.width}/>
}

export default Image;