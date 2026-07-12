const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find({ owner: req.user._id }).sort({ createdAt: -1 });
  res.json(tasks);
};

const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = await Task.create({
    title,
    description,
    owner: req.user._id
  });

  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, owner: req.user._id },
    req.body,
    { new: true, runValidators: true }
  );

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.status(204).send();
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
