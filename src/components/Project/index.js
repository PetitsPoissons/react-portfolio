import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'whr',
      title: 'World Happiness Report',
      description: 'Data Visualization',
      technologies: 'd3.js | leaflet.js | geojson | python | pandas',
      image: 'screen-shot-whr.png',
      app: '',
      repo: '',
    },
    {
      name: 'covie',
      title: 'CoVie Search',
      description: 'Dashboard',
      technologies:
        'html | css | bootstrap | js | Plotly.js | server-side APIs',
      image: 'screen-shot-coviesearch.png',
    },
    {
      name: 'dintel',
      title: 'Dintel Solutions',
      description: 'Machine Learning',
      technologies: 'scikit-learn | statsmodels | python | pandas | numpy',
      image: 'logo-dintel.png',
    },
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'shrinko.jpg',
    },
    {
      name: 'tech-blog',
      title: 'the TECH blog',
      description: 'Blog',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'the-tech-blog.jpg',
    },
    {
      name: 'weather-app',
      title: 'The Weather App',
      description: 'World Weather Forecast Dashboard',
      technologies: 'html | css | bootstrap | js | Moment.js | OpenWeather API',
      image: 'screen-shot-weather-dashboard.png',
    },
  ]);
  return (
    <div className="wrapper">
      {projects.map((project) => (
        <div className="card">
          <div className="img-container">
            <img
              src={require(`../../assets/images/portfolio/${project.image}`)}
              alt={project.title}
              className="img-thumbnail"
              key={project.name}
            />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Title:</strong> {project.name}
              </li>
              <li>
                <strong>Technologies:</strong> {project.technologies}
              </li>
              {/* <li>
                <strong>Deployed App:</strong> {project.location}
              </li>
              <li>
                <strong>Repo:</strong> {project.location}
              </li> */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
