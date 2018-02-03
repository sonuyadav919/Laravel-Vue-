<template>
    <div>

    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>Manage Companies</h5>
            <div class="ibox-tools">
                <router-link :to="{name: 'createCompany'}" class="btn btn-success btn-xs"> <i class="fa fa-plus"></i> Create</router-link>
            </div>
        </div>
        <div class="ibox-content">
          <table class="table table-bordered table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Website</th>
                      <th>Email</th>
                      <th width="100">&nbsp;</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="company, index in companies">
                      <td>{{ company.name }}</td>
                      <td>{{ company.address }}</td>
                      <td>{{ company.website }}</td>
                      <td>{{ company.email }}</td>
                      <td>
                          <router-link :to="{name: 'editCompany', params: {id: company.id}}" class="btn btn-xs btn-primary">
                              <i class="fa fa-edit"></i>
                          </router-link>
                          <a href="#"
                             class="btn btn-xs btn-danger"
                             v-on:click="deleteEntry(company.id, index)">
                              <i class="fa fa-trash"></i>
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                companies: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/companies')
                .then(function (resp) {
                    app.companies = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load companies");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/companies/' + id)
                        .then(function (resp) {
                            app.companies.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>
