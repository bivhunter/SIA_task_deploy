export const editorTemplate = document.createElement('template');
editorTemplate.innerHTML = `
<style>
    :host([data-hidden="true"]) {
        display: none;
    }  
    
 
</style>
<div class="wrapper">
    <input type="text" placeholder="City Name..." name="cityName" required="">
    <textarea placeholder="City Description..."></textarea>
    <div class="button-wrapper">
        <button type="submit" class="submit-button">Submit</button>
        <button class="cancel-button">Cancel</button>    
    </div>
</div>
	
`