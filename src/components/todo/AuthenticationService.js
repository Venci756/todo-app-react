class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("user authenticated", username);
        sessionStorage.setItem("password authenticated", password);
    }

    logout() {
        sessionStorage.removeItem("user authenticated");
        sessionStorage.removeItem("password authenticated");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("user authenticated");
        if (user != null) return true;
        return false;
    }
}

export default new AuthenticationService();
// when we export service classes we need to export instances of them
// that is why we use the new keyward and the call to constructor method in export statement