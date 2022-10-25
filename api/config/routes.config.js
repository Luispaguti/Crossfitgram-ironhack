const express = require('express');
const router = express.Router();
const streams = require('../controllers/streams.controller');
const woods = require('../controllers/woods.controller')
const auth = require('../controllers/auth.controller');
const user = require('../controllers/user.controller');
const secure = require('../middlewares/secure.mid');
const streamMid = require('../middlewares/streams.mid');
const comments = require("../controllers/comment.controller");
const warning = require("../controllers/warning.controller");
const upload = require("./multer.config");
const passport = require("passport");


router.post("/register", upload.single('image'), auth.register);
router.post("/authenticate", auth.authenticate);
router.get("/authenticate/slack",passport.authorize('Slack'));
router.get("/authenticate/slack/cb",passport.authorize('Slack'),auth.slack);
router.post("/logout", auth.logout);

router.get('/streams', streams.list );
router.post("/stream", secure.isAuthenticated,upload.single('image'), streams.create); // el midelware upload.single se encaarga de contruir para nosotros req.file, con los datos del archivo que sube 
router.get("/streams/:id", streams.detail);
router.patch("/stream/:id", secure.isAuthenticated, streamMid.isAuthorByUser, streams.update);
router.delete("/stream/:id",secure.isAuthenticated,streamMid.isAuthorByUser, streams.delete);

router.get('/woods', woods.list );
router.get('/ranking', woods.ranking );
router.post("/wood", secure.isAuthenticated,upload.single('image'), woods.create);
router.get("/woods/:id", woods.detail);
router.delete("/wood/:id",secure.isAuthenticated,streamMid.isAuthorByUser, woods.delete);

router.post("/woods/:id/like",secure.isAuthenticated, woods.like);
router.post("/woods/:id/dislike",secure.isAuthenticated, woods.dislike);
router.post("/woods/:id/verif",secure.isAuthenticated,secure.isAdmin, woods.verif);
router.post("/woods/:id/warnin",secure.isAuthenticated,secure.isAdmin, woods.warnin);
router.post("/streams/:id/like",secure.isAuthenticated, streams.like);
router.post("/streams/:id/likeu",secure.isAuthenticated, streams.likeu);

router.post("/streams/:id/comments", secure.isAuthenticated, comments.create);
router.post("/woods/:id/comments", secure.isAuthenticated, comments.createW);
router.patch("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
router.delete("/streams/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);

// router.post("/woods/:id/comments", secure.isAuthenticated, comments.create);
router.patch("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser, comments.update);
router.delete("/woods/:id/comments/:commentId",secure.isAuthenticated,streamMid.isCommentOwnedByAuthor, streamMid.isAuthorByUser,comments.delete);

router.get("/profile", secure.isAuthenticated, user.profile);
router.post("/profile/:id/warning", secure.isAuthenticated, warning.create);
router.get("/profile/:id/streams", secure.isAuthenticated, user.streamsOwned);
router.get("/profile/:id/woods", secure.isAuthenticated, user.woodsOwned);

module.exports = router;