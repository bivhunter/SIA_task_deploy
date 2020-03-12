export const mainTemplate = document.createElement('template');
mainTemplate.innerHTML = `
<style>
.main  {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
 }

 nav, footer {
    flex: 0 0 55px;
    align-self: stretch;
    display: flex;
    justify-content: center;
 }

 nav {
   background: #0072BC;
   color: white;
}

footer {
   background: #3D3D3D;
   color: #9F9F9F;
}

.content-wrapper {
   flex: 1 0 auto;
   display: flex;
   max-width: 1140px;
   margin: 40px 0 40px 0;
}

.left-column {
    flex: 0 1 260px;
    margin: 0 30px 0 0;
 }
 
 .right-column {
    flex: 0 1 840px;
 } 
 
 .cities-wrapper {
    border: 1px #D1D1D1 solid;
    border-radius: 5px;
 }

 .head-wrapper {
     display: flex;
     flex-basis: 1140px;
     align-items: center;
 }

 h2 {
    margin: 0 0 10px 0px;
 }
 

 
</style>

	<div class=main>
	    <nav>
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