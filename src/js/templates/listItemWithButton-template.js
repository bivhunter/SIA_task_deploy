export const listItemWithButtonTemplate = document.createElement('template');
listItemWithButtonTemplate.innerHTML = `
<style>
    .content-wrapper {
    display: inline-block;
        width: 100%;
        
    }
    
    .button-wrapper {
        display: table-cell;
        height: 50px;
        width: 15%;
        
        text-align: center;
        vertical-align: middle;
    }
    
    .wrapper {
        display: table;
        width: 100%;
        vertical-align: middle;
    }
    
    .edit-button {
        display: inline-block;
        margin: 5px;
        width: 32px;
        height: 32px;
        background-image: url("../../images/pencil.png");
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position: center;
      
    }
    
    .delete-button {
        display: inline-block;
        width: 32px;
        height: 32px;
        margin: 5px;
        background-image: url("../../images/basket.png");
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position: center;
    }
    
    .edit-button:hover {
        cursor: pointer;
       
    }
    
     .delete-button:hover {
        cursor: pointer;
    }
    
     .edit-button[data-disable="true"],.delete-button[data-disable="true"]{
        opacity: 0.4;
        pointer-events: none;
    }
    
    
    
</style>
<div class="wrapper">
    <div class="content-wrapper">
        <h3 class="title"></h3>
        <p class="description"></p>
    </div>
    <div class="button-wrapper">
        <div class="edit-button" ></div>
        <div class="delete-button" ></div>
    </div>
    
</div>
	
`