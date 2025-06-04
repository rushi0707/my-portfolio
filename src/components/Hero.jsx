
import { styles } from "../style";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm < u><span className='text-[#ffffff]'>Rushikesh</span></u> 
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          final year postgrad at NIT Warangal,<br className='sm:block hidden' />
           passionate about web development & problem-solving
          </p>
        </div>
      </div>
     

      
    </section>
  );
};

export default Hero;