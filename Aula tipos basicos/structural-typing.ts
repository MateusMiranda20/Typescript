// TIPAGEM ESTRUTURADA

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const veryUser: VerifyUserFn = (user, sentValue) => {
    return(
        user.username === sentValue.username && user.password === sentValue.password
    )
}

const bdUser = { username: "João", password: "123456"};
const sentUser = { username: "João", password: "123456"}
const loggedIn = veryUser(bdUser, sentUser)
console.log(loggedIn)