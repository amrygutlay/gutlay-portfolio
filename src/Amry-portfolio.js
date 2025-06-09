import logo from './logo.svg';
import photo from './ID_Gutlay.jpeg';
import bitram from './8bitram.JPG';

function  Portfolio() { 
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
      <img src={photo} className="photo" alt='myphoto' />
        <h1>Amry Judith T. Gutlay </h1>
        <p> <b>
          <i>
          Bachelor of Science in Computer Engineering Major in Cybersecurity <br></br>
          </i>
        </b>
        </p>

        <h2>
          About Me
        </h2>


        <p>
          A 4th year college student, pursuing my degree as Bachelor of Science in Computer Engineering <br></br>
         at Technological Institute of the Philippines Manila, where I'm developing a strong foundation <br></br>
         to be a future Computer Engineer. Outside of my academic pursuits, I enjoy discovering new <br></br>
         hobbies in different fields such as in music, art, and more,  and I'm always eager to learn <br></br>
         new things and improve. I look forward in using the knowledge I will obtain in Emerging <br></br>
         Technologies in Computer Engineering in the industry someday.
        </p>

        <h2>
          Contact Information
        </h2>

        <h3>
          Contact Number
        </h3>
        <p>
          <a>
            (0955) 054 8948
          </a>
        </p>

        <h3>
          Email
        </h3>
        <p>
          <a href="mailto:majgutlay@tip.edu.ph">
            majgutlay@tip.edu.ph
          </a>
        </p>

        <h3>
          Facebook
        </h3>
        <p>
          <a href="https://www.facebook.com/amwyyyyy">
            Amry Gutlay
          </a>
        </p>

        <h3>
          Instagram
        </h3>
        <p>
          <a href="https://www.instagram.com/amwyyy_/">
            @amwyyy_
          </a>
        </p>

        <h2>
          Educational Attainment
        </h2>
        <p>
          <h3>
            Elementary
          </h3>
          <b>
            Bagong Barangay Elementary School <br></br>
          </b>
          <i>
            2010-2016
          </i>

          <h3>
            Junior High School
          </h3>
          <b>
            Carlos P. Garcia High School <br></br>
          </b>
          <i>
            2016-2020
          </i>

          <h3>
            Senior High School
          </h3>
          <b>
            Arellano University Juan Sumulong Campus <br></br>
          </b>
          <i>
            2020-2022
          </i>

          <h3>
            College
          </h3>
          <b>
            Technological Institute of the Philippines Manila <br></br>
          </b>
          <i>
            2022-2026
          </i>
        </p>

        <h2>
          Projects
        </h2>
        <img src={bitram} className="eytbitram" alt="ram" />
        <p>
          <h3>
            8-bit Computer (Random Access Memory)
          </h3>
          <i>
            In partial fulfillment of the course CPE 310-Computer Architecture and Organization
          </i>
        </p>

      </header>
    </div>
  );
}

export default Portfolio;
