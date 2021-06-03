export default {
    data() {
        return {
            profileName: "David Jones",
            job: "Event Coordinator",
            profileImage: "https://cdn.tuk.dev/assets/templates/virtual-event-management/profile.png",
            events: [
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                },
                {
                    seats: "2",
                    time: "25",
                    link: "Veevents.com/cosutmeparty"
                }
            ]
        }
    },
    methods: {
        openSidebarMob(flag) {
            let sidebar = document.getElementById("sidebarMob");
            if (flag) {
                sidebar.classList.add("hidden");
            } else {
                sidebar.classList.remove("hidden");
            }
        },
        openSidebar(flag) {
            let sidebar = document.getElementById("sidebar");
            if (flag) {
                sidebar.classList.add("hidden");
            } else {
                sidebar.classList.remove("hidden");
            }
        },
        Interaction (flag){
            if (flag) {
                document.getElementById("dropdown-content").classList.remove("hidden");
                document.getElementById("dropdownbtn").classList.add("hidden");
                document.getElementById("dropdownbtn2").classList.remove("hidden");
            } else {
                document.getElementById("dropdown-content").classList.add("hidden");
                document.getElementById("dropdownbtn").classList.remove("hidden");
                document.getElementById("dropdownbtn2").classList.add("hidden");
            }
        },
        Popup (flag) {
            if (flag) {
                document.getElementById("popup").classList.add("right-100");
                document.getElementById("popup").classList.remove("hidden");
            } else {
                document.getElementById("popup").classList.add("hidden");
            }
        },
        dropdownFunction(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
            for (i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.add("hidden");
            }
            list.classList.toggle("hidden");
        },
        popup_calender(flag) {
            if (flag) {
                document.getElementById("popup_calender").classList.add("block");
                document.getElementById("popup_calender").classList.remove("hidden");
            } else {
                document.getElementById("popup_calender").classList.add("hidden");
                document.getElementById("popup_calender").classList.remove("block");
            }
        },
        Popup2(flag) {
            if (flag) {
                document.getElementById("popup2").classList.add("block");
                document.getElementById("popup2").classList.remove("hidden");
            } else {
                document.getElementById("popup2").classList.add("hidden");
            }
        },
        calender_ticket(flag) {
            if (flag) {
                document.getElementById("calender_ticket").classList.add("block");
                document.getElementById("calender_ticket").classList.remove("hidden");
            } else {
                document.getElementById("calender_ticket").classList.add("hidden");
                document.getElementById("calender_ticket").classList.remove("block");
            }
        }
    },
    mounted() {
        window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    openDropdown.classList.add("hidden");
                }
            }
        };
    }
}