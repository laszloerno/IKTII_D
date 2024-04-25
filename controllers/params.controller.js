import db from '../models/index.js';
const DBModel = db.Adatok;

/**
 * Params
 */
export function getParams(req, res) {
  const idUser = req.user.ext_id;

  DBModel.Tabla.findAll({ where: { id_user: idUser } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Params from database.',
      });
    });
}

/**
 * SystemParams
 */
export function getSystemParams(req, res) {
  DBModel.Tabla.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Params from SystemParams Admin tool.',
      });
    });
}
export function postSystemParams(req, res) {
  var val = {};

  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    val = JSON.parse(req.body.values);
  } else {
    val = req.body;
  }

  DBModel.Tabla.create(val)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the SystemParams.',
      });
    });
}

export function deleteSystemParams(req, res) {
  var val = {};

  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    val = JSON.parse(req.body.key);
  } else {
    val = req.body;
  }

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  // Save Topic in the database

  DBModel.Tabla.destroy({ where: val })
    .then((data) => {
      res.status(200).send('OK');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while deleteing the SystemParams assignement.',
      });
    });
}

export function updateSystemParams(req, res) {
  var id = '';
  var val = {};
  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    id = req.body.key;
    val = JSON.parse(req.body.values);
  } else {
    id = req.body.id;
    val = req.body;
  }

  DBModel.Tabla.update(val, {
    where: { tablaId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: 'SystemParams was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update SystemParams with id=${id}. Maybe SystemParams was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating SystemParams with id=' + id,
      });
    });
}

/**
 * UserParams
 */
export function getUserParams(req, res, uId) {
  PR.UserParams.findAll({ where: { id_user: uId } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Param from UserParams Admin tool.',
      });
    });
}

export function postUserParams(req, res) {
  var val = {};

  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    val = JSON.parse(req.body.values);
  } else {
    val = req.body;
  }

  PR.UserParams.create(val)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the UserParams.',
      });
    });
}

export function deleteUserParams(req, res) {
  var val = {};

  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    val = JSON.parse(req.body.key);
  } else {
    val = req.body;
  }

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  // Save Topic in the database

  PR.UserParams.destroy({ where: val })
    .then((data) => {
      res.status(200).send('OK');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while deleteing the UserParams assignement.',
      });
    });
}

export function updateUserParams(req, res) {
  var id = '';
  var val = {};
  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    id = req.body.key;
    val = JSON.parse(req.body.values);
  } else {
    id = req.body.id;
    val = req.body;
  }

  PR.UserParams.update(val, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: 'UserParams was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update UserParams with id=${id}. Maybe UserParams was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating UserParams with id=' + id,
      });
    });
}

export function getParameters(req, res, userId) {
  let uType = req.query.uType;

  AD.User.findAll({
    where: { id_user: userId },
    attributes: ['id_user', 'calendar_sync', 'calendar_sync_weeks_ahead'],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving User.',
      });
    });
}

export function setParameters(req, res, userId) {
  var id = '';
  var val = {};
  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    id = req.body.key;
    val = JSON.parse(req.body.values);
  } else {
    id = req.body.id;
    val = req.body;
  }

  AD.User.update(val, {
    where: { id_user: userId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: 'SystemParams was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update SystemParams with id=${id}. Maybe SystemParams was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating SystemParams with id=' + id,
      });
    });
}
