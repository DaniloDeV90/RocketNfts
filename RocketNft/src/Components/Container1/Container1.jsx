import React from 'react'
import "./Container1.css"

import grupo from "../../assets/group-avarts.png"
import SvgRaposa from './SvgRaposa.jsx'
import galeria1 from "../../assets/galeria-1.png"
import galeria2 from "../../assets/galeria-2.png"
import galeria3 from "../../assets/galeria-3.png"
import galeria4 from "../../assets/galeria-4.png"
import galeria5 from "../../assets/galeria-5.png"
import galeria6 from "../../assets/galeria-6.png"
import galeria7 from "../../assets/galeria-7.png"
import galeria8 from "../../assets/galeria-8.png"
import Logo from './Logo.jsx'


const Container1 = () => {
  return (
  <div className="Container" id='Container1' >
    <nav> 

    <h1>Rocket <span id='nftsNav'> NFts </span>  </h1>

<div id='DivNavbar'>

        <p>Comprar NFT</p>
        <p>Sobre</p>
        <p>FAQ</p>
</div>
        <button id='btnNavbar'> <SvgRaposa/>  Conectar Carteira</button>
 </nav>

<div className="mainContainer1">

    <div className="mercadoDigital">
 <p>Mercado digital para colecionáveis em <br /> criptos e tokens não fungivel (NFT).  <br />
 Compre, venda e descubra ativos digitais <br /> exclusivos para você.</p>
 <div id='artistasSel'>
 
  <img src={grupo} alt="" id='grupoId'  width={"230px"} height={"62px"}/>

  <div id='titulos'>
    <p> +10</p>
    <p>Artistas selecionados</p>
  </div>
 
 
 </div>
    </div>
    <div className="ArteDigital">

<h1 id='h1Arte'>  <span className='spanArte'> Descubra  a verdadeira </span>  <span> arte digital e </span> <span> colecione  diversas </span>  <span id='nftsNav'> NFTs  </span> </h1>
<div className="Logor">
<Logo/>
</div>
    </div>

    <div className="imagensAstronautas">



<div className="card">

<img src={galeria1} alt="" />

<img src={galeria2} alt="" />

<img src={galeria3} alt="" />

<img src={galeria4} alt="" />


<img src={galeria5} alt="" />
<img src={galeria6} alt="" />
<img src={galeria7} alt="" />
<img src={galeria8} alt="" />
</div>
    </div>
</div>

  </div>
  )
}

export default Container1