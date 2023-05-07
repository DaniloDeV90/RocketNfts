import React from 'react'
import "./Container1.css"

import grupo from "../../assets/group-avarts.png"
import SvgRaposa from './SvgRaposa.jsx'
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
<p>sjdfhjdf</p>
    </div>
</div>

  </div>
  )
}

export default Container1