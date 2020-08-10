
const designIco = document.getElementById('designIco'); 
const equipmentIco = document.getElementById('equipmentIco'); 
const implementationIco = document.getElementById('implementationIco'); 
const maintenanceIco = document.getElementById('maintenanceIco'); 


const designInfo = document.getElementById('designInfo');
const equipmentInfo = document.getElementById('equipmentInfo');
const instalationInfo = document.getElementById('implementationInfo');
const maintenanceInfo = document.getElementById('maintenanceInfo');
const sections = {
    designInfo: designInfo,
    equipmentInfo: equipmentInfo,
    instalationInfo: instalationInfo,
    maintenanceInfo: maintenanceInfo

}

const mostrarInfo = function(ev) {
    hideInfo();

    const section = ev.currentTarget.dataset.info;
    
    const sec = sections[section].classList.remove('hide');
};

function hideInfo(){
    
    
    sections["designInfo"].classList.add('hide');
    sections["equipmentInfo"].classList.add('hide');
    sections["instalationInfo"].classList.add('hide');
    sections["maintenanceInfo"].classList.add('hide');
}

designIco.addEventListener('click',mostrarInfo);
equipmentIco.addEventListener('click',mostrarInfo);
implementationIco.addEventListener('click',mostrarInfo);
maintenanceIco.addEventListener('click',mostrarInfo);