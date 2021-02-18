<template>
  <!-- Footer -->
  <mdb-footer color="bg-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">The Online Store</h6>
          <p>We are a bunch of visionary developers who are working to </p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p><a href="#!">Mobiles</a></p>
          <p><a href="#!">Laptops</a></p>
          <p><a href="#!">Audio Systems</a></p>
          <p><a href="#!">Computer Hardware</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p><a href="#!">Your Account</a></p>
          <p><a href="#!">Shipping Rates</a></p>
          <p><a href="#!">Help</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fas fa-home mr-3"></i> 5959 Brookhaven way </p>
          <p><i class="fas fa-envelope mr-3"></i>hpanchal7847@conestogac.on.ca</p>
          <p><i class="fas fa-phone mr-3"></i>+1 647 907 8007</p>
          <p><i class="fas fa-print mr-3"></i>+ 437 522 5111</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="#">
            ChinmayShah.com </a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
export default {
  name: "CustomFooter"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

ul.footerContainer{
  margin-right: 150px;
  margin-top: 10px;
}

.footerContainer{
  height: 10em;
}

#contacts--contact{
  text-align:right;
}

#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>