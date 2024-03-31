export interface Language {
  code: string;
  lang: string;
  language: string;
}

export interface HomePageLanguage {
  title: string;
  description: string;
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

export interface FormLanguage {
  generate: string;
}

export interface Languages {
  homePage: HomePageLanguage;
  mainNav: MainNavLanguage;
  signUp: SignupLanguage;
  login: LoginLanguage;
  siteHeader: SiteHeaderLanguage;
  form: FormLanguage;
}
