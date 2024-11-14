import styles from './page.module.css'


// For Components
import Wrapper from '@/Components/Wrapper/Wrapper';
import { SliderBg } from "../_components/SliderBg/SliderBg";
import { Watches } from '@/Components/Watches/Watches';
import { Blogs } from '@/Components/Blogs/Blogs';

export const metadata = {
  title: "Home "
}

export default function Home() {
  return (
    <>
      <SliderBg />
      <Wrapper>
        <Watches />

        {/* for Blogs */}
        <Blogs />

      </Wrapper>
    </>
  );
}
