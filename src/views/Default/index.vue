<template>
    <TableCom
      @pageChange = 'handlePageChange'
      :tableData = 'tableData'
      :headerList = 'headerList'
    >
      <template v-slot:operation>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEditFn(scope.$index, scope.row)"
            >
              Edit
            </el-button>
          </template>
        </el-table-column>
      </template>
    </TableCom>
</template>

<script>
import { defineComponent,reactive,toRefs } from "vue";
import TableCom from "./components/TableCom";

export default defineComponent({
  name: "Default",
  components:{TableCom},
  setup() {
    const state = reactive({
      tableData: [
        {
          date: '2016-05-03',
          name: '哈哈',
          address: '上海',
        },
      ],
      headerList: [
        {
          prop:'date',
          label: '日期',
        },
        {
          prop:'name',
          label: '姓名',
        },
        {
          prop:'address',
          label: '地址',
        },
      ]
    })

    const  handleEditFn = (index,row)=>{
      console.log(index,row,'edit');
    }
    const handlePageChange = (data) =>{
      console.log(data,'page');
      state.tableData.push({
        date: '2016',
        name: 'yang',
        address: '北京',
      },);
    }
    return {
      ...toRefs(state),
      handleEditFn,
      handlePageChange
    }
  }
});
</script>

<style scoped lang="less">

</style>
