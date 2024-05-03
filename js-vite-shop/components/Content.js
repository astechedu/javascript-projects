export function Content(contentId){
	contentId.innerHTML = `	
	<div class="container">
		<div class="row">

	    <!-- Listing Card -->
	    <div class="col-12 col-sm-6 col-lg-4">
	      <div class="card border-0 position-relative h-100 card-listing hover-trigger">
	        <div class="card-header border-0 bg-transparent p-0">
	        
	          <!-- Card Image -->
	          <picture>
	            <img class="img-fluid" title="" src="https://images.unsplash.com/photo-1593449650794-3144ad85063d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&h=700&q=80" alt="">
	          </picture>
	          <!-- /Card Image -->

	        </div>
	        <div class="card-body px-0">

	          <!-- Review Stars -->
	          <div class="d-flex justify-content-start align-items-center mx-auto mb-1">
	            <div class="rating position-relative d-table">
	              <div class="position-absolute stars" style="width: 90%">
	                <i class="ri-star-fill text-dark mr-1"></i>
	                <i class="ri-star-fill text-dark mr-1"></i>
	                <i class="ri-star-fill text-dark mr-1"></i>
	                <i class="ri-star-fill text-dark mr-1"></i>
	                <i class="ri-star-fill text-dark mr-1"></i>
	              </div>
	              <div class="stars">
	                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
	                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
	                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
	                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
	                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
	              </div>
	            </div>
	            <span class="ms-2 text-muted fw-medium small"> 4.7 (456)</span>

	          </div>
	          <!-- /Review Stars -->

	          <a class="mb-3 d-block link-cover text-decoration-none text-body fw-medium mt-2" href="#">Two Piece Bikini</a>
	          <div class="d-flex justify-content-between align-items-center">
	            <span class="text-muted fw-medium"><s>$1129.99</s></span>
	            <span class="text-danger fw-medium">$1129.99</span>
	          </div>
	        </div>
	      </div>
	    </div>
	    <!-- /Listing Card -->

		</div>
	</div>
	`
}