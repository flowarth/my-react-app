import Button from "../Elements/Button/index.jsx";
import {useLogin} from "../../hooks/useLogin.jsx";
import {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {DarkMode} from "../../context/DarkMode.jsx";
import {useTotalPrice} from "../../context/TotalPrice.jsx";

const Navbar = () => {
    const user = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {user.user}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
                <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
                    Item : {totalCart} | Price : ${" "}{total}
                </div>
                <Button className="bg-black px-2 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? "Light" : "Dark"}
                </Button>
            </div>
        </>
    );
}

export default Navbar;