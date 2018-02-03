<template>
    <div>

    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>Create Company</h5>
            <div class="ibox-tools">
                <router-link to="/" class="btn btn-primary btn-xs">Back</router-link>
            </div>
        </div>
        <div class="ibox-content">

          <div class="alert alert-danger" v-if="errors.length > 0">
              <ul>
                  <li v-for="error in errors">{{ error }}</li>
              </ul>
          </div>

            <form v-on:submit="saveForm()">
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Company name</label>
                        <input type="text" v-model="company.name" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Company address</label>
                        <input type="text" v-model="company.address" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Company website</label>
                        <input type="text" v-model="company.website" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Company email</label>
                        <input type="text" v-model="company.email" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <button class="btn btn-success">Create</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                company: {
                    name: '',
                    address: '',
                    website: '',
                    email: '',
                },
                errors: [],
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCompany = app.company;
                axios.post('/api/v1/companies', newCompany)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(error => {
                          this.errors = [];
                        if (error.response.data.errors.name) {
                            this.errors.push(error.response.data.errors.name[0]);
                        }

                        if (error.response.data.errors.address) {
                            this.errors.push(error.response.data.errors.address[0]);
                        }

                        if (error.response.data.errors.email) {
                            this.errors.push(error.response.data.errors.email[0]);
                        }

                        if (error.response.data.errors.website) {
                            this.errors.push(error.response.data.errors.website[0]);
                        }
                    });
            }
        }
    }
</script>
