import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mathieu",
  lastName: "Carcasses",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Étudiant en deuxième année de bachelor informatique",
  avatar: "/images/photoperso.png",
  location: "France / Toulouse", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mathieucrcs",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mathieu-carcasses/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:carcasses.mathieu@live.fr",
  },
];

const home = {
  label: "Home",
  title: `Portfolio Mathieu CARCASSES`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mathieu CARCASSES<br /></>,
  subline: (
    <>
      Étudiant de 20 ans en deuxième année de bachelor informatique à l'IPI Toulouse, Je vise à enrichir en permanence mes compétences en développement et à découvrir de nouvelles technologies.
      <br />
    </>
  ),
};

const about = {
  label: "Profil",
  title: "Voir mon Profil",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Profil",
    description: (
      <>
        Étudiant en informatique à l'IPI Blagnac, spécialisé en développement logiciel et web, je suis passionné par la technologie et son impact. Mon parcours m'a permis d'acquérir des compétences en programmation et gestion de projets. Mon expérience à l’Hôtel Beauséjour Toulouse a renforcé mon organisation, ma communication et mon adaptabilité. Le sport m'a appris la discipline et l'esprit d'équipe. Mes voyages en Europe ont élargi ma vision et ma compréhension des cultures. Curieux et motivé, je cherche à apprendre continuellement et à relever de nouveaux défis.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences professionnelles",
    experiences: [
      {
        company: "Stage Dispofi",
        timeframe: "2025 - Present",
        role: "Stagiaire",
        achievements: [
          <>
            Migration CMS - Bonne-assurance.com
          </>,
          <>
            Migration d’un site existant avec 2 cms. Wordpress / Storyblok vers le CMS Payload.
            Environnement technique : React / NextJs / MongoDB / Aws / Cloudfront / AppRunne
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hôtel Beauséjour Toulouse",
        timeframe: "2020 - 2023",
        role: "Stagiaire",
        achievements: [
          <>
            Réservations et gestion des stocks : Maîtrise de la planification, gestion des flux.
            Réception et e-notoriété : Satisfaction client, gestion de l’image de marque.
            Facturation : Organisation, fiabilité et précision.
          </>,
          <>
            Compétences développées :
            Gestion des priorités, travail en équipe, adaptabilité.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Cursus scolaire",
    institutions: [
      {
        name: "Campus Igensia Ecole IPI ",
        description: <>En cours d'obtention d'une licence d'informatique spécialité développement.</>,
      },
      {
        name: "Lycée Saint-Sernin Toulouse :",
        timeframe: "2021 - 2023",
        description: <>Baccalauréat général en mathématiques, sciences numériques et informatiques.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Mes projets",
  title: "Projets",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
