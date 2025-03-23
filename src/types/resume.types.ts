export type ResumeData = {
  title: string;
  period?: string;
  content: ResumeContent[];
};

export type ResumeContent = {
  description?: string;
  badge?: string;
  details: string[];
  image?: string;
  embedding?: string;
};
