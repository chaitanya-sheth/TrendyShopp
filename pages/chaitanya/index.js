import Banner from "@/components/chaitanya/Banner";
import MobileBanner from "@/components/chaitanya/MobileBanner";
import MobileOffersCard from "@/components/chaitanya/MobileOffersCard";
import RoundedIcons from "@/components/chaitanya/RoundedIcons";
import DesktopOfferCards from "@/components/chaitanya/DesktopOfferCarsd";
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function Home() {
  return (
    <main> 
      <Provider store={store}>
      <div className="mobilebanner">
        <MobileBanner />
      </div>
      <div className="desktopbanner">
        <Banner />
      </div>
      <RoundedIcons />
      <MobileOffersCard />
      <DesktopOfferCards />
      </Provider>
    </main>
  );
}
