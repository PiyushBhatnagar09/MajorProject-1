module.exports.home= function(req, res) {
    // return res.end('<h1>Express is up for codeial</h1>');

    console.log(req.cookies); //we manually added a cookie: 'userid', 25
    res.cookie('user_id', 25); //to change cookie information
    return res.render('home', {
        title: "Home"
    });
};