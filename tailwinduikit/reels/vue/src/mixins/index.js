export default {
    data(){
        return{
            myFlag: true
        }
    },
    methods: {
        sidebarHandler(check) {
            let sideBar = document.getElementById("mobile-nav");
            if (check) {
                sideBar.style.transform = "translateX(-0px)";
            } else {
                sideBar.style.transform = "translateX(-500px)";
            }
        },
        MenuHandler3() {
            if (this.$data.myFlag) {
                document.getElementById("list2").classList.remove("hidden");
                document.getElementById("close2").classList.remove("hidden");
                document.getElementById("open2").classList.add("hidden");
                this.$data.myFlag = false;
            } else {
                document.getElementById("list2").classList.add("hidden");
                document.getElementById("close2").classList.add("hidden");
                document.getElementById("open2").classList.remove("hidden");
                this.$data.myFlag = true;
            }
        }
    }
}