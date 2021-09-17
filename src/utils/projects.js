import HowRU from '../assets/images/howru-img.jpg';
import ManageIt from '../assets/images/manage-it.png';
import Cinfo from '../assets/images/cinfo.png';
import DeepThoughts from '../assets/images/deep-thoughts.png';
import CinfoPage from '../assets/images/cinfo-page.png';
import ManagePage from '../assets/images/manage-page.png';
import HowRUPage from '../assets/images/howru-page.png';
import ThoughtsPage from '../assets/images/thoughts-page.png'

const projects = [
    {
        image: HowRU,
        preview: HowRUPage, 
        name: 'HowRU', 
        technologies: 'React, MongoDB, Express, Node, Material-UI, GraphQL',
        description: 'A digital tool to assist in finding resources to deal with mood shifts, anxiety, stress, sadness, and depression. ' +
            'Mindfulness at your fingertips! Connecting you with direct resources to get you through the day based on your mood.', 
        deployed: 'https://howru-meditation.herokuapp.com/',
        github: 'https://github.com/Xavy-Romeo/how-r-u'
    },
    {
        image: ManageIt,
        preview: ManagePage, 
        name: 'Manage It', 
        technologies: 'MySQL, Handlebars, Express, Node, JavaScript, CSS',
        description: 'Manage mundane repetitve tasks quickly and easily. Send reminders via text to yourself or others. Manage it is a simple, ' +
            'barebones checklist application that lets you create checklists and edit it to your desires. Additionally, there is a functionality ' + 
            ' to send a text at a scheduled time for the task of your choosing.', 
        deployed: 'https://cryptic-bastion-04157.herokuapp.com/',
        github: 'https://github.com/Xavy-Romeo/manage-it'
    },
    {
        image: DeepThoughts,
        preview: ThoughtsPage, 
        name: 'Deep Thoughts',
        technologies: 'MySQL, GraphQL, Express, Node, HTML, CSS',
        description: 'A simple social media app that allows you to express your feelings or thoughts. Users have the ablility to view and comment on other ' +
            "user's posts as well as give them a like. Users also have the ability to add each other as friends.", 
        deployed: 'https://deep-thoughts-random34234325.herokuapp.com/',
        github: 'https://github.com/Xavy-Romeo/deep-thoughts'
    },
    {
        image: Cinfo,
        preview: CinfoPage,  
        name: 'Cinfo',
        technologies: 'HTML, CSS, JavaScript',
        description: 'The high concept of the Cinfo web application is a simple solution answer to the question of what to do when you ' + 
            'want to experience the life of the city. It is a streamlined events, arts, and culture aggregator focused towared metropolitan ' +
            "areas. It's designed to be used at home and on the go, with an unobtrusive design and user experience. The functional concept of " +
            'Cinfo is very simple; A user enters a city and is returned with current events, arts, and culture information regarding that city.', 
        deployed: 'https://xavy-romeo.github.io/project-1-ucla/',
        github: 'https://github.com/Xavy-Romeo/project-1-ucla'
    },
];

export default projects;