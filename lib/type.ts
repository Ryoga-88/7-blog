export interface ContentObject {
  title: string;
  subtitle: string;
  language: string;
  slug: string;
  html: string;
  image: string;
}

export interface Professor {
  name: string;
  position: string;
  description: string;
  image: string;
  url: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}
