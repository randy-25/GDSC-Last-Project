import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workMinutes: 25,
            breakMinutes: 5,
            seconds: 0,
            phase: 'work', // Initial phase is 'work'
            isRunning: false,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.state.isRunning) {
            const { phase, workMinutes, breakMinutes, seconds, isRunning } = this.state;

            if (phase === 'work') {
                // Timer finished
                // Switch between work and break phases
                if (workMinutes === 0 && seconds === 0) {
                    this.setState({
                        phase: 'break',
                        workMinutes: 25,
                        breakMinutes: 5,
                    });
                } else {
                    if (seconds === 0) {
                        if (phase === 'work' && workMinutes > 0) {
                            this.setState((prevState) => ({
                                workMinutes: prevState.workMinutes - 1,
                                seconds: 59,
                            }));
                        }
                    } else {
                        this.setState((prevState) => ({
                            seconds: prevState.seconds - 1,
                        }));
                    }
                }
            } else if (phase === 'break') {
                // Timer finished
                // Switch between work and break phases
                if (breakMinutes === 0 && seconds === 0) {
                    this.setState({
                        phase: 'work',
                        workMinutes: 25,
                        breakMinutes: 5,
                        seconds: 0,
                    });
                    this.toggleTimer();
                } else {
                    if (seconds === 0) {
                        if (phase === 'break' && breakMinutes > 0) {
                            this.setState((prevState) => ({
                                breakMinutes: prevState.breakMinutes - 1,
                                seconds: 59,
                            }));
                        }
                    } else {
                        this.setState((prevState) => ({
                            seconds: prevState.seconds - 1,
                        }));
                    }
                }

            }
        }
    };

    toggleTimer = () => {
        this.setState((prevState) => ({
            isRunning: !prevState.isRunning,
        }
        ));
    };
    resetTimer = () => {
        this.setState({
            workMinutes: 25,
            breakMinutes: 5,
            seconds: 0,
            phase: 'work',
            isRunning: false,
        });
    };

    render() {
        const { workMinutes, breakMinutes, seconds, phase, isRunning } = this.state;
        const displayMinutes = phase === 'work' ? workMinutes : breakMinutes;

        return (
            <div className=' w-screen h-screen pt-10 bg-[#404258]'>
                <h1 className='text-center font-Indie text-white text-4xl'>Pomodoro Timer</h1>
                <div className='flex justify-center font-Indie text-white text-xl px-5 mt-5 sm:justify-center'>
                    <h2>{phase === 'work' ? 'Work Phase' : 'Break Phase'}</h2>
                </div>
                <div className='flex justify-center font-Indie text-white text-4xl px-5 mt-5'>
                    {String(displayMinutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className='flex justify-evenly font-Indie text-white text-xl mt-3'>
                    <button onClick={this.toggleTimer} >
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Pomodoro;
