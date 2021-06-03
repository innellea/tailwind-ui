export default {
    data() {
        return {
            category1:"https://cdn.tuk.dev/assets/templates/radian/work(1).png",
            category2:"https://cdn.tuk.dev/assets/templates/radian/work(2).png",
            category3:"https://cdn.tuk.dev/assets/templates/radian/work(3).png",
            category4:"https://cdn.tuk.dev/assets/templates/radian/work(4).png",
            addressesLeft: [
                {
                image: "https://cdn.tuk.dev/assets/templates/radian/projects(1).png",
                address: "308 Negra Arroyo Lane, ABQ, New Mexico."
                },
                {
                image: "https://cdn.tuk.dev/assets/templates/radian/projects(4).png",
                address: "308 Negra Arroyo Lane, ABQ, New Mexico."
                }
            ],
            addressesRight: [
                {
                image: "https://cdn.tuk.dev/assets/templates/radian/projects(3).png",
                address: "308 Negra Arroyo Lane, ABQ, New Mexico."
                },
                {
                image: "https://cdn.tuk.dev/assets/templates/radian/projects(5).png",
                address: "308 Negra Arroyo Lane, ABQ, New Mexico."
                }
            ],
            clients: [
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client1.png",
                  alt: "Client 1"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client2.png",
                  alt: "Client 2"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client3.png",
                  alt: "Client 3"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client4.png",
                  alt: "Client 4"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client5.png",
                  alt: "Client 5"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/client6.png",
                  alt: "Client 6"
                },
            ],
            cards: [
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(1).png",
                  alt: "Oliver",
                  name: "Oliver Queen",
                  rank: "Founder, CEO"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(2).png",
                  alt: "Thea",
                  name: "Thea Queen",
                  rank: "Senior Architect",
                  email: "exmaple@mail.com"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(3).png",
                  alt: "John",
                  name: "John Diggle",
                  rank: "Founder, CEO"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(4).png",
                  alt: "Dinah",
                  name: "Dinah Lance",
                  rank: "Founder, CEO"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(5).png",
                  alt: "Sarah",
                  name: "Sarah Lance",
                  rank: "Founder, CEO"
                },
                {
                  image: "https://cdn.tuk.dev/assets/templates/radian/team(6).png",
                  alt: "Halena",
                  name: "Halena Rosa",
                  rank: "Founder, CEO"
                },
            ]
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
        }
    }
}