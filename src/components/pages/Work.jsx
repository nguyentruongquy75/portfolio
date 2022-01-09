import React from "react";
import Project from "../project/Project";

import SocialImage from "../../assets/img/Social.png";
import Blog from "../../assets/img/Blog.png";
import Music from "../../assets/img/Music.png";

import styles from "./Work.module.css";
const projects = [
  {
    type: "Personal Project",
    name: "Social Networking Website",
    desc: "Website that is designed to help people communicate and share information, photographs, ... You can add friend, chat (message, voice call, video call), receive, get real-time notifications, ...",
    demo: "https://meta-social.netlify.app/",
    github: "https://github.com/nguyentruongquy75/social-front-end",
    stacks: ["ReactJs, NodeJs, ExpressJs, SocketIO, Mongodb, Firebase Cloud"],
    image: SocialImage,
  },

  {
    type: "Personal Project",
    name: "Bug Creator Blog",
    desc: "Website for Blogger",
    demo: "https://bugcreator.vercel.app/",
    github: "https://github.com/nguyentruongquy75/next-blog",
    stacks: ["NextJs, GraphCMS"],
    image: Blog,
  },

  {
    type: "Personal Project",
    name: "Top 100 music",
    desc: "Online music website with top songs of many genres",
    demo: "https://top100-music.netlify.app/",
    github: "https://github.com/nguyentruongquy75/top100-music",
    stacks: ["HTML, SCSS, Javascript"],
    image: Music,
  },
];
export default function Work() {
  return (
    <div>
      <div className="container">
        <div className={styles.content}>
          <h2 className="title">Some Things I’ve Built</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <Project {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
