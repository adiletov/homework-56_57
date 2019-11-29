const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];


    let arrFrontend = [];
    let timeFour =[];
    let arrBackend = [];

    let category =(category)=>{

        tasks.map(tasks => tasks.category === category ? arrFrontend.push(tasks) : null);
        let total = arrFrontend.reduce((total, item)=>{return total + item.timeSpent}, 0);
        console.log( 'Количество времени, затраченное на работу над задачами из категории - ' + category + total)
    };

    tasks.filter(item => {
        item.timeSpent >= 4 ? timeFour.push({title : item.title, category: item.category}) : null;
    });

    let objectTask = {Frontend :  arrFrontend.length , Backend : arrBackend.length};

   let tasksUi = tasks.filter((item)=> item.title.includes("UI") ? item : null);


    category('Frontend');
    category('Backend');
    console.log('3 - Количество задач, имеющих в названии слово UI ' + tasksUi.length);
    console.log('4 - ' , objectTask);
    console.log('5 - ' , timeFour);
