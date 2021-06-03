export default {
    data() {
        return {
            optionOne: true,
            optionTwo: false
        }
    },
    methods: {
        MenuHandler(flag) {
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
        },
        toggle() {
            this.optionOne = !this.optionOne
            let billMonthly = document.getElementById("monthly")
            let billAnnually = document.getElementById("yearly")

            billMonthly.classList.toggle("font-bold")
            billMonthly.classList.toggle("text-gray-600")
            billMonthly.classList.toggle("text-gray-800")

            billAnnually.classList.toggle("font-bold")
            billAnnually.classList.toggle("text-gray-600")
            billAnnually.classList.toggle("text-gray-800")
        }
    }
}