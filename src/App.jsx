function App() {

  return (
    <>
    <section className="grid justify-center mt-[10rem] items-center min-h-80">
      <div >
        <h1 className="text-6xl font-bold text-primary">EDUMOTION</h1>
      </div>
      <form  className=" grid justify-center gap-4 border-2 border-black p-4">
        <div className=" gap-2 flex">
        <label className="text-black text-lg justify-center "> Ingrese su correo</label>
        <input type="text" placeholder="Ingresa tu correo" className="rounded-lg text-black border-2 bg-white" />
        </div>
        <div className=" gap-2 flex">
           <label className="text-black text-lg justify-center"> Ingrese su contraseña</label>
        <input type="password" placeholder="Ingresa Contraseña" className="rounded-lg text-black border-2 bg-white" />
        </div>
      <a href="" className=" ml-[8rem] justify-center item-center "><button className="btn bg-primary item-center w-28 text-white">Iniciar Sesion</button></a>
      <a className=" ml-[8rem]  justify-center item-center "><button className="btn bg-primary  justify-center item-center w-28 text-white">Registrarse</button></a>
      </form>
    </section>
    </>
  )
} 

export default App
