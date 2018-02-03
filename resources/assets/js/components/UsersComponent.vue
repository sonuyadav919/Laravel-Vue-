<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <button @click="initAddUser()" class="btn btn-primary btn-xs pull-right">
                            + Add New Users
                        </button>
                        Manage Users
                    </div>

                    <div class="panel-body">
                    <table class="table table-bordered table-striped table-responsive" v-if="users.length > 0">
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            No.
                                                        </th>
                                                        <th>
                                                            Name
                                                        </th>
                                                        <th>
                                                            Email
                                                        </th>
                                                        <th>
                                                            Action
                                                        </th>
                                                    </tr>
                                                    <tr v-for="(user, index) in users">
                                                        <td>{{ index + 1 }}</td>
                                                        <td>
                                                            {{ user.name }}
                                                        </td>
                                                        <td>
                                                            {{ user.email }}
                                                        </td>
                                                        <td>
                                                            <button class="btn btn-success btn-xs">Edit</button>
                                                            <button class="btn btn-danger btn-xs">Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" role="dialog" id="add_user_model">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Add New User</h4>
                    </div>
                    <div class="modal-body">

                        <div class="alert alert-danger" v-if="errors.length > 0">
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </div>

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder="Name" class="form-control" v-model="user.name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="form-control" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Password" class="form-control" v-model="user.password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" @click="createUser" class="btn btn-primary">Save User</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    name: '',
                    email: '',
                    password: ''
                },
                errors: [],
                users:[]
            }
        },
        mounted()
       {
           this.readUsers();
       },
        methods: {
            initAddUser()
            {
                this.errors = [];
                $("#add_user_model").modal("show");
            },
            createUser()
            {
                axios.post('/user', {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                })
                    .then(response => {

                        this.reset();

                        $("#add_user_model").modal("hide");

                    })
                    .catch(error => {
                        this.errors = [];
                        if (error.response.data.errors.name) {
                            this.errors.push(error.response.data.errors.name[0]);
                        }

                        if (error.response.data.errors.email) {
                            this.errors.push(error.response.data.errors.email[0]);
                        }

                        if (error.response.data.errors.password) {
                            this.errors.push(error.response.data.errors.password[0]);
                        }
                    });
            },
            reset()
            {
                this.user.name = '';
                this.user.email = '';
                this.user.password = '';
            },
            readUsers()
            {
                axios.get('/user')
                    .then(response => {

                        this.users = response.data.users;

                    });
            },
        }
    }
</script>
