"use client";
import Image from "next/image";
import styles from "./mainPage.module.scss";
import Carousel from "./components/carsoeul/Carsouel";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Typing from "./components/effects/typingeffect";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const controls = useAnimation();
  const secondCompRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.7;

      if (scrollY > triggerPoint) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleNavigation = (path: any) => {
    router.push(path);
  };

  const { scrollYProgress } = useScroll({
    target: secondCompRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <main>
        <div className={styles.container}>
          <div className={styles.part1}>
            <div className={styles.activeusers}>
              <Typing text="Helping 100+ Developers and User." speed={120} />
            </div>
            <h1>I am नमः Ai</h1>
            <p>Namah Ai,</p>{" "}
            <p>
              <Typing
                text="is a versatile AI library that can help you in your daily tasks and
            Increases your productivity."
                speed={100}
              />
            </p>
            <button onClick={() => handleNavigation("./ai_library")}>
              Get Started &gt;
            </button>
          </div>
          <Carousel txt="AI empowers everyone by breaking barriers, enabling innovation, enhancing efficiency, and making advanced technology accessible to all" />
          <h1>Categories</h1>
          {/* <div className={styles.part2}></div> */}
        </div>

        <motion.div
          ref={secondCompRef}
          className={styles.secondComp}
          style={{ y }}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className={styles.comp1} variants={blockVariants}>
            <motion.div className={styles.p1} variants={blockVariants}>
              <h1>Coding</h1>
              <p>
                AI simplifies coding with intelligent code generation across
                multiple languages, including Python, JavaScript, and Java.
                Input your needs, and receive optimized code snippets with clear
                documentation. Enhance productivity and streamline development
                with accurate, easy-to-integrate solutions tailored to your
                specific requirements.
              </p>
            </motion.div>
            <motion.div className={styles.p2} variants={blockVariants}>
              <p>
                Data Analytics AI transforms your data management with powerful
                AI-driven tools. It provides advanced capabilities for data
                visualization, predictive analytics, and insightful reporting.
                Leverage its features to uncover trends, make data-driven
                decisions, and gain comprehensive insights, all while
                simplifying complex data processes for enhanced analytical
                precision.
              </p>
              <h1>Data Analytics</h1>
            </motion.div>
          </motion.div>
          <motion.div className={styles.comp2} variants={blockVariants}>
            <motion.div className={styles.p3} variants={blockVariants}>
              <h1>Lifestyle</h1>
              <p>
                Lifestyle AI is your go-to library for enhancing daily living
                through advanced AI tools. It offers solutions for social media
                content generation, creative idea brainstorming, and more. With
                Lifestyle AI, effortlessly craft engaging social media posts,
                generate fresh ideas, and access tools designed to enrich
                various aspects of your lifestyle.
              </p>
            </motion.div>
            <motion.div className={styles.p4} variants={blockVariants}>
              <p>
                AI is a versatile library designed to boost efficiency across
                various tasks. It encompasses a wide range of tools aimed at
                enhancing productivity in diverse areas. From advanced task
                automation and scheduling to intelligent document management and
                workflow optimization, Productivity AI offers solutions that
                streamline your daily operations. It integrates seamlessly with
                your existing systems, providing smart recommendations and
                automating repetitive tasks to free up your time. Whether you
                need to manage projects, organize your workspace, or improve
                communication, Productivity AI equips you with innovative tools
                to maximize your productivity and achieve more with less effort.
              </p>
              <h1>Others</h1>
            </motion.div>
          </motion.div>
        </motion.div>
        <Carousel txt="Our aim is to automate everything" />
        <div className={styles.showCaseContainer}>
          <h1>Preview</h1>
          <div className={styles.showCase}>
            <div className={styles.videoWrapper}>
              <video width="800" height="400" autoPlay loop muted playsInline>
                <source src="/assets/imageai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.showCasetext}>
              <h2>Text to Image Generation</h2>
              <p>
                This is the image generation AI application, you can be creative
                with it, based on the text it generates image
              </p>
            </div>
          </div>
          <div className={styles.showCase2}>
            <div className={styles.videoWrapper}>
              <video width="800" height="400" autoPlay loop muted playsInline>
                <source src="/assets/imageai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.showCasetext2}>
              <h2>Text to Quiz</h2>
              <p>
                This is the quiz app, which turns your topic into quiz and
                provides a detailed, report of quiz.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.p5}>
          <div className={styles.p5p1}>
            <h1>Our Mission</h1>
          </div>
          <div className={styles.p5p2}>
            <div className={styles.p5p2p1}>
              <Image
                src="/assets/technology.png"
                alt="Technology image"
                width={100}
                height={100}
              />
              <h3>Accsible to all</h3>

              <p>Ai can now be accessible to all without prior knowledge</p>
              <h3>All in One</h3>
              <p>
                Rather than finding different AI's or using Multimodal Llm's. We
                have already Prompted ready to use AI's
              </p>
            </div>
            <div className={styles.p5p2p2}>
              <Image
                src="/assets/ai.png"
                alt="AI image"
                width={100}
                height={100}
              />
              <h3>Specialised Agents</h3>
              <p>
                Specialized AI agent's for specific task, trained on specialised
                tasks
              </p>
              <h3>Easy to Use APi's</h3>
              <p>
                Integrate with your existing softwares and use AI's capablity
                for business decision or automation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
