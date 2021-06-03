export default {
    data() {
        return{
            labels: [
                {
                    title: "Work Related",
                    theme: "bg-indigo-600"
                },
                {
                    title: "Family",
                    theme: "bg-yellow-600",
                },
                {
                    title: "Friends",
                    theme: "bg-green-500"
                },
                {
                    title: "Grocery",
                    theme: "bg-purple-600"
                },
                {
                    title: "Utilities",
                    theme: "bg-blue-600"
                },
                {
                    title: "Rental",
                    theme: "bg-pink-600"
                },
                {
                    title: "Maintenance",
                    theme: "bg-red-600"
                }
            ],
        }
    },
    created(){
        let elements = document.querySelectorAll("[data-menu]")
        for (let i = 0; i < elements.length; i++) {
            let main = elements[i];
            main.addEventListener("click", function () {
                let element = main.parentElement.parentElement
                let andicators = main.querySelectorAll("svg")
                let child = element.querySelector("ul")
                child.classList.toggle("hidden")
                if (child.classList[1] !== "hidden") {
                    andicators[1].style.display = "block"
                    andicators[0].style.display = "none"
                } else {
                    andicators[1].style.display = "none"
                    andicators[0].style.display = "block"

                }
            });
        }
    },
    methods: {
        openSidebar(flag) {
            let sidebar = document.getElementById("sidebar");
            flag ? sidebar.classList.add("hidden") : sidebar.classList.remove("hidden");
        },
        Popup(flag) {
            if(flag){
                document.getElementById("popup").classList.add("right-100");
                document.getElementById("popup").classList.remove("hidden");
            }
            else{
                document.getElementById("popup").classList.add("hidden");
            }
        }
    }
}