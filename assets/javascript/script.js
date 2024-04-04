//light/dark mode button
//need to reassign styles to each element when clicked
const currentMode = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log('dark theme');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        console.log('light theme');
    }    
}

currentMode.addEventListener('change', switchTheme, false);
