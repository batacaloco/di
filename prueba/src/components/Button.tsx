interface UserData{
    name:string,
    age:number
    isActive:boolean
}

function Button(){

    let name:string = "David"; //Variables siempre en inglés
    let age:number = 20;
    let price:number = 28.6;
    let isActive:boolean = true; //Los boolean siempre con is al inicio
    let names:string[] = ["David", "Erica", "María"]; //Las colecciones (incluye arrays) siempre con s al final

    names[0] = "David";
    names.push("Pepe"); //Añade a una posición despúes del último dato (se redimensiona)
    let lastName = names.pop(); //Último dato del array

    let teachers: Map<string, string> = new Map(); //Mapas
    teachers.set("david.ferandez@gmail.com", "David");
    teachers.set("erica.galvez@gmail.com", "Erica");
    teachers.set("maria.sanchez@gmail.com", "María");

    let user:UserData = {

        name:"David",
        age: 28,
        isActive:false
    }

    if(user.isActive){
        return <button>Esté logueado</button>;
    }
    return <button>No está logueado</button>;

    //JSX
    return <button>Click aquí {lastName}|{user.name}</button>
}

export default Button;