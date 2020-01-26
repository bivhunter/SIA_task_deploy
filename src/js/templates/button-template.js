export const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
<style>
    :host([data-hidden="true"]) {
        display: none;
    }  
 
</style>
    <button></button>	
`