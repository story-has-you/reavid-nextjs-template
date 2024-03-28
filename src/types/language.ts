export interface Language {
  code: string;
  lang: string;
  language: string;
}

export interface HomeLanguage {
  title1: string;
  title2: string;
  subTitle: string;
  documentation: string;
  github: string;
}

export interface MainNavLanguage {
  home: string;
}

export interface SignupLanguage {
  cardTitle: string;
  cardDescription: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  createAccountButton: string;
  gitHubSignupButton: string;
  signinPrompt: string;
  signinLink: string;
}

export interface LoginLanguage {
  cardTitle: string;
  cardDescription: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  forgotPasswordLink: string;
  loginButton: string;
  googleLoginButton: string;
  signupPrompt: string;
  signupLink: string;
}

export interface SiteHeaderLanguage {
  login: string;
  logout: string;
}

export interface Languages {
  home: HomeLanguage;
  mainNav: MainNavLanguage;
  signUp: SignupLanguage;
  login: LoginLanguage;
  siteHeader: SiteHeaderLanguage;
}
