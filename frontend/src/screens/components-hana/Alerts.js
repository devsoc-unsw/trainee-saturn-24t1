import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Alerts = ({tabs, currentTab}) => {
    
    if (currentTab === "") {
        return;
    }

    const selectedTab = tabs.find((tabs) => tabs.id === currentTab);
    const task_list = selectedTab.tasks;
    const todayDate = new Date();

    // checks if there are any tasks that are due within the next 7 days
    let taskFlag = false;
    for (var i = 0; i < task_list.length; i++) {
        if (
            Math.round((task_list[i].due_date - todayDate) / (1000 * 3600 * 24)) <= 7 &&
            Math.round((task_list[i].due_date - todayDate) / (1000 * 3600 * 24)) !== 0 &&
            !(Math.round((task_list[i].due_date - todayDate) / (1000 * 3600 * 24)) < 0)
        ) {
            taskFlag = true;
            break;
        }
    }

    return (
        <div className='flex mx-2 my-3 py-4 px-5 bg-[#D4DCFF] rounded-lg'>
            <AccessAlarmIcon/>
            <div className='px-4 h-20 overflow-y-auto'>
                {taskFlag === false
                ? <div>No tasks due!</div>
                : task_list.map(x => (
                    (Math.round((x.due_date - todayDate) / (1000 * 3600 * 24)) <= 7 &&
                    Math.round((x.due_date - todayDate) / (1000 * 3600 * 24)) !== 0 &&
                    !(Math.round((x.due_date - todayDate) / (1000 * 3600 * 24)) < 0))
                    ? <div>The task <span className='font-bold'>{x.name}</span> is due in <span className='font-bold'>{Math.round((x.due_date - todayDate) / (1000 * 3600 * 24))}</span> days!</div>
                    : <div></div>
                ))}
            </div>
        </div>
    );
}

export default Alerts;