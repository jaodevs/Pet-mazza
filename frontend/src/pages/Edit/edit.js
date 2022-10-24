import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory, useParams } from "react-router";
import axios from "axios";



const validationPost = yup.object().shape({

   Nomepet: yup.string().required("Nome do pet e obrigatorio"),
   NomeCuidador: yup.string().required("Nome do Cuidador é obrigatorio"),




})


function Edit() {
   const { id } = useParams()

   let history = useHistory()



   const addPost = data => axios.put(`http://localhost:3001/post/edit/${id}`, data)

      .then(() => {
         console.log("Deu tudo certo")
         history.push("/")
      })
      .catch(() => {
         console.log("DEU ERRADO")
      })

   const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(validationPost)
   })


   useEffect(() => {
      axios.get(`http://localhost:3001/post/${id}`)
         .then((response) => {
            reset(response.data)
         })
   }, [])


   return (
      <div>
         <Header />
         <main>
            <div className="card-post">

               <h1> Cadastro  Pet</h1>
               <div className="line-post"></div>

               <div className="card-body-post"></div>

               <form onSubmit={handleSubmit(addPost)}>
                  <div className="fields">


                     <label>Nome do pet </label>
                     <input type="text" name="Nome pet" {...register("Nomepet")}
                     />
                     <p className="error-message">{errors.Nomepet?.message}</p>
                  </div>

                  <div className="pet">

                     <label>Especi</label>
                     <select type="text"{...register("animal")}>
                        <option value=""></option>
                        <option value="gato">gato</option>
                        <option value="cachorro">cachorro</option>
                        <option value="hamster">hamster</option>
                        <option value="passarinho">passarinho</option>
                     </select>
                     <p className="error-message">{errors.animal?.message}</p>
                  </div>

                  <div className="box">
                     <label>Docil?</label>
                     <input  {...register("docil")} type="checkbox" value="sim" />
                     <p className="error-message">{errors.box?.message}</p>
                  </div>

                  <div className="fields">
                     <label>Nome Cuidador</label>
                     <input type="text" name="Nome Cuidador" {...register("NomeCuidador")} />
                     <p className="error-message">{errors.NomeCuidador?.message}</p>
                  </div >


                  <div className="btn-post" >
                     <button type="submit" >Enviar</button>
                  </div>




               </form>
            </div>


         </main>

      </div>
   )
}

export default Edit