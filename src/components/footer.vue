<template>
  <div class="container-fluid pt-0 footerContainer  bg-dark">

      <b-row>
        <b-col cols="1">

        </b-col>
        <b-col cols="5">
          <b-row>
            <b-col>
              <ul class="footerright">
                <li>
                  <a href="">Link 4</a>
                </li>
                <li>
                  <a href="">Link 5</a>
                </li>
                <li>
                  <a href="">link 6</a>
                </li>
              </ul>
            </b-col>
            <b-col>

            </b-col>
            <b-col>

            </b-col>
            <b-col>

            </b-col>
          </b-row>
        </b-col>
        <b-col cols="5">

        </b-col>
        <b-col cols="1">

        </b-col>
      </b-row>
  </div>
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