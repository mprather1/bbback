var User = Backbone.Model.extend({
    urlRoot: 'user'
});

var Users = Backbone.Collection.extend({
    model: User,
    url: 'users'
});

var UserView = Backbone.View.extend({
    tagName: 'li',
    // template: _.template( $("#userTemplate").html() ),
    template: _.template("Name: <%= name %> Email: <%= email %>"),
    initialize: function(){
        this.listenTo(this.model, 'sync', this.render);
    },
    render: function(){
        html = this.$el.html(this.template(this.model.toJSON()));
        $('body').html(html);
        return this;
    }
});

var user = new User({id: 1});
user.fetch();
var userView = new UserView({model: user});

