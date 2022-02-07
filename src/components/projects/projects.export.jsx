/*
Use This File To Import Images From image.export.jsx & Create New Project Sections
*/
import { imfinity320, imfinity640, imfinity960, imfinity1280, imfinity1600, imfinity1920, imfinity2240, imfinity2560, imfinity2880, imfinity3200, imfinity3520, imfinity3840} from './image.export';
import { portfolio320, portfolio640, portfolio960, portfolio1280, portfolio1600, portfolio1920, portfolio2240, portfolio2560, portfolio2880, portfolio3200, portfolio3520, portfolio3840} from './image.export';
import { crwnClothing320, crwnClothing640, crwnClothing960, crwnClothing1280, crwnClothing1600, crwnClothing1920, crwnClothing2240, crwnClothing2560, crwnClothing2880, crwnClothing3200, crwnClothing3520, crwnClothing3840} from './image.export';

export const projectsList = [{
  id: 'Imfinity',
  images: {
    image1: imfinity320,
    image2: imfinity640,
    image3: imfinity960,
    image4: imfinity1280,
    image5: imfinity1600,
    image6: imfinity1920,
    image7: imfinity2240,
    image8: imfinity2560,
    image9: imfinity2880,
    image10: imfinity3200,
    image11: imfinity3520,
    image12: imfinity3840
  },
  title: 'Imfinity',
  technologies: ['4K', 'HTML5', 'CSS / SCSS', 'Javascript', 'React', 'NASA Image and Video Library API', 'Intersection Observer', 'Npm', 'GitHub', 'Git'],
  summary: `<p>This is my first custom project that I've decided to add to my portfolio.</p>`,
  full: `<p>This project is an infinite scrolling website with search features. The images are fetched from the NASA Image and Video Library API. The infinite scrolling mechanism
  uses the Intersection Observer API.</p>
  <p>I've realized that other developers understanding your code is just as important as writing it, so I decided to put extra effort into keeping the code organized and easy to understand.</p>
  <p>I've learned some interesting data manipulation techniques that will be useful in my future career.</p>
  <p>NOTE: API is rate limited.</p>`,
  sources: {
    demo: 'https://imfinity-live-quentin.herokuapp.com/',
    github: 'https://github.com/quentin8204/imfinity'
  },
  color: 'default',
  alt: 'Imfinity',
  direction: 'slide-right-custom',
  readMore: false
  },
  {
  id: 'Portfolio',
  images: {
    image1: portfolio320,
    image2: portfolio640,
    image3: portfolio960,
    image4: portfolio1280,
    image5: portfolio1600,
    image6: portfolio1920,
    image7: portfolio2240,
    image8: portfolio2560,
    image9: portfolio2880,
    image10: portfolio3200,
    image11: portfolio3520,
    image12: portfolio3840
  },
  title: 'Portfolio',
  technologies: ['4K', 'HTML5', 'CSS / SCSS', 'Javascript', 'React', 'Formspree', 'Font Awesome', 'Node', 'Npm', 'GitHub', 'Git'],
  summary: `<p>I've created this website to show my projects, my creativity and my attempts to push boundaries with interfaces.</p>`,
  full: `<p>The programming features of this single page website include smooth scrolling, a preloader spinner, keyboard accessibility, 
  local and session storage, dark mode, and a repeated projects section with a 'read more' button.</p>
  <p>Other features include a flexible fixed navigation menu on smaller devices to improve the user experience, image optimization and a contact form made with Formspree.</p>`,

  sources: {
    demo: 'https://portfolio-live-quentin.herokuapp.com/',
    github: 'https://github.com/quentin8204/portfolio'
  },
  color: 'default',
  alt: 'Portfolio',
  direction: 'slide-left-custom',
  readMore: false
  },
  {
    id: 'crwnClothing',
    images: {
      image1: crwnClothing320,
      image2: crwnClothing640,
      image3: crwnClothing960,
      image4: crwnClothing1280,
      image5: crwnClothing1600,
      image6: crwnClothing1920,
      image7: crwnClothing2240,
      image8: crwnClothing2560,
      image9: crwnClothing2880,
      image10: crwnClothing3200,
      image11: crwnClothing3520,
      image12: crwnClothing3840
    },
    title: 'Crwn-Clothing',
    technologies: ['1080p', 'HTML5', 'CSS3 / SCSS', 'Javascript', 'React', 'React Router', 'Stripe', 'Redux technologies', 'Firebase', 'Reselect', 'Compression', 'Lodash.memoise', 'Node', 'Npm', 'GitHub', 'Git'],
    summary: `<p>I created this modified project based on a course called Complete React Developer by Andrei Neagoie and Yihua Zhang.</p>`,
    full: `<p>I worked on this project in order to gain general knowledge of the current web development environment and to brush up on my coding skills. 
    This website has functionality such as sign in/out, sign up, cart functionality, checkout with stripe and more.</p>
    <p>I decide to push this project further by overhauling the site's aesthetics. 
    I added a fixed menu for easy menu access, used a dark color scheme that fits with the image assets, added animations and made the site responsive.</p>`,
    sources: {
      demo: 'https://crwn-live-quentin.herokuapp.com/',
      github: 'https://github.com/quentin8204/crwn-clothing',
      original: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'
    },
    color: 'default',
    alt: 'Crown Clothing',
    direction: 'slide-right-custom',
    readMore: false
  }];