var User = Backbone.Model.extend({
    urlRoot: 'user'
});

var Users = Backbone.Collection.extend({
    model: User,
    url: 'users'
});

var UserView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("Name: <%= name %>"),
    initialize: function(){
        this.listenTo(this.model, 'sync', this.render);
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var UsersView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
        this.listenTo(this.collection, 'sync', this.render);
    },
    render: function(){
        this.collection.each(this.addUser, this);
        return this;
    },
    addUser: function(user){
        var userView = new UserView({model: user});
        $("body").append(this.$el.append(userView.render().el));
    }
});

var users = new Users({})
users.fetch()
var usersView = new UsersView({collection: users});