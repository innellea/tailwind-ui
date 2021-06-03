import React from "react";
import Search from "@components/commonComponents/search";
import FilterCards from "components/search_add_innder/filter_card/index";
export default function IndexPage() {
    return (
        <>
            <Search />
            <FilterCards />
        </>
    );
}
