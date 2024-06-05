const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between px">
                <div className="Swiggy_logo"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png" alt="" className="h-16"/></div>
                <div className="Swiggy_nav_icons">
                    <ul className="flex">
                        <li className="text-xl">About</li>
                        <li className="text-xl">Contact</li>
                        <li className="flex text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>Cart-(0)</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar