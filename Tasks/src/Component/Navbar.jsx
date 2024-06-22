import "../Component/Navbar.css";
import { useState } from "react";
import bar from "../assets/nav-bars.png";
import cross from "../assets/nav-cross.png";
import down_arrow from "../assets/nav-down-arrow.png";
import nav_web from "../assets/web-development.png";
import nav_game from "../assets/game-development.png";
import nav_graphic from "../assets/graphic-designing.png";
import nav_digital from "../assets/digital-marketing.png";
import nav_video from "../assets/video-editing.png";
import left_arrow from "../assets/left-arrow.png"

const Navbar = () => {
    const nav_items = ["Home", "About", "Services", "Projects", "Contact"];
    const nav_service_items = ["Web Development", "Game Development", "Graphic Designing", "Digital Marketing", "Video Editing"];


    const service_data = [
        {
            service_Name: "Website Development",
            img_Url: nav_web,
            img_Data: ["Frontend Development", "Backend Development"]
        },
        {
            service_Name: "Game Development",
            img_Url: nav_game,
            img_Data: ["2D Game Development", "3D Game Development"]
        },
        {
            service_Name: "Graphic Designing",
            img_Url: nav_graphic,
            img_Data: ["2D Art Design", "3D Art Design"]
        },
        {
            service_Name: "Digital Marketing",
            img_Url: nav_digital,
            img_Data: ["Website Management", "Social Media Management"]
        },
        {
            service_Name: "Video Editing",
            img_Url: nav_video,
            img_Data: ["Motion Graphic", "One minute short Film"]
        }
    ];

    const [nav_show, set_nav_show] = useState(false);
    const [dropdown_show, set_dropdown_show] = useState(false);
    const [showIcon, setShowIcon] = useState(true);
    const [showService, setshowservice] = useState(false);

    function nav_slider() {
        set_nav_show(!nav_show);
    }

    function toggleDropdown() {
        set_dropdown_show(!dropdown_show);
    }

    return (
        <>
            <nav className="absolute w-screen overflow-x-hidden-hidden">
                <div className="flex justify-between px-5 pr-6 items-center pt-2  navbar relative">
                    {showIcon ? (
                        <div className="h-12 w-32 bg-white text-black flex items-center justify-center mb-2 z-10">IT Website</div>) : (<div className="flex items-center justify-center mb-2 z-10">
                            <img src={left_arrow} className="h-[36px] invert mt-[12px]" onClick={(e) => {
                                let li_item = e.target.parentElement.nextElementSibling.childNodes;
                                for (let li of li_item) {
                                    li.style.display = "block"
                                }
                                setShowIcon(true);
                                setshowservice(!showService);
                            }} />
                        </div>)
                    }
                    <ul className={`flex gap-8 nav_list ${nav_show ? 'nav_list2' : 'nav_list1'}`}>
                        {(showService ? nav_service_items : nav_items).map((item, index) => (
                            <li
                                className="navbar_li flex gap-2 items-center cursor-pointer py-[6px] px-1 w-fit text-white  pb-[19px] mt-[14px]"
                                key={index}
                                id={`navbar-li-${index}`}
                                onClick={(e) => {
                                    if (!showService) {
                                        if (window.innerWidth < 700) {
                                            if (e.target.id === "navbar-li-2") {
                                                let li_item = e.target.parentElement.childNodes;
                                                console.log(e.target.parentElement.childNodes);
                                                for (let li of li_item) {
                                                    li.style.display = "none";
                                                }
                                                setShowIcon(false);
                                                setshowservice(!showService);
                                                li_item = e.target.parentElement.childNodes;

                                                for (let li of li_item) {
                                                    li.style.display = "block"
                                                }
                                            }
                                        }
                                    }
                                }}
                                onMouseEnter={index === 2 ? toggleDropdown : null}
                                onMouseLeave={index === 2 ? toggleDropdown : null}
                            >
                                {item} {index === 2 && <img src={down_arrow} width="15px" height="10px" className="nav-down-img" />}
                                {index === 2 && dropdown_show && (
                                    <ul className="absolute bg-[#2C0955] w-[100vw] h-fit right-0 top-full service-container flex justify-evenly cursor-default p-4"
                                        onMouseEnter={() => {
                                            set_dropdown_show(true);
                                        }} onMouseLeave={() => {
                                            set_dropdown_show(false);
                                        }}
                                    >
                                        {service_data.map((service, serviceIndex) => (
                                            <li key={serviceIndex} className="p-2 h-fit flex flex-col items-center text-xl gap-3">
                                                <h1 className="text-[20px] shadow-2xl bg-white text-black px-3 py-2 rounded-[5px] text-center nav-service-show">{service.service_Name}</h1>
                                                <img src={service.img_Url} alt={service.service_Name} className="h-[150px] w-auto" />
                                                <div>
                                                    {service.img_Data.map((data, dataIndex) => <p key={dataIndex} className="hover:translate-x-2 duration-500 cursor-pointer mb-1 flex gap-1 text-[18px]"><span>-</span>{data}</p>)}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="h-10 w-10 toogle-div justify-center items-center hidden">
                        <img src={nav_show ? bar : cross} className="h-7 invert" onClick={nav_slider} />
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
