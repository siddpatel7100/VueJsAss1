<template>
  <div id="app">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="Date"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="Name"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue';
import {Table,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Table);
Vue.use(TableColumn);
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>
<Style>

</Style>