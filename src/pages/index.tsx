import AddToCalendar from '@/components/add-to-calendar/AddToCalendar  ';
import BibleVerse from '@/components/bible-verse/BibleVerse  ';
import ColourCodeSection from '@/components/colour-code-section/ColourCodeSection  ';
import Countdown from '@/components/countdown/Countdown  ';
import Gallery from '@/components/gallery/Gallery  ';
import GiftSection from '@/components/gift-section/GiftSection  ';
import Hero from '@/components/hero/Hero  ';
import InfoSection from '@/components/info-section/InfoSection  ';
import MapSection from '@/components/map-section/MapSection  ';
import Messages from '@/components/messages/Messages  ';
import OurLoveStory from '@/components/our-love-story/OurLoveStory  ';
import Services from '@/components/services/Services  ';
import WriteAMessage from '@/components/write-a-message/WriteAMessage  ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <InfoSection />
      <AddToCalendar />
      <BibleVerse />
      <ColourCodeSection />
      <OurLoveStory />
      <GiftSection />
      <Gallery />
      <WriteAMessage />
      <Messages />
      <MapSection />
      <Services />
    </main>
  );
}
