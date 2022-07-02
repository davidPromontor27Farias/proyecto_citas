function Header({}){
    //De esta manera accedemos a los props
   //Los props detectan los cambios y se actualizan automaticamente
//     


    return (
        
        <>
            <h1 className="font-black text-5xl text-center uppercase mt-5 md:w-2/3 mx-auto ">Seguimiento Pacientes {''} <span className="text-indigo-600">Veterinaria</span></h1>
        </>

    )
}

export default Header;  //Exportamos el componente