import { v4 as uuidv4 } from "uuid";

export default {
  success: true,
  data: {
    projects: [
      {
        id: uuidv4(),
        name: "FlyPlan",
        desc: "Discover the future of flight tracking with FlyPlan. This cutting-edge, full-stack web application offers real-time flight information with an emphasis on user-centric design. Its sleek interface allows for easy navigation and personalized updates, making flight tracking an effortless part of your travel plans. Whether you're a frequent flyer or an aviation enthusiast, FlyPlan ensures you stay ahead with the latest in flight technology.",
        tech: "JavaScript | TypeScript |React | Node.js | HTML | CSS | MongoDB | Skyscanner API",
        img: "/assets/flyplan.png",
        video_link: "https://drive.google.com/file/d/1hGZ-fBxTkMHY1aaL-EigioTvRpWHyujF/view?usp=share_link",
        link: "https://www.flyplan.org/",
      },
      {
        id: uuidv4(),
        name: "Word-Mind",
        desc: "Elevate your language learning with Word-Mind, a dynamic flashcard app designed to help you master new words swiftly and effectively. Utilizing the latest web technologies, Word-Mind creates a personalized learning environment that adapts to your pace and style. Ideal for students, professionals, and casual learners alike, it's the perfect tool to expand your vocabulary across various languages.",
        tech: "JavaScript |React | Node.js | HTML | Tailwind | Firebase",
        img: "/assets/word-mind.png",
        link: "https://word-mind-mustafa-altuntas.vercel.app/",
      },
      {
        id: uuidv4(),
        name: "OZJewels",
        desc: "Step into the world of luxury with OZJewels, a premium Shopify-powered jewelry shop. This online store showcases a carefully curated selection of fine jewelry, offering an elegant and responsive shopping experience. From browsing to checkout, OZJewels makes luxury accessible, combining beautiful design with intuitive functionality to meet the highest standards of online retail.",
        tech: "Shopify | JavaScript | HTML | CSS",
        img: "/assets/Ozjewels.png",
        link: "https://www.ozjewels.nl/",
      },
      {
        id: uuidv4(),
        name: "Games",
        desc: "Dive into nostalgia with our custom-built games platform, featuring classics like Snake and Pong. Designed for quick leisurely breaks or engaging play sessions, these games are crafted to bring simple joy and fun directly to your browser. Perfect for all ages, they offer a blend of retro aesthetics with modern web technology to deliver smooth and engaging gameplay.",
        tech: "React | JavaScript | CSS",
        img: "/assets/games.png",
        link: "https://snake-pong-games.vercel.app",
      },
      
    ],
  },
};
