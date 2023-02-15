module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Please log in to view that resource');
    res.redirect('/users/login');
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');      
  },
  isAdmin:function(req,res,next){
    if (req.isAuthenticated()) {
      if(req.user.isAdmin==true){
        return next();
      }
      req.flash('error_msg','You must be admin to view that content')
      res.redirect("/dashboard")
    }
  }
};
