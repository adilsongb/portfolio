export type themeColors = {
  primary: string;
  intermediary: string;
  secondary: string;
  header: string;
  headerText: string;
  textTitle: string;
  textBox: string;
};

export type componentsConfig = {
  showLogo: boolean;
  showSwitchTheme: boolean;
};

export type projectData = {
  id: number;
  projectName: string;
  thumb: string;
  links: {
    deploy: string;
    github: string;
  };
  description: string;
  technologies: string[];
};
