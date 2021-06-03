import Hero from "../components/hero"
import DishOfDay from "../components/dishOfDay"
import Menuiew from "../components/menuView"
import Services from "../components/services"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Reservation from "../components/reservation"

export default function IndexPage() {
    return (
        <div>
            <Hero/>
           <DishOfDay/>
           <Menuiew/>
           <Services/>
           <About/>
           <Testimonials/>
           <Reservation/>
        </div>
    );
}
