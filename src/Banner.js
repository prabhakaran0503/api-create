


function Banner(){
    return(
        <div>
              <section class="header-section">
		      <div class="container-navber">
			    <div class="nav-section">
		      <a href="#" class="logo"></a>
			  <input type="checkbox" id="toggle"/>
               <label for="toggle"><i class="fa fa-bars" aria-hidden="true"></i></label>
              <nav class="navbar">
			    <ul>
				   <li><a href="#">Home</a></li>
				   <li><a href="#about-section">About</a></li>
				   <li><a href="#services-section">Services</a></li>
				   <li><a href="#portfolio-section">Portfolio</a></li>
				   <li><a href="#">Drop Down<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
				        <ul>
						    <li><a href="#">Drop Down1</a></li>
							<li><a href="#">Drop Down2 <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
							     <ul>
								    <li><a href="#">Drop Down1</a></li>
									<li><a href="#">Drop Down2</a></li>
									<li><a href="#">Drop Down3</a></li>
									<li><a href="#">Drop Down4</a></li>
									<li><a href="#">Drop Down5</a></li>
									
								 </ul>
							</li>
							<li><a href="#">Drop Down3</a></li>
							<li><a href="#">Drop Down4</a></li>
							<li><a href="#">Drop Down5</a></li>
						</ul>
				   </li>

				   <li><a href="#contactt-section">Contact</a></li>
				</ul>
			  </nav>		  
			</div>   
		 
				 <div class="header-row2">
				     <h1>Movie List</h1>
					 


				 </div>
				 
			 </div>
		 
		   </section>

        </div>


		
    )
}
export default Banner