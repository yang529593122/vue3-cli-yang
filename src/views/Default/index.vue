<template>
  <TableCom
    @changData="hanldeChangData"
    :tableData="tableData"
    :headerList="headerList"
    :formData="formData"
  >
    <template v-slot:operation>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEditFn(scope.$index, scope.row)">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </template>
  </TableCom>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import TableCom from "./components/TableCom";

export default defineComponent({
  name: "Default",
  components: { TableCom },
  setup() {
    const state = reactive({
      formData: {
        list: [
          {
            lable: "账号",
            name: "username",
            type: "text",
            value: "账号",
            placeholder: "请输入账号",
          },
          {
            lable: "密码",
            name: "password",
            type: "text",
            value: "密码",
            placeholder: "请输入密码",
          },
        ],
        data: {
          username: "",
          password: "",
        },
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "哈哈",
          address: "上海",
        },
      ],
      headerList: [
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
    });

    const handleEditFn = (index, row) => {
      console.log(index, row, "edit");
    };
    const hanldeChangData = (data) => {
      console.log(data, "获取数据");
    };
    return {
      ...toRefs(state),
      handleEditFn,
      hanldeChangData,
    };
  },
});
</script>

<style scoped lang="less"></style>
