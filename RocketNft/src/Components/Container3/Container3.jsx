import React from 'react'
import "./Container3.css"
import astronauta1 from "../../assets/astronauta 1.png"
import astronauta2 from "../../assets/astronauta-2.png"
import Arrow from './Arrow'
const Container3 = () => {
  return (
    <div className="Container" id='Container3' >

  <div className="Populares">
    <h2> <span id='Popular'>Populares</span>   da semana</h2>
  </div>


<div className="Conteudoo">


  <div className="cardFoto1">

<div className="cardd">

<div className="TituloCard">
  <div className="astronautaa">
  <h2>Astronauta 1   </h2> 
  <Arrow/>
  </div>
<div className="nome">
  <p>Danilo do carmo Gonçalves</p>
  <span id='Ações'>1.50 RKT</span>
  </div>
</div>
<div className="fotoAstro">
<img src={astronauta1} alt="" />
</div>


</div>


<div className="cardd">

<div className="TituloCard">
  <div className="astronautaa">
  <h2>Astronauta 2  </h2> 
  <Arrow/>
  </div>
<div className="nome">
  <p>Danilo do carmo Gonçalves</p>
  <span id='Ações'>1.50 RKT</span>
  </div>
</div>
<div className="fotoAstro">
<img src={astronauta1} alt="" />
</div>


</div>

</div>



<div className="cardFoto2">
<div className="cardd">

<div className="TituloCard">
  <div className="astronautaa">
  <h2>Astronauta 3  </h2> 
  <Arrow/>
  </div>
<div className="nome">
  <p>Danilo do carmo Gonçalves</p>
  <span id='Ações'>1.50 RKT</span>
  </div>
</div>
<div className="fotoAstro">
<img src={astronauta1} alt="" />
</div>


</div>

<div className="cardd">

<div className="TituloCard">
  <div className="astronautaa">
  <h2>Astronauta 4   </h2> 
  <Arrow/>
  </div>
<div className="nome">
  <p>Danilo do carmo Gonçalves</p>
  <span id='Ações'>1.50 RKT</span>
  </div>
</div>
<div className="fotoAstro">
<img src={astronauta1} alt="" />
</div>


</div>

</div>
  </div>

</div>
       
  )
}

export default Container3