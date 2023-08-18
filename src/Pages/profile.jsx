import {useLogin} from "../hooks/useLogin.jsx";

const ProfilePage = () => {
    const user = useLogin();

    return (
        <div>
            <h1>Profile</h1>
            Username: {user.user}
        </div>
    );
}

export default ProfilePage;