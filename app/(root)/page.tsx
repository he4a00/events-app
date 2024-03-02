import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern py-5 md:py-10 bg-contain">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 2xl:gap-0 gap-5">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="md:p-regular-20 p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="object-contain object-center max-h-[70vh] 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col md:gap-12 gap-8">
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>
      </section>
    </>
  );
}
