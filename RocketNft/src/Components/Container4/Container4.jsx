import React from 'react'
import "./Container4.css"

import Artista1 from "../../assets/artista-1.png"
import ArrowORrange from './ArrowORrange'
const Container4 = () => {
  return (
    <div className="Container" id='Container4' >


<h1>Melhores  <span id='Umdos'> artistas </span> </h1>



<div className="MelhoresArtistas">

    <div className="cardA">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span>80 fotografias</span>
    </div>

    </div>


    <div className="cardA  princi">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span id='princiSpan'>80 fotografias</span>
    </div>

    </div>
    <div className="cardA">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span>80 fotografias</span>
    </div>

    </div>

</div>
 
<div className="MelhoresArtistas">

    <div className="cardA">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span>80 fotografias</span>
    </div>

    </div>


    <div className="cardA">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span>80 fotografias</span>
    </div>

    </div>
    <div className="cardA">
    <div className="fotoArtista">
<img src={Artista1}  width={"60px"}  alt="" />
    </div>
    <div className="NomesArtistas">
    <p> Danilo do Carmo</p>
       <span>80 fotografias</span>
    </div>

    </div>

</div>

<h4 id='Vermais'> Veja todos os artistas <ArrowORrange/>  </h4>



    </div>
  )
}

export default Container4