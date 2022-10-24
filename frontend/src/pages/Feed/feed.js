import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HeaderMain from "../../components/headermain/HeaderMain";
import More from '../../img/more.svg';
import './feed.css';




function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {



    axios.get("http://localhost:3001/post")
      .then((response) => {
        setPosts(response.data)


      })
      .catch(() => {
        console.log("Deu errrado")

      })
  }, [])

function deletPost(id){

  axios.delete(`http://localhost:3001/post/delete/${id}`)


  setPosts(posts.filter(posts => posts._id !== id))

}

  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">

          {posts.map((posts, key) => {
            return (


              <div className="card" key={key}>




                <header>

                  <h2>Cadostros</h2>
                  <img src={More} />

                </header>

                <div className="line"></div>
                
                <p>{posts.NomeCuidador}</p>
             
                <p>{posts.Nomepet}</p>
           
                <p>{posts.animal}</p>
        
                <p>{posts.docil}</p>



                <div className="btns">

                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${posts._id}` }}>
                      <button>Edit</button>
                    </Link>
                  </div>

                  <div className="btn-readmore">
                    <Link to='/lermais'>
                      <button>Ler mais</button>
                    </Link>
                  </div>


                  <div className="btn-delete">
                    <Link>
                      <button  onClick= {() => deletPost(posts._id)}> Delete</button>
                    </Link>
                  </div>







                </div>


              </div>


            )




          })}

        </div>

      </main>
    </div>

  )
}

export default Feed