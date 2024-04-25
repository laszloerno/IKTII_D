var router = express.Router();

router.get('/SystemParams', auth, rightsCheck, (req, res) => {
  getSystemParams(req, res, '');
});

router.post('/SystemParams', auth, rightsCheck, (req, res) => {
  postSystemParams(req, res, '');
});

router.put('/SystemParams', auth, rightsCheck, (req, res) => {
  updateSystemParams(req, res, '');
});

router.delete('/SystemParams', auth, rightsCheck, (req, res) => {
  deleteSystemParams(req, res, '');
});
