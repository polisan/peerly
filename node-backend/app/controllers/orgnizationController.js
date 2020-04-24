const db = require("../models/sequelize");
const Organizations = db.organizations;
const yup = require("yup");

exports.create = /*eslint-disable-line node/exports-style*/ (req, res) => {
  // Create a Organization
  const organizations = {
    name: req.body.name,
    contact_email: req.body.contact_email,
    domain_name: req.body.domain_name,
    subscription_status: req.body.subscription_status,
    subscription_valid_upto: req.body.subscription_valid_upto,
    hi5_limit: req.body.hi5_limit,
    hi5_quota_renewal_frequency: req.body.hi5_quota_renewal_frequency,
    timezone: req.body.timezone,
  };

  // Validate request
  const schema = yup.object().shape({
    name: yup.string().required(),
    contact_email: yup.string().email(),
    domain_name: yup.string().required(),
    subscription_status: yup.number().required(),
    subscription_valid_upto: yup.string().required(),
    hi5_limit: yup.number().required(),
    hi5_quota_renewal_frequency: yup.string().required(),
    timezone: yup.string().required(),
  });

  schema.isValid(organizations).then(function (valid) {
    if (valid) {
      // Save Organization in the database
      Organizations.create(organizations)
        .then((info) => {
          res.send({
            status: 201,
            data: info,
          });
        })
        .catch((err /*eslint-disable-line no-unused-vars*/) => {
          res.status(500).send({
            message: "Some error occurred while creating the Organization.",
          });
        });
    } else {
      res.send({
        status: 422,
        message: "Contents not be correct format",
      });
    }
  });
};
