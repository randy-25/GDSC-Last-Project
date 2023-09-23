import React, { useState } from 'react';
import "aos/dist/aos.css";

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');
    const [notes, setNotes] = useState('');

    const addTask = () => {
        if (task === '') return;
        const newTask = {
            id: Math.random(),
            task,
            category,
            priority,
            dueDate,
            notes,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTask('');
        setCategory('');
        setPriority('Medium');
        setDueDate('');
        setNotes('');
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const TaskList = () => {
        return (
            <div className="fixed z-10 w-[80vw] h-[80vh] rounded-3xl left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] overflow-auto bg-[#6B728E] p-10 no-scrollbar">
                <button className='absolute top-3 right-5 rounded-full bg-[#50577A] w-7 transition-all' onClick={handleClickForm} >X</button>
                <div className='grid grid-cols-1 gap-5'>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`task ${task.completed ? 'completed' : ''}`}
                        >
                            <div className="task-details">
                                <h2 className="text-white font-Indie">{task.task}</h2>
                                <div className='flex justify-between font-Indie text-white'><div>Category:</div><div> {task.category}</div></div>
                                <div className='flex justify-between font-Indie text-white'><div>Priority:</div> <div>{task.priority}</div></div>
                                <div className='flex justify-between font-Indie text-white'><div>Due Date:</div> <div>{task.dueDate}</div></div>
                                <div className='flex justify-between font-Indie text-white'><div>Notes:</div> <div>{task.notes}</div></div>
                            </div>
                            <div className="task-actions flex gap-2">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                />
                                <button onClick={() => deleteTask(task.id)} className='font-Indie text-white'>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    const [formState, setFormState] = useState(false);
    const [listState, setListState] = useState(false);

    function handleClickForm() {
        !formState ? setFormState(true) : setFormState(false);
    }
    function handleClickList() {
        !listState ? setListState(true) : setListState(false);
    }

    return (
        <div className="flex flex-col items-center bg-[#404258] h-[100vh]">
            <h1 className='font-Indie text-3xl mt-3 text-white '>To-Do List</h1>
            {/* Task Form */}
            <div className='flex flex-col items-center gap-5'>
                <div className='flex w-[90vw] justify-between items-center'>
                    <div className='font-Indie text-white text-lg'>Your Task</div>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 font-Indie text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-[#474E68] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="text"
                        placeholder="Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div className='flex w-[90vw] justify-between items-center'>
                    <div className='font-Indie text-white text-lg'>Category</div>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 font-Indie text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-[#474E68] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div className='flex w-[90vw] justify-between items-center'>
                    <div className='font-Indie text-white text-lg'>Priority</div>
                    <select
                        className='bg-gray-50 border border-gray-300 text-gray-900 font-Indie text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-[#474E68] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className='flex w-[90vw] justify-between items-center'>
                    <div className='font-Indie text-white text-lg'>Due Date</div>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 font-Indie text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-[#474E68] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="date"
                        placeholder="Due Date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}

                    />
                </div>
                <div className='flex w-[90vw] justify-between items-center'>
                    <div className='font-Indie text-white text-lg'>Notes</div>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 font-Indie text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-[#474E68] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="text"
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>


                <button onClick={addTask} className='font-Indie text-white text-lg ml-7 mt-7 p-2 rounded-full bg-[#474E68]'>Add Task</button>
            </div>
            <section className='self-start ml-7 mt-7 p-2 rounded-full bg-[#474E68]'>
                <button className='text-white font-Indie text-lg' onClick={handleClickForm}>
                    Show Task
                </button>
                {formState ? <TaskList /> : null}
            </section>

        </div>
    );
}

export default ToDo;