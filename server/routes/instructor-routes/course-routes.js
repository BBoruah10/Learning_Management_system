const express = require("express");
const {
  addNewCourse,
  updateCourseById,
  getCourseDetailsById,
  getAllCourses,
} = require("../../controllers/instructor-controller/course-contoller");

const router = express.Router();

router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsById);
router.put("/update/:id", updateCourseById);

module.exports = router;
