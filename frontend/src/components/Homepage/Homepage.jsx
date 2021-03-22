import React from 'react';
import '../../css/style.css';
import ButtonM from '../ButtonM/ButtonM';


function Homepage() {
  return (
    <div className="Homepage">
      <h1>MEDIA APPEREANCES </h1>
      <div id="contentContainer">
        <div id="content"> <h4>Science Magazine 11.12.2018</h4>
          <p>What to master your profesional and social networks to build productive teams that create lasting impact? In his new book, The Formula: The Universal Laws of Success,Albert-Lálszló Barabási translates almost a decade of scholarly resarch on the sience of success into a livery</p>
          <ButtonM/>
         </div>
        

        <div id="content2"><h4>Nature 27.11.2018</h4>
          <p>Originally printed by the National Academies of Sciences as a poster to accompany the publicaton of a research paper on how diseases connet,it was subsequently reproduced by the New York Times and included in the Mapping It Out:
          Atlas of Contemporary Cartographies exhibiton at the Serpentine Gallery in London...</p>
          <ButtonM/>
        </div>
        
        <div id="content3"><h4>Lecture at NYU</h4>
        <ButtonM/>
        </div>
      
      </div>
      
    </div>
  )
}

export default Homepage
