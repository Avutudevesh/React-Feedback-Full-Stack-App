const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate( 'google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        //req.session['ighs-session'] = 'ighs';
        var cache = [];
        res.send(JSON.stringify(req, function(key, value) {
        if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Duplicate reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
        }
        return value;
        }));
        cache = null;
        });
}