import './App.css';
import Lab1Image from './res/Lab1.png';
import Lab2Image from './res/Lab2.png';
import Lab3Image from './res/Lab3.png';
import Lab4Image from './res/Lab4.png';
import ProfilePicure from './res/Profile Picture.png';

function App() {
  return (
    <div className="App">
      <div className="heroSection" id="main">
        <header>
          <div className="logo">
            <a href="">Portfolio</a>
          </div>
          <div className="nav">
            <button className="dropbtn"></button>
            <ul className="nav-content">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="texts">
            <h1>Hi, It’s Anton Grigorenko</h1>
            <p>Web-developer from Cherkasy, Ukraine</p>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="content">
          <h2>About</h2>
          <p>
            Hi, my name is Anton Grigorenko.
            I was born on July 18, 2004, in a beautiful village called Dubiivka.<br/>
          </p>
          br
          <p>
            In 2010, I entered the Dubiiv school, where I studied hard, was obedient,
            attended sports sections such as volleyball, <br/>
            and basketball, and I received awards for this and good academic achievements. <br/>
            After graduating from school, I passed an external independent assessment and submitted
            my documents to the university of my dreams, Cherkasy State Technological University. <br/>
            Now I study at CSTU, study hard, and learn different programming languages, create websites.
          </p>
        </div>
      </div>
      <div className="skills" id="skills">
        <div className="content">
          <h2 className="White">Skills</h2>
          <div className="flex">
            <div className="skillsImage">
              <img className="ava" src={ProfilePicure} alt=""/>
            </div>
            <div className="skillsRightContent">
              <table>
                <tr className="firstTd">
                  <td>Profile</td>
                  <td>UI / UX Engineer, Front-end Developer</td>
                </tr>
                <tr>
                  <td>UX Research</td>
                  <td>
                    <progress id="progressbar" value="40" max="100"></progress>
                  </td>
                </tr>
                <tr>
                  <td>Tools</td>
                  <td>Vs Code</td>
                </tr>
                <tr>
                  <td>UI Design</td>
                  <td>
                    <progress id="progressbar" value="90" max="100"></progress>
                  </td>
                </tr>
                <tr>
                  <td>Tools</td>
                  <td>Adobe PS, AI, XD, Figma, InVision</td>
                </tr>
                <tr>
                  <td>Front-end Dev</td>
                  <td>
                    <progress id="progressbar" value="45" max="100"></progress>
                  </td>
                </tr>
                <tr>
                  <td>Tools</td>
                  <td>HTML, CSS, JS, Bootstrap, React</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio" id="portfolio">
        <div className="content">
          <h2 className="White">Portfolio</h2>
          <h3>My Works</h3>
          <div className="flex">
            <div className="leftContent">
              <p>
                Now I'm learning to create websites, layout work on them, and I'm trying to learn JavaScript for
                further development. <br/> <br/>
                On the right side you can view my works.
              </p>
              <ul>
                <li>
                  <a href=""> <img src="res/ChevronLeft(E76B).png" alt="" /> </a>
                </li>
                <li>
                  <a href=""> <img src="res/ChevronRight(E76C).png" alt="" /> </a>
                </li>
              </ul>
            </div>
            <div className="rightContent">
              <table>
                <tr>
                  <td>
                    <img height={140} width={200} src={Lab1Image} alt="" className="LeftTop" />
                  </td>
                  <td>
                    <img height={140} width={200} src={Lab2Image} alt="" className="RightTop" />                  </td>
                </tr>
                <tr>
                  <td>
                    <img height={140} width={200} src={Lab3Image} alt="" className="LeftDown" />                  </td>
                  <td>
                    <img height={140} width={200} src={Lab4Image} alt="" className="RightDown" />                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer id="contact">
        <div className="content">
          <h2>Get in Touch</h2>
          <table>
            <tr>
              <td><a href="https://t.me/Anthony_B0SS">Telegram</a></td>
              <td><a href="mailto:grigorenko.net@gmail.com">grigorenko.net</a></td>
              <td><a href="tel:+380968065072">+380968065072</a></td>
            </tr>
            <tr>
              <td><a href="">Behance</a></td>
              <td><a href="">GitHub</a></td>
              <td><a href="">Facebook</a></td>
            </tr>
            <tr>
              <td><a href="">Twitter</a></td>
              <td><a href="">Instagram</a></td>
              <td><a href="">CodePen</a></td>
            </tr>
          </table>
          <div className="up">
            <a href="#"><img src="res/ChevronUp(E70E).png" alt="" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
