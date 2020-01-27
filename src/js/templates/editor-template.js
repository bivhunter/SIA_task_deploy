export const editorTemplate = document.createElement('template');
editorTemplate.innerHTML = `
<style>
    :host([data-hidden="true"]) {
        display: none;
    }  
    
    .wrapper {
       width: 100%;
       padding: 15px;
       background: #F7F7F7;
       box-sizing: border-box;
    }
    
    input, textarea {
        width: 766px;
        height: 40px;
        border: 1px #D1D1D1 solid;
        border-radius: 5px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        margin: 15px 0 15px 0;
        box-sizing: border-box;
        padding-left: 20px;
        outline: 0;
        font: inherit;
    }
    
    input[data-error="true"] {
         border: 1px red solid;
    }
    
    
    input:focus, textarea:focus {
        border: 1px #0072BC solid;
        box-shadow: 1px 1px 2px rgba(0,114,188,0.5);
    }
    
     textarea {
        height: 80px;
        padding-top: 15px;
        resize: none;
    }
    
    .submit-button, .cancel-button {
        border: none;
        outline: none;
        width: 110px;
        height: 45px;
        border-radius: 5px;
        font-size: 17px;
        margin: 0 15px 0 0;
    }
    
    .submit-button {
        background: #0072BC;
        color: white; 
    }
    
    .submit-button:hover {
        box-shadow: 2px 2px 4px rgba(0,114,188,1);
        cursor: pointer;
    }
    
    .cancel-button {
        background: white;
        color: #4D4D4D; 
        border: 1px #D1D1D1 solid;
    }
    
    .cancel-button:hover {
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        cursor: pointer;
    }
    
    .title {
        color: #0072BC;
        margin: 0px;
    }
 
</style>
<div class="wrapper">
    <h2 class="title">Add city</h2>
    <input type="text" placeholder="City Name..." name="cityName" required="">
    <textarea placeholder="City Description..."></textarea>
    <div class="button-wrapper">
        <button type="submit" class="submit-button">Submit</button>
        <button class="cancel-button">Cancel</button>    
    </div>
</div>
	
`