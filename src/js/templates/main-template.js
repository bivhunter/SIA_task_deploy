export const mainTemplate = document.createElement('template');
mainTemplate.innerHTML = `
<style>
.main  {
    width: 1400px;
    height: 600px;
    margin: 50px auto 0 auto;
    padding: 0;
    position: relative;
 }
 
 .tooltip-wrapper{
    width: 100%;
    height: 40px;
 }
 
 .content-wrapper {
    width: 1000px;
    margin: 0 auto 0 auto;
    outline: 1px blue groove;
 }
 
 .left-column {
    width: 20%;
    float: left;
    outline: 1px blue groove;
 }
 
 .right-column {
    width: 80%;
    
    float: right;
    outline: 1px blue groove;
 }
 
 nav {
    margin-bottom: 50px;
 }
 
 h1, h3 {
    margin-left: 200px;
 }
 
 footer {
    margin-top: 50px;
 }
 
</style>

	<div class=main>
	    <nav><h1>Countries of the Word</h1></nav>
	    <div class="content-wrapper">
            <div class="left-column">
                <h2>Countries</h2>
            </div>
            <div class="right-column">
                <h2>Cities</h2>
                <div class="add-city"></div>
                <div class="cities-list"></div>
            </div>
		</div>
		<footer><h3>Test task</h3></footer>
	</div>
`