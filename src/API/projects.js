import skillArray from './skills'

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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
    isActive: ''
  }
]

export default projects