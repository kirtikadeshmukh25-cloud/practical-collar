const router = require('express').Router();
const Animal = require('../models/Animal');

// GET all animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find().sort({ createdAt: -1 });
    res.json(animals);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const total   = await Animal.countDocuments();
    const healthy = await Animal.countDocuments({ status: 'Healthy' });
    const collars = await Animal.countDocuments({ collarActive: true });
    const alerts  = await Animal.countDocuments({ status: 'Alert' });
    res.json({ total, healthy, collars, alerts });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST new animal
router.post('/', async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// PUT update animal
router.put('/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(animal);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// DELETE animal
router.delete('/:id', async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;