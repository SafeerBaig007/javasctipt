const departmentSchema = require("./joi-validations/joi-departments-validation");

const addDepartment = (req, res, next) => {
  try {
    console.log("going to validate");
    const validationResult = departmentSchema.addDepartmentValidation.validate({
      dept_name: req.body.dept_name,
      address: req.body.address,
    });
    console.log(validationResult);
    if (!validationResult.error) {
      next();
    } else {
      let validationErrorMessage = "";
      validationResult.error.details.forEach((error, index) => {
        validationErrorMessage = validationErrorMessage + error.message + ",";
      });
      return res.status(400).json({ error: validationErrorMessage });
    }
  } catch (error) {
    // console.log('error', error)
    return res.status(500).json({
      error: { code: "UNKNOWN_ERROR", message: "An unknown error occurred." },
    });
  }
};

const findDepartment = (req, res, next) => {
  try {
    const validationResult = departmentSchema.findDepartmentValidation.validate(
      { dept_number: req.params.dept_number }
    );
    if (!validationResult.error) {
      next();
    } else {
      let validationErrorMessage = "";
      validationResult.error.details.forEach((error, index) => {
        validationErrorMessage = validationErrorMessage + error.message + ",";
      });
      return res.status(400).json({ error: validationErrorMessage });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: { code: "UNKNOWN_ERROR", message: "An unknown error occurred." },
    });
  }
};

const deleteDepartment = (req, res, next) => {
  try {
    const validationResult =
      departmentSchema.departmentSchemaValidation.validate({
        dept_number: req.body.dept_number,
      });
    if (!validationResult.error) {
      next();
    } else {
      let validationErrorMessage = "";
      validationResult.error.details.forEach((error, index) => {
        validationErrorMessage = validationErrorMessage + error.message + ",";
      });
      return res.status(400).json({ error: validationErrorMessage });
    }
  } catch (error) {
    return res.status(500).json({
      error: { code: "UNKNOWN_ERROR", message: "An unknown error occurred." },
    });
  }
};

module.exports = {
  addDepartment,
  findDepartment,
  deleteDepartment,
};
