import { ICourseItem } from "./types/Course";

export const coursesData: Array<ICourseItem> = [
  {
    title: "Backend Course",
    description:
      "This course presents an overview of a variety of Web backend topics: handling user input, producing templated output, storing information in databases and data stores, and building systems with secure user accounts.",
    id: 1,
    features: ["nodejs", "mysql", "mongodb", "express.js", "passport.js and jwt"],
    icon: "https://www.eworker.co/courses/storage/2017/03/course-heading-object-c-450x450.jpg",
  },
  {
    title: "Machine Learning Course",
    description:
      "Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome.",
    id: 2,
    features: [
      "linear regression",
      "linear algebra",
      "linear regression with multiple variables",
      "Octave/Matlab",
      "logistic regression",
      "regularization",
      "neural networks",
    ],
    icon: "https://www.inventateq.com/assets/machine-banner.png",
  },
  {
    title: "Front-End Web Development Course",
    description:
      "This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design",
    id: 3,
    features: ["react.js", "redux", "TSX/JSX", "Material-UI", "browser local storage"],
    icon: "https://www.real.discount/wp-content/uploads/2018/02/1166306_84a1_3.jpg",
  },
  {
    title: "Java Programming Course",
    description:
      "Take your first step towards a career in software development with this introduction to Java—one of the most in-demand programming languages and the foundation of the Android operating system. Designed for beginners, this Specialization will teach you core programming concepts and equip you to write programs to solve complex problems. In addition, you will gain the foundational skills a software engineer needs to solve real-world problems, from designing algorithms to testing and debugging your programs.",
    id: 4,
    features: ["data types", "data structure", "programming principles", "cryptography", "algorithms", "hash table"],
    icon: "https://du5jhqks4kn0y.cloudfront.net/5dade5d9e601d300712c2392/dae1ec3f-698c-2b0d-7a80-9b7ef353208f.png",
  },
];
