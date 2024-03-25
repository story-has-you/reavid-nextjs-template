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

export interface SignUpLanguage {
  createAnAccount: string;
  inputHint: string;
  createAccount: string;
  orContinueWith: string;
}

export interface LoginLanguage {
  loginTitle: string;
  loginButton: string;
  orContinueWith: string;
  inputHint: string;
}

export interface SiteHeaderLanguage {
  login: string;
  logout: string;
}

export interface Languages {
  home: HomeLanguage;
  mainNav: MainNavLanguage;
  signUp: SignUpLanguage;
  login: LoginLanguage;
  siteHeader: SiteHeaderLanguage;
}
