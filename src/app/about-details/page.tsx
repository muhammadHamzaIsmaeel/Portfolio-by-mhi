// import Image from 'next/image';

export default function AboutDetails() {
    return (
        <section className='bg-white pt-32 pb-16'>
            <div className="text-center">
                <h1 className="text-5xl text-violet-950 font-bold">My Journey</h1>
                <p className='font-bold text-gray-600 mt-2'><i>Education, Certifications, and Achievements</i></p>
                <span className="block h-1 w-24 mx-auto bg-gradient-to-r from-violet-600 to-yellow-600 mt-4"></span>
            </div>

            <div className='px-8 md:px-28 pt-12 space-y-12'>
                {/* Education Section */}
                <div className='space-y-6'>
                    <h2 className='text-3xl text-violet-950 font-bold'>Education</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl text-violet-950 font-bold'>Intermediate (Computer Science)</h3>
                            <p className='text-gray-700 mt-2'>Jinnah Govt. College</p>
                            <p className='text-gray-700'>1st Year: 66%</p>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl text-violet-950 font-bold'>Matriculation</h3>
                            <p className='text-gray-700 mt-2'>ABC School</p>
                            <p className='text-gray-700'>Grade: A+</p>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className='space-y-6'>
                    <h2 className='text-3xl text-violet-950 font-bold'>Certifications</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl text-violet-950 font-bold'>AI and Machine Learning</h3>
                            <p className='text-gray-700 mt-2'>Issued by XYZ Organization</p>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl text-violet-950 font-bold'>Web 3.0 and Metaverse</h3>
                            <p className='text-gray-700 mt-2'>Issued by ABC Organization</p>
                        </div>
                    </div>
                </div>

                {/* Images Section */}
                {/* <div className='space-y-6'>
                    <h2 className='text-3xl text-violet-950 font-bold'>Gallery</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='relative h-64 rounded-lg overflow-hidden shadow-md'>
                            <Image
                                src="/degree.jpg"
                                alt="Degree"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className='relative h-64 rounded-lg overflow-hidden shadow-md'>
                            <Image
                                src="/certificate1.jpg"
                                alt="Certificate 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className='relative h-64 rounded-lg overflow-hidden shadow-md'>
                            <Image
                                src="/certificate2.jpg"
                                alt="Certificate 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}