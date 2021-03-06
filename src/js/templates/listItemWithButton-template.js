export const listItemWithButtonTemplate = document.createElement('template');
listItemWithButtonTemplate.innerHTML = `
<style>

    .wrapper {
        display: flex;
        padding: 15px;
        border-top: 1px #D1D1D1 solid;
        color: #4D4D4D;
    }
 
    .button-wrapper {
        display: flex;
        align-items: center;
    }
    
    .edit-button, .delete-button {
        margin: 5px;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .edit-button {
         background-image: url("././images/pencil.png");
          background-size: 15px 15px;
    }
    
    .delete-button {
        background-image: url("././images/basket.png");
        background-size: 20px 20px;
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
    
   .title {
        padding: 0;
        margin: 0;
    }
    
    .description {
        margin: 0;
    }
    
    
</style>
<div class="wrapper">
    <div class="content-wrapper">
        <h2 class="title"></h2>
        <p class="description"></p>
    </div>
    <div class="button-wrapper">
        <div class="edit-button" ></div>
        <div class="delete-button" ></div>
    </div>
    
</div>
	
`