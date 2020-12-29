import college from '../images/ed-logos/broastairs-college-logo.jpg'
import ga from '../images/ed-logos/ga-logo.png'
import ca from '../images/ed-logos/codecademy-logo.png'

const experience = [
  {
    name: 'Software Engineering Immersive',
    date: 'Oct 2020', end: 'Dec 2020',
    desc: 'A 12-week, full-time course focused on the full development process. The syllabus consists of 500+ hours of learning and projects, including deep dives into various areas of the development process.',
    img: ga,
    org: 'General Assembly',
    isActive: 'is-active'
  },
  {
    name: 'Self Guided',
    date: 'April 2016', end: 'April 2017',
    desc: 'Online learning platform offering classes on a wide range of programming languages. Courses I took included JavaScript, jQuery & Angular.js.',
    img: ca,
    org: 'Codecademy',
    isActive: ''
  },
  {
    name: 'Diploma in Hospitality Management',
    date: '2006', end: '2008',
    desc: 'A BTEC National Diploma offering a broad study of the hotel and catering industry, giving an insight into customer care, marketing and service. ',
    img: college,
    org: 'Broadstairs College',
    isActive: ''
  }
]

export default experience