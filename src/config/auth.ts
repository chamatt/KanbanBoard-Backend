interface Config {
  secret: string;
  expiresIn: string;
}

class AuthConfig {
  public secret: string;
  private expiresIn: string | number;

  constructor() {
    this.secret = process.env.JWT_SECRET || '';
    this.expiresIn = '1d';
  }

  get config() {
    return {
      secret: this.secret,
      expiresIn: this.expiresIn,
    };
  }
}

export default new AuthConfig();
