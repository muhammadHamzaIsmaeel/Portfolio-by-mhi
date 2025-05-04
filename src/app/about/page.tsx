"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about"  className='relative py-20 bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] overflow-hidden'>
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-violet-600/10 to-yellow-500/10"
                        initial={{ 
                            x: Math.random() * 100 - 50, 
                            y: Math.random() * 100 - 50,
                            scale: 0.5 + Math.random()
                        }}
                        animate={{
                            x: [null, Math.random() * 100 - 50],
                            y: [null, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        style={{
                            width: `${100 + Math.random() * 300}px`,
                            height: `${100 + Math.random() * 300}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    id="about"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center pb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='font-medium text-violet-200/80 text-lg md:text-xl'
                    >
                        <i>Passionate Learner & Web Developer</i>
                    </motion.p>
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="inline-block h-1 w-24 bg-gradient-to-r from-violet-400 to-yellow-300 mt-6 rounded-full"
                    ></motion.span>
                </motion.div>

                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    {/* Profile Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className='flex-1 flex justify-center'
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group"
                        >
                            {/* Glowing Border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/50 to-yellow-500/50 blur-md opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

                            {/* Image Container */}
                            <div className="relative rounded-full border-4 border-transparent group-hover:border-yellow-400/30 transition-all duration-500 overflow-hidden w-72 h-72 md:w-80 md:h-80">
                                <Image
                                    src="/hamza.jpg"
                                    alt="Muhammad Hamza Ismail"
                                    width={320}
                                    height={320}
                                    className="object-cover w-full h-full rounded-full shadow-2xl"
                                />
                            </div>

                            {/* Animated Gradient Ring */}
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500/50 border-r-yellow-500/50 pointer-events-none"
                            ></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* About Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className='flex-1 space-y-6'
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className='text-violet-100 leading-relaxed text-lg'
                        >
                            <span className='text-3xl font-bold bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent'>Hi, I&apos;m Hamza!</span><br /> 
                            I&apos;m a tech enthusiast and dedicated learner with a passion for innovation. Currently, I&apos;m in my 2nd year of intermediate studies (Computer Science) at Jinnah Govt. College, having achieved <span className='font-bold text-yellow-300'>66%</span> in my 1st year.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className='text-violet-100 leading-relaxed text-lg'
                        >
                            Driven by my love for technology, I&apos;ve earned certifications in <span className='font-bold text-violet-300'>AI, the Metaverse, and Web 3.0</span>. I&apos;m also enhancing my entrepreneurial skills through the <span className='font-bold text-yellow-300'>Governor Sindh Initiative</span> for GenAI, Web3, and Metaverse.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className='text-violet-100 leading-relaxed text-lg'
                        >
                            As a web developer, I specialize in building modern, responsive websites using <span className='font-bold text-violet-300'>Next.js, Tailwind CSS, and TypeScript</span>, with a strong foundation in <span className='font-bold text-yellow-300'>Python</span>. My goal is to create seamless, user-friendly digital experiences that stand out.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className='text-violet-100 leading-relaxed text-lg'
                        >
                            I&apos;m eager to collaborate with clients and teams who value innovation and long-term partnerships. Let&apos;s connect and turn your ideas into impactful web solutions!
                        </motion.p>

                        {/* Button for More Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="pt-4"
                        >
                            <Link href="/about-details" aria-label="View Full Details">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative overflow-hidden group px-8 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-yellow-500 text-white font-medium shadow-lg"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Full Details
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="block h-1 w-24 mx-auto bg-gradient-to-r from-violet-400 to-yellow-300 mt-20 rounded-full"
                ></motion.span>
            </div>
        </section>
    );
}

export default About;