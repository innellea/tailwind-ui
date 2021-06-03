import React from "react";
import Search from "../../commonComponents/search/index";
import Filter from "components/search_add_innder/filter";
import Cards from "components/search_add_innder/Cards";
import LeftImg from "components/search_add_innder/left_aligend_image_with_right_aligned_description";
import UserInfo from "components/search_add_innder/user_information_with_right_aligned_map";
export default function Home() {
    const MenuHandler = (flag) => {
        if (flag) {
            document.getElementById("list").classList.add("top-100");
            document.getElementById("list").classList.remove("hidden");
            document.getElementById("close").classList.remove("hidden");
            document.getElementById("open").classList.add("hidden");
        } else {
            document.getElementById("list").classList.remove("top-100");
            document.getElementById("list").classList.add("hidden");
            document.getElementById("close").classList.add("hidden");
            document.getElementById("open").classList.remove("hidden");
        }
    };
    return (
        <>
            <div className="container mx-auto">
                <h4 className="light-gray text-xs font-normal lg:pt-24 pt-10 lg:px-0 px-4">Home/Mobiles/Mobile Phones/Mobile Phones in Islamabad Capital Territory/Mobile Phones in IslamabadMobile Phones in I-14/</h4>
                <div className="lg:flex lg:px-0 px-4">
                    <Filter />
                    <div className="w-full lg:pl-16 pt-16">
                        <LeftImg />
                        <UserInfo />
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    );
}
