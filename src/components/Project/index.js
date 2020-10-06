import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'whr',
      title: 'World Happiness Report',
      description: 'Data Visualization',
      technologies: 'd3.js | leaflet.js | geojson | python | pandas',
      image: 'screen-shot-whr.png',
      app: 'https://petitspoissons.github.io/WHR2019/index.html',
      repo: 'https://github.com/PetitsPoissons/WHR_viz',
    },
    {
      name: 'covie',
      title: 'CoVie Search',
      description: 'Dashboard',
      technologies:
        'html | css | bootstrap | js | Plotly.js | server-side APIs',
      image: 'screen-shot-coviesearch.png',
      app: 'https://jaaybe.github.io/covidsearch/index.html',
      repo: 'https://github.com/jaaybe/covidsearch',
    },
    {
      name: 'dintel',
      title: 'Dintel Solutions',
      description: 'Machine Learning',
      technologies: 'scikit-learn | statsmodels | python | pandas | numpy',
      image: 'screen-shot-dintel.png',
      app: 'https://petitspoissons.github.io/dintel-solutions/index.html',
      repo: 'https://github.com/PetitsPoissons/Dintel-Solutions',
    },
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'shrinko.jpg',
      app: 'https://shrinko.herokuapp.com/',
      repo: 'https://github.com/PetitsPoissons/admin-patient-system',
    },
    {
      name: 'tech-blog',
      title: 'the TECH blog',
      description: 'Blog',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'the-tech-blog.jpg',
      app: 'https://the-tech-blog.herokuapp.com/',
      repo: 'https://github.com/PetitsPoissons/the-tech-blog',
    },
    {
      name: 'weather-app',
      title: 'The Weather App',
      description: 'World Weather Forecast Dashboard',
      technologies: 'html | css | bootstrap | js | Moment.js | OpenWeather API',
      image: 'screen-shot-weather-dashboard.png',
      app: 'https://petitspoissons.github.io/weather-dashboard/',
      repo: 'https://github.com/PetitsPoissons/weather-dashboard',
    },
  ]);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mx-5 my-5">
      {projects.map((project) => (
        <div className="col mb-4">
          <div className="card">
            <img
              src={require(`../../assets/images/portfolio/${project.image}`)}
              alt={project.title}
              className="card-img"
              key={project.name}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">
                <strong>Title:</strong> <span>{project.title}</span>
              </h5>
              <p className="card-text">
                <strong>Technologies:</strong>
                <br />
                <span>{project.technologies}</span>
              </p>
              <p className="card-text app">
                <a href={project.app} target="_blank" rel="noopener noreferrer">
                  Deployed APP
                </a>
              </p>
              <p className="card-text repo">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> <strong>REPO</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className="wrapper justify-content-around">
    //   {projects.map((project) => (
    //     <div className="card">
    //       <div className="img-container">
    //         <img
    //           src={require(`../../assets/images/portfolio/${project.image}`)}
    //           alt={project.title}
    //           className="img-thumbnail"
    //           key={project.name}
    //         />
    //       </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Title:</strong> {project.title}
    //       </li>
    //       <li>
    //         <strong>Technologies:</strong> {project.technologies}
    //       </li>
    //       {/* <li>
    //         <strong>Deployed App:</strong> {project.location}
    //       </li>
    //       <li>
    //         <strong>Repo:</strong> {project.location}
    //       </li> */}
    //     </ul>
    //   </div>
    // </div>
    //   ))}
    // </div>
  );
}

export default Project;
