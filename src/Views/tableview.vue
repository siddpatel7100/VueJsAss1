<template>
  <div id="tab">
  <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
    <el-table-column
        label="Date"
        prop="date">
    </el-table-column>
    <el-table-column
        label="Name"
        prop="name">
    </el-table-column>
    <el-table-column
        align="right">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">+</el-button>
        <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">-</el-button>
      </template>
    </el-table-column>
  </el-table>
    <fot></fot>
  <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import {Table,Button,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import foot from "@/components/footer";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);

export default {
  name:'tableview',

  components: {
    "fot":foot
  },
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
        address: 'No. 190, Grove St, Los Angeles'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>
<Style scoped>

</Style>