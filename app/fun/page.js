export default function Fun() {
  return (
    <section id="introduction" className="p-8">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-6xl font-bold mb-4 sm:text-center ">
          Hi, I’m Timi
        </h1>
        <p className="mb-4 mt-4 sm:max-w-[70vw] text-center">
          Over the years, my passion for self-reliance has driven me to explore
          and work with a wide range of technologies. This passion aligns with
          the motto of my university, which emphasizes independence and
          adaptability.
        </p>
        <p className="mb-4 text-3xl sm:text-6xl mt-10 font-bold">
          My experience spans various fields including:
        </p>
        <div className="flex gap-5 items-center justify-center max-[440px]:flex-col">
          <p className="max-w-52">
            <strong>UI/UX Design</strong>: <br /> Applying principles of
            effective user interface and experience design.
          </p>
          <img
            src="./img/triida-ui.svg"
            className="h-auto sm:w-[50%] max-h-[400px]"
          />
        </div>
        <div className="flex gap-5 items-center max-[440px]:flex-col-reverse">
          <img
            src="https://user-images.githubusercontent.com/11299574/128066991-5b0d72cc-76d9-4282-a212-f5bed865cde5.png"
            className="h-auto sm:w-[50%] max-h-[400px]"
          />
          <p>
            <strong>Web System Design</strong>: <br /> Understanding scaling
            techniques, such as how Uber operates behind the scenes, distributed
            systems, function and non-functional requirements, time
            complexities, and scaling Node.js with the cluster module and child
            processes.
          </p>
        </div>
        <div className="flex gap-5 items-center max-[440px]:flex-col">
          <p>
            <strong>Image Segmentation</strong>: <br /> Working with instance
            and semantic segmentation, including advanced models like Meta’s
            Segment Anything Model (SAM) and FastSam, a lighter and faster
            browser-based model.
          </p>
          <video muted autoPlay loop className="sm:w-[50%] h-auto">
            <source src="./img/video/meta_sam1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex gap-5 items-center max-[440px]:flex-col-reverse max-[440px]:mt-5">
          <img
            src="./img/video call ui.svg"
            className="h-auto sm:w-[50%] max-h-[400px]"
          />
          <p>
            <strong>WebRTC and WebSockets</strong>: <br /> Building real-time
            communication applications.
          </p>
        </div>
        {/* <li>
            <strong>AR/VR</strong>: <br /> Developing immersive augmented and
            virtual reality experiences.
          </li> */}
        <p className="mb-10 mt-10 text-2xl sm:text-5xl">
          My focus is on building <span className="font-bold">startups </span>{" "}
          and this has taught me to view projects from the user’s perspective
          and to differentiate between perfection and functional solutions—a
          skill that is often challenging but crucial.
        </p>
        <div className="text-4xl pt-20">
          <p className="mr-auto ml-auto max-w-[600px] text-4xl text-center">
            As highlighted on the home page of this portfolio, my expertise
            spans{" "}
          </p>
          <p className="font-bold text-center">
            mobile and web development, design, machine learning, and product
            development.
          </p>
          <p className="mt-20 text-2xl">
            <span>
              If you believe my skill set could benefit your brand or product,
              feel free to reach out.{" "}
            </span>
            <span className="text-5xl block mt-10 mb-20">
              Let’s discuss how we can collaborate to achieve your goals.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
