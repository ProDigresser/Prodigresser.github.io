import skillArray from './skills'

import projOneOneScr from '../images/proj-imgs/proj-1/screenshot-1.png'
import projOneTwoScr from '../images/proj-imgs/proj-1/screenshot-2.png'
import projOneThreeScr from '../images/proj-imgs/proj-1/screenshot-3.png'
import projOneFourScr from '../images/proj-imgs/proj-1/screenshot-4.png'

// import projTwoOneScr from '../images/proj-imgs/proj-2/screenshot-1.png'
// import projTwoTwoScr from '../images/proj-imgs/proj-2/screenshot-2.png'
// import projTwoThreeScr from '../images/proj-imgs/proj-2/screenshot-3.png'
// import projTwoFourScr from '../images/proj-imgs/proj-2/screenshot-4.png'

// import projThreeOneScr from '../images/proj-imgs/proj-3/screenshot-1.png'
// import projThreeTwoScr from '../images/proj-imgs/proj-3/screenshot-2.png'
// import projThreeThreeScr from '../images/proj-imgs/proj-3/screenshot-3.png'
// import projThreeFourScr from '../images/proj-imgs/proj-3/screenshot-4.png'

// import projFourOneScr from '../images/proj-imgs/proj-4/screenshot-1.png'
// import projFourTwoScr from '../images/proj-imgs/proj-4/screenshot-2.png'
// import projFourThreeScr from '../images/proj-imgs/proj-4/screenshot-3.png'
// import projFourFourScr from '../images/proj-imgs/proj-4/screenshot-4.png'

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
    images: [projOneOneScr, projOneTwoScr, projOneThreeScr, projOneFourScr],
    isActive: 'is-active'
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
    // images: [projTwoOneScr, projTwoTwoScr, projTwoThreeScr, projTwoFourScr],
    isActive: ''
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
    // images: [projThreeOneScr, projThreeTwoScr, projThreeThreeScr, projThreeFourScr],
    isActive: ''
  },
  {
    name: 'HowTo-Tube',
    techs: [
      skillArray[8], skillArray[9], skillArray[15], skillArray[10]
    ],
    type: '3 Person Team',
    days: 6,
    desc: 'In this project, we designed a Python back end with Flask & PostgreSQL and a React.js front end for a self-improvement video site. We developed the database as a group before designing features independently. My areas of input were on the back end — designing the serializers and controllers',
    github: 'https://github.com/ProDigresser/project-4',
    page: 'https://howto-tube.herokuapp.com/',
    // images: [projFourOneScr, projFourTwoScr, projFourThreeScr, projFourFourScr],
    isActive: ''
  }
]

export default projects