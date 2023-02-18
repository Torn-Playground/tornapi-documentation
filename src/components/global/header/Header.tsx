import MenuIcon from "@/components/global/icons/MenuIcon";
import styles from "@/components/global/header/Header.module.css";

export default function Header() {
    return (
        <header className={`p-1 flex ${styles.header}`}>
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="navigation-drawer" className="drawer-button lg:hidden mr-3 cursor-pointer">
                    <MenuIcon size={24} />
                </label>
            </div>

            <div className="flex justify-between items-center w-full">
                <span>Welcome to the TornAPI</span>
            </div>
        </header>
    );
}
