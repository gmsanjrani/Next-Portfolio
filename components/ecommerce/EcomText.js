import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import EcomImages from "./EcomImages";

// const useOnScreen = (options) => {
//   const ref = useRef()
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting)
//     }, options)

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current)
//       }
//     }

//   },[ref, options])

//   return [ref, visible]

// }

function EcomText({ size }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  // console.log(inView);

  return (
    <div className=" h-screen relative w-full " ref={ref}>
      {inView && (
        <div className="absolute top-0 left-0 flex flex-col flex-nowrap w-[70%] md:w-1/2 h-screen">
          <div>
            {/* Number & Title */}

            <p
              className={`font-['AvenirHeavy'] p-4 lg:text-3xl md:p-6 lg:p-8 `}
            >
              <span className="appear">02</span>
            </p>

            <div className="md:mt-6">
              <h2 className="px-6 py-2 text-3xl  font-['AvenirHeavy'] md:px-10 md:py-4 lg:text-7xl lg:px-20 lg:p-8">
                <span className="appear">Hafiz's Store</span>
              </h2>

              {/* Role */}

              <Link href={"https://hafiz-store.vercel.app/"} >
                <a className="links"  target="_blank">
                  <div className="px-6 font-['AvenirMedium'] md:px-10 lg:text-3xl  lg:px-20">
                    <span className="appear">
                      <span className="flex gap-4 lg:gap-12 flex-nowrap">
                        <span>React.js </span>
                        <li>Sanity.io</li>

                        <BsArrowRight className="cursor-pointer text-2xl  lg:text-5xl link" />
                      </span>
                    </span>
                  </div>
                  <div className="px-6 font-['AvenirBook'] md:px-10 md:text-lg lg:px-20 xl:text-2xl xl:mt-2 ">
                    Full Stack Ecommerce app with proper payment Method.
                    Front-end with Next.js and Back-end with Santy.io Headless
                    CMS
                  </div>
                </a>
              </Link>
              {/* Role End */}
            </div>
          </div>

          {/* Type */}

          <p className="p-4 bottom-3 mt-auto font-['AvenirHeavy'] text-lg md:p-6 lg:p-8 lg:text-3xl">
            <span className="appear">Web App</span>
          </p>
        </div>
      )}
      <EcomImages size={size} />
    </div>
  );
}

export default EcomText;
