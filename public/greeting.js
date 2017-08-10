module.exports = function(models){

    const nameList = [];

    const index = function(req, res, next){

        models.greeted.find({}, function(err, greeted){
            if (err){
                return next(err);
            }
            res.render('subjects/index', {subjects});
        });

    };

    const addScreen = function(req, res){
        res.render('subjects/add');
    }

    const add = function(req, res, next){
        //res.send('Add a subject');

        var subject = {
            name : req.body.subject
        };

        if (!subject || !subject.name){
            req.flash('error', 'Subject should not be blank');
            res.redirect('/subjects');
        }
        else{
            models.Subject.create(subject, function(err, results){
                if (err){
                    if (err.code === 11000){
                        req.flash('error', 'Subject already exists!');
                    }
                    else{
                        return next(err);
                    }
                }
                else{
                    req.flash('success', 'Subject added!');
                }
                res.redirect('/subjects');
            });
        }
    }

    return {
        index,
        add,
        addScreen
    }

}
