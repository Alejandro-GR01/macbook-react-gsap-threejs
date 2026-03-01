import { images, videos } from "../utils/paths";

const navLinks = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: images.performance1 , srcAvif: images.performance1.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p2", src: images.performance2 , srcAvif: images.performance2.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p3", src: images.performance3 , srcAvif: images.performance3.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p4", src: images.performance4 , srcAvif: images.performance4.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p5", src: images.performance5 , srcAvif: images.performance5.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p6", src: images.performance6 , srcAvif: images.performance6.replace('.png', '.avif').replace('.jpg', '.avif')} ,
  { id: "p7", src: images.performance7 , srcAvif: images.performance7.replace('.png', '.avif').replace('.jpg', '.avif')} ,
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: images.featureIcon1,
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: images.featureIcon2,
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: images.featureIcon3,
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: images.featureIcon4,
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: images.featureIcon5,
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it's blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: videos.feature1, boxClass: ".box1", delay: 1 },
  { videoPath: videos.feature2, boxClass: ".box2", delay: 0 },
  { videoPath: videos.feature3, boxClass: ".box3", delay: 0 },
  { videoPath: videos.feature4, boxClass: ".box4", delay: 0 },
  { videoPath: videos.feature5, boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
