import sweeper from '../projects/sweeper.png'
import riot from '../projects/riot.png'
import legislativenews from '../projects/News Page.png'
import legislativetable from '../projects/Legislative-table.png'
import legislativelanding from '../projects/legislative website.png'
import legislativetableview from '../projects/Legislative - Esubmission View.png'
import cryoland from '../projects/cryo.png'
import cryoprod from '../projects/cryo product.png'
import cryorev from '../projects/cryo - Reviews.png'
import apexland from '../projects/apex.png'
import apexboost from '../projects/apex -boosting.png'
import apexpack from '../projects/apex - pack.png'
import lappeed1 from '../projects/lappee -dashboard.png'
import lappeed2 from '../projects/lappee -dashboard2.png'
import lappeed3 from '../projects/lappee -dashboard3.png'
import lappeed4 from '../projects/lappee -dashboard4.png'

const Projects = [
    {
        name: 'Lappee',
        description: 'Lappee is a website made for online shopping. It focuses on managing things easily and uses advanced technology like machine learning. This project was created as part of our school thesis.',
        type: 'School Project',
        images: [
            lappeed1,
            lappeed2,
            lappeed3,
            lappeed4
        ],
        technologies: [
            'Angular',
            'Type Script',
            'Html',
            'Bootstrap',
            'Css',
            'API'
        ]
    },
    {
        name: 'Apex lounge',
        description: 'Apex Lounge is a website built using Laravel Blade, a type of web technology. It\'s designed to offer services that help players improve their performance in an online shooting game.',
        type: 'Client',
        images: [
            apexland,
            apexboost,
            apexpack
        ],
        technologies: [
            'Laravel Blade',
            'Php',
            'Bootstrap',
            'JavaScript',
            'Html',
            'Css',
            'API'
        ]
    },
    {
        name: 'Cryo Games',
        description: 'CryoGames is a landing website where sellers can display their products. They can showcase items from their own websites by connecting to an external API from another ecommerce platform.',
        type: 'Client',
        images: [
            cryoland,
            cryoprod,
            cryorev
        ],
        technologies: [
            'JavaScript',
            'Html',
            'Bootstrap',
            'Css',
            'API'
        ]
    },
    {
        name: 'Quezon Province Legislative Website',
        description: 'The Quezon Province Legislative Website streamlines government affairs with efficient document management and information systems for smoother governance.',
        type: 'Client',
        images: [
            legislativenews,
            legislativetable,
            legislativelanding,
            legislativetableview
        ],
        technologies: [
            'Vue',
            'JavaScript',
            'Html',
            'Bootstrap',
            'Css',
            'API'
        ]
    },
    {
        name: 'RIOT',
        description: 'Riot is an online platform built for showcasing various products. Sellers can present their items on this website by connecting to an external API from another ecommerce platform.',
        type: 'Client',
        images: [
            riot
        ],
        technologies: [
            'JavaScript',
            'Html',
            'Css',
            'API'
        ]
    },
    {
        name: 'Swypers Paradise',
        description: 'Swypers is an online platform designed for displaying their selling accounts. Sellers can showcase their items on this website by linking to an external API from another ecommerce platform.',
        type: 'Client',
        images: [
            sweeper
        ],
        technologies: [
            'JavaScript',
            'Html',
            'Css',
            'API'
        ]
    }
]

export default Projects;
