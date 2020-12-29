import firstProject from "./images/Techdegree-project-1-screenshot.png"
import secondProject from "./images/Techdegree-project-2-screenshot.png"
import thirdProject from "./images/Techdegree-project-3-screenshot.png"
import fourthProject from "./images/Techdegree-project-4-screenshot.png"
import sixthProject from "./images/Techdegree-project-6-screenshot.png"
import seventhProject from "./images/Techdegree-project-7-screenshot.png"
import eigthProject from "./images/Techdegree-project-8-screenshot.png"
import amazonClone from "./images/amazon-clone.jpg";
import Netflix from "./images/netflix-clone.jpg";
import Journal from "./images/Screenshot-Daily-Journal.jpg";
import ToDoList from "./images/Screenshot-ToDoList.jpg";
import Game from "./images/Screenshot-Simon-Game.jpg";

const information = [
   {
      title: "My First Project",
      img: firstProject,
      content: "This was the first project that I’ve ever worked on. It’s not much, all I added was a little bit of HTML that I learned in the beginning of my course. I keep it as a memory of how far I have gotten from the beginning of my programming journey. It is an eye opener of to see how far I’ve come, and this will help motivate me to continue my journey to becoming a professional software developer.",
      link: "https://ramces14.github.io/Techdegree-project-1/",
      github: "https://github.com/ramces14/TD-Project-1"
   },
   [
      {
         title: "Responsive Website",
         img: secondProject,
         content: "This project was my first attempt at using CSS to create a responsive webpage. The only skills required to do this project was HTML and CSS. With the use of media queries I was able to successfully build a responsive website that looked similar to the template that was provided for this project.",
         link: "https://ramces14.github.io/Project2/",
         github: "https://github.com/ramces14/Project2"
      },
      {
         title: "CSS Form",
         img: thirdProject,
         content: "The goal of this project was to create a responsive webpage with the main focus on forms. Knowing how to create forms is an important part of web development and it allows people to provide feedback or interaction with one another. Here once again used CSS and HTML to create this responsive form using the template provided as a guide.",
         link: "https://ramces14.github.io/Techdegree-project-3/",
         github: "https://github.com/ramces14/Techdegree-project-3"
      },
      {
         title: "SCSS Project",
         img: fourthProject,
         content: "The goal of this project was to use SCSS and the many features that it comes with to edit the layout of this site. Overall I find SCSS as a better way to organize CSS files, similar to the way that React organizes components together. I still use SCSS sometimes to organize the styles of very big projects, but for smaller project I stick to CSS.",
         link: "https://ramces14.github.io/techdegree-project-4/",
         github: "https://github.com/ramces14/techdegree-project-4"
      }
   ],
   [
      {
         title: "Simon Game",
         img: Game,
         content: `For this project I used javascript and jQuery to create a simon game. This game creates a random pattern that you must follow and adds a new step once you’ve completed the level. The pattern is stored in an array, and is emptied after you lose. This is a simple game that shows my skills in javascript dom manipulation and jQuery.`,
         link: "https://ramces14.github.io/Simon-Game/",
         github: "https://github.com/ramces14/Simon-Game"
      },
      {
         title: "Wheel of Success",
         img: sixthProject,
         content: "This project was my first attempt at manipulating the DOM. In this project I created a miniture version of the game show 'wheel of fortune'. I really enjoyed this project cause it was the first time I experince the power of javascript and the amount of interactivity that you add to a webpage to add to the user's experience.",
         link: "https://ramces14.github.io/Techdegree-project-6/",
         github: "https://github.com/ramces14/Techdegree-project-6"
      },
      {
         title: "Responsive Dashboard",
         img: seventhProject,
         content: "This is the first project where I had to put all my skills together to create a website that was not only aesthetically pleasing, but also interactive. For this project I was given a template to guide me through the design of the website.Everything from the HTML, CSS, and javascript was created by me except the charts. The charts were created with the help of Chart.js. This was a really fun project to work on because I was able to put everything together to show how far I’ve gone since the beginning of my journey.",
         link: "https://ramces14.github.io/Techdegree-project-7/",
         github: "https://github.com/ramces14/Techdegree-project-7"
      },
      {
         title: "Employee Directory",
         img: eigthProject,
         content: "The goal of this project was to create an Employee directory using an API that generated random users that have their own information like birthday, street address, and etc. This website was created with HTML, CSS and javascript, but most of the information was created using javascript to fetch most of the information using API’s. Like always this website is also responsive and has some interactivity as well.",
         link: "https://ramces14.github.io/Techdegree-project-8/",
         github: "https://github.com/ramces14/Techdegree-project-8"
      }
   ],
   [
      {
         title: "Amazon Clone",
         img: amazonClone,
         content: `The goal of this project was to create a replica of one the largest e-commerce website, Amazon. This website has the same look and feel of the actual Amazon website. At the moment products are manually added as components, but I plan to use an API in the future to load new products everyday. I included a checkout page and a page to sign-in with an account, or register if you haven’t done so. The backend is completed using firebase. It gives you the ability to register with your own email and password. This was a very fun and exciting project to work on. React is a very powerful javascript library that can really help you build anything that you can imagine.`,
         link: "https://clone-1dd81.web.app/",
         github: "https://github.com/ramces14/Amazon-Clone"
      },
      {
         title: "Netflix Clone",
         img: Netflix,
         content: `The goal of this project was to create a copy of the popular streaming service 
         Netflix. The site was built to look like the homepage of Netflix. It has multiple 
         genres to choose from and it updates with new movies every week. The Banner also 
         changes with every refresh of the page. There are more updates that I want to add 
         to this clone like adding a sign in functionality, and possibly adding trailers to 
         all of the movies. Overall I found this project to be very fun, and I intend to update 
         this project with the mentioned updates that I would like to add.`,
         link: "https://netflix-clone-51fd3.web.app/",
         github: "https://github.com/ramces14/Netflix-Clone"
      }
   ],
   [
      {
         title: "Daily Journal",
         img: Journal,
         content: `In this project I created a website that allows you to create a journal entry. The website saves your journal entry to the homepage where you can read all the journal entries that you’ve made. For now your journal entries are saved within an array. I would have loved for this site to use a database to save your data even after you leave the site, but running a server in my home would be very difficult. For now the entries will be saved as long as you stay on the site.`,
         link: "https://arcane-harbor-39253.herokuapp.com/",
         github: "https://github.com/ramces14/Daily-Journal"
      },
      {
         title: "To Do List",
         img: ToDoList,
         content: `In this project I’ve created a simple todo list, but this todo list saves the data even after you leave the page. The data is saved using MongoDB atlas and using mongoose to create and store your data into MongoDB atlas. You may also delete items if you no longer need it in your list. Currently you can create a new list by adding a forward slash plus whatever you want to name your list to the end of the Url (/<Make a name>). I plan on updating this project by creating an input that allows you to create a new list making it easier for the user experience.`,
         link: "https://fierce-beyond-95770.herokuapp.com",
         github: "https://github.com/ramces14/ToDoList"
      }
   ]
];

export default information;