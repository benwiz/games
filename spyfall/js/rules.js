const populateLocationsAndRolesList = (options) => {
    console.log("go");
    const list = document.querySelector('#locations-and-rules');
    console.log('list', list);
    for (const option of options) {
        console.log(option);
        const h = document.createElement('h3');
        h.innerHTML = option.location;
        list.appendChild(h);
        const rolesList = document.createElement('ul');
        list.appendChild(rolesList);
        for (const role of option.roles) {
            const item = document.createElement('li');
            item.innerHTML = role;
            rolesList.appendChild(item);
        }
    };
};
populateLocationsAndRolesList(OPTIONS);
