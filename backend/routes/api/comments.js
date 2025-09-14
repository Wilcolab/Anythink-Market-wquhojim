/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @name GET/
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @param {express.NextFunction} next - Express next middleware function
    * @returns {Object[]} 200 - Array of comment objects in JSON format
    * @throws {Error} 500 - Internal server error
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @name DELETE/:id
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @param {express.NextFunction} next - Express next middleware function
    * @returns {Object} 200 - Success message in JSON format
    * @returns {Object} 404 - Error message if comment not found
    * @throws {Error} 500 - Internal server error
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    next(err);
  }
});