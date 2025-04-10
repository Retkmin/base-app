import { UserData } from "./userData";

export class LocalStorageData {
    #accessToken: string;
    #refreshToken: string;
    #isLoggedIn: boolean;
    #userData: UserData;


    constructor() {
        this.#accessToken = '';
        this.#refreshToken = '';
        this.#isLoggedIn = false;
        this.#userData = new UserData();
    }

    public get accessToken(): string {
        return this.#accessToken;
    }
    public set accessToken(value: string) {
        this.#accessToken = value;
    }

    public get refreshToken(): string {
        return this.#refreshToken;
    }
    public set refreshToken(value: string) {
        this.#refreshToken = value;
    }

    public get isLoggedIn(): boolean {
        return this.#isLoggedIn;
    }
    public set isLoggedIn(value: boolean) {
        this.#isLoggedIn = value;
    }

    public get userData(): UserData {
        return this.#userData;
    }
    public set userData(value: UserData) {
        this.#userData = value;
    }


    public toJSON() {
        return {
          accessToken: this.accessToken,
          refreshToken: this.refreshToken,
          isLoggedIn: this.isLoggedIn,
          userProfile: this.userData.toJSON(),
        };
    }
}