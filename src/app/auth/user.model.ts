export class User {
  constructor(public email: string,
    public id: string,
    private _token: string,
    private _expirationTime: Date) { }


  get token() {
    if (!this._expirationTime || new Date() > this._expirationTime) {
      return null;
    }
    return this._token;
  }


}
