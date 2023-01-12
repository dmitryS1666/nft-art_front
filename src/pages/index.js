import Home from "./Home";
import Explore from "./Explore";
import ItemDetails from "./ItemDetails";
import HelpCenter from "./HelpCenter";
import Authors from "./Authors";
import WalletConnect from "./WalletConnect";
import FAQ from "./FAQ";
import Contact from "./Contact";
import About from "./About";
import Team from "./Team";
import School from "./School";


const routes = [
  { path: '/', component: <Home />},
  { path: '/explore', component: <Explore />},
  { path: '/item-details-:id', component: <ItemDetails />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/authors-:id', component: <Authors />},
  { path: '/wallet-connect', component: <WalletConnect />},
  { path: '/faq', component: <FAQ />},
  { path: '/contact', component: <Contact />},
  { path: '/about', component: <About />},
  { path: '/team', component: <Team />},
  { path: '/school', component: <School />}
]

export default routes;
