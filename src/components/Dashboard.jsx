import { Button } from '@mui/material';
import { useRef } from 'react';

function Dashboard() {
    const section1 = useRef();
    const section2 = useRef();
    const homeSection = useRef();
    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <div ref={homeSection} className='h-[100%] w-screen bg-[#404258]'>
                <div className='h-[100%] w-screen '>
                    <div className='flex flex-col justify-center items-center h-[100vh] px-20 gap-24 '>
                        <div className='bg-[#404258] mx-20 flex flex-col justify-center items-center'>
                            <h1 className="text-[3rem] text-white font-Indie font-[700] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] ">Organizer</h1>
                            <p className='font-Indie text-white text-center sm:text-lg md:text-xl'>Organizing your way of life</p>
                        </div>

                        <div className="flex justify-center ">
                            <div>
                                <Button variant="contained"
                                    sx={{
                                        fontFamily: "Indie, cursive",
                                        fontWeight: '100',
                                        backgroundColor: '#50577A',
                                        "&:hover": {
                                            backgroundColor: "#6B728E"
                                        },
                                        "&:active": {
                                            backgroundColor: "#474E68"
                                        },
                                        borderRadius: "9999px"
                                    }}
                                    onClick={() => scrollTo(section1)}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <section ref={section1} className="h-screen w-screen flex flex-col gap-3 items-center  bg-[#404258]">
                <div className='font-Indie text-4xl sm:text-[2rem] text-white text-center pt-4 '>To Do List</div>
                <img src={require("./../assets/toDo.jpg")} alt='To Do List' className='w-[80%] h-auto rounded-xl sm:w-[30%] lg:w-[20%] ' />
                <p className='px-7 text-white font-Indie sm:px-10 md:px-12 lg:px-16 sm:text-lg lg:text-2xl '>To-do list tools are essential for efficient task management. These digital apps help you create, prioritize, and track tasks, ensuring you stay organized and on top of your responsibilities. With features like due dates and reminders, they enhance productivity and reduce stress, making it easier to achieve your goals.</p >
                <Button variant="contained"
                    sx={{
                        fontFamily: "Indie, cursive",
                        fontWeight: '100',
                        backgroundColor: '#50577A',
                        "&:hover": {
                            backgroundColor: "#6B728E"
                        },
                        "&:active": {
                            backgroundColor: "#474E68"
                        },
                        borderRadius: "9999px"
                    }}
                    onClick={() => scrollTo(section2)}
                >
                    Next
                </Button>
            </section>
            <hr />
            <section ref={section2} className="h-screen w-screen flex flex-col gap-3 items-center  bg-[#404258]">
                <div className='font-Indie text-4xl sm:text-[2rem] text-white text-center pt-4 '>Pomodoro</div>
                <img src={require("./../assets/pomodoro.jpg")} alt='Pomodoro' className='w-[80%] h-auto rounded-xl sm:w-[30%] lg:w-[20%] ' />
                <p className='px-7 text-white font-Indie sm:px-10 md:px-12 lg:px-16 sm:text-lg lg:text-2xl '>The Pomodoro timer divides work into 25-minute focused intervals (Pomodoros) with 5-minute breaks. It enhances productivity, reduces procrastination, and improves work-life balance by keeping you on track. Using it leads to better concentration, increased efficiency, and overall improved work performance and well-being.</p >
                <Button variant="contained"
                    sx={{
                        fontFamily: "Indie, cursive",
                        fontWeight: '100',
                        backgroundColor: '#50577A',
                        "&:hover": {
                            backgroundColor: "#6B728E"
                        },
                        "&:active": {
                            backgroundColor: "#474E68"
                        },
                        borderRadius: "9999px"
                    }}
                    onClick={() => scrollTo(homeSection)}
                >
                    Back
                </Button>
            </section>
        </div>
    );
}
export default Dashboard;