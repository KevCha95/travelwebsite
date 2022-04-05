import React, {useState,useEffect, useRef} from 'react';

import './HeaderStyle.css';


function Header({details,faq,contact}) {

    //Change navbar when scrolling.
    //Change a links of the navbar when scrolling
    const [navbar,setNavbar] = useState(false);
    const [active,setActive] = useState([false,false,false]);

    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

        if (window.scrollY >= 80 && window.scrollY < 3100) {
            setActive([true,false,false]);
        } else if (window.scrollY >= 3100 && window.scrollY < 4055){
            setActive([false,true,false]);

        }else if (window.scrollY >= 4055){
            setActive([false,false,true]);
        }else {
            setActive([false,false,false]);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    },[])


    //Use on navbar to scroll to ref.(Home,Faq,Contact)
    const home = useRef(null);
    const scrollEffect = ( targetRef ) =>{
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }

  return (
    <section className="hero--Container" ref={home}>
        <div className={navbar ? 'nav--Holder' : ''}>
            <nav className={navbar ? 'nav--Container active' : 'nav--Container'}>
                <p className="nav--Logo" onClick = { () =>scrollEffect(home)}>
                    <h1>Tica<span> Travel</span></h1>
                </p>
                <ul>
                    <li className={active[0] ? 'active' : ''} onClick = { () =>scrollEffect(home) }><p>Home</p></li>
                    <li className={active[1] ? 'active' : ''} onClick = { () =>scrollEffect(faq) }><p>FAQ</p></li>
                    <li className={active[2] ? 'active' : ''} onClick = { () =>scrollEffect(contact) }><p>Contact</p></li>
                </ul>
            </nav>
        </div>
        <div className="nav--Text">
            <h1>Costa Rica traveling experience</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu cursus vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mi proin sed libero enim. Maecenas pharetra convallis posuere morbi leo urna.</p>
            <button type="button" onClick = { () =>scrollEffect(details)}><span></span>Details</button>
        </div>
    </section>
  )
}

export default Header