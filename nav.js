const openMeun = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}

const closeMeun = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}


document.getElementById('meun').onclick = e => {
    e.preventDefault();
    openMeun();
}

document.querySelector('aside .close').onclick = e => {
    closeMeun();
}

document.querySelector('.backdrop').onclick = e => {
    closeMeun();
}