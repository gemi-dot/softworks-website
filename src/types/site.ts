export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Solution = {
  name: string;
  audience: string;
  summary: string;
  href: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  impact: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  href: string;
};

export type Partner = {
  name: string;
};
