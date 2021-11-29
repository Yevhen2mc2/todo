const MAIN_DATA_KEY = "localStorageUser";

export interface User {
  email: string;
  password: string;
}

class LocalStorageAPI {
  getUser(): User | boolean {
    const data = localStorage.getItem(MAIN_DATA_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return false;
  }

  setUser(user: User): void {
    localStorage.setItem(MAIN_DATA_KEY, JSON.stringify(user));
  }

  logOut(): void {}
}

export const localStorageAPI = new LocalStorageAPI();
