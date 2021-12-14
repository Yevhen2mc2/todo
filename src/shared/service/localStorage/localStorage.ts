import { IUser } from "../../../redux/user/userSlice";

const MAIN_DATA_KEY = "localStorageUser";

class LocalStorageAPI {
  getUser(): IUser | boolean {
    const data = localStorage.getItem(MAIN_DATA_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return false;
  }

  setUser(user: IUser): void {
    localStorage.setItem(MAIN_DATA_KEY, JSON.stringify(user));
  }

  logOut(): void {
    localStorage.removeItem(MAIN_DATA_KEY);
  }
}

export const localStorageAPI = new LocalStorageAPI();
