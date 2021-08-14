import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
import lottie from 'lottie-web';
import pdf from '../CV-Nicolas-Ivorra.pdf';

let animObj = null;

function CodeDesign() {

  const container = useRef(null)

  useEffect(() => {
    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: container.current,
      name: 'bonjour',
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../data.json')
    });
  })

  var handlePlay = () => {
    animObj.destroy();
    animObj = lottie.loadAnimation({
      container: container.current,
      name: 'bonjour',
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../data.json')
    });
  }

  return (
    <div className='body'>
      <div className="logo">
        <div className="imgLogo" ref={container} onClick={() => { handlePlay() }}></div>
      </div>
      <div className='code'>
        <span className="code-line-small-number">
          <text className='specialCharacter'>{'{'}</text>
        </span>
        <span className="code-line-small-number">
          <text className="keyName">   name</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Nicolas Ivorra</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line-small-number">
          <text className="keyName">   job</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Developpeur FullStack Web & Mobile </text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line-small-number">
          <text className="keyName">   email</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <a href='mailto:nicolas.ivorra.ni@gmail.com' itemprop="email"><text className="codeLink">nicolas.ivorra.ni@gmail.com</text></a>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line-small-number">
          <text className="keyName">   location</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter"> 95290 L'isle Adam France</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line-small-number">
          <text className="keyName">   experience</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">{'{'}</text>
        </span>
        <span className="code-line-small-number">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2021-2021</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Freelance developpeur @RéseauHB</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line-small-number">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2021-2021</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Freelance developpeur @Consultaway #StationF</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line-small-number">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2020-2020</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Stage Développeur Mobile FullStack @Bonbo #StationF</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2020-2020</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Freelance Développeur FullStack @PlanificAdore</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2020-2020</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Développeur FullStack @LOVR</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2019-2020</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Social Média Manager @Fritch-Dirisoti</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="valueCharacter">     "</text>
          <text className="codeDate">2018-2019</text>
          <text className="valueCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Stagiaire en Communication @UlysseTravel #StationF</text>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className='specialCharacter'>{'  }'}</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line">
          <text></text>
        </span>
        <span className="code-line">
          <text className="keyName">  skills</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">[</text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">HTML</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">CSS</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Javascript</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">React</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">React Native</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Node</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Express</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Mongodb</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Firebase</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">NextJs</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">TwilioVideo</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">FramerMotion</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">APIRest</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">, </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Jest</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">]</text>
        </span>
        <span className="code-line">
          <text></text>
        </span>
        <span className="code-line">
          <text className="keyName">  realisation</text>
          <text className="specialCharacter">:  </text>
          <text className="specialCharacter">[</text>
          <text className="specialCharacter">  </text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Lovr App</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
          <text className="specialCharacter"></text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    </text>
          <text className="specialCharacter">"</text>
          <a href='https://planificadore.herokuapp.com/' className="codeLink">planificAdore.fr</a>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter"></text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Consultaway Mobile App</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">,</text>
          <text className="specialCharacter"></text>
        </span>
        <span className="code-line">
          <text className='specialCharacter'>{'  ]'}</text>
          <text className="specialCharacter">,</text>

        </span>
        <span className="code-line">
          <text></text>
        </span>
        <span className="code-line">
          <text className="keyName">  education</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">{'{'}</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">2020-2020</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">La Capsule Bootcamps</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter"> //Web&Mobile</text>

        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">2019-2020</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Ecole 42 San Francisco</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter"> //LanguageC</text>

        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">2017-2019</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Sup De Pub</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter"> //Communication Digitale & Web Design</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">2017-2017</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">"</text>
          <text className="valueCharacter">Bac Scientifique</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter"> //Mention Bien</text>
        </span>
        <span className="code-line">
          <text className='specialCharacter'>{'  }'}</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line">
          <text></text>
        </span>
        <span className="code-line">
          <text className="keyName">  links</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter">{'{'}</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">website</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">    </text>
          <text className="specialCharacter">"</text>
          <a href='https://www.nicolasivorra.com' target="_blank" rel="noopener" className="valueCharacter">nicolasivorra.com</a>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">github</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">     </text>
          <text className="specialCharacter">"</text>
          <a href='https://www.github.com/NicolasStuff' target="_blank" rel="noopener" className="valueCharacter">github.com/NicolasStuff</a>

          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">linkedin</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter"> "</text>
          <a href='https://www.linkedin.com/in/nicolas-ivorra-45b852156/' target="_blank" rel="noopener" className="valueCharacter">linkedin.com/in/nicolas-ivorra-45b852156/</a>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className="specialCharacter">    "</text>
          <text className="codeDate">CV</text>
          <text className="specialCharacter">"</text>
          <text className="specialCharacter">:</text>
          <text className="specialCharacter">  </text>
          <text className="specialCharacter"> "</text>
          <a href={pdf} target="_blank" rel="noopener" className="valueCharacter">Cv Nicolas Ivorra</a>
          <text className="specialCharacter">"</text>
        </span>
        <span className="code-line">
          <text className='specialCharacter'>{'  }'}</text>
          <text className="specialCharacter">,</text>
        </span>
        <span className="code-line">
          <text className='specialCharacter'>{'}'}</text>
        </span>
      </div>
    </div>
  );
}

export default CodeDesign;
