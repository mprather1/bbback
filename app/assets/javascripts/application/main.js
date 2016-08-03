var User = Backbone.Model.extend({
    urlRoot: 'user'
});

var Users = Backbone.Collection.extend({
    model: User,
    url: 'users'
});

var UserView = Backbone.View.extend({
    tagName: 'li',
    // template: _.template("<%= email %>"),
    initialize: function(){
        this.render();
    },
    render: function(){
        html = this.$el.html(this.model.get('name'));
        
        // html = this.$el.html(this.template(this.model.toJSON()));
        $('body').html(html);
        $('body').append(this.model.get('email'))
        return this;
    }
});

var user = new User({id: 1});
user.fetch();
var userView = new UserView({model: user});

