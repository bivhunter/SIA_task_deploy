export const listItemTemplate = document.createElement('template');
listItemTemplate.innerHTML = `
<style>
    .wrapper {
        background: #F0F0F0;
        padding: 10px;
        margin: 1px;
    }
    
    .wrapper:hover {
        cursor: pointer;
    }
 
    .title {
        color: #0072BC;
        padding: 0;
        margin: 0;
    }
    
    .description {
        margin: 0;
        color: #4D4D4D;
    }
    
    :host([data-selected="true"]) .wrapper{
        background: #0072BC;
    }
    
     :host([data-selected="true"]) .title{
        color: white;
    }
   
    :host([data-selected="true"]) .description{
        color: white;
    }
        
    
</style>
<div class="wrapper">
    <h2 class="title"></h2>
    <p class="description"></p>
</div>
	
`