<template>
    <div>

    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>Manage School</h5>
            <div class="ibox-tools">
                <router-link :to="{name: 'createSchool'}" class="btn btn-success btn-xs"> <i class="fa fa-plus"></i> Create</router-link>
            </div>
        </div>
        <div class="ibox-content">
          <table class="table table-bordered table-striped">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Case ID</th>
                      <th>City</th>
                      <th>State</th>
                      <th>District/Network</th>
                      <th>Country</th>
                      <th width="100">&nbsp;</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="school, index in schools">
                      <td>{{ index+1 }}</td>
                      <td>{{ school.name }}</td>
                      <td>{{ school.case_id }}</td>
                      <td>{{ school.city }}</td>
                      <td>{{ school.state }}</td>
                      <td>{{ school.distric }}</td>
                      <td>{{ school.country }}</td>
                      <td>
                          <router-link :to="{name: 'editSchool', params: {id: school.id}}" class="btn btn-xs btn-primary">
                              <i class="fa fa-edit"></i>
                          </router-link>
                          <a href="#"
                             class="btn btn-xs btn-danger"
                             v-on:click="deleteEntry(school.id, index)">
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
                schools: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/school')
                .then(function (resp) {
                    app.schools = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load schools");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/school/' + id)
                        .then(function (resp) {
                            app.schools.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete school");
                        });
                }
            }
        }
    }
</script>
