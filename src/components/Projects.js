import React, { useState } from 'react'

import html from '../images/svg-icons/html5-plain.svg'
import css from '../images/svg-icons/css3-plain.svg'
import git from '../images/svg-icons/git-plain.svg'
import github from '../images/svg-icons/github-original.svg'
import javascript from '../images/svg-icons/javascript-plain.svg'
import react from '../images/svg-icons/react-original.svg'
import node from '../images/svg-icons/nodejs-plain.svg'
import express from '../images/svg-icons/express-original.svg'
import python from '../images/svg-icons/python-plain.svg'
import flask from '../images/svg-icons/flask-icon.svg'
import sass from '../images/svg-icons/sass-original.svg'
import npm from '../images/svg-icons/npm-original-wordmark.svg'
import vscode from '../images/svg-icons/visualstudio-plain.svg'
import webpack from '../images/svg-icons/webpack-plain.svg'
import mongo from '../images/svg-icons/mongodb-plain.svg'
import postgre from '../images/svg-icons/postgresql-plain.svg'
import bulma from '../images/svg-icons/bulma-plain.svg'
import heroku from '../images/svg-icons/heroku-plain.svg'
import link from '../images/svg-icons/link-new.svg'

const skillArray = [
  { name: 'HTML5', svg: html },
  { name: 'CSS', svg: css },
  { name: 'Git', svg: git },
  { name: 'Github', svg: github },
  { name: 'JavaScript', svg: javascript },
  { name: 'React.js', svg: react },
  { name: 'Node.js', svg: node },
  { name: 'Express.js', svg: express },
  { name: 'Python', svg: python },
  { name: 'Flask', svg: flask },
  { name: 'Sass', svg: sass },
  { name: 'NPM', svg: npm },
  { name: 'VS Code', svg: vscode },
  { name: 'Webpack', svg: webpack },
  { name: 'MongoDB', svg: mongo },
  { name: 'PostgreSQL', svg: postgre },
  { name: 'Bulma', svg: bulma },
  { name: 'Heroku', svg: heroku },
  { name: 'Link', svg: link }
]

const projects = [
  {
    name: 'Sushi Sweeper',
    techs: [
      skillArray[0], skillArray[1], skillArray[4]
    ],
    type: 'Solo Project',
    days: 5,
    desc: 'A game based on Minesweeper built in JavaScript, involving recursion and 1D array logic. Features include changeable board size and difficulty setting.',
    github: 'https://github.com/ProDigresser/project-1',
    page: 'https://prodigresser.github.io/project-1/',
    images: []
  },
  {
    name: 'Just Eat App',
    techs: [
      skillArray[4], skillArray[5], skillArray[6], skillArray[7], skillArray[13]
    ],
    type: 'Pair Project',
    days: 2,
    desc: 'A Just Eat React app that pulls from the JustEat API, whilst utilising NPM and WebPack. We pair programmed  for the core of the project and then coded independently.',
    github: 'https://github.com/ProDigresser/project-2',
    page: 'https://prodigresser.github.io/project-2/',
    images: []
  },
  {
    name: 'Seeded.',
    techs: [
      skillArray[5], skillArray[6], skillArray[7], skillArray[14], skillArray[10]
    ],
    type: '4 Person Team',
    days: 7,
    desc: 'Using the MERN framework, we developed a feature rich app that helps people find plant sitters, integrating a map and social media components. My focus was on the back-end — designing endpoints, pulling from external APIs and serving to the front end.',
    github: 'https://github.com/ProDigresser/project-3',
    page: 'https://prodigresser-seeded.herokuapp.com/',
    images: []
  },
  {
    name: 'HowTo-Tube',
    techs: [
      skillArray[8], skillArray[9], skillArray[15], skillArray[10]
    ],
    type: 'Solo',
    days: 5,
    desc: 'A game based on Minesweeper built in JavaScript, involving recursion and 1D array logic. Features include changeable board size and difficulty setting.',
    github: 'https://github.com/ProDigresser/project-1',
    page: 'https://prodigresser.github.io/project-1/',
    images: []
  }
]

const Projects = () => {
  return <section className="section" id="projects">
    <section className="content">
      {projects.map(project => {
        return <div key={project.name} className="project-box">
          <article className="pt-one">
            <div className="mapped-skills project-skills">
              {project.techs.map((tech, i) => {
                return <div key={i} className="skill-box">
                  <div className="name-container" >
                    <p>{tech.name}</p>
                  </div>
                  <img src={tech.svg} alt={tech.name} />
                </div>
              })}
            </div>
            <div className="proj-img">
              Screenshots
            </div>
          </article>
          <article className="pt-two">
            <div className="proj-text">
              {project.desc}
            </div>
            <div className="proj-nav">
              <a href={project.page} className="page-link">
                <div className="skill-box">
                  <div className="name-container" >
                    <p>{skillArray[18].name}</p>
                  </div>
                  <img src={skillArray[18].svg} alt={skillArray[18].name} />
                </div>
              </a>
              <a href={project.github} className="page-link">
                <div className="skill-box">
                  <div className="name-container" >
                    <p>{skillArray[3].name}</p>
                  </div>
                  <img src={skillArray[3].svg} alt={skillArray[3].name} />
                </div>
              </a>
            </div>
          </article>
        </div>

      })}
    </section>
  </section>
}

export default Projects