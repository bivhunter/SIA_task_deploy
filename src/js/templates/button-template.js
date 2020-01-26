export const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
<style>
    :host([data-hidden="true"]) {
        display: none;
    }  
    
    button {
    outline: none;
        border: none;
        width: 135px;
        height: 45px;
        border-radius: 5px;
        font-size: 17px;
        margin: 15px;
        background: #0072BC;
        color: white;
    }
    
    button:hover {
        box-shadow: 2px 2px 4px rgba(0,114,188,1);
    }
 
</style>
    <button></button>	
`