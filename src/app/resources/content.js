import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mohamed Sami',
    lastName:  'Mazari',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Student & Data Scientist | Shaping Ideas with Data',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French','Arabic']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about Data, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/samiMazari',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/mohamed-sami-mazari/',
    },
    {
        name: 'K kaggle',
        icon: '',
        link: 'https://www.kaggle.com/mohamedsami01',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:mohamedsamimazari@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Data Enthusiast and builder</>,
    subline: <>Welcome! I’m <InlineCode>Sami</InlineCode>, a Junior Data Scientist and freelancer.<br/>I specialize in transforming complex data into actionable insights that drive smarter decisions.</>
}

     

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Sami is a Junior Data Scientist and freelance based in Paris, France. With a deep passion for uncovering patterns and solving problems, I turn raw data into meaningful insights that empower smarter decisions.<br/>
    <br/>
        Let’s explore the possibilities data can unlock—together</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Fiverr',
                timeframe: 'JAN2024 - Present',
                role: 'Junior Data Scientist',
                achievements: [
                    <>🔍 Exploration et analyse de données : Nettoyage, visualisation et interprétation des données pour en extraire des insights pertinents.</>,
                    <>📋 Rapports analytiques : Production de rapports clairs et compréhensibles avec des visualisations et des recommandations.</>,
                    <>🗂️ Organisation et structuration des données : Mise en place d'un fichier propre et bien structuré pour faciliter l'analyse future.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    
                ]
            },
            {
                company: 'Protech Association',
                timeframe: 'JAN2023-FEB2024',
                role: 'general secretary',
                achievements: [
                    <>📋 Gestion administrative : Gérer les documents officiels, tels que les statuts, les règlements internes, et les archives.</>,
                    <>📆 Planification et coordination : Coordonner les calendriers des activités, des événements, et des réunions.</>,
                    <>🔍 Respect des statuts et règlements : Veiller à ce que les activités et décisions soient conformes aux statuts et objectifs de l'association.</>
                ],
                images: [ 
                   ]
            }
            
        ]
           
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Paris-Est Creteil (UPEC)',                                                       
                description: <>Licence Economie Et traitement de l'information ( En cours) </>,
                timeframe: '2024-2027',
            
            },
            {
                name: 'National School of Statistics and Applied Economics (ENSSEA)',
                description: <>Classe Préparaoire Statiqtique et economie appliquée  </>,
                timeframe: '2021-2024',
            }
        ]
    },
     internship: {
        display: true, // set to false to hide this section
        title: 'Studies Internship',
        experiences: [
            {
                company: 'Saa Assurance Company',
                timeframe: 'FEB2024-JUN2024',
                role: 'Associate Data Analyst',
                achievements: [
                    <>Practical Data Handling Skills : Data Cleaning & Preparation, Data Querying, Data Integration </>,
                    <>Data Analysis & Insights Development : Exploratory Data Analysis (EDA), Statistical Analysis, Reporting:</>,
                   
                ],
                images: [ 
                   ]
            }
            
        ]
           
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'SAS Programmer Professional Certificate ',
                description: <>The SAS® Base Programming courses, i had a demonstrated skills in manipulating and transforming data, combining SAS data sets, creating basic detail and summary reports using SAS procedures and identifying and correcting data.</>,
                link: 'https://github.com/samiMazari',
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/Certicate01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Data Analyst in Python ',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                  
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
