import { v4 as uuidv4 } from "uuid";

export default {
  success: true,
  data: {
    projects: [
      {
        id: uuidv4(),
        name: "FlyPlan",
        desc: "Flyplan is an innovative and user-centric full-stack web application designed to deliver seamless and responsive flight information in real-time. With its intuitive interface, users can effortlessly access and track flight details, while also enjoying the convenience of saving personalized preferences and updates within their personal accounts. Stay informed and connected with Flyplan as it brings you the latest flight information, all wrapped in a user-friendly experience",
        tech: "JavaScript | TypeScript |React | Node.js | HTML | CSS | MongoDB | Skyscanner API",
        img: "assets/flyplan.png",
        video_link: "https://drive.google.com/file/d/1hGZ-fBxTkMHY1aaL-EigioTvRpWHyujF/view?usp=share_link",
        link: "https://www.flyplan.org/",
      },
      {
        id: uuidv4(),
        name: "Travel-Bucket-List",
        desc: "DevHub is a social media website designed for developers to connect and collaborate on development projects.",
        tech: "JavaScript | TypeScript |React | Node.js | HTML | CSS | MongoDB | Opentripmap API",
        img: "assets/travel-bucket app.png",
        link: "https://github.com/dinbusan/dev-hub",
      },
      {
        id: uuidv4(),
        name: "Games",
        desc: "Some small games created for freelance work. You can have fun with snake and pong game",
        tech: "React | JavaScript  | CSS ",
        img: "assets/games.png",
        link: "https://snake-pong-games.vercel.app",
      },
    ],
  },
};
