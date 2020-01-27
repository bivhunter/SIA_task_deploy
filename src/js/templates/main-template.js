export const mainTemplate = document.createElement('template');
mainTemplate.innerHTML = `
<style>
.main  {
    min-height: 100%;
    min-width: 1070px;
    padding: 0 0 85px 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
 }

 .head-wrapper {
     width: 1070px;
     height: 55px;
     margin: 0 auto 0 auto;
 }
 
 .head-wrapper:before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
 }

 .content-wrapper {
    width: 1070px;
    max-height: 100%;
    margin: 0 auto 55px auto;
 }
 
 .left-column {
    width: 245px;
    float: left;
 }
 
 .right-column {
    width: 800px;
    float: right;
 }
 
 nav {
    width: 100%;
    height: 55px;
    margin: 0 auto 35px auto ;
    padding: 0;
    background: #0072BC;
    color: white;
 }
 
 footer {
    width: 100%;
    height: 55px;
    position: absolute;
    margin: 35px auto 0 auto;
    bottom: 0;
    left: 0;
    background: #3D3D3D;
    color: #9F9F9F;
 }

 h1, h3 {
    display: inline-block;
    margin: 0;
    padding: 0;
 }
 
 h2 {
    margin: 0 0 10px 0px;
 }
 
 .cities-wrapper {
    border: 1px #D1D1D1 solid;
    border-radius: 5px;
 }
 
</style>

	<div class=main>
	    <nav>
            <div>
                <div class="head-wrapper">
                    <h1>Countries of the Word</h1>
                </div>
        </nav>
	    <div class="content-wrapper">
            <div class="left-column">
                <h2>Countries</h2>
            </div>
            <div class="right-column">
                <h2>Cities</h2>
                <div class="cities-wrapper">
                    <div class="add-city"></div>
                    <div class="cities-list"></div>
                </div>
            </div>
		</div>
		<footer>
		    <div class="head-wrapper">
		        <h3>Test task</h3>
		    </div>
		 </footer>
	</div>
`