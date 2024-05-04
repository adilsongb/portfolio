import type { componentsConfig, themeColors } from './generics';

export type generalResponse = {
  Colors: {
    dark: themeColors;
    light: themeColors;
  };
  components: componentsConfig;
};

export type aboutMeResponse = {
  description: string[];
  photo: string;
  technologies: string[];
};

export type presentationResponse = {
  subtitle: string;
};

export type settingsResponse = {
  aboutme: aboutMeResponse;
  general: generalResponse;
  presentation: presentationResponse;
};
