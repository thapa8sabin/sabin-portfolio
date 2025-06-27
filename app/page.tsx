import CvDownloader from "@/components/CvDownloader"
import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stacks from "@/components/Stacks"

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Description */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br />
                            <span className="text-accent">Sabin Thapa</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                           A seasoned web developer and software engineer with deep expertise in full-stack development, DevOps, and technical leadership, delivering scalable digital solutions and driving remote-ready innovation.
                        </p>
                        {/* button and social links */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <CvDownloader />

                            <div className="mb-8 xl:mb-0">
                                <Socials />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>

            <Stacks />
        </section>
    )
}

export default Home