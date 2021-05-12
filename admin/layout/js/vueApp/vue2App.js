var application_users = new Vue({
  el: '#App',
  data: {
    allData: '',
    ALL: "",
    myModel: false,
    actionButton: 'Insert',
    dynamicTitle: 'Add Data',
    vif_msg: false,
    msg: '',
    hiddenId: '',
    col_desp: false,
    date: new Date().toISOString().substr(0, 10),
    USID: '',
    USNAME: '',
    USPW: '',
    USACTIVE: false,
    USEMAIL: '',
    USFULLNAME: '',
    USTYPENUM: 0,
    USTRUST: false,
    USDTENTER: '',
    options_usTypeNum: 1,
  },
  methods: {
    clear: function () {
      //    application_users.USID = 0;
      application_users.USNAME = "";
      application_users.USPW = "";
      application_users.USACTIVE = false;
      application_users.USEMAIL = "";
      application_users.USFULLNAME = "";
      application_users.USTYPENUM = 1;
      application_users.USTRUST = false;
      application_users.USDTENTER = this.date;
      application_users.max();

      // لجلب قريد حسب المعرف
      // application_users.GetDataById_users( application_users.USID);

      // لجلب قريد  
      application_users.fetchAllData_users();

    },
    max: function () {
      axios.post('action.php', {
        action: 'max_users'
      }).then(function (response) {
        application_users.USID = response.data.usID;
        // application_users.myModel = true;
      });
    }
    ,
    fill_usTypeNum: function () {
      axios.post('action.php', {
        action: 'fill_usTypeNum'
      }).then(function (response) {
        application_users.options_usTypeNum = response.data;
      });
    }
    ,
    fetchAllData_users: function () {
      axios.post('action.php', {
        action: 'g_users'
      }).then(function (response) {
        application_users.allData = response.data;
      });
    },
    openModel_users: function () {
      application_users.actionButton = "Insert";
      application_users.dynamicTitle = "Add Data";

      application_users.clear();
      application_users.myModel = true;
    },
    submitData_users: function () {
      if (application_users.USID != '' && application_users.USNAME != '' && application_users.USPW != '' && application_users.USACTIVE != '' && application_users.USEMAIL != '' && application_users.USFULLNAME != '' && application_users.USTYPENUM != '' && application_users.USTRUST != '' && application_users.USDTENTER != '') {
        if (application_users.actionButton == 'Insert') {
          axios.post('action.php', {
            action: 'i_users',
            _usID: application_users.USID,
            _usName: application_users.USNAME,
            _usPw: application_users.USPW,
            _usActive: application_users.USACTIVE,
            _usEmail: application_users.USEMAIL,
            _usFullName: application_users.USFULLNAME,
            _usTypeNum: application_users.USTYPENUM,
            _usTrust: application_users.USTRUST,
            _usDtEnter: application_users.USDTENTER,
          }).then(function (response) {
            application_users.myModel = false;
            // alert(response.data.message);
            application_users.msg = response.data.message;
            application_users.vif_msg = true;
            application_users.clear();
          });
        }
        if (application_users.actionButton == 'Update') {
          axios.post('action.php', {
            action: 'u_users',
            _usID: application_users.USID,
            _usName: application_users.USNAME,
            _usPw: application_users.USPW,
            _usActive: application_users.USACTIVE,
            _usEmail: application_users.USEMAIL,
            _usFullName: application_users.USFULLNAME,
            _usTypeNum: application_users.USTYPENUM,
            _usTrust: application_users.USTRUST,
            _usDtEnter: application_users.USDTENTER,
            hiddenId: application_users.hiddenId
          }).then(function (response) {
            application_users.myModel = false;
            application_users.hiddenId = '';
            application_users.msg = response.data.message;
            application_users.vif_msg = true;
            application_users.clear();
          });
        }
      }
      else {
        alert("Fill All Field");
      }
    },
    fetchData_users: function (id) {
      axios.post('action.php', {
        action: 's_users',
        _usID: id
      }).then(function (response) {
        application_users.USID = response.data.usID;
        application_users.USNAME = response.data.usName;
        application_users.USPW = response.data.usPw;
        application_users.USACTIVE = response.data.usActive;
        application_users.USEMAIL = response.data.usEmail;
        application_users.USFULLNAME = response.data.usFullName;
        application_users.USTYPENUM = response.data.usTypeNum;
        application_users.USTRUST = response.data.usTrust;
        application_users.USDTENTER = response.data.usDtEnter;
        application_users.hiddenId = response.data.usID;
        application_users.actionButton = 'Update';
        application_users.dynamicTitle = 'Edit Data';
        application_users.myModel = true;
      });
    },
    add_all_users: function () {
      var tbl_users = document.getElementById("tbl_users");
      for (i = 1; i < tbl_users.rows.length; i++) {
        const __usID = tbl_users.rows[i].cells.namedItem("row_usID").innerHTML;
        const __usName = tbl_users.rows[i].cells.namedItem("row_usName").innerHTML;
        const __usPw = tbl_users.rows[i].cells.namedItem("row_usPw").innerHTML;
        const __usActive = tbl_users.rows[i].cells.namedItem("row_usActive").innerHTML;
        const __usEmail = tbl_users.rows[i].cells.namedItem("row_usEmail").innerHTML;
        const __usFullName = tbl_users.rows[i].cells.namedItem("row_usFullName").innerHTML;
        const __usTypeNum = tbl_users.rows[i].cells.namedItem("row_usTypeNum").innerHTML;
        const __usTrust = tbl_users.rows[i].cells.namedItem("row_usTrust").innerHTML;
        const __usDtEnter = tbl_users.rows[i].cells.namedItem("row_usDtEnter").innerHTML;
        application_users.ALL = [__usID, __usName, __usPw, __usActive, __usEmail, __usFullName, __usTypeNum, __usTrust, __usDtEnter];
        axios
          .post("action.php", {
            action: "add_all_users",
            _all: application_users.ALL,
          })
          .then(function (response) {
            application.msg = response.data.message; //
          });
      }
      application_users.clear();
      application_users.vif_msg = true;
      application_users.deleteRowsTable();
    }
    ,
    usersSerche: function (ind = 1) {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("txt_serche");
      filter = input.value.toUpperCase();
      table = document.getElementById("tbl_users");
      tr = table.getElementsByTagName("tr");
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[ind];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

    ,
    add_row: function () {
      var tbl_users = document.getElementById("tbl_users");

      var _usID = document.getElementById("usID").value;
      var _usName = document.getElementById("usName").value;
      var _usPw = document.getElementById("usPw").value;
      var _usActive = document.getElementById("usActive").checked;
      var _usEmail = document.getElementById("usEmail").value;
      var _usFullName = document.getElementById("usFullName").value;
      var _usTrust = document.getElementById("usTrust").checked;
      var _usDtEnter = document.getElementById("usDtEnter").value;

      if (_usID.length < 1) {
        alert("please enter USID");
        return;
      }
      if (_usName.length < 1) {
        alert("please enter USNAME");
        return;
      }
      if (_usPw.length < 1) {
        alert("please enter USPW");
        return;
      }
      if (_usActive.length < 1) {
        alert("please enter USACTIVE");
        return;
      }
      if (_usEmail.length < 1) {
        alert("please enter USEMAIL");
        return;
      }
      if (_usFullName.length < 1) {
        alert("please enter USFULLNAME");
        return;
      }
      if (_usTypeNum.length < 1) {
        alert("please enter USTYPENUM");
        return;
      }
      if (_usTrust.length < 1) {
        alert("please enter USTRUST");
        return;
      }
      if (_usDtEnter.length < 1) {
        alert("please enter USDTENTER");
        return;
      }

      if (_usActive == true)
        _usActive = 1;
      else
        _usActive = 0;

      if (_usTrust == true)
        _usTrust = 1;
      else
        _usTrust = 0;

      let template =
        `<tr  ondblclick='SetOnclick(this)'>
 <td  name="row_usID" id="row_usID"  >${_usID}</td>
 <td  name="row_usName" id="row_usName"  >${_usName}</td>
 <td  name="row_usPw" id="row_usPw"  >${_usPw}</td>
 <td  name="row_usActive" id="row_usActive"  >${_usActive}</td>
 <td  name="row_usEmail" id="row_usEmail"  >${_usEmail}</td>
 <td  name="row_usFullName" id="row_usFullName"  >${_usFullName}</td>
 <td  name="row_usTrust" id="row_usTrust"  >${_usTrust}</td>
 <td  name="row_usDtEnter" id="row_usDtEnter"  >${_usDtEnter}</td>
 <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="fetchData_users(row.usID)">Edit</button></td>
 <td><button type="button" name="delete" class="btn btn-danger btn-xs delete" @click="deleteData_users(row.usID)">Delete</button></td>
 </tr>
 `
      tbl_users.innerHTML += template;

      // s-reset
      application_users.USID = '';
      application_users.USNAME = '';
      application_users.USPW = '';
      application_users.USACTIVE = false;
      application_users.USEMAIL = '';
      application_users.USFULLNAME = '';
      application_users.USTYPENUM = '1';
      application_users.USTRUST = false;
      application_users.USDTENTER = this.date;
      // e-reset
    }
    ,
    Reset_txt_serche: function () {
      var btn = document.getElementById("btn_serche");
      var inputs = document.getElementById("txt_serche");
      inputs.value = "";
      application_users.usersSerche();
    }
    ,
    GetDataById_users: function (id = 1) {
      axios
        .post("action.php", {
          action: "GetDataById_users",
          _usID: id,
        })
        .then(function (response) {
          application_users.allData = response.data;
        });
    }
    ,
    ////تفريغ الجدول من حقول
    deleteRowsTable: function () {
      var tbl_users = document.getElementById("tbl_users");
      for (i = tbl_users.rows.length - 1; i > 0; i--) {
        tbl_users.deleteRow(i);
      }
    }
    ,
    deleteData_users: function (id) {
      if (confirm("Are you sure you want to remove this data?")) {
        axios.post('action.php', {
          action: 'd_users',
          _usID: id
        }).then(function (response) {
          application_users.fetchAllData_users();
          // alert(response.data.message);
          application_users.msg = response.data.message;
          application_users.vif_msg = true;
          application_users.clear();

        });
      }
    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      application_users.clear();
      // لجلب قريد حسب المعرف
      //  application_users.GetDataById_users( application_users.USID);

      // لجلب قريد كل البيانات 
      // application_users.fetchAllData_users();

    });
  },
  created: function () {
    // لجلب قريد حسب المعرف
    //this.GetDataById_users( application_users.USID);

    // لجلب قريد كل البيانات 
    //  this.fetchAllData_users();
  },
});
// <script>
function SetOnclick(row) {
  document.getElementById('usID').value = row.cells.namedItem("row_usID").innerText;
  document.getElementById('usName').value = row.cells.namedItem("row_usName").innerText;
  document.getElementById('usPw').value = row.cells.namedItem("row_usPw").innerText;
  document.getElementById('usActive').checked = Boolean(Number(row.cells.namedItem("row_usActive").innerText));
  document.getElementById('usEmail').value = row.cells.namedItem("row_usEmail").innerText;
  document.getElementById('usFullName').value = row.cells.namedItem("row_usFullName").innerText;
  document.getElementById('usTypeNum').value = row.cells.namedItem("row_usTypeNum").innerText;
  document.getElementById('usTrust').checked = Boolean(Number(row.cells.namedItem("row_usTrust").innerText));
  document.getElementById('usDtEnter').value = row.cells.namedItem("row_usDtEnter").innerText;
}
// </script>
function DeleteRowFromTableById() {
  var tbl_users = document.getElementById("tbl_users");
  for (i = 1; i < tbl_users.rows.length; i++) {
    var id = document.getElementById("usID").value;
    var datas = tbl_users.rows[i].cells.namedItem("row_usID").innerText;

    if (id == datas) tbl_users.deleteRow(i);
  }
}
