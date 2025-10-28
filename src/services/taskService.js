import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getTaskById(taskId) {
  let result = await taskRepository.findById(taskId);
  if (result) return result;
  else {
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }
}
